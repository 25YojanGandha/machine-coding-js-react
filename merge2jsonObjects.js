function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

const object1 = {a: 1, b: 2};
const object2 = {b: 3, c: 4};

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); // {a: 1, b: 3, c: 4}


// In this example, the `mergeObjects` function merges `object1` and `object2`. When properties have the same key, the value from `object2` will overwrite the value from `object1`.

function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
  
function deepMerge(target, source) {
    let output = Object.assign({}, target);

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                Object.assign(output, { [key]: {} });
                }
                output[key] = deepMerge(target[key], source[key]);
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        }
    }

    return output;
}

  const obj1 = {
    a: 1,
    b: { c: 3, d: { e: 5 } }
  };
  
  const obj2 = {
    b: { c: 4, d: { f: 6 } },
    g: 7
  };
  
  const mergedObj = deepMerge(obj1, obj2);
  
  console.log(mergedObj);
  // Output: { a: 1, b: { c: 4, d: { e: 5, f: 6 } }, g: 7 }
  
//   In this example, deepMerge will combine obj1 and obj2 such that nested objects are merged together rather than being overwritten. The isObject function is a helper to check if a variable is an object.