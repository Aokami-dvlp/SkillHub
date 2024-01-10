import { useEffect, useState } from 'react';
import { skillLevelCounter, skillLevelCount } from '../modules/skillLevelCounter';
import PocketBase from 'pocketbase';
import { Skill } from '../models/developer';
import ChartBar from '../components/ChartBar';
import { PieChart } from '@mui/x-charts';
import './styles/Dashboard.css'

const Dashboard = () => {
  const [data, setData] = useState<skillLevelCount[]>([]);
  const [yAxis, setYaxis] = useState<string[]>([]);
  const [xAxis, setXaxis] = useState<number[]>([]);

  const [pieValue, setPieValue] = useState<skillLevelCount>({
    name: 'Seleziona Competenza',
    level1: 0,
    level2: 0,
    level3: 0,
    totalLevel: 0
  });

  const [skillsRec, setSkillsRec] = useState<string[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string>('');


  useEffect(() => {
    const fetchData = async () => {
      const skillArray: Skill[][] = [];
      const pb = new PocketBase('https://skill-hub.pockethost.io');
      const developers = await pb.collection('developers').getFullList();
      developers.forEach((developer) => {
        skillArray.push(developer.skill);
      });

      const skillRecords = async() => await pb.collection('skills').getFullList({
        sort: 'name',}).then((res) => res.forEach((skill) => setSkillsRec((prevSkills) => [...prevSkills, skill.name])));
      
      const sortedData = skillLevelCounter(skillArray).sort((a, b) => a.name.localeCompare(b.name));
      
      skillRecords();
      setData(sortedData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const newYAxis = data.map((skill) => skill.name);
      const newXAxis = data.map((skill) => skill.totalLevel);
      setYaxis(newYAxis);
      setXaxis(newXAxis);
    }
  }, [data]);

  useEffect(() => {
    const toRender = data.filter((skill) => skill.name === selectedSkill)
    
    if(toRender){
      setPieValue(toRender[0])
    }

  }, [selectedSkill])
  

  return (
    <div className='dashboardContainer'>
      <div className='generalChart'>
      <h2>Sviluppatori censiti per competenza</h2>

      {!xAxis.length && <h2>Caricamento Grafico</h2>}
      {xAxis.length > 0 && <ChartBar yAxis={yAxis} xAxis={xAxis} />}
      </div>

      <div className='skillChart'>
      <select className='selectSkill' value={selectedSkill} onChange={(e) => setSelectedSkill(e.target.value)}>
                <option disabled value=''>{skillsRec.length > 0 ? 'Seleziona Skill' : 'Sto Caricando...' }</option>
                {skillsRec.map((skill, i) => <option key={i} value={skill}>{skill}</option>)}
                </select>

        {pieValue && selectedSkill && 
        <PieChart
          colors={['orange', 'red', 'black']}
          series={[
            {
              data: [
                { id: 1, value: pieValue.level1, label: 'Livello 1', color: 'orange'},
                { id: 2, value: pieValue.level2, label: 'Livello 2', color: 'red'},
                { id: 3, value: pieValue.level3, label: 'Livello 3', color: 'black'},
              ],
            },
          ]}
          width={800}
          height={400}
        />}
        {!pieValue && selectedSkill && <h1>Nessuno sviluppatore censito ha competenza in {selectedSkill}</h1>}
          </div>
    </div>
  );
};

export default Dashboard;
