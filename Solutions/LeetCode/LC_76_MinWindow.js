var minWindow = function(s, t) {
    let start = 0;
    let matched = 0;
    const map = {};
    let count = 0;
    let min = Infinity;
    let result = "";
    
    // Make map of pattern
    for(let key of t) {
        map[key] = map[key] ? map[key] + 1 : 1;
    }
    
    for(let key of s) {
        if(key in map) {
          map[key] = map[key] - 1;
          if(map[key] >= 0) {
            matched = matched + 1;   
          }
        }
        while(matched === t.length) {
            if(count - start + 1 < min) {
                min = count - start + 1;
                result = s.substr(start, count - start + 1);
            }
            const key2 = s[start];
            if(key2 in map) {
                if (map[key2] === 0) {
                  matched = matched - 1;
                }
                map[key2] = map[key2] + 1;
            }
            start = start + 1;
        }
        
        count++;
    }
    
    return result;
};