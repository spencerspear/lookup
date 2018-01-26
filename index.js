// Accepts hash of key/function pairs, ensure there is a "default" key/function pair
// Functions can have unlimited args
// Returns function which accepts:
//  key (string, optional) = The key to search the map for (no value uses defult)
//  args (array, optional) = Array of args to pass to functions

module.exports = table => {
  if (typeof table !== 'object') {
    throw new Error('Hash map required for looking up');
  }

  return (key, args) => {
    // user provided args as something other than array
    if (args && !Array.isArray(args)) {
      throw new Error('\'args\' is required to be of type array');
    }

    const safeArgs = args || [];

    const safeKey = key && key in table ? key : 'default';

    // If the table is simply a hash map, return the value
    if (typeof table[safeKey] !== 'function') {
      return table[safeKey];
    }

    // else return the executed function
    return table[safeKey](...safeArgs);
  };
};
