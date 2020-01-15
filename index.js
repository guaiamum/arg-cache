const a = (one, two, three) => {
    console.log(one);
    console.log(two);
    console.log(three);
}

export const factory = (three) => (...args) => a(...args, three);

export const factoryGeneric = (...cachedArgs) => (...args) => a(...args, ...cachedArgs);

export default a;
