export interface skillLevelCount {
    name: string;
    level1: number;
    level2: number;
    level3: number;
    totalLevel: number;
  }
  
  export const skillLevelCounter = (arrayDiArray: { name: string; level: number }[][]): skillLevelCount[] => {
    const count: { [name: string]: skillLevelCount } = {};
  
    arrayDiArray.forEach((array) => {
      array.forEach(({ name, level }) => {
        if (!count[name]) {
          count[name] = {
            name,
            level1: 0,
            level2: 0,
            level3: 0,
            totalLevel: 0
          };
        }
  
        switch (level) {
          case 1:
            count[name].level1 += 1;
            break;
          case 2:
            count[name].level2 += 1;
            break;
          case 3:
            count[name].level3 += 1;
            break;
          default:
            break;
        }

        count[name].totalLevel +=1;

      });
    });
  
    return Object.values(count);
  }
  