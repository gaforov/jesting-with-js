export function test(title, callback) {
    try{
        callback();
        console.log(`✅ ${title}`);
    } catch (error){
        console.error(`❌ ${title}`);
        console.error(error);
    }
}

export function expect(actual){
    return {
        toBe(expected) { 
            if(actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}

// export {test, expect}