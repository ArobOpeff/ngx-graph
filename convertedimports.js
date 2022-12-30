var commonjsGlobal =
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
    ? global
    : typeof self !== 'undefined'
    ? self
    : {};

function commonjsRequire(path) {
  throw new Error(
    'Could not dynamically require "' +
      path +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

var _listCacheClear;
var hasRequired_listCacheClear;

function require_listCacheClear() {
  if (hasRequired_listCacheClear) return _listCacheClear;
  hasRequired_listCacheClear = 1;
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  _listCacheClear = listCacheClear;
  return _listCacheClear;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

var eq_1;
var hasRequiredEq;

function requireEq() {
  if (hasRequiredEq) return eq_1;
  hasRequiredEq = 1;
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  eq_1 = eq;
  return eq_1;
}

var _assocIndexOf;
var hasRequired_assocIndexOf;

function require_assocIndexOf() {
  if (hasRequired_assocIndexOf) return _assocIndexOf;
  hasRequired_assocIndexOf = 1;
  var eq = requireEq();

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  _assocIndexOf = assocIndexOf;
  return _assocIndexOf;
}

var _listCacheDelete;
var hasRequired_listCacheDelete;

function require_listCacheDelete() {
  if (hasRequired_listCacheDelete) return _listCacheDelete;
  hasRequired_listCacheDelete = 1;
  var assocIndexOf = require_assocIndexOf();

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  _listCacheDelete = listCacheDelete;
  return _listCacheDelete;
}

var _listCacheGet;
var hasRequired_listCacheGet;

function require_listCacheGet() {
  if (hasRequired_listCacheGet) return _listCacheGet;
  hasRequired_listCacheGet = 1;
  var assocIndexOf = require_assocIndexOf();

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  _listCacheGet = listCacheGet;
  return _listCacheGet;
}

var _listCacheHas;
var hasRequired_listCacheHas;

function require_listCacheHas() {
  if (hasRequired_listCacheHas) return _listCacheHas;
  hasRequired_listCacheHas = 1;
  var assocIndexOf = require_assocIndexOf();

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  _listCacheHas = listCacheHas;
  return _listCacheHas;
}

var _listCacheSet;
var hasRequired_listCacheSet;

function require_listCacheSet() {
  if (hasRequired_listCacheSet) return _listCacheSet;
  hasRequired_listCacheSet = 1;
  var assocIndexOf = require_assocIndexOf();

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  _listCacheSet = listCacheSet;
  return _listCacheSet;
}

var _ListCache;
var hasRequired_ListCache;

function require_ListCache() {
  if (hasRequired_ListCache) return _ListCache;
  hasRequired_ListCache = 1;
  var listCacheClear = require_listCacheClear(),
    listCacheDelete = require_listCacheDelete(),
    listCacheGet = require_listCacheGet(),
    listCacheHas = require_listCacheHas(),
    listCacheSet = require_listCacheSet();

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  _ListCache = ListCache;
  return _ListCache;
}

var _stackClear;
var hasRequired_stackClear;

function require_stackClear() {
  if (hasRequired_stackClear) return _stackClear;
  hasRequired_stackClear = 1;
  var ListCache = require_ListCache();

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }

  _stackClear = stackClear;
  return _stackClear;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

var _stackDelete;
var hasRequired_stackDelete;

function require_stackDelete() {
  if (hasRequired_stackDelete) return _stackDelete;
  hasRequired_stackDelete = 1;
  function stackDelete(key) {
    var data = this.__data__,
      result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  _stackDelete = stackDelete;
  return _stackDelete;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

var _stackGet;
var hasRequired_stackGet;

function require_stackGet() {
  if (hasRequired_stackGet) return _stackGet;
  hasRequired_stackGet = 1;
  function stackGet(key) {
    return this.__data__.get(key);
  }

  _stackGet = stackGet;
  return _stackGet;
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

var _stackHas;
var hasRequired_stackHas;

function require_stackHas() {
  if (hasRequired_stackHas) return _stackHas;
  hasRequired_stackHas = 1;
  function stackHas(key) {
    return this.__data__.has(key);
  }

  _stackHas = stackHas;
  return _stackHas;
}

/** Detect free variable `global` from Node.js. */

var _freeGlobal;
var hasRequired_freeGlobal;

function require_freeGlobal() {
  if (hasRequired_freeGlobal) return _freeGlobal;
  hasRequired_freeGlobal = 1;
  var freeGlobal =
    typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  _freeGlobal = freeGlobal;
  return _freeGlobal;
}

var _root;
var hasRequired_root;

function require_root() {
  if (hasRequired_root) return _root;
  hasRequired_root = 1;
  var freeGlobal = require_freeGlobal();

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  _root = root;
  return _root;
}

var _Symbol;
var hasRequired_Symbol;

function require_Symbol() {
  if (hasRequired_Symbol) return _Symbol;
  hasRequired_Symbol = 1;
  var root = require_root();

  /** Built-in value references. */
  var Symbol = root.Symbol;

  _Symbol = Symbol;
  return _Symbol;
}

var _getRawTag;
var hasRequired_getRawTag;

function require_getRawTag() {
  if (hasRequired_getRawTag) return _getRawTag;
  hasRequired_getRawTag = 1;
  var Symbol = require_Symbol();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  _getRawTag = getRawTag;
  return _getRawTag;
}

/** Used for built-in method references. */

var _objectToString;
var hasRequired_objectToString;

function require_objectToString() {
  if (hasRequired_objectToString) return _objectToString;
  hasRequired_objectToString = 1;
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  _objectToString = objectToString;
  return _objectToString;
}

var _baseGetTag;
var hasRequired_baseGetTag;

function require_baseGetTag() {
  if (hasRequired_baseGetTag) return _baseGetTag;
  hasRequired_baseGetTag = 1;
  var Symbol = require_Symbol(),
    getRawTag = require_getRawTag(),
    objectToString = require_objectToString();

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }

  _baseGetTag = baseGetTag;
  return _baseGetTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

var isObject_1;
var hasRequiredIsObject;

function requireIsObject() {
  if (hasRequiredIsObject) return isObject_1;
  hasRequiredIsObject = 1;
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  isObject_1 = isObject;
  return isObject_1;
}

var isFunction_1;
var hasRequiredIsFunction;

function requireIsFunction() {
  if (hasRequiredIsFunction) return isFunction_1;
  hasRequiredIsFunction = 1;
  var baseGetTag = require_baseGetTag(),
    isObject = requireIsObject();

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  isFunction_1 = isFunction;
  return isFunction_1;
}

var _coreJsData;
var hasRequired_coreJsData;

function require_coreJsData() {
  if (hasRequired_coreJsData) return _coreJsData;
  hasRequired_coreJsData = 1;
  var root = require_root();

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  _coreJsData = coreJsData;
  return _coreJsData;
}

var _isMasked;
var hasRequired_isMasked;

function require_isMasked() {
  if (hasRequired_isMasked) return _isMasked;
  hasRequired_isMasked = 1;
  var coreJsData = require_coreJsData();

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function () {
    var uid = /[^.]+$/.exec((coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  })();

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  _isMasked = isMasked;
  return _isMasked;
}

/** Used for built-in method references. */

var _toSource;
var hasRequired_toSource;

function require_toSource() {
  if (hasRequired_toSource) return _toSource;
  hasRequired_toSource = 1;
  var funcProto = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }

  _toSource = toSource;
  return _toSource;
}

var _baseIsNative;
var hasRequired_baseIsNative;

function require_baseIsNative() {
  if (hasRequired_baseIsNative) return _baseIsNative;
  hasRequired_baseIsNative = 1;
  var isFunction = requireIsFunction(),
    isMasked = require_isMasked(),
    isObject = requireIsObject(),
    toSource = require_toSource();

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
    objectProto = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp(
    '^' +
      funcToString
        .call(hasOwnProperty)
        .replace(reRegExpChar, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  _baseIsNative = baseIsNative;
  return _baseIsNative;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

var _getValue;
var hasRequired_getValue;

function require_getValue() {
  if (hasRequired_getValue) return _getValue;
  hasRequired_getValue = 1;
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  _getValue = getValue;
  return _getValue;
}

var _getNative;
var hasRequired_getNative;

function require_getNative() {
  if (hasRequired_getNative) return _getNative;
  hasRequired_getNative = 1;
  var baseIsNative = require_baseIsNative(),
    getValue = require_getValue();

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  _getNative = getNative;
  return _getNative;
}

var _Map;
var hasRequired_Map;

function require_Map() {
  if (hasRequired_Map) return _Map;
  hasRequired_Map = 1;
  var getNative = require_getNative(),
    root = require_root();

  /* Built-in method references that are verified to be native. */
  var Map = getNative(root, 'Map');

  _Map = Map;
  return _Map;
}

var _nativeCreate;
var hasRequired_nativeCreate;

function require_nativeCreate() {
  if (hasRequired_nativeCreate) return _nativeCreate;
  hasRequired_nativeCreate = 1;
  var getNative = require_getNative();

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');

  _nativeCreate = nativeCreate;
  return _nativeCreate;
}

var _hashClear;
var hasRequired_hashClear;

function require_hashClear() {
  if (hasRequired_hashClear) return _hashClear;
  hasRequired_hashClear = 1;
  var nativeCreate = require_nativeCreate();

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  _hashClear = hashClear;
  return _hashClear;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

var _hashDelete;
var hasRequired_hashDelete;

function require_hashDelete() {
  if (hasRequired_hashDelete) return _hashDelete;
  hasRequired_hashDelete = 1;
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  _hashDelete = hashDelete;
  return _hashDelete;
}

var _hashGet;
var hasRequired_hashGet;

function require_hashGet() {
  if (hasRequired_hashGet) return _hashGet;
  hasRequired_hashGet = 1;
  var nativeCreate = require_nativeCreate();

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  _hashGet = hashGet;
  return _hashGet;
}

var _hashHas;
var hasRequired_hashHas;

function require_hashHas() {
  if (hasRequired_hashHas) return _hashHas;
  hasRequired_hashHas = 1;
  var nativeCreate = require_nativeCreate();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }

  _hashHas = hashHas;
  return _hashHas;
}

var _hashSet;
var hasRequired_hashSet;

function require_hashSet() {
  if (hasRequired_hashSet) return _hashSet;
  hasRequired_hashSet = 1;
  var nativeCreate = require_nativeCreate();

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  }

  _hashSet = hashSet;
  return _hashSet;
}

var _Hash;
var hasRequired_Hash;

function require_Hash() {
  if (hasRequired_Hash) return _Hash;
  hasRequired_Hash = 1;
  var hashClear = require_hashClear(),
    hashDelete = require_hashDelete(),
    hashGet = require_hashGet(),
    hashHas = require_hashHas(),
    hashSet = require_hashSet();

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  _Hash = Hash;
  return _Hash;
}

var _mapCacheClear;
var hasRequired_mapCacheClear;

function require_mapCacheClear() {
  if (hasRequired_mapCacheClear) return _mapCacheClear;
  hasRequired_mapCacheClear = 1;
  var Hash = require_Hash(),
    ListCache = require_ListCache(),
    Map = require_Map();

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new (Map || ListCache)(),
      string: new Hash()
    };
  }

  _mapCacheClear = mapCacheClear;
  return _mapCacheClear;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

var _isKeyable;
var hasRequired_isKeyable;

function require_isKeyable() {
  if (hasRequired_isKeyable) return _isKeyable;
  hasRequired_isKeyable = 1;
  function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean'
      ? value !== '__proto__'
      : value === null;
  }

  _isKeyable = isKeyable;
  return _isKeyable;
}

var _getMapData;
var hasRequired_getMapData;

function require_getMapData() {
  if (hasRequired_getMapData) return _getMapData;
  hasRequired_getMapData = 1;
  var isKeyable = require_isKeyable();

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  _getMapData = getMapData;
  return _getMapData;
}

var _mapCacheDelete;
var hasRequired_mapCacheDelete;

function require_mapCacheDelete() {
  if (hasRequired_mapCacheDelete) return _mapCacheDelete;
  hasRequired_mapCacheDelete = 1;
  var getMapData = require_getMapData();

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  _mapCacheDelete = mapCacheDelete;
  return _mapCacheDelete;
}

var _mapCacheGet;
var hasRequired_mapCacheGet;

function require_mapCacheGet() {
  if (hasRequired_mapCacheGet) return _mapCacheGet;
  hasRequired_mapCacheGet = 1;
  var getMapData = require_getMapData();

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  _mapCacheGet = mapCacheGet;
  return _mapCacheGet;
}

var _mapCacheHas;
var hasRequired_mapCacheHas;

function require_mapCacheHas() {
  if (hasRequired_mapCacheHas) return _mapCacheHas;
  hasRequired_mapCacheHas = 1;
  var getMapData = require_getMapData();

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  _mapCacheHas = mapCacheHas;
  return _mapCacheHas;
}

var _mapCacheSet;
var hasRequired_mapCacheSet;

function require_mapCacheSet() {
  if (hasRequired_mapCacheSet) return _mapCacheSet;
  hasRequired_mapCacheSet = 1;
  var getMapData = require_getMapData();

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
      size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  _mapCacheSet = mapCacheSet;
  return _mapCacheSet;
}

var _MapCache;
var hasRequired_MapCache;

function require_MapCache() {
  if (hasRequired_MapCache) return _MapCache;
  hasRequired_MapCache = 1;
  var mapCacheClear = require_mapCacheClear(),
    mapCacheDelete = require_mapCacheDelete(),
    mapCacheGet = require_mapCacheGet(),
    mapCacheHas = require_mapCacheHas(),
    mapCacheSet = require_mapCacheSet();

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  _MapCache = MapCache;
  return _MapCache;
}

var _stackSet;
var hasRequired_stackSet;

function require_stackSet() {
  if (hasRequired_stackSet) return _stackSet;
  hasRequired_stackSet = 1;
  var ListCache = require_ListCache(),
    Map = require_Map(),
    MapCache = require_MapCache();

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  _stackSet = stackSet;
  return _stackSet;
}

var _Stack;
var hasRequired_Stack;

function require_Stack() {
  if (hasRequired_Stack) return _Stack;
  hasRequired_Stack = 1;
  var ListCache = require_ListCache(),
    stackClear = require_stackClear(),
    stackDelete = require_stackDelete(),
    stackGet = require_stackGet(),
    stackHas = require_stackHas(),
    stackSet = require_stackSet();

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = (this.__data__ = new ListCache(entries));
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  _Stack = Stack;
  return _Stack;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */

var _arrayEach;
var hasRequired_arrayEach;

function require_arrayEach() {
  if (hasRequired_arrayEach) return _arrayEach;
  hasRequired_arrayEach = 1;
  function arrayEach(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  _arrayEach = arrayEach;
  return _arrayEach;
}

var _defineProperty;
var hasRequired_defineProperty;

function require_defineProperty() {
  if (hasRequired_defineProperty) return _defineProperty;
  hasRequired_defineProperty = 1;
  var getNative = require_getNative();

  var defineProperty = (function () {
    try {
      var func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  })();

  _defineProperty = defineProperty;
  return _defineProperty;
}

var _baseAssignValue;
var hasRequired_baseAssignValue;

function require_baseAssignValue() {
  if (hasRequired_baseAssignValue) return _baseAssignValue;
  hasRequired_baseAssignValue = 1;
  var defineProperty = require_defineProperty();

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) {
      defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        value: value,
        writable: true
      });
    } else {
      object[key] = value;
    }
  }

  _baseAssignValue = baseAssignValue;
  return _baseAssignValue;
}

var _assignValue;
var hasRequired_assignValue;

function require_assignValue() {
  if (hasRequired_assignValue) return _assignValue;
  hasRequired_assignValue = 1;
  var baseAssignValue = require_baseAssignValue(),
    eq = requireEq();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || (value === undefined && !(key in object))) {
      baseAssignValue(object, key, value);
    }
  }

  _assignValue = assignValue;
  return _assignValue;
}

var _copyObject;
var hasRequired_copyObject;

function require_copyObject() {
  if (hasRequired_copyObject) return _copyObject;
  hasRequired_copyObject = 1;
  var assignValue = require_assignValue(),
    baseAssignValue = require_baseAssignValue();

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
      length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }

  _copyObject = copyObject;
  return _copyObject;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */

var _baseTimes;
var hasRequired_baseTimes;

function require_baseTimes() {
  if (hasRequired_baseTimes) return _baseTimes;
  hasRequired_baseTimes = 1;
  function baseTimes(n, iteratee) {
    var index = -1,
      result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  _baseTimes = baseTimes;
  return _baseTimes;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

var isObjectLike_1;
var hasRequiredIsObjectLike;

function requireIsObjectLike() {
  if (hasRequiredIsObjectLike) return isObjectLike_1;
  hasRequiredIsObjectLike = 1;
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  isObjectLike_1 = isObjectLike;
  return isObjectLike_1;
}

var _baseIsArguments;
var hasRequired_baseIsArguments;

function require_baseIsArguments() {
  if (hasRequired_baseIsArguments) return _baseIsArguments;
  hasRequired_baseIsArguments = 1;
  var baseGetTag = require_baseGetTag(),
    isObjectLike = requireIsObjectLike();

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }

  _baseIsArguments = baseIsArguments;
  return _baseIsArguments;
}

var isArguments_1;
var hasRequiredIsArguments;

function requireIsArguments() {
  if (hasRequiredIsArguments) return isArguments_1;
  hasRequiredIsArguments = 1;
  var baseIsArguments = require_baseIsArguments(),
    isObjectLike = requireIsObjectLike();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(
    (function () {
      return arguments;
    })()
  )
    ? baseIsArguments
    : function (value) {
        return (
          isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee')
        );
      };

  isArguments_1 = isArguments;
  return isArguments_1;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray_1;
var hasRequiredIsArray;

function requireIsArray() {
  if (hasRequiredIsArray) return isArray_1;
  hasRequiredIsArray = 1;
  var isArray = Array.isArray;

  isArray_1 = isArray;
  return isArray_1;
}

var isBufferExports = {};
var isBuffer = {
  get exports() {
    return isBufferExports;
  },
  set exports(v) {
    isBufferExports = v;
  }
};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

var stubFalse_1;
var hasRequiredStubFalse;

function requireStubFalse() {
  if (hasRequiredStubFalse) return stubFalse_1;
  hasRequiredStubFalse = 1;
  function stubFalse() {
    return false;
  }

  stubFalse_1 = stubFalse;
  return stubFalse_1;
}

var hasRequiredIsBuffer;

function requireIsBuffer() {
  if (hasRequiredIsBuffer) return isBufferExports;
  hasRequiredIsBuffer = 1;
  (function (module, exports) {
    var root = require_root(),
      stubFalse = requireStubFalse();

    /** Detect free variable `exports`. */
    var freeExports = exports && !exports.nodeType && exports;

    /** Detect free variable `module`. */
    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports;

    /** Built-in value references. */
    var Buffer = moduleExports ? root.Buffer : undefined;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    module.exports = isBuffer;
  })(isBuffer, isBufferExports);
  return isBufferExports;
}

/** Used as references for various `Number` constants. */

var _isIndex;
var hasRequired_isIndex;

function require_isIndex() {
  if (hasRequired_isIndex) return _isIndex;
  hasRequired_isIndex = 1;
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;

    return (
      !!length &&
      (type == 'number' || (type != 'symbol' && reIsUint.test(value))) &&
      value > -1 &&
      value % 1 == 0 &&
      value < length
    );
  }

  _isIndex = isIndex;
  return _isIndex;
}

/** Used as references for various `Number` constants. */

var isLength_1;
var hasRequiredIsLength;

function requireIsLength() {
  if (hasRequiredIsLength) return isLength_1;
  hasRequiredIsLength = 1;
  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  isLength_1 = isLength;
  return isLength_1;
}

var _baseIsTypedArray;
var hasRequired_baseIsTypedArray;

function require_baseIsTypedArray() {
  if (hasRequired_baseIsTypedArray) return _baseIsTypedArray;
  hasRequired_baseIsTypedArray = 1;
  var baseGetTag = require_baseGetTag(),
    isLength = requireIsLength(),
    isObjectLike = requireIsObjectLike();

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] =
    typedArrayTags[float64Tag] =
    typedArrayTags[int8Tag] =
    typedArrayTags[int16Tag] =
    typedArrayTags[int32Tag] =
    typedArrayTags[uint8Tag] =
    typedArrayTags[uint8ClampedTag] =
    typedArrayTags[uint16Tag] =
    typedArrayTags[uint32Tag] =
      true;
  typedArrayTags[argsTag] =
    typedArrayTags[arrayTag] =
    typedArrayTags[arrayBufferTag] =
    typedArrayTags[boolTag] =
    typedArrayTags[dataViewTag] =
    typedArrayTags[dateTag] =
    typedArrayTags[errorTag] =
    typedArrayTags[funcTag] =
    typedArrayTags[mapTag] =
    typedArrayTags[numberTag] =
    typedArrayTags[objectTag] =
    typedArrayTags[regexpTag] =
    typedArrayTags[setTag] =
    typedArrayTags[stringTag] =
    typedArrayTags[weakMapTag] =
      false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  _baseIsTypedArray = baseIsTypedArray;
  return _baseIsTypedArray;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

var _baseUnary;
var hasRequired_baseUnary;

function require_baseUnary() {
  if (hasRequired_baseUnary) return _baseUnary;
  hasRequired_baseUnary = 1;
  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  _baseUnary = baseUnary;
  return _baseUnary;
}

var _nodeUtilExports = {};
var _nodeUtil = {
  get exports() {
    return _nodeUtilExports;
  },
  set exports(v) {
    _nodeUtilExports = v;
  }
};

var hasRequired_nodeUtil;

function require_nodeUtil() {
  if (hasRequired_nodeUtil) return _nodeUtilExports;
  hasRequired_nodeUtil = 1;
  (function (module, exports) {
    var freeGlobal = require_freeGlobal();

    /** Detect free variable `exports`. */
    var freeExports = exports && !exports.nodeType && exports;

    /** Detect free variable `module`. */
    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports;

    /** Detect free variable `process` from Node.js. */
    var freeProcess = moduleExports && freeGlobal.process;

    /** Used to access faster Node.js helpers. */
    var nodeUtil = (function () {
      try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;

        if (types) {
          return types;
        }

        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
      } catch (e) {}
    })();

    module.exports = nodeUtil;
  })(_nodeUtil, _nodeUtilExports);
  return _nodeUtilExports;
}

var isTypedArray_1;
var hasRequiredIsTypedArray;

function requireIsTypedArray() {
  if (hasRequiredIsTypedArray) return isTypedArray_1;
  hasRequiredIsTypedArray = 1;
  var baseIsTypedArray = require_baseIsTypedArray(),
    baseUnary = require_baseUnary(),
    nodeUtil = require_nodeUtil();

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  isTypedArray_1 = isTypedArray;
  return isTypedArray_1;
}

var _arrayLikeKeys;
var hasRequired_arrayLikeKeys;

function require_arrayLikeKeys() {
  if (hasRequired_arrayLikeKeys) return _arrayLikeKeys;
  hasRequired_arrayLikeKeys = 1;
  var baseTimes = require_baseTimes(),
    isArguments = requireIsArguments(),
    isArray = requireIsArray(),
    isBuffer = requireIsBuffer(),
    isIndex = require_isIndex(),
    isTypedArray = requireIsTypedArray();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

    for (var key in value) {
      if (
        (inherited || hasOwnProperty.call(value, key)) &&
        !(
          skipIndexes &&
          // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == 'length' ||
            // Node.js 0.10 has enumerable non-index properties on buffers.
            (isBuff && (key == 'offset' || key == 'parent')) ||
            // PhantomJS 2 has enumerable non-index properties on typed arrays.
            (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
            // Skip index properties.
            isIndex(key, length))
        )
      ) {
        result.push(key);
      }
    }
    return result;
  }

  _arrayLikeKeys = arrayLikeKeys;
  return _arrayLikeKeys;
}

/** Used for built-in method references. */

var _isPrototype;
var hasRequired_isPrototype;

function require_isPrototype() {
  if (hasRequired_isPrototype) return _isPrototype;
  hasRequired_isPrototype = 1;
  var objectProto = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

    return value === proto;
  }

  _isPrototype = isPrototype;
  return _isPrototype;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

var _overArg;
var hasRequired_overArg;

function require_overArg() {
  if (hasRequired_overArg) return _overArg;
  hasRequired_overArg = 1;
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  _overArg = overArg;
  return _overArg;
}

var _nativeKeys;
var hasRequired_nativeKeys;

function require_nativeKeys() {
  if (hasRequired_nativeKeys) return _nativeKeys;
  hasRequired_nativeKeys = 1;
  var overArg = require_overArg();

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = overArg(Object.keys, Object);

  _nativeKeys = nativeKeys;
  return _nativeKeys;
}

var _baseKeys;
var hasRequired_baseKeys;

function require_baseKeys() {
  if (hasRequired_baseKeys) return _baseKeys;
  hasRequired_baseKeys = 1;
  var isPrototype = require_isPrototype(),
    nativeKeys = require_nativeKeys();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  _baseKeys = baseKeys;
  return _baseKeys;
}

var isArrayLike_1;
var hasRequiredIsArrayLike;

function requireIsArrayLike() {
  if (hasRequiredIsArrayLike) return isArrayLike_1;
  hasRequiredIsArrayLike = 1;
  var isFunction = requireIsFunction(),
    isLength = requireIsLength();

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  isArrayLike_1 = isArrayLike;
  return isArrayLike_1;
}

var keys_1;
var hasRequiredKeys;

function requireKeys() {
  if (hasRequiredKeys) return keys_1;
  hasRequiredKeys = 1;
  var arrayLikeKeys = require_arrayLikeKeys(),
    baseKeys = require_baseKeys(),
    isArrayLike = requireIsArrayLike();

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  keys_1 = keys;
  return keys_1;
}

var _baseAssign;
var hasRequired_baseAssign;

function require_baseAssign() {
  if (hasRequired_baseAssign) return _baseAssign;
  hasRequired_baseAssign = 1;
  var copyObject = require_copyObject(),
    keys = requireKeys();

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }

  _baseAssign = baseAssign;
  return _baseAssign;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

var _nativeKeysIn;
var hasRequired_nativeKeysIn;

function require_nativeKeysIn() {
  if (hasRequired_nativeKeysIn) return _nativeKeysIn;
  hasRequired_nativeKeysIn = 1;
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  _nativeKeysIn = nativeKeysIn;
  return _nativeKeysIn;
}

var _baseKeysIn;
var hasRequired_baseKeysIn;

function require_baseKeysIn() {
  if (hasRequired_baseKeysIn) return _baseKeysIn;
  hasRequired_baseKeysIn = 1;
  var isObject = requireIsObject(),
    isPrototype = require_isPrototype(),
    nativeKeysIn = require_nativeKeysIn();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
      result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  _baseKeysIn = baseKeysIn;
  return _baseKeysIn;
}

var keysIn_1;
var hasRequiredKeysIn;

function requireKeysIn() {
  if (hasRequiredKeysIn) return keysIn_1;
  hasRequiredKeysIn = 1;
  var arrayLikeKeys = require_arrayLikeKeys(),
    baseKeysIn = require_baseKeysIn(),
    isArrayLike = requireIsArrayLike();

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  keysIn_1 = keysIn;
  return keysIn_1;
}

var _baseAssignIn;
var hasRequired_baseAssignIn;

function require_baseAssignIn() {
  if (hasRequired_baseAssignIn) return _baseAssignIn;
  hasRequired_baseAssignIn = 1;
  var copyObject = require_copyObject(),
    keysIn = requireKeysIn();

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
  }

  _baseAssignIn = baseAssignIn;
  return _baseAssignIn;
}

var _cloneBufferExports = {};
var _cloneBuffer = {
  get exports() {
    return _cloneBufferExports;
  },
  set exports(v) {
    _cloneBufferExports = v;
  }
};

var hasRequired_cloneBuffer;

function require_cloneBuffer() {
  if (hasRequired_cloneBuffer) return _cloneBufferExports;
  hasRequired_cloneBuffer = 1;
  (function (module, exports) {
    var root = require_root();

    /** Detect free variable `exports`. */
    var freeExports = exports && !exports.nodeType && exports;

    /** Detect free variable `module`. */
    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports;

    /** Built-in value references. */
    var Buffer = moduleExports ? root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    module.exports = cloneBuffer;
  })(_cloneBuffer, _cloneBufferExports);
  return _cloneBufferExports;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */

var _copyArray;
var hasRequired_copyArray;

function require_copyArray() {
  if (hasRequired_copyArray) return _copyArray;
  hasRequired_copyArray = 1;
  function copyArray(source, array) {
    var index = -1,
      length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  _copyArray = copyArray;
  return _copyArray;
}

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

var _arrayFilter;
var hasRequired_arrayFilter;

function require_arrayFilter() {
  if (hasRequired_arrayFilter) return _arrayFilter;
  hasRequired_arrayFilter = 1;
  function arrayFilter(array, predicate) {
    var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  _arrayFilter = arrayFilter;
  return _arrayFilter;
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */

var stubArray_1;
var hasRequiredStubArray;

function requireStubArray() {
  if (hasRequiredStubArray) return stubArray_1;
  hasRequiredStubArray = 1;
  function stubArray() {
    return [];
  }

  stubArray_1 = stubArray;
  return stubArray_1;
}

var _getSymbols;
var hasRequired_getSymbols;

function require_getSymbols() {
  if (hasRequired_getSymbols) return _getSymbols;
  hasRequired_getSymbols = 1;
  var arrayFilter = require_arrayFilter(),
    stubArray = requireStubArray();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols
    ? stubArray
    : function (object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function (symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };

  _getSymbols = getSymbols;
  return _getSymbols;
}

var _copySymbols;
var hasRequired_copySymbols;

function require_copySymbols() {
  if (hasRequired_copySymbols) return _copySymbols;
  hasRequired_copySymbols = 1;
  var copyObject = require_copyObject(),
    getSymbols = require_getSymbols();

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }

  _copySymbols = copySymbols;
  return _copySymbols;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

var _arrayPush;
var hasRequired_arrayPush;

function require_arrayPush() {
  if (hasRequired_arrayPush) return _arrayPush;
  hasRequired_arrayPush = 1;
  function arrayPush(array, values) {
    var index = -1,
      length = values.length,
      offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  _arrayPush = arrayPush;
  return _arrayPush;
}

var _getPrototype;
var hasRequired_getPrototype;

function require_getPrototype() {
  if (hasRequired_getPrototype) return _getPrototype;
  hasRequired_getPrototype = 1;
  var overArg = require_overArg();

  /** Built-in value references. */
  var getPrototype = overArg(Object.getPrototypeOf, Object);

  _getPrototype = getPrototype;
  return _getPrototype;
}

var _getSymbolsIn;
var hasRequired_getSymbolsIn;

function require_getSymbolsIn() {
  if (hasRequired_getSymbolsIn) return _getSymbolsIn;
  hasRequired_getSymbolsIn = 1;
  var arrayPush = require_arrayPush(),
    getPrototype = require_getPrototype(),
    getSymbols = require_getSymbols(),
    stubArray = requireStubArray();

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols
    ? stubArray
    : function (object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };

  _getSymbolsIn = getSymbolsIn;
  return _getSymbolsIn;
}

var _copySymbolsIn;
var hasRequired_copySymbolsIn;

function require_copySymbolsIn() {
  if (hasRequired_copySymbolsIn) return _copySymbolsIn;
  hasRequired_copySymbolsIn = 1;
  var copyObject = require_copyObject(),
    getSymbolsIn = require_getSymbolsIn();

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
  }

  _copySymbolsIn = copySymbolsIn;
  return _copySymbolsIn;
}

var _baseGetAllKeys;
var hasRequired_baseGetAllKeys;

function require_baseGetAllKeys() {
  if (hasRequired_baseGetAllKeys) return _baseGetAllKeys;
  hasRequired_baseGetAllKeys = 1;
  var arrayPush = require_arrayPush(),
    isArray = requireIsArray();

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  _baseGetAllKeys = baseGetAllKeys;
  return _baseGetAllKeys;
}

var _getAllKeys;
var hasRequired_getAllKeys;

function require_getAllKeys() {
  if (hasRequired_getAllKeys) return _getAllKeys;
  hasRequired_getAllKeys = 1;
  var baseGetAllKeys = require_baseGetAllKeys(),
    getSymbols = require_getSymbols(),
    keys = requireKeys();

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  _getAllKeys = getAllKeys;
  return _getAllKeys;
}

var _getAllKeysIn;
var hasRequired_getAllKeysIn;

function require_getAllKeysIn() {
  if (hasRequired_getAllKeysIn) return _getAllKeysIn;
  hasRequired_getAllKeysIn = 1;
  var baseGetAllKeys = require_baseGetAllKeys(),
    getSymbolsIn = require_getSymbolsIn(),
    keysIn = requireKeysIn();

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
  }

  _getAllKeysIn = getAllKeysIn;
  return _getAllKeysIn;
}

var _DataView;
var hasRequired_DataView;

function require_DataView() {
  if (hasRequired_DataView) return _DataView;
  hasRequired_DataView = 1;
  var getNative = require_getNative(),
    root = require_root();

  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root, 'DataView');

  _DataView = DataView;
  return _DataView;
}

var _Promise;
var hasRequired_Promise;

function require_Promise() {
  if (hasRequired_Promise) return _Promise;
  hasRequired_Promise = 1;
  var getNative = require_getNative(),
    root = require_root();

  /* Built-in method references that are verified to be native. */
  var Promise = getNative(root, 'Promise');

  _Promise = Promise;
  return _Promise;
}

var _Set;
var hasRequired_Set;

function require_Set() {
  if (hasRequired_Set) return _Set;
  hasRequired_Set = 1;
  var getNative = require_getNative(),
    root = require_root();

  /* Built-in method references that are verified to be native. */
  var Set = getNative(root, 'Set');

  _Set = Set;
  return _Set;
}

var _WeakMap;
var hasRequired_WeakMap;

function require_WeakMap() {
  if (hasRequired_WeakMap) return _WeakMap;
  hasRequired_WeakMap = 1;
  var getNative = require_getNative(),
    root = require_root();

  /* Built-in method references that are verified to be native. */
  var WeakMap = getNative(root, 'WeakMap');

  _WeakMap = WeakMap;
  return _WeakMap;
}

var _getTag;
var hasRequired_getTag;

function require_getTag() {
  if (hasRequired_getTag) return _getTag;
  hasRequired_getTag = 1;
  var DataView = require_DataView(),
    Map = require_Map(),
    Promise = require_Promise(),
    Set = require_Set(),
    WeakMap = require_WeakMap(),
    baseGetTag = require_baseGetTag(),
    toSource = require_toSource();

  /** `Object#toString` result references. */
  var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

  var dataViewTag = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if (
    (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map()) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set()) != setTag) ||
    (WeakMap && getTag(new WeakMap()) != weakMapTag)
  ) {
    getTag = function (value) {
      var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }

  _getTag = getTag;
  return _getTag;
}

/** Used for built-in method references. */

var _initCloneArray;
var hasRequired_initCloneArray;

function require_initCloneArray() {
  if (hasRequired_initCloneArray) return _initCloneArray;
  hasRequired_initCloneArray = 1;
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
      result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  _initCloneArray = initCloneArray;
  return _initCloneArray;
}

var _Uint8Array;
var hasRequired_Uint8Array;

function require_Uint8Array() {
  if (hasRequired_Uint8Array) return _Uint8Array;
  hasRequired_Uint8Array = 1;
  var root = require_root();

  /** Built-in value references. */
  var Uint8Array = root.Uint8Array;

  _Uint8Array = Uint8Array;
  return _Uint8Array;
}

var _cloneArrayBuffer;
var hasRequired_cloneArrayBuffer;

function require_cloneArrayBuffer() {
  if (hasRequired_cloneArrayBuffer) return _cloneArrayBuffer;
  hasRequired_cloneArrayBuffer = 1;
  var Uint8Array = require_Uint8Array();

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }

  _cloneArrayBuffer = cloneArrayBuffer;
  return _cloneArrayBuffer;
}

var _cloneDataView;
var hasRequired_cloneDataView;

function require_cloneDataView() {
  if (hasRequired_cloneDataView) return _cloneDataView;
  hasRequired_cloneDataView = 1;
  var cloneArrayBuffer = require_cloneArrayBuffer();

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  _cloneDataView = cloneDataView;
  return _cloneDataView;
}

/** Used to match `RegExp` flags from their coerced string values. */

var _cloneRegExp;
var hasRequired_cloneRegExp;

function require_cloneRegExp() {
  if (hasRequired_cloneRegExp) return _cloneRegExp;
  hasRequired_cloneRegExp = 1;
  var reFlags = /\w*$/;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  _cloneRegExp = cloneRegExp;
  return _cloneRegExp;
}

var _cloneSymbol;
var hasRequired_cloneSymbol;

function require_cloneSymbol() {
  if (hasRequired_cloneSymbol) return _cloneSymbol;
  hasRequired_cloneSymbol = 1;
  var Symbol = require_Symbol();

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  _cloneSymbol = cloneSymbol;
  return _cloneSymbol;
}

var _cloneTypedArray;
var hasRequired_cloneTypedArray;

function require_cloneTypedArray() {
  if (hasRequired_cloneTypedArray) return _cloneTypedArray;
  hasRequired_cloneTypedArray = 1;
  var cloneArrayBuffer = require_cloneArrayBuffer();

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  _cloneTypedArray = cloneTypedArray;
  return _cloneTypedArray;
}

var _initCloneByTag;
var hasRequired_initCloneByTag;

function require_initCloneByTag() {
  if (hasRequired_initCloneByTag) return _initCloneByTag;
  hasRequired_initCloneByTag = 1;
  var cloneArrayBuffer = require_cloneArrayBuffer(),
    cloneDataView = require_cloneDataView(),
    cloneRegExp = require_cloneRegExp(),
    cloneSymbol = require_cloneSymbol(),
    cloneTypedArray = require_cloneTypedArray();

  /** `Object#toString` result references. */
  var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

  var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object);

      case boolTag:
      case dateTag:
        return new Ctor(+object);

      case dataViewTag:
        return cloneDataView(object, isDeep);

      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag:
        return cloneTypedArray(object, isDeep);

      case mapTag:
        return new Ctor();

      case numberTag:
      case stringTag:
        return new Ctor(object);

      case regexpTag:
        return cloneRegExp(object);

      case setTag:
        return new Ctor();

      case symbolTag:
        return cloneSymbol(object);
    }
  }

  _initCloneByTag = initCloneByTag;
  return _initCloneByTag;
}

var _baseCreate;
var hasRequired_baseCreate;

function require_baseCreate() {
  if (hasRequired_baseCreate) return _baseCreate;
  hasRequired_baseCreate = 1;
  var isObject = requireIsObject();

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function () {
    function object() {}
    return function (proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = undefined;
      return result;
    };
  })();

  _baseCreate = baseCreate;
  return _baseCreate;
}

var _initCloneObject;
var hasRequired_initCloneObject;

function require_initCloneObject() {
  if (hasRequired_initCloneObject) return _initCloneObject;
  hasRequired_initCloneObject = 1;
  var baseCreate = require_baseCreate(),
    getPrototype = require_getPrototype(),
    isPrototype = require_isPrototype();

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }

  _initCloneObject = initCloneObject;
  return _initCloneObject;
}

var _baseIsMap;
var hasRequired_baseIsMap;

function require_baseIsMap() {
  if (hasRequired_baseIsMap) return _baseIsMap;
  hasRequired_baseIsMap = 1;
  var getTag = require_getTag(),
    isObjectLike = requireIsObjectLike();

  /** `Object#toString` result references. */
  var mapTag = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
  }

  _baseIsMap = baseIsMap;
  return _baseIsMap;
}

var isMap_1;
var hasRequiredIsMap;

function requireIsMap() {
  if (hasRequiredIsMap) return isMap_1;
  hasRequiredIsMap = 1;
  var baseIsMap = require_baseIsMap(),
    baseUnary = require_baseUnary(),
    nodeUtil = require_nodeUtil();

  /* Node.js helper references. */
  var nodeIsMap = nodeUtil && nodeUtil.isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

  isMap_1 = isMap;
  return isMap_1;
}

var _baseIsSet;
var hasRequired_baseIsSet;

function require_baseIsSet() {
  if (hasRequired_baseIsSet) return _baseIsSet;
  hasRequired_baseIsSet = 1;
  var getTag = require_getTag(),
    isObjectLike = requireIsObjectLike();

  /** `Object#toString` result references. */
  var setTag = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
  }

  _baseIsSet = baseIsSet;
  return _baseIsSet;
}

var isSet_1;
var hasRequiredIsSet;

function requireIsSet() {
  if (hasRequiredIsSet) return isSet_1;
  hasRequiredIsSet = 1;
  var baseIsSet = require_baseIsSet(),
    baseUnary = require_baseUnary(),
    nodeUtil = require_nodeUtil();

  /* Node.js helper references. */
  var nodeIsSet = nodeUtil && nodeUtil.isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

  isSet_1 = isSet;
  return isSet_1;
}

var _baseClone;
var hasRequired_baseClone;

function require_baseClone() {
  if (hasRequired_baseClone) return _baseClone;
  hasRequired_baseClone = 1;
  var Stack = require_Stack(),
    arrayEach = require_arrayEach(),
    assignValue = require_assignValue(),
    baseAssign = require_baseAssign(),
    baseAssignIn = require_baseAssignIn(),
    cloneBuffer = require_cloneBuffer(),
    copyArray = require_copyArray(),
    copySymbols = require_copySymbols(),
    copySymbolsIn = require_copySymbolsIn(),
    getAllKeys = require_getAllKeys(),
    getAllKeysIn = require_getAllKeysIn(),
    getTag = require_getTag(),
    initCloneArray = require_initCloneArray(),
    initCloneByTag = require_initCloneByTag(),
    initCloneObject = require_initCloneObject(),
    isArray = requireIsArray(),
    isBuffer = requireIsBuffer(),
    isMap = requireIsMap(),
    isObject = requireIsObject(),
    isSet = requireIsSet(),
    keys = requireKeys(),
    keysIn = requireKeysIn();

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] =
    cloneableTags[arrayTag] =
    cloneableTags[arrayBufferTag] =
    cloneableTags[dataViewTag] =
    cloneableTags[boolTag] =
    cloneableTags[dateTag] =
    cloneableTags[float32Tag] =
    cloneableTags[float64Tag] =
    cloneableTags[int8Tag] =
    cloneableTags[int16Tag] =
    cloneableTags[int32Tag] =
    cloneableTags[mapTag] =
    cloneableTags[numberTag] =
    cloneableTags[objectTag] =
    cloneableTags[regexpTag] =
    cloneableTags[setTag] =
    cloneableTags[stringTag] =
    cloneableTags[symbolTag] =
    cloneableTags[uint8Tag] =
    cloneableTags[uint8ClampedTag] =
    cloneableTags[uint16Tag] =
    cloneableTags[uint32Tag] =
      true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
        result = isFlat || isFunc ? {} : initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? copySymbolsIn(value, baseAssignIn(result, value))
            : copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (isSet(value)) {
      value.forEach(function (subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap(value)) {
      value.forEach(function (subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
    }

    var keysFunc = isFull ? (isFlat ? getAllKeysIn : getAllKeys) : isFlat ? keysIn : keys;

    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function (subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  _baseClone = baseClone;
  return _baseClone;
}

var clone_1;
var hasRequiredClone;

function requireClone() {
  if (hasRequiredClone) return clone_1;
  hasRequiredClone = 1;
  var baseClone = require_baseClone();

  /** Used to compose bitmasks for cloning. */
  var CLONE_SYMBOLS_FLAG = 4;

  /**
   * Creates a shallow clone of `value`.
   *
   * **Note:** This method is loosely based on the
   * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
   * and supports cloning arrays, array buffers, booleans, date objects, maps,
   * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
   * arrays. The own enumerable properties of `arguments` objects are cloned
   * as plain objects. An empty object is returned for uncloneable values such
   * as error objects, functions, DOM nodes, and WeakMaps.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to clone.
   * @returns {*} Returns the cloned value.
   * @see _.cloneDeep
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var shallow = _.clone(objects);
   * console.log(shallow[0] === objects[0]);
   * // => true
   */
  function clone(value) {
    return baseClone(value, CLONE_SYMBOLS_FLAG);
  }

  clone_1 = clone;
  return clone_1;
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */

var constant_1;
var hasRequiredConstant;

function requireConstant() {
  if (hasRequiredConstant) return constant_1;
  hasRequiredConstant = 1;
  function constant(value) {
    return function () {
      return value;
    };
  }

  constant_1 = constant;
  return constant_1;
}

var eachExports = {};
var each = {
  get exports() {
    return eachExports;
  },
  set exports(v) {
    eachExports = v;
  }
};

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */

var _createBaseFor;
var hasRequired_createBaseFor;

function require_createBaseFor() {
  if (hasRequired_createBaseFor) return _createBaseFor;
  hasRequired_createBaseFor = 1;
  function createBaseFor(fromRight) {
    return function (object, iteratee, keysFunc) {
      var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  _createBaseFor = createBaseFor;
  return _createBaseFor;
}

var _baseFor;
var hasRequired_baseFor;

function require_baseFor() {
  if (hasRequired_baseFor) return _baseFor;
  hasRequired_baseFor = 1;
  var createBaseFor = require_createBaseFor();

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = createBaseFor();

  _baseFor = baseFor;
  return _baseFor;
}

var _baseForOwn;
var hasRequired_baseForOwn;

function require_baseForOwn() {
  if (hasRequired_baseForOwn) return _baseForOwn;
  hasRequired_baseForOwn = 1;
  var baseFor = require_baseFor(),
    keys = requireKeys();

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }

  _baseForOwn = baseForOwn;
  return _baseForOwn;
}

var _createBaseEach;
var hasRequired_createBaseEach;

function require_createBaseEach() {
  if (hasRequired_createBaseEach) return _createBaseEach;
  hasRequired_createBaseEach = 1;
  var isArrayLike = requireIsArrayLike();

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseEach(eachFunc, fromRight) {
    return function (collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }

  _createBaseEach = createBaseEach;
  return _createBaseEach;
}

var _baseEach;
var hasRequired_baseEach;

function require_baseEach() {
  if (hasRequired_baseEach) return _baseEach;
  hasRequired_baseEach = 1;
  var baseForOwn = require_baseForOwn(),
    createBaseEach = require_createBaseEach();

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach = createBaseEach(baseForOwn);

  _baseEach = baseEach;
  return _baseEach;
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */

var identity_1;
var hasRequiredIdentity;

function requireIdentity() {
  if (hasRequiredIdentity) return identity_1;
  hasRequiredIdentity = 1;
  function identity(value) {
    return value;
  }

  identity_1 = identity;
  return identity_1;
}

var _castFunction;
var hasRequired_castFunction;

function require_castFunction() {
  if (hasRequired_castFunction) return _castFunction;
  hasRequired_castFunction = 1;
  var identity = requireIdentity();

  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Function} Returns cast function.
   */
  function castFunction(value) {
    return typeof value == 'function' ? value : identity;
  }

  _castFunction = castFunction;
  return _castFunction;
}

var forEach_1;
var hasRequiredForEach;

function requireForEach() {
  if (hasRequiredForEach) return forEach_1;
  hasRequiredForEach = 1;
  var arrayEach = require_arrayEach(),
    baseEach = require_baseEach(),
    castFunction = require_castFunction(),
    isArray = requireIsArray();

  /**
   * Iterates over elements of `collection` and invokes `iteratee` for each element.
   * The iteratee is invoked with three arguments: (value, index|key, collection).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * **Note:** As with other "Collections" methods, objects with a "length"
   * property are iterated like arrays. To avoid this behavior use `_.forIn`
   * or `_.forOwn` for object iteration.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @alias each
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEachRight
   * @example
   *
   * _.forEach([1, 2], function(value) {
   *   console.log(value);
   * });
   * // => Logs `1` then `2`.
   *
   * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a' then 'b' (iteration order is not guaranteed).
   */
  function forEach(collection, iteratee) {
    var func = isArray(collection) ? arrayEach : baseEach;
    return func(collection, castFunction(iteratee));
  }

  forEach_1 = forEach;
  return forEach_1;
}

var hasRequiredEach;

function requireEach() {
  if (hasRequiredEach) return eachExports;
  hasRequiredEach = 1;
  (function (module) {
    module.exports = requireForEach();
  })(each);
  return eachExports;
}

var _baseFilter;
var hasRequired_baseFilter;

function require_baseFilter() {
  if (hasRequired_baseFilter) return _baseFilter;
  hasRequired_baseFilter = 1;
  var baseEach = require_baseEach();

  /**
   * The base implementation of `_.filter` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function baseFilter(collection, predicate) {
    var result = [];
    baseEach(collection, function (value, index, collection) {
      if (predicate(value, index, collection)) {
        result.push(value);
      }
    });
    return result;
  }

  _baseFilter = baseFilter;
  return _baseFilter;
}

/** Used to stand-in for `undefined` hash values. */

var _setCacheAdd;
var hasRequired_setCacheAdd;

function require_setCacheAdd() {
  if (hasRequired_setCacheAdd) return _setCacheAdd;
  hasRequired_setCacheAdd = 1;
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }

  _setCacheAdd = setCacheAdd;
  return _setCacheAdd;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */

var _setCacheHas;
var hasRequired_setCacheHas;

function require_setCacheHas() {
  if (hasRequired_setCacheHas) return _setCacheHas;
  hasRequired_setCacheHas = 1;
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  _setCacheHas = setCacheHas;
  return _setCacheHas;
}

var _SetCache;
var hasRequired_SetCache;

function require_SetCache() {
  if (hasRequired_SetCache) return _SetCache;
  hasRequired_SetCache = 1;
  var MapCache = require_MapCache(),
    setCacheAdd = require_setCacheAdd(),
    setCacheHas = require_setCacheHas();

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
      length = values == null ? 0 : values.length;

    this.__data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;

  _SetCache = SetCache;
  return _SetCache;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */

var _arraySome;
var hasRequired_arraySome;

function require_arraySome() {
  if (hasRequired_arraySome) return _arraySome;
  hasRequired_arraySome = 1;
  function arraySome(array, predicate) {
    var index = -1,
      length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  _arraySome = arraySome;
  return _arraySome;
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

var _cacheHas;
var hasRequired_cacheHas;

function require_cacheHas() {
  if (hasRequired_cacheHas) return _cacheHas;
  hasRequired_cacheHas = 1;
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  _cacheHas = cacheHas;
  return _cacheHas;
}

var _equalArrays;
var hasRequired_equalArrays;

function require_equalArrays() {
  if (hasRequired_equalArrays) return _equalArrays;
  hasRequired_equalArrays = 1;
  var SetCache = require_SetCache(),
    arraySome = require_arraySome(),
    cacheHas = require_cacheHas();

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

    stack.set(array, other);
    stack.set(other, array);

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
        othValue = other[index];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (
          !arraySome(other, function (othValue, othIndex) {
            if (
              !cacheHas(seen, othIndex) &&
              (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))
            ) {
              return seen.push(othIndex);
            }
          })
        ) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  _equalArrays = equalArrays;
  return _equalArrays;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */

var _mapToArray;
var hasRequired_mapToArray;

function require_mapToArray() {
  if (hasRequired_mapToArray) return _mapToArray;
  hasRequired_mapToArray = 1;
  function mapToArray(map) {
    var index = -1,
      result = Array(map.size);

    map.forEach(function (value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  _mapToArray = mapToArray;
  return _mapToArray;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */

var _setToArray;
var hasRequired_setToArray;

function require_setToArray() {
  if (hasRequired_setToArray) return _setToArray;
  hasRequired_setToArray = 1;
  function setToArray(set) {
    var index = -1,
      result = Array(set.size);

    set.forEach(function (value) {
      result[++index] = value;
    });
    return result;
  }

  _setToArray = setToArray;
  return _setToArray;
}

var _equalByTag;
var hasRequired_equalByTag;

function require_equalByTag() {
  if (hasRequired_equalByTag) return _equalByTag;
  hasRequired_equalByTag = 1;
  var Symbol = require_Symbol(),
    Uint8Array = require_Uint8Array(),
    eq = requireEq(),
    equalArrays = require_equalArrays(),
    mapToArray = require_mapToArray(),
    setToArray = require_setToArray();

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

  /** `Object#toString` result references. */
  var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

  var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;

      case boolTag:
      case dateTag:
      case numberTag:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq(+object, +other);

      case errorTag:
        return object.name == other.name && object.message == other.message;

      case regexpTag:
      case stringTag:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == other + '';

      case mapTag:
        var convert = mapToArray;

      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
        convert || (convert = setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }

  _equalByTag = equalByTag;
  return _equalByTag;
}

var _equalObjects;
var hasRequired_equalObjects;

function require_equalObjects() {
  if (hasRequired_equalObjects) return _equalObjects;
  hasRequired_equalObjects = 1;
  var getAllKeys = require_getAllKeys();

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);

    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
        othValue = other[key];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (
        !(compared === undefined
          ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack)
          : compared)
      ) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
        othCtor = other.constructor;

      // Non `Object` object instances with different constructors are not equal.
      if (
        objCtor != othCtor &&
        'constructor' in object &&
        'constructor' in other &&
        !(
          typeof objCtor == 'function' &&
          objCtor instanceof objCtor &&
          typeof othCtor == 'function' &&
          othCtor instanceof othCtor
        )
      ) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  _equalObjects = equalObjects;
  return _equalObjects;
}

var _baseIsEqualDeep;
var hasRequired_baseIsEqualDeep;

function require_baseIsEqualDeep() {
  if (hasRequired_baseIsEqualDeep) return _baseIsEqualDeep;
  hasRequired_baseIsEqualDeep = 1;
  var Stack = require_Stack(),
    equalArrays = require_equalArrays(),
    equalByTag = require_equalByTag(),
    equalObjects = require_equalObjects(),
    getTag = require_getTag(),
    isArray = requireIsArray(),
    isBuffer = requireIsBuffer(),
    isTypedArray = requireIsTypedArray();

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
   * @param {Function} customizer The function to customize comparisons.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;

    var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object)
        ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
        : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  _baseIsEqualDeep = baseIsEqualDeep;
  return _baseIsEqualDeep;
}

var _baseIsEqual;
var hasRequired_baseIsEqual;

function require_baseIsEqual() {
  if (hasRequired_baseIsEqual) return _baseIsEqual;
  hasRequired_baseIsEqual = 1;
  var baseIsEqualDeep = require_baseIsEqualDeep(),
    isObjectLike = requireIsObjectLike();

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Unordered comparison
   *  2 - Partial comparison
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }

  _baseIsEqual = baseIsEqual;
  return _baseIsEqual;
}

var _baseIsMatch;
var hasRequired_baseIsMatch;

function require_baseIsMatch() {
  if (hasRequired_baseIsMatch) return _baseIsMatch;
  hasRequired_baseIsMatch = 1;
  var Stack = require_Stack(),
    baseIsEqual = require_baseIsEqual();

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
        objValue = object[key],
        srcValue = data[1];

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack();
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (
          !(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result)
        ) {
          return false;
        }
      }
    }
    return true;
  }

  _baseIsMatch = baseIsMatch;
  return _baseIsMatch;
}

var _isStrictComparable;
var hasRequired_isStrictComparable;

function require_isStrictComparable() {
  if (hasRequired_isStrictComparable) return _isStrictComparable;
  hasRequired_isStrictComparable = 1;
  var isObject = requireIsObject();

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }

  _isStrictComparable = isStrictComparable;
  return _isStrictComparable;
}

var _getMatchData;
var hasRequired_getMatchData;

function require_getMatchData() {
  if (hasRequired_getMatchData) return _getMatchData;
  hasRequired_getMatchData = 1;
  var isStrictComparable = require_isStrictComparable(),
    keys = requireKeys();

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData(object) {
    var result = keys(object),
      length = result.length;

    while (length--) {
      var key = result[length],
        value = object[key];

      result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
  }

  _getMatchData = getMatchData;
  return _getMatchData;
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */

var _matchesStrictComparable;
var hasRequired_matchesStrictComparable;

function require_matchesStrictComparable() {
  if (hasRequired_matchesStrictComparable) return _matchesStrictComparable;
  hasRequired_matchesStrictComparable = 1;
  function matchesStrictComparable(key, srcValue) {
    return function (object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
    };
  }

  _matchesStrictComparable = matchesStrictComparable;
  return _matchesStrictComparable;
}

var _baseMatches;
var hasRequired_baseMatches;

function require_baseMatches() {
  if (hasRequired_baseMatches) return _baseMatches;
  hasRequired_baseMatches = 1;
  var baseIsMatch = require_baseIsMatch(),
    getMatchData = require_getMatchData(),
    matchesStrictComparable = require_matchesStrictComparable();

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function (object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }

  _baseMatches = baseMatches;
  return _baseMatches;
}

var isSymbol_1;
var hasRequiredIsSymbol;

function requireIsSymbol() {
  if (hasRequiredIsSymbol) return isSymbol_1;
  hasRequiredIsSymbol = 1;
  var baseGetTag = require_baseGetTag(),
    isObjectLike = requireIsObjectLike();

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' || (isObjectLike(value) && baseGetTag(value) == symbolTag);
  }

  isSymbol_1 = isSymbol;
  return isSymbol_1;
}

var _isKey;
var hasRequired_isKey;

function require_isKey() {
  if (hasRequired_isKey) return _isKey;
  hasRequired_isKey = 1;
  var isArray = requireIsArray(),
    isSymbol = requireIsSymbol();

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || (object != null && value in Object(object));
  }

  _isKey = isKey;
  return _isKey;
}

var memoize_1;
var hasRequiredMemoize;

function requireMemoize() {
  if (hasRequiredMemoize) return memoize_1;
  hasRequiredMemoize = 1;
  var MapCache = require_MapCache();

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function () {
      var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = MapCache;

  memoize_1 = memoize;
  return memoize_1;
}

var _memoizeCapped;
var hasRequired_memoizeCapped;

function require_memoizeCapped() {
  if (hasRequired_memoizeCapped) return _memoizeCapped;
  hasRequired_memoizeCapped = 1;
  var memoize = requireMemoize();

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize(func, function (key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  _memoizeCapped = memoizeCapped;
  return _memoizeCapped;
}

var _stringToPath;
var hasRequired_stringToPath;

function require_stringToPath() {
  if (hasRequired_stringToPath) return _stringToPath;
  hasRequired_stringToPath = 1;
  var memoizeCapped = require_memoizeCapped();

  /** Used to match property names within property paths. */
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = memoizeCapped(function (string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
    string.replace(rePropName, function (match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
  });

  _stringToPath = stringToPath;
  return _stringToPath;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

var _arrayMap;
var hasRequired_arrayMap;

function require_arrayMap() {
  if (hasRequired_arrayMap) return _arrayMap;
  hasRequired_arrayMap = 1;
  function arrayMap(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  _arrayMap = arrayMap;
  return _arrayMap;
}

var _baseToString;
var hasRequired_baseToString;

function require_baseToString() {
  if (hasRequired_baseToString) return _baseToString;
  hasRequired_baseToString = 1;
  var Symbol = require_Symbol(),
    arrayMap = require_arrayMap(),
    isArray = requireIsArray(),
    isSymbol = requireIsSymbol();

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  _baseToString = baseToString;
  return _baseToString;
}

var toString_1;
var hasRequiredToString;

function requireToString() {
  if (hasRequiredToString) return toString_1;
  hasRequiredToString = 1;
  var baseToString = require_baseToString();

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }

  toString_1 = toString;
  return toString_1;
}

var _castPath;
var hasRequired_castPath;

function require_castPath() {
  if (hasRequired_castPath) return _castPath;
  hasRequired_castPath = 1;
  var isArray = requireIsArray(),
    isKey = require_isKey(),
    stringToPath = require_stringToPath(),
    toString = requireToString();

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }

  _castPath = castPath;
  return _castPath;
}

var _toKey;
var hasRequired_toKey;

function require_toKey() {
  if (hasRequired_toKey) return _toKey;
  hasRequired_toKey = 1;
  var isSymbol = requireIsSymbol();

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  _toKey = toKey;
  return _toKey;
}

var _baseGet;
var hasRequired_baseGet;

function require_baseGet() {
  if (hasRequired_baseGet) return _baseGet;
  hasRequired_baseGet = 1;
  var castPath = require_castPath(),
    toKey = require_toKey();

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = castPath(path, object);

    var index = 0,
      length = path.length;

    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return index && index == length ? object : undefined;
  }

  _baseGet = baseGet;
  return _baseGet;
}

var get_1;
var hasRequiredGet;

function requireGet() {
  if (hasRequiredGet) return get_1;
  hasRequiredGet = 1;
  var baseGet = require_baseGet();

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  get_1 = get;
  return get_1;
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */

var _baseHasIn;
var hasRequired_baseHasIn;

function require_baseHasIn() {
  if (hasRequired_baseHasIn) return _baseHasIn;
  hasRequired_baseHasIn = 1;
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }

  _baseHasIn = baseHasIn;
  return _baseHasIn;
}

var _hasPath;
var hasRequired_hasPath;

function require_hasPath() {
  if (hasRequired_hasPath) return _hasPath;
  hasRequired_hasPath = 1;
  var castPath = require_castPath(),
    isArguments = requireIsArguments(),
    isArray = requireIsArray(),
    isIndex = require_isIndex(),
    isLength = requireIsLength(),
    toKey = require_toKey();

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath(object, path, hasFunc) {
    path = castPath(path, object);

    var index = -1,
      length = path.length,
      result = false;

    while (++index < length) {
      var key = toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
  }

  _hasPath = hasPath;
  return _hasPath;
}

var hasIn_1;
var hasRequiredHasIn;

function requireHasIn() {
  if (hasRequiredHasIn) return hasIn_1;
  hasRequiredHasIn = 1;
  var baseHasIn = require_baseHasIn(),
    hasPath = require_hasPath();

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */
  function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }

  hasIn_1 = hasIn;
  return hasIn_1;
}

var _baseMatchesProperty;
var hasRequired_baseMatchesProperty;

function require_baseMatchesProperty() {
  if (hasRequired_baseMatchesProperty) return _baseMatchesProperty;
  hasRequired_baseMatchesProperty = 1;
  var baseIsEqual = require_baseIsEqual(),
    get = requireGet(),
    hasIn = requireHasIn(),
    isKey = require_isKey(),
    isStrictComparable = require_isStrictComparable(),
    matchesStrictComparable = require_matchesStrictComparable(),
    toKey = require_toKey();

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue);
    }
    return function (object) {
      var objValue = get(object, path);
      return objValue === undefined && objValue === srcValue
        ? hasIn(object, path)
        : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
  }

  _baseMatchesProperty = baseMatchesProperty;
  return _baseMatchesProperty;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */

var _baseProperty;
var hasRequired_baseProperty;

function require_baseProperty() {
  if (hasRequired_baseProperty) return _baseProperty;
  hasRequired_baseProperty = 1;
  function baseProperty(key) {
    return function (object) {
      return object == null ? undefined : object[key];
    };
  }

  _baseProperty = baseProperty;
  return _baseProperty;
}

var _basePropertyDeep;
var hasRequired_basePropertyDeep;

function require_basePropertyDeep() {
  if (hasRequired_basePropertyDeep) return _basePropertyDeep;
  hasRequired_basePropertyDeep = 1;
  var baseGet = require_baseGet();

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep(path) {
    return function (object) {
      return baseGet(object, path);
    };
  }

  _basePropertyDeep = basePropertyDeep;
  return _basePropertyDeep;
}

var property_1;
var hasRequiredProperty;

function requireProperty() {
  if (hasRequiredProperty) return property_1;
  hasRequiredProperty = 1;
  var baseProperty = require_baseProperty(),
    basePropertyDeep = require_basePropertyDeep(),
    isKey = require_isKey(),
    toKey = require_toKey();

  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
  function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }

  property_1 = property;
  return property_1;
}

var _baseIteratee;
var hasRequired_baseIteratee;

function require_baseIteratee() {
  if (hasRequired_baseIteratee) return _baseIteratee;
  hasRequired_baseIteratee = 1;
  var baseMatches = require_baseMatches(),
    baseMatchesProperty = require_baseMatchesProperty(),
    identity = requireIdentity(),
    isArray = requireIsArray(),
    property = requireProperty();

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (typeof value == 'object') {
      return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    }
    return property(value);
  }

  _baseIteratee = baseIteratee;
  return _baseIteratee;
}

var filter_1;
var hasRequiredFilter;

function requireFilter() {
  if (hasRequiredFilter) return filter_1;
  hasRequiredFilter = 1;
  var arrayFilter = require_arrayFilter(),
    baseFilter = require_baseFilter(),
    baseIteratee = require_baseIteratee(),
    isArray = requireIsArray();

  /**
   * Iterates over elements of `collection`, returning an array of all elements
   * `predicate` returns truthy for. The predicate is invoked with three
   * arguments: (value, index|key, collection).
   *
   * **Note:** Unlike `_.remove`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   * @see _.reject
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'active': true },
   *   { 'user': 'fred',   'age': 40, 'active': false }
   * ];
   *
   * _.filter(users, function(o) { return !o.active; });
   * // => objects for ['fred']
   *
   * // The `_.matches` iteratee shorthand.
   * _.filter(users, { 'age': 36, 'active': true });
   * // => objects for ['barney']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.filter(users, ['active', false]);
   * // => objects for ['fred']
   *
   * // The `_.property` iteratee shorthand.
   * _.filter(users, 'active');
   * // => objects for ['barney']
   *
   * // Combining several predicates using `_.overEvery` or `_.overSome`.
   * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
   * // => objects for ['fred', 'barney']
   */
  function filter(collection, predicate) {
    var func = isArray(collection) ? arrayFilter : baseFilter;
    return func(collection, baseIteratee(predicate, 3));
  }

  filter_1 = filter;
  return filter_1;
}

/** Used for built-in method references. */

var _baseHas;
var hasRequired_baseHas;

function require_baseHas() {
  if (hasRequired_baseHas) return _baseHas;
  hasRequired_baseHas = 1;
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * The base implementation of `_.has` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHas(object, key) {
    return object != null && hasOwnProperty.call(object, key);
  }

  _baseHas = baseHas;
  return _baseHas;
}

var has_1;
var hasRequiredHas;

function requireHas() {
  if (hasRequiredHas) return has_1;
  hasRequiredHas = 1;
  var baseHas = require_baseHas(),
    hasPath = require_hasPath();

  /**
   * Checks if `path` is a direct property of `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = { 'a': { 'b': 2 } };
   * var other = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.has(object, 'a');
   * // => true
   *
   * _.has(object, 'a.b');
   * // => true
   *
   * _.has(object, ['a', 'b']);
   * // => true
   *
   * _.has(other, 'a');
   * // => false
   */
  function has(object, path) {
    return object != null && hasPath(object, path, baseHas);
  }

  has_1 = has;
  return has_1;
}

var isEmpty_1;
var hasRequiredIsEmpty;

function requireIsEmpty() {
  if (hasRequiredIsEmpty) return isEmpty_1;
  hasRequiredIsEmpty = 1;
  var baseKeys = require_baseKeys(),
    getTag = require_getTag(),
    isArguments = requireIsArguments(),
    isArray = requireIsArray(),
    isArrayLike = requireIsArrayLike(),
    isBuffer = requireIsBuffer(),
    isPrototype = require_isPrototype(),
    isTypedArray = requireIsTypedArray();

  /** `Object#toString` result references. */
  var mapTag = '[object Map]',
    setTag = '[object Set]';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Checks if `value` is an empty object, collection, map, or set.
   *
   * Objects are considered empty if they have no own enumerable string keyed
   * properties.
   *
   * Array-like values such as `arguments` objects, arrays, buffers, strings, or
   * jQuery-like collections are considered empty if they have a `length` of `0`.
   * Similarly, maps and sets are considered empty if they have a `size` of `0`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   */
  function isEmpty(value) {
    if (value == null) {
      return true;
    }
    if (
      isArrayLike(value) &&
      (isArray(value) ||
        typeof value == 'string' ||
        typeof value.splice == 'function' ||
        isBuffer(value) ||
        isTypedArray(value) ||
        isArguments(value))
    ) {
      return !value.length;
    }
    var tag = getTag(value);
    if (tag == mapTag || tag == setTag) {
      return !value.size;
    }
    if (isPrototype(value)) {
      return !baseKeys(value).length;
    }
    for (var key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false;
      }
    }
    return true;
  }

  isEmpty_1 = isEmpty;
  return isEmpty_1;
}

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */

var isUndefined_1;
var hasRequiredIsUndefined;

function requireIsUndefined() {
  if (hasRequiredIsUndefined) return isUndefined_1;
  hasRequiredIsUndefined = 1;
  function isUndefined(value) {
    return value === undefined;
  }

  isUndefined_1 = isUndefined;
  return isUndefined_1;
}

var _baseMap;
var hasRequired_baseMap;

function require_baseMap() {
  if (hasRequired_baseMap) return _baseMap;
  hasRequired_baseMap = 1;
  var baseEach = require_baseEach(),
    isArrayLike = requireIsArrayLike();

  /**
   * The base implementation of `_.map` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function baseMap(collection, iteratee) {
    var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

    baseEach(collection, function (value, key, collection) {
      result[++index] = iteratee(value, key, collection);
    });
    return result;
  }

  _baseMap = baseMap;
  return _baseMap;
}

var map_1;
var hasRequiredMap;

function requireMap() {
  if (hasRequiredMap) return map_1;
  hasRequiredMap = 1;
  var arrayMap = require_arrayMap(),
    baseIteratee = require_baseIteratee(),
    baseMap = require_baseMap(),
    isArray = requireIsArray();

  /**
   * Creates an array of values by running each element in `collection` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, index|key, collection).
   *
   * Many lodash methods are guarded to work as iteratees for methods like
   * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
   *
   * The guarded methods are:
   * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
   * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
   * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
   * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * _.map([4, 8], square);
   * // => [16, 64]
   *
   * _.map({ 'a': 4, 'b': 8 }, square);
   * // => [16, 64] (iteration order is not guaranteed)
   *
   * var users = [
   *   { 'user': 'barney' },
   *   { 'user': 'fred' }
   * ];
   *
   * // The `_.property` iteratee shorthand.
   * _.map(users, 'user');
   * // => ['barney', 'fred']
   */
  function map(collection, iteratee) {
    var func = isArray(collection) ? arrayMap : baseMap;
    return func(collection, baseIteratee(iteratee, 3));
  }

  map_1 = map;
  return map_1;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */

var _arrayReduce;
var hasRequired_arrayReduce;

function require_arrayReduce() {
  if (hasRequired_arrayReduce) return _arrayReduce;
  hasRequired_arrayReduce = 1;
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
      length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  _arrayReduce = arrayReduce;
  return _arrayReduce;
}

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */

var _baseReduce;
var hasRequired_baseReduce;

function require_baseReduce() {
  if (hasRequired_baseReduce) return _baseReduce;
  hasRequired_baseReduce = 1;
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function (value, index, collection) {
      accumulator = initAccum ? ((initAccum = false), value) : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  _baseReduce = baseReduce;
  return _baseReduce;
}

var reduce_1;
var hasRequiredReduce;

function requireReduce() {
  if (hasRequiredReduce) return reduce_1;
  hasRequiredReduce = 1;
  var arrayReduce = require_arrayReduce(),
    baseEach = require_baseEach(),
    baseIteratee = require_baseIteratee(),
    baseReduce = require_baseReduce(),
    isArray = requireIsArray();

  /**
   * Reduces `collection` to a value which is the accumulated result of running
   * each element in `collection` thru `iteratee`, where each successive
   * invocation is supplied the return value of the previous. If `accumulator`
   * is not given, the first element of `collection` is used as the initial
   * value. The iteratee is invoked with four arguments:
   * (accumulator, value, index|key, collection).
   *
   * Many lodash methods are guarded to work as iteratees for methods like
   * `_.reduce`, `_.reduceRight`, and `_.transform`.
   *
   * The guarded methods are:
   * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
   * and `sortBy`
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @returns {*} Returns the accumulated value.
   * @see _.reduceRight
   * @example
   *
   * _.reduce([1, 2], function(sum, n) {
   *   return sum + n;
   * }, 0);
   * // => 3
   *
   * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
   *   (result[value] || (result[value] = [])).push(key);
   *   return result;
   * }, {});
   * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
   */
  function reduce(collection, iteratee, accumulator) {
    var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

    return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
  }

  reduce_1 = reduce;
  return reduce_1;
}

var isString_1;
var hasRequiredIsString;

function requireIsString() {
  if (hasRequiredIsString) return isString_1;
  hasRequiredIsString = 1;
  var baseGetTag = require_baseGetTag(),
    isArray = requireIsArray(),
    isObjectLike = requireIsObjectLike();

  /** `Object#toString` result references. */
  var stringTag = '[object String]';

  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
    return typeof value == 'string' || (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
  }

  isString_1 = isString;
  return isString_1;
}

var _asciiSize;
var hasRequired_asciiSize;

function require_asciiSize() {
  if (hasRequired_asciiSize) return _asciiSize;
  hasRequired_asciiSize = 1;
  var baseProperty = require_baseProperty();

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  _asciiSize = asciiSize;
  return _asciiSize;
}

/** Used to compose unicode character classes. */

var _hasUnicode;
var hasRequired_hasUnicode;

function require_hasUnicode() {
  if (hasRequired_hasUnicode) return _hasUnicode;
  hasRequired_hasUnicode = 1;
  var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

  /** Used to compose unicode capture groups. */
  var rsZWJ = '\\u200d';

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  _hasUnicode = hasUnicode;
  return _hasUnicode;
}

/** Used to compose unicode character classes. */

var _unicodeSize;
var hasRequired_unicodeSize;

function require_unicodeSize() {
  if (hasRequired_unicodeSize) return _unicodeSize;
  hasRequired_unicodeSize = 1;
  var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

  /** Used to compose unicode capture groups. */
  var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin =
      '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = (reUnicode.lastIndex = 0);
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  _unicodeSize = unicodeSize;
  return _unicodeSize;
}

var _stringSize;
var hasRequired_stringSize;

function require_stringSize() {
  if (hasRequired_stringSize) return _stringSize;
  hasRequired_stringSize = 1;
  var asciiSize = require_asciiSize(),
    hasUnicode = require_hasUnicode(),
    unicodeSize = require_unicodeSize();

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
  }

  _stringSize = stringSize;
  return _stringSize;
}

var size_1;
var hasRequiredSize;

function requireSize() {
  if (hasRequiredSize) return size_1;
  hasRequiredSize = 1;
  var baseKeys = require_baseKeys(),
    getTag = require_getTag(),
    isArrayLike = requireIsArrayLike(),
    isString = requireIsString(),
    stringSize = require_stringSize();

  /** `Object#toString` result references. */
  var mapTag = '[object Map]',
    setTag = '[object Set]';

  /**
   * Gets the size of `collection` by returning its length for array-like
   * values or the number of own enumerable string keyed properties for objects.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object|string} collection The collection to inspect.
   * @returns {number} Returns the collection size.
   * @example
   *
   * _.size([1, 2, 3]);
   * // => 3
   *
   * _.size({ 'a': 1, 'b': 2 });
   * // => 2
   *
   * _.size('pebbles');
   * // => 7
   */
  function size(collection) {
    if (collection == null) {
      return 0;
    }
    if (isArrayLike(collection)) {
      return isString(collection) ? stringSize(collection) : collection.length;
    }
    var tag = getTag(collection);
    if (tag == mapTag || tag == setTag) {
      return collection.size;
    }
    return baseKeys(collection).length;
  }

  size_1 = size;
  return size_1;
}

var transform_1;
var hasRequiredTransform;

function requireTransform() {
  if (hasRequiredTransform) return transform_1;
  hasRequiredTransform = 1;
  var arrayEach = require_arrayEach(),
    baseCreate = require_baseCreate(),
    baseForOwn = require_baseForOwn(),
    baseIteratee = require_baseIteratee(),
    getPrototype = require_getPrototype(),
    isArray = requireIsArray(),
    isBuffer = requireIsBuffer(),
    isFunction = requireIsFunction(),
    isObject = requireIsObject(),
    isTypedArray = requireIsTypedArray();

  /**
   * An alternative to `_.reduce`; this method transforms `object` to a new
   * `accumulator` object which is the result of running each of its own
   * enumerable string keyed properties thru `iteratee`, with each invocation
   * potentially mutating the `accumulator` object. If `accumulator` is not
   * provided, a new object with the same `[[Prototype]]` will be used. The
   * iteratee is invoked with four arguments: (accumulator, value, key, object).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @since 1.3.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The custom accumulator value.
   * @returns {*} Returns the accumulated value.
   * @example
   *
   * _.transform([2, 3, 4], function(result, n) {
   *   result.push(n *= n);
   *   return n % 2 == 0;
   * }, []);
   * // => [4, 9]
   *
   * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
   *   (result[value] || (result[value] = [])).push(key);
   * }, {});
   * // => { '1': ['a', 'c'], '2': ['b'] }
   */
  function transform(object, iteratee, accumulator) {
    var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

    iteratee = baseIteratee(iteratee, 4);
    if (accumulator == null) {
      var Ctor = object && object.constructor;
      if (isArrLike) {
        accumulator = isArr ? new Ctor() : [];
      } else if (isObject(object)) {
        accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
      } else {
        accumulator = {};
      }
    }
    (isArrLike ? arrayEach : baseForOwn)(object, function (value, index, object) {
      return iteratee(accumulator, value, index, object);
    });
    return accumulator;
  }

  transform_1 = transform;
  return transform_1;
}

var _isFlattenable;
var hasRequired_isFlattenable;

function require_isFlattenable() {
  if (hasRequired_isFlattenable) return _isFlattenable;
  hasRequired_isFlattenable = 1;
  var Symbol = require_Symbol(),
    isArguments = requireIsArguments(),
    isArray = requireIsArray();

  /** Built-in value references. */
  var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */
  function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }

  _isFlattenable = isFlattenable;
  return _isFlattenable;
}

var _baseFlatten;
var hasRequired_baseFlatten;

function require_baseFlatten() {
  if (hasRequired_baseFlatten) return _baseFlatten;
  hasRequired_baseFlatten = 1;
  var arrayPush = require_arrayPush(),
    isFlattenable = require_isFlattenable();

  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */
  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
      length = array.length;

    predicate || (predicate = isFlattenable);
    result || (result = []);

    while (++index < length) {
      var value = array[index];
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }

  _baseFlatten = baseFlatten;
  return _baseFlatten;
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */

var _apply;
var hasRequired_apply;

function require_apply() {
  if (hasRequired_apply) return _apply;
  hasRequired_apply = 1;
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  _apply = apply;
  return _apply;
}

var _overRest;
var hasRequired_overRest;

function require_overRest() {
  if (hasRequired_overRest) return _overRest;
  hasRequired_overRest = 1;
  var apply = require_apply();

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function () {
      var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  _overRest = overRest;
  return _overRest;
}

var _baseSetToString;
var hasRequired_baseSetToString;

function require_baseSetToString() {
  if (hasRequired_baseSetToString) return _baseSetToString;
  hasRequired_baseSetToString = 1;
  var constant = requireConstant(),
    defineProperty = require_defineProperty(),
    identity = requireIdentity();

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !defineProperty
    ? identity
    : function (func, string) {
        return defineProperty(func, 'toString', {
          configurable: true,
          enumerable: false,
          value: constant(string),
          writable: true
        });
      };

  _baseSetToString = baseSetToString;
  return _baseSetToString;
}

/** Used to detect hot functions by number of calls within a span of milliseconds. */

var _shortOut;
var hasRequired_shortOut;

function require_shortOut() {
  if (hasRequired_shortOut) return _shortOut;
  hasRequired_shortOut = 1;
  var HOT_COUNT = 800,
    HOT_SPAN = 16;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
      lastCalled = 0;

    return function () {
      var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  _shortOut = shortOut;
  return _shortOut;
}

var _setToString;
var hasRequired_setToString;

function require_setToString() {
  if (hasRequired_setToString) return _setToString;
  hasRequired_setToString = 1;
  var baseSetToString = require_baseSetToString(),
    shortOut = require_shortOut();

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = shortOut(baseSetToString);

  _setToString = setToString;
  return _setToString;
}

var _baseRest;
var hasRequired_baseRest;

function require_baseRest() {
  if (hasRequired_baseRest) return _baseRest;
  hasRequired_baseRest = 1;
  var identity = requireIdentity(),
    overRest = require_overRest(),
    setToString = require_setToString();

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + '');
  }

  _baseRest = baseRest;
  return _baseRest;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

var _baseFindIndex;
var hasRequired_baseFindIndex;

function require_baseFindIndex() {
  if (hasRequired_baseFindIndex) return _baseFindIndex;
  hasRequired_baseFindIndex = 1;
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  _baseFindIndex = baseFindIndex;
  return _baseFindIndex;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */

var _baseIsNaN;
var hasRequired_baseIsNaN;

function require_baseIsNaN() {
  if (hasRequired_baseIsNaN) return _baseIsNaN;
  hasRequired_baseIsNaN = 1;
  function baseIsNaN(value) {
    return value !== value;
  }

  _baseIsNaN = baseIsNaN;
  return _baseIsNaN;
}

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

var _strictIndexOf;
var hasRequired_strictIndexOf;

function require_strictIndexOf() {
  if (hasRequired_strictIndexOf) return _strictIndexOf;
  hasRequired_strictIndexOf = 1;
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
      length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  _strictIndexOf = strictIndexOf;
  return _strictIndexOf;
}

var _baseIndexOf;
var hasRequired_baseIndexOf;

function require_baseIndexOf() {
  if (hasRequired_baseIndexOf) return _baseIndexOf;
  hasRequired_baseIndexOf = 1;
  var baseFindIndex = require_baseFindIndex(),
    baseIsNaN = require_baseIsNaN(),
    strictIndexOf = require_strictIndexOf();

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  _baseIndexOf = baseIndexOf;
  return _baseIndexOf;
}

var _arrayIncludes;
var hasRequired_arrayIncludes;

function require_arrayIncludes() {
  if (hasRequired_arrayIncludes) return _arrayIncludes;
  hasRequired_arrayIncludes = 1;
  var baseIndexOf = require_baseIndexOf();

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  _arrayIncludes = arrayIncludes;
  return _arrayIncludes;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */

var _arrayIncludesWith;
var hasRequired_arrayIncludesWith;

function require_arrayIncludesWith() {
  if (hasRequired_arrayIncludesWith) return _arrayIncludesWith;
  hasRequired_arrayIncludesWith = 1;
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
      length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  _arrayIncludesWith = arrayIncludesWith;
  return _arrayIncludesWith;
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */

var noop_1;
var hasRequiredNoop;

function requireNoop() {
  if (hasRequiredNoop) return noop_1;
  hasRequiredNoop = 1;
  function noop() {
    // No operation performed.
  }

  noop_1 = noop;
  return noop_1;
}

var _createSet;
var hasRequired_createSet;

function require_createSet() {
  if (hasRequired_createSet) return _createSet;
  hasRequired_createSet = 1;
  var Set = require_Set(),
    noop = requireNoop(),
    setToArray = require_setToArray();

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /**
   * Creates a set object of `values`.
   *
   * @private
   * @param {Array} values The values to add to the set.
   * @returns {Object} Returns the new set.
   */
  var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY)
    ? noop
    : function (values) {
        return new Set(values);
      };

  _createSet = createSet;
  return _createSet;
}

var _baseUniq;
var hasRequired_baseUniq;

function require_baseUniq() {
  if (hasRequired_baseUniq) return _baseUniq;
  hasRequired_baseUniq = 1;
  var SetCache = require_SetCache(),
    arrayIncludes = require_arrayIncludes(),
    arrayIncludesWith = require_arrayIncludesWith(),
    cacheHas = require_cacheHas(),
    createSet = require_createSet(),
    setToArray = require_setToArray();

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * The base implementation of `_.uniqBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The iteratee invoked per element.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new duplicate free array.
   */
  function baseUniq(array, iteratee, comparator) {
    var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

    if (comparator) {
      isCommon = false;
      includes = arrayIncludesWith;
    } else if (length >= LARGE_ARRAY_SIZE) {
      var set = iteratee ? null : createSet(array);
      if (set) {
        return setToArray(set);
      }
      isCommon = false;
      includes = cacheHas;
      seen = new SetCache();
    } else {
      seen = iteratee ? [] : result;
    }
    outer: while (++index < length) {
      var value = array[index],
        computed = iteratee ? iteratee(value) : value;

      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }

  _baseUniq = baseUniq;
  return _baseUniq;
}

var isArrayLikeObject_1;
var hasRequiredIsArrayLikeObject;

function requireIsArrayLikeObject() {
  if (hasRequiredIsArrayLikeObject) return isArrayLikeObject_1;
  hasRequiredIsArrayLikeObject = 1;
  var isArrayLike = requireIsArrayLike(),
    isObjectLike = requireIsObjectLike();

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }

  isArrayLikeObject_1 = isArrayLikeObject;
  return isArrayLikeObject_1;
}

var union_1;
var hasRequiredUnion;

function requireUnion() {
  if (hasRequiredUnion) return union_1;
  hasRequiredUnion = 1;
  var baseFlatten = require_baseFlatten(),
    baseRest = require_baseRest(),
    baseUniq = require_baseUniq(),
    isArrayLikeObject = requireIsArrayLikeObject();

  /**
   * Creates an array of unique values, in order, from all given arrays using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of combined values.
   * @example
   *
   * _.union([2], [1, 2]);
   * // => [2, 1]
   */
  var union = baseRest(function (arrays) {
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
  });

  union_1 = union;
  return union_1;
}

var _baseValues;
var hasRequired_baseValues;

function require_baseValues() {
  if (hasRequired_baseValues) return _baseValues;
  hasRequired_baseValues = 1;
  var arrayMap = require_arrayMap();

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function (key) {
      return object[key];
    });
  }

  _baseValues = baseValues;
  return _baseValues;
}

var values_1;
var hasRequiredValues;

function requireValues() {
  if (hasRequiredValues) return values_1;
  hasRequiredValues = 1;
  var baseValues = require_baseValues(),
    keys = requireKeys();

  /**
   * Creates an array of the own enumerable string keyed property values of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property values.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.values(new Foo);
   * // => [1, 2] (iteration order is not guaranteed)
   *
   * _.values('hi');
   * // => ['h', 'i']
   */
  function values(object) {
    return object == null ? [] : baseValues(object, keys(object));
  }

  values_1 = values;
  return values_1;
}

/* global window */

var lodash_1$1;
var hasRequiredLodash;

function requireLodash() {
  if (hasRequiredLodash) return lodash_1$1;
  hasRequiredLodash = 1;
  var lodash;

  if (typeof commonjsRequire === 'function') {
    try {
      lodash = {
        clone: requireClone(),
        constant: requireConstant(),
        each: requireEach(),
        filter: requireFilter(),
        has: requireHas(),
        isArray: requireIsArray(),
        isEmpty: requireIsEmpty(),
        isFunction: requireIsFunction(),
        isUndefined: requireIsUndefined(),
        keys: requireKeys(),
        map: requireMap(),
        reduce: requireReduce(),
        size: requireSize(),
        transform: requireTransform(),
        union: requireUnion(),
        values: requireValues()
      };
    } catch (e) {
      // continue regardless of error
    }
  }

  if (!lodash) {
    lodash = window._;
  }

  lodash_1$1 = lodash;
  return lodash_1$1;
}

var graph;
var hasRequiredGraph;

function requireGraph() {
  if (hasRequiredGraph) return graph;
  hasRequiredGraph = 1;

  var _ = requireLodash();

  graph = Graph;

  var DEFAULT_EDGE_NAME = '\x00';
  var GRAPH_NODE = '\x00';
  var EDGE_KEY_DELIM = '\x01';

  // Implementation notes:
  //
  //  * Node id query functions should return string ids for the nodes
  //  * Edge id query functions should return an "edgeObj", edge object, that is
  //    composed of enough information to uniquely identify an edge: {v, w, name}.
  //  * Internally we use an "edgeId", a stringified form of the edgeObj, to
  //    reference edges. This is because we need a performant way to look these
  //    edges up and, object properties, which have string keys, are the closest
  //    we're going to get to a performant hashtable in JavaScript.

  function Graph(opts) {
    this._isDirected = _.has(opts, 'directed') ? opts.directed : true;
    this._isMultigraph = _.has(opts, 'multigraph') ? opts.multigraph : false;
    this._isCompound = _.has(opts, 'compound') ? opts.compound : false;

    // Label for the graph itself
    this._label = undefined;

    // Defaults to be set when creating a new node
    this._defaultNodeLabelFn = _.constant(undefined);

    // Defaults to be set when creating a new edge
    this._defaultEdgeLabelFn = _.constant(undefined);

    // v -> label
    this._nodes = {};

    if (this._isCompound) {
      // v -> parent
      this._parent = {};

      // v -> children
      this._children = {};
      this._children[GRAPH_NODE] = {};
    }

    // v -> edgeObj
    this._in = {};

    // u -> v -> Number
    this._preds = {};

    // v -> edgeObj
    this._out = {};

    // v -> w -> Number
    this._sucs = {};

    // e -> edgeObj
    this._edgeObjs = {};

    // e -> label
    this._edgeLabels = {};
  }

  /* Number of nodes in the graph. Should only be changed by the implementation. */
  Graph.prototype._nodeCount = 0;

  /* Number of edges in the graph. Should only be changed by the implementation. */
  Graph.prototype._edgeCount = 0;

  /* === Graph functions ========= */

  Graph.prototype.isDirected = function () {
    return this._isDirected;
  };

  Graph.prototype.isMultigraph = function () {
    return this._isMultigraph;
  };

  Graph.prototype.isCompound = function () {
    return this._isCompound;
  };

  Graph.prototype.setGraph = function (label) {
    this._label = label;
    return this;
  };

  Graph.prototype.graph = function () {
    return this._label;
  };

  /* === Node functions ========== */

  Graph.prototype.setDefaultNodeLabel = function (newDefault) {
    if (!_.isFunction(newDefault)) {
      newDefault = _.constant(newDefault);
    }
    this._defaultNodeLabelFn = newDefault;
    return this;
  };

  Graph.prototype.nodeCount = function () {
    return this._nodeCount;
  };

  Graph.prototype.nodes = function () {
    return _.keys(this._nodes);
  };

  Graph.prototype.sources = function () {
    var self = this;
    return _.filter(this.nodes(), function (v) {
      return _.isEmpty(self._in[v]);
    });
  };

  Graph.prototype.sinks = function () {
    var self = this;
    return _.filter(this.nodes(), function (v) {
      return _.isEmpty(self._out[v]);
    });
  };

  Graph.prototype.setNodes = function (vs, value) {
    var args = arguments;
    var self = this;
    _.each(vs, function (v) {
      if (args.length > 1) {
        self.setNode(v, value);
      } else {
        self.setNode(v);
      }
    });
    return this;
  };

  Graph.prototype.setNode = function (v, value) {
    if (_.has(this._nodes, v)) {
      if (arguments.length > 1) {
        this._nodes[v] = value;
      }
      return this;
    }

    this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
    if (this._isCompound) {
      this._parent[v] = GRAPH_NODE;
      this._children[v] = {};
      this._children[GRAPH_NODE][v] = true;
    }
    this._in[v] = {};
    this._preds[v] = {};
    this._out[v] = {};
    this._sucs[v] = {};
    ++this._nodeCount;
    return this;
  };

  Graph.prototype.node = function (v) {
    return this._nodes[v];
  };

  Graph.prototype.hasNode = function (v) {
    return _.has(this._nodes, v);
  };

  Graph.prototype.removeNode = function (v) {
    var self = this;
    if (_.has(this._nodes, v)) {
      var removeEdge = function (e) {
        self.removeEdge(self._edgeObjs[e]);
      };
      delete this._nodes[v];
      if (this._isCompound) {
        this._removeFromParentsChildList(v);
        delete this._parent[v];
        _.each(this.children(v), function (child) {
          self.setParent(child);
        });
        delete this._children[v];
      }
      _.each(_.keys(this._in[v]), removeEdge);
      delete this._in[v];
      delete this._preds[v];
      _.each(_.keys(this._out[v]), removeEdge);
      delete this._out[v];
      delete this._sucs[v];
      --this._nodeCount;
    }
    return this;
  };

  Graph.prototype.setParent = function (v, parent) {
    if (!this._isCompound) {
      throw new Error('Cannot set parent in a non-compound graph');
    }

    if (_.isUndefined(parent)) {
      parent = GRAPH_NODE;
    } else {
      // Coerce parent to string
      parent += '';
      for (var ancestor = parent; !_.isUndefined(ancestor); ancestor = this.parent(ancestor)) {
        if (ancestor === v) {
          throw new Error('Setting ' + parent + ' as parent of ' + v + ' would create a cycle');
        }
      }

      this.setNode(parent);
    }

    this.setNode(v);
    this._removeFromParentsChildList(v);
    this._parent[v] = parent;
    this._children[parent][v] = true;
    return this;
  };

  Graph.prototype._removeFromParentsChildList = function (v) {
    delete this._children[this._parent[v]][v];
  };

  Graph.prototype.parent = function (v) {
    if (this._isCompound) {
      var parent = this._parent[v];
      if (parent !== GRAPH_NODE) {
        return parent;
      }
    }
  };

  Graph.prototype.children = function (v) {
    if (_.isUndefined(v)) {
      v = GRAPH_NODE;
    }

    if (this._isCompound) {
      var children = this._children[v];
      if (children) {
        return _.keys(children);
      }
    } else if (v === GRAPH_NODE) {
      return this.nodes();
    } else if (this.hasNode(v)) {
      return [];
    }
  };

  Graph.prototype.predecessors = function (v) {
    var predsV = this._preds[v];
    if (predsV) {
      return _.keys(predsV);
    }
  };

  Graph.prototype.successors = function (v) {
    var sucsV = this._sucs[v];
    if (sucsV) {
      return _.keys(sucsV);
    }
  };

  Graph.prototype.neighbors = function (v) {
    var preds = this.predecessors(v);
    if (preds) {
      return _.union(preds, this.successors(v));
    }
  };

  Graph.prototype.isLeaf = function (v) {
    var neighbors;
    if (this.isDirected()) {
      neighbors = this.successors(v);
    } else {
      neighbors = this.neighbors(v);
    }
    return neighbors.length === 0;
  };

  Graph.prototype.filterNodes = function (filter) {
    var copy = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });

    copy.setGraph(this.graph());

    var self = this;
    _.each(this._nodes, function (value, v) {
      if (filter(v)) {
        copy.setNode(v, value);
      }
    });

    _.each(this._edgeObjs, function (e) {
      if (copy.hasNode(e.v) && copy.hasNode(e.w)) {
        copy.setEdge(e, self.edge(e));
      }
    });

    var parents = {};
    function findParent(v) {
      var parent = self.parent(v);
      if (parent === undefined || copy.hasNode(parent)) {
        parents[v] = parent;
        return parent;
      } else if (parent in parents) {
        return parents[parent];
      } else {
        return findParent(parent);
      }
    }

    if (this._isCompound) {
      _.each(copy.nodes(), function (v) {
        copy.setParent(v, findParent(v));
      });
    }

    return copy;
  };

  /* === Edge functions ========== */

  Graph.prototype.setDefaultEdgeLabel = function (newDefault) {
    if (!_.isFunction(newDefault)) {
      newDefault = _.constant(newDefault);
    }
    this._defaultEdgeLabelFn = newDefault;
    return this;
  };

  Graph.prototype.edgeCount = function () {
    return this._edgeCount;
  };

  Graph.prototype.edges = function () {
    return _.values(this._edgeObjs);
  };

  Graph.prototype.setPath = function (vs, value) {
    var self = this;
    var args = arguments;
    _.reduce(vs, function (v, w) {
      if (args.length > 1) {
        self.setEdge(v, w, value);
      } else {
        self.setEdge(v, w);
      }
      return w;
    });
    return this;
  };

  /*
   * setEdge(v, w, [value, [name]])
   * setEdge({ v, w, [name] }, [value])
   */
  Graph.prototype.setEdge = function () {
    var v, w, name, value;
    var valueSpecified = false;
    var arg0 = arguments[0];

    if (typeof arg0 === 'object' && arg0 !== null && 'v' in arg0) {
      v = arg0.v;
      w = arg0.w;
      name = arg0.name;
      if (arguments.length === 2) {
        value = arguments[1];
        valueSpecified = true;
      }
    } else {
      v = arg0;
      w = arguments[1];
      name = arguments[3];
      if (arguments.length > 2) {
        value = arguments[2];
        valueSpecified = true;
      }
    }

    v = '' + v;
    w = '' + w;
    if (!_.isUndefined(name)) {
      name = '' + name;
    }

    var e = edgeArgsToId(this._isDirected, v, w, name);
    if (_.has(this._edgeLabels, e)) {
      if (valueSpecified) {
        this._edgeLabels[e] = value;
      }
      return this;
    }

    if (!_.isUndefined(name) && !this._isMultigraph) {
      throw new Error('Cannot set a named edge when isMultigraph = false');
    }

    // It didn't exist, so we need to create it.
    // First ensure the nodes exist.
    this.setNode(v);
    this.setNode(w);

    this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);

    var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
    // Ensure we add undirected edges in a consistent way.
    v = edgeObj.v;
    w = edgeObj.w;

    Object.freeze(edgeObj);
    this._edgeObjs[e] = edgeObj;
    incrementOrInitEntry(this._preds[w], v);
    incrementOrInitEntry(this._sucs[v], w);
    this._in[w][e] = edgeObj;
    this._out[v][e] = edgeObj;
    this._edgeCount++;
    return this;
  };

  Graph.prototype.edge = function (v, w, name) {
    var e =
      arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
    return this._edgeLabels[e];
  };

  Graph.prototype.hasEdge = function (v, w, name) {
    var e =
      arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
    return _.has(this._edgeLabels, e);
  };

  Graph.prototype.removeEdge = function (v, w, name) {
    var e =
      arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
    var edge = this._edgeObjs[e];
    if (edge) {
      v = edge.v;
      w = edge.w;
      delete this._edgeLabels[e];
      delete this._edgeObjs[e];
      decrementOrRemoveEntry(this._preds[w], v);
      decrementOrRemoveEntry(this._sucs[v], w);
      delete this._in[w][e];
      delete this._out[v][e];
      this._edgeCount--;
    }
    return this;
  };

  Graph.prototype.inEdges = function (v, u) {
    var inV = this._in[v];
    if (inV) {
      var edges = _.values(inV);
      if (!u) {
        return edges;
      }
      return _.filter(edges, function (edge) {
        return edge.v === u;
      });
    }
  };

  Graph.prototype.outEdges = function (v, w) {
    var outV = this._out[v];
    if (outV) {
      var edges = _.values(outV);
      if (!w) {
        return edges;
      }
      return _.filter(edges, function (edge) {
        return edge.w === w;
      });
    }
  };

  Graph.prototype.nodeEdges = function (v, w) {
    var inEdges = this.inEdges(v, w);
    if (inEdges) {
      return inEdges.concat(this.outEdges(v, w));
    }
  };

  function incrementOrInitEntry(map, k) {
    if (map[k]) {
      map[k]++;
    } else {
      map[k] = 1;
    }
  }

  function decrementOrRemoveEntry(map, k) {
    if (!--map[k]) {
      delete map[k];
    }
  }

  function edgeArgsToId(isDirected, v_, w_, name) {
    var v = '' + v_;
    var w = '' + w_;
    if (!isDirected && v > w) {
      var tmp = v;
      v = w;
      w = tmp;
    }
    return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + (_.isUndefined(name) ? DEFAULT_EDGE_NAME : name);
  }

  function edgeArgsToObj(isDirected, v_, w_, name) {
    var v = '' + v_;
    var w = '' + w_;
    if (!isDirected && v > w) {
      var tmp = v;
      v = w;
      w = tmp;
    }
    var edgeObj = { v: v, w: w };
    if (name) {
      edgeObj.name = name;
    }
    return edgeObj;
  }

  function edgeObjToId(isDirected, edgeObj) {
    return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
  }
  return graph;
}

var version$1;
var hasRequiredVersion;

function requireVersion() {
  if (hasRequiredVersion) return version$1;
  hasRequiredVersion = 1;
  version$1 = '2.1.8';
  return version$1;
}

var lib;
var hasRequiredLib;

function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  // Includes only the "core" of graphlib
  lib = {
    Graph: requireGraph(),
    version: requireVersion()
  };
  return lib;
}

var json;
var hasRequiredJson;

function requireJson() {
  if (hasRequiredJson) return json;
  hasRequiredJson = 1;
  var _ = requireLodash();
  var Graph = requireGraph();

  json = {
    write: write,
    read: read
  };

  function write(g) {
    var json = {
      options: {
        directed: g.isDirected(),
        multigraph: g.isMultigraph(),
        compound: g.isCompound()
      },
      nodes: writeNodes(g),
      edges: writeEdges(g)
    };
    if (!_.isUndefined(g.graph())) {
      json.value = _.clone(g.graph());
    }
    return json;
  }

  function writeNodes(g) {
    return _.map(g.nodes(), function (v) {
      var nodeValue = g.node(v);
      var parent = g.parent(v);
      var node = { v: v };
      if (!_.isUndefined(nodeValue)) {
        node.value = nodeValue;
      }
      if (!_.isUndefined(parent)) {
        node.parent = parent;
      }
      return node;
    });
  }

  function writeEdges(g) {
    return _.map(g.edges(), function (e) {
      var edgeValue = g.edge(e);
      var edge = { v: e.v, w: e.w };
      if (!_.isUndefined(e.name)) {
        edge.name = e.name;
      }
      if (!_.isUndefined(edgeValue)) {
        edge.value = edgeValue;
      }
      return edge;
    });
  }

  function read(json) {
    var g = new Graph(json.options).setGraph(json.value);
    _.each(json.nodes, function (entry) {
      g.setNode(entry.v, entry.value);
      if (entry.parent) {
        g.setParent(entry.v, entry.parent);
      }
    });
    _.each(json.edges, function (entry) {
      g.setEdge({ v: entry.v, w: entry.w, name: entry.name }, entry.value);
    });
    return g;
  }
  return json;
}

var components_1;
var hasRequiredComponents;

function requireComponents() {
  if (hasRequiredComponents) return components_1;
  hasRequiredComponents = 1;
  var _ = requireLodash();

  components_1 = components;

  function components(g) {
    var visited = {};
    var cmpts = [];
    var cmpt;

    function dfs(v) {
      if (_.has(visited, v)) return;
      visited[v] = true;
      cmpt.push(v);
      _.each(g.successors(v), dfs);
      _.each(g.predecessors(v), dfs);
    }

    _.each(g.nodes(), function (v) {
      cmpt = [];
      dfs(v);
      if (cmpt.length) {
        cmpts.push(cmpt);
      }
    });

    return cmpts;
  }
  return components_1;
}

var priorityQueue;
var hasRequiredPriorityQueue;

function requirePriorityQueue() {
  if (hasRequiredPriorityQueue) return priorityQueue;
  hasRequiredPriorityQueue = 1;
  var _ = requireLodash();

  priorityQueue = PriorityQueue;

  /**
   * A min-priority queue data structure. This algorithm is derived from Cormen,
   * et al., "Introduction to Algorithms". The basic idea of a min-priority
   * queue is that you can efficiently (in O(1) time) get the smallest key in
   * the queue. Adding and removing elements takes O(log n) time. A key can
   * have its priority decreased in O(log n) time.
   */
  function PriorityQueue() {
    this._arr = [];
    this._keyIndices = {};
  }

  /**
   * Returns the number of elements in the queue. Takes `O(1)` time.
   */
  PriorityQueue.prototype.size = function () {
    return this._arr.length;
  };

  /**
   * Returns the keys that are in the queue. Takes `O(n)` time.
   */
  PriorityQueue.prototype.keys = function () {
    return this._arr.map(function (x) {
      return x.key;
    });
  };

  /**
   * Returns `true` if **key** is in the queue and `false` if not.
   */
  PriorityQueue.prototype.has = function (key) {
    return _.has(this._keyIndices, key);
  };

  /**
   * Returns the priority for **key**. If **key** is not present in the queue
   * then this function returns `undefined`. Takes `O(1)` time.
   *
   * @param {Object} key
   */
  PriorityQueue.prototype.priority = function (key) {
    var index = this._keyIndices[key];
    if (index !== undefined) {
      return this._arr[index].priority;
    }
  };

  /**
   * Returns the key for the minimum element in this queue. If the queue is
   * empty this function throws an Error. Takes `O(1)` time.
   */
  PriorityQueue.prototype.min = function () {
    if (this.size() === 0) {
      throw new Error('Queue underflow');
    }
    return this._arr[0].key;
  };

  /**
   * Inserts a new key into the priority queue. If the key already exists in
   * the queue this function returns `false`; otherwise it will return `true`.
   * Takes `O(n)` time.
   *
   * @param {Object} key the key to add
   * @param {Number} priority the initial priority for the key
   */
  PriorityQueue.prototype.add = function (key, priority) {
    var keyIndices = this._keyIndices;
    key = String(key);
    if (!_.has(keyIndices, key)) {
      var arr = this._arr;
      var index = arr.length;
      keyIndices[key] = index;
      arr.push({ key: key, priority: priority });
      this._decrease(index);
      return true;
    }
    return false;
  };

  /**
   * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
   */
  PriorityQueue.prototype.removeMin = function () {
    this._swap(0, this._arr.length - 1);
    var min = this._arr.pop();
    delete this._keyIndices[min.key];
    this._heapify(0);
    return min.key;
  };

  /**
   * Decreases the priority for **key** to **priority**. If the new priority is
   * greater than the previous priority, this function will throw an Error.
   *
   * @param {Object} key the key for which to raise priority
   * @param {Number} priority the new priority for the key
   */
  PriorityQueue.prototype.decrease = function (key, priority) {
    var index = this._keyIndices[key];
    if (priority > this._arr[index].priority) {
      throw new Error(
        'New priority is greater than current priority. ' +
          'Key: ' +
          key +
          ' Old: ' +
          this._arr[index].priority +
          ' New: ' +
          priority
      );
    }
    this._arr[index].priority = priority;
    this._decrease(index);
  };

  PriorityQueue.prototype._heapify = function (i) {
    var arr = this._arr;
    var l = 2 * i;
    var r = l + 1;
    var largest = i;
    if (l < arr.length) {
      largest = arr[l].priority < arr[largest].priority ? l : largest;
      if (r < arr.length) {
        largest = arr[r].priority < arr[largest].priority ? r : largest;
      }
      if (largest !== i) {
        this._swap(i, largest);
        this._heapify(largest);
      }
    }
  };

  PriorityQueue.prototype._decrease = function (index) {
    var arr = this._arr;
    var priority = arr[index].priority;
    var parent;
    while (index !== 0) {
      parent = index >> 1;
      if (arr[parent].priority < priority) {
        break;
      }
      this._swap(index, parent);
      index = parent;
    }
  };

  PriorityQueue.prototype._swap = function (i, j) {
    var arr = this._arr;
    var keyIndices = this._keyIndices;
    var origArrI = arr[i];
    var origArrJ = arr[j];
    arr[i] = origArrJ;
    arr[j] = origArrI;
    keyIndices[origArrJ.key] = i;
    keyIndices[origArrI.key] = j;
  };
  return priorityQueue;
}

var dijkstra_1;
var hasRequiredDijkstra;

function requireDijkstra() {
  if (hasRequiredDijkstra) return dijkstra_1;
  hasRequiredDijkstra = 1;
  var _ = requireLodash();
  var PriorityQueue = requirePriorityQueue();

  dijkstra_1 = dijkstra;

  var DEFAULT_WEIGHT_FUNC = _.constant(1);

  function dijkstra(g, source, weightFn, edgeFn) {
    return runDijkstra(
      g,
      String(source),
      weightFn || DEFAULT_WEIGHT_FUNC,
      edgeFn ||
        function (v) {
          return g.outEdges(v);
        }
    );
  }

  function runDijkstra(g, source, weightFn, edgeFn) {
    var results = {};
    var pq = new PriorityQueue();
    var v, vEntry;

    var updateNeighbors = function (edge) {
      var w = edge.v !== v ? edge.v : edge.w;
      var wEntry = results[w];
      var weight = weightFn(edge);
      var distance = vEntry.distance + weight;

      if (weight < 0) {
        throw new Error('dijkstra does not allow negative edge weights. ' + 'Bad edge: ' + edge + ' Weight: ' + weight);
      }

      if (distance < wEntry.distance) {
        wEntry.distance = distance;
        wEntry.predecessor = v;
        pq.decrease(w, distance);
      }
    };

    g.nodes().forEach(function (v) {
      var distance = v === source ? 0 : Number.POSITIVE_INFINITY;
      results[v] = { distance: distance };
      pq.add(v, distance);
    });

    while (pq.size() > 0) {
      v = pq.removeMin();
      vEntry = results[v];
      if (vEntry.distance === Number.POSITIVE_INFINITY) {
        break;
      }

      edgeFn(v).forEach(updateNeighbors);
    }

    return results;
  }
  return dijkstra_1;
}

var dijkstraAll_1;
var hasRequiredDijkstraAll;

function requireDijkstraAll() {
  if (hasRequiredDijkstraAll) return dijkstraAll_1;
  hasRequiredDijkstraAll = 1;
  var dijkstra = requireDijkstra();
  var _ = requireLodash();

  dijkstraAll_1 = dijkstraAll;

  function dijkstraAll(g, weightFunc, edgeFunc) {
    return _.transform(
      g.nodes(),
      function (acc, v) {
        acc[v] = dijkstra(g, v, weightFunc, edgeFunc);
      },
      {}
    );
  }
  return dijkstraAll_1;
}

var tarjan_1;
var hasRequiredTarjan;

function requireTarjan() {
  if (hasRequiredTarjan) return tarjan_1;
  hasRequiredTarjan = 1;
  var _ = requireLodash();

  tarjan_1 = tarjan;

  function tarjan(g) {
    var index = 0;
    var stack = [];
    var visited = {}; // node id -> { onStack, lowlink, index }
    var results = [];

    function dfs(v) {
      var entry = (visited[v] = {
        onStack: true,
        lowlink: index,
        index: index++
      });
      stack.push(v);

      g.successors(v).forEach(function (w) {
        if (!_.has(visited, w)) {
          dfs(w);
          entry.lowlink = Math.min(entry.lowlink, visited[w].lowlink);
        } else if (visited[w].onStack) {
          entry.lowlink = Math.min(entry.lowlink, visited[w].index);
        }
      });

      if (entry.lowlink === entry.index) {
        var cmpt = [];
        var w;
        do {
          w = stack.pop();
          visited[w].onStack = false;
          cmpt.push(w);
        } while (v !== w);
        results.push(cmpt);
      }
    }

    g.nodes().forEach(function (v) {
      if (!_.has(visited, v)) {
        dfs(v);
      }
    });

    return results;
  }
  return tarjan_1;
}

var findCycles_1;
var hasRequiredFindCycles;

function requireFindCycles() {
  if (hasRequiredFindCycles) return findCycles_1;
  hasRequiredFindCycles = 1;
  var _ = requireLodash();
  var tarjan = requireTarjan();

  findCycles_1 = findCycles;

  function findCycles(g) {
    return _.filter(tarjan(g), function (cmpt) {
      return cmpt.length > 1 || (cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]));
    });
  }
  return findCycles_1;
}

var floydWarshall_1;
var hasRequiredFloydWarshall;

function requireFloydWarshall() {
  if (hasRequiredFloydWarshall) return floydWarshall_1;
  hasRequiredFloydWarshall = 1;
  var _ = requireLodash();

  floydWarshall_1 = floydWarshall;

  var DEFAULT_WEIGHT_FUNC = _.constant(1);

  function floydWarshall(g, weightFn, edgeFn) {
    return runFloydWarshall(
      g,
      weightFn || DEFAULT_WEIGHT_FUNC,
      edgeFn ||
        function (v) {
          return g.outEdges(v);
        }
    );
  }

  function runFloydWarshall(g, weightFn, edgeFn) {
    var results = {};
    var nodes = g.nodes();

    nodes.forEach(function (v) {
      results[v] = {};
      results[v][v] = { distance: 0 };
      nodes.forEach(function (w) {
        if (v !== w) {
          results[v][w] = { distance: Number.POSITIVE_INFINITY };
        }
      });
      edgeFn(v).forEach(function (edge) {
        var w = edge.v === v ? edge.w : edge.v;
        var d = weightFn(edge);
        results[v][w] = { distance: d, predecessor: v };
      });
    });

    nodes.forEach(function (k) {
      var rowK = results[k];
      nodes.forEach(function (i) {
        var rowI = results[i];
        nodes.forEach(function (j) {
          var ik = rowI[k];
          var kj = rowK[j];
          var ij = rowI[j];
          var altDistance = ik.distance + kj.distance;
          if (altDistance < ij.distance) {
            ij.distance = altDistance;
            ij.predecessor = kj.predecessor;
          }
        });
      });
    });

    return results;
  }
  return floydWarshall_1;
}

var topsort_1;
var hasRequiredTopsort;

function requireTopsort() {
  if (hasRequiredTopsort) return topsort_1;
  hasRequiredTopsort = 1;
  var _ = requireLodash();

  topsort_1 = topsort;
  topsort.CycleException = CycleException;

  function topsort(g) {
    var visited = {};
    var stack = {};
    var results = [];

    function visit(node) {
      if (_.has(stack, node)) {
        throw new CycleException();
      }

      if (!_.has(visited, node)) {
        stack[node] = true;
        visited[node] = true;
        _.each(g.predecessors(node), visit);
        delete stack[node];
        results.push(node);
      }
    }

    _.each(g.sinks(), visit);

    if (_.size(visited) !== g.nodeCount()) {
      throw new CycleException();
    }

    return results;
  }

  function CycleException() {}
  CycleException.prototype = new Error(); // must be an instance of Error to pass testing
  return topsort_1;
}

var isAcyclic_1;
var hasRequiredIsAcyclic;

function requireIsAcyclic() {
  if (hasRequiredIsAcyclic) return isAcyclic_1;
  hasRequiredIsAcyclic = 1;
  var topsort = requireTopsort();

  isAcyclic_1 = isAcyclic;

  function isAcyclic(g) {
    try {
      topsort(g);
    } catch (e) {
      if (e instanceof topsort.CycleException) {
        return false;
      }
      throw e;
    }
    return true;
  }
  return isAcyclic_1;
}

var dfs_1;
var hasRequiredDfs;

function requireDfs() {
  if (hasRequiredDfs) return dfs_1;
  hasRequiredDfs = 1;
  var _ = requireLodash();

  dfs_1 = dfs;

  /*
   * A helper that preforms a pre- or post-order traversal on the input graph
   * and returns the nodes in the order they were visited. If the graph is
   * undirected then this algorithm will navigate using neighbors. If the graph
   * is directed then this algorithm will navigate using successors.
   *
   * Order must be one of "pre" or "post".
   */
  function dfs(g, vs, order) {
    if (!_.isArray(vs)) {
      vs = [vs];
    }

    var navigation = (g.isDirected() ? g.successors : g.neighbors).bind(g);

    var acc = [];
    var visited = {};
    _.each(vs, function (v) {
      if (!g.hasNode(v)) {
        throw new Error('Graph does not have node: ' + v);
      }

      doDfs(g, v, order === 'post', visited, navigation, acc);
    });
    return acc;
  }

  function doDfs(g, v, postorder, visited, navigation, acc) {
    if (!_.has(visited, v)) {
      visited[v] = true;

      if (!postorder) {
        acc.push(v);
      }
      _.each(navigation(v), function (w) {
        doDfs(g, w, postorder, visited, navigation, acc);
      });
      if (postorder) {
        acc.push(v);
      }
    }
  }
  return dfs_1;
}

var postorder_1;
var hasRequiredPostorder;

function requirePostorder() {
  if (hasRequiredPostorder) return postorder_1;
  hasRequiredPostorder = 1;
  var dfs = requireDfs();

  postorder_1 = postorder;

  function postorder(g, vs) {
    return dfs(g, vs, 'post');
  }
  return postorder_1;
}

var preorder_1;
var hasRequiredPreorder;

function requirePreorder() {
  if (hasRequiredPreorder) return preorder_1;
  hasRequiredPreorder = 1;
  var dfs = requireDfs();

  preorder_1 = preorder;

  function preorder(g, vs) {
    return dfs(g, vs, 'pre');
  }
  return preorder_1;
}

var prim_1;
var hasRequiredPrim;

function requirePrim() {
  if (hasRequiredPrim) return prim_1;
  hasRequiredPrim = 1;
  var _ = requireLodash();
  var Graph = requireGraph();
  var PriorityQueue = requirePriorityQueue();

  prim_1 = prim;

  function prim(g, weightFunc) {
    var result = new Graph();
    var parents = {};
    var pq = new PriorityQueue();
    var v;

    function updateNeighbors(edge) {
      var w = edge.v === v ? edge.w : edge.v;
      var pri = pq.priority(w);
      if (pri !== undefined) {
        var edgeWeight = weightFunc(edge);
        if (edgeWeight < pri) {
          parents[w] = v;
          pq.decrease(w, edgeWeight);
        }
      }
    }

    if (g.nodeCount() === 0) {
      return result;
    }

    _.each(g.nodes(), function (v) {
      pq.add(v, Number.POSITIVE_INFINITY);
      result.setNode(v);
    });

    // Start from an arbitrary node
    pq.decrease(g.nodes()[0], 0);

    var init = false;
    while (pq.size() > 0) {
      v = pq.removeMin();
      if (_.has(parents, v)) {
        result.setEdge(v, parents[v]);
      } else if (init) {
        throw new Error('Input graph is not connected: ' + g);
      } else {
        init = true;
      }

      g.nodeEdges(v).forEach(updateNeighbors);
    }

    return result;
  }
  return prim_1;
}

var alg;
var hasRequiredAlg;

function requireAlg() {
  if (hasRequiredAlg) return alg;
  hasRequiredAlg = 1;
  alg = {
    components: requireComponents(),
    dijkstra: requireDijkstra(),
    dijkstraAll: requireDijkstraAll(),
    findCycles: requireFindCycles(),
    floydWarshall: requireFloydWarshall(),
    isAcyclic: requireIsAcyclic(),
    postorder: requirePostorder(),
    preorder: requirePreorder(),
    prim: requirePrim(),
    tarjan: requireTarjan(),
    topsort: requireTopsort()
  };
  return alg;
}

/**
 * Copyright (c) 2014, Chris Pettitt
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var graphlib$1;
var hasRequiredGraphlib;

function requireGraphlib() {
  if (hasRequiredGraphlib) return graphlib$1;
  hasRequiredGraphlib = 1;
  var lib = requireLib();

  graphlib$1 = {
    Graph: lib.Graph,
    json: requireJson(),
    alg: requireAlg(),
    version: lib.version
  };
  return graphlib$1;
}

/* global window */

var graphlib;

if (typeof commonjsRequire === 'function') {
  try {
    graphlib = requireGraphlib();
  } catch (e) {
    // continue regardless of error
  }
}

if (!graphlib) {
  graphlib = window.graphlib;
}

var graphlib_1 = graphlib;

var cloneDeep_1;
var hasRequiredCloneDeep;

function requireCloneDeep() {
  if (hasRequiredCloneDeep) return cloneDeep_1;
  hasRequiredCloneDeep = 1;
  var baseClone = require_baseClone();

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

  /**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */
  function cloneDeep(value) {
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
  }

  cloneDeep_1 = cloneDeep;
  return cloneDeep_1;
}

var _isIterateeCall;
var hasRequired_isIterateeCall;

function require_isIterateeCall() {
  if (hasRequired_isIterateeCall) return _isIterateeCall;
  hasRequired_isIterateeCall = 1;
  var eq = requireEq(),
    isArrayLike = requireIsArrayLike(),
    isIndex = require_isIndex(),
    isObject = requireIsObject();

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
      return eq(object[index], value);
    }
    return false;
  }

  _isIterateeCall = isIterateeCall;
  return _isIterateeCall;
}

var defaults_1;
var hasRequiredDefaults;

function requireDefaults() {
  if (hasRequiredDefaults) return defaults_1;
  hasRequiredDefaults = 1;
  var baseRest = require_baseRest(),
    eq = requireEq(),
    isIterateeCall = require_isIterateeCall(),
    keysIn = requireKeysIn();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Assigns own and inherited enumerable string keyed properties of source
   * objects to the destination object for all destination properties that
   * resolve to `undefined`. Source objects are applied from left to right.
   * Once a property is set, additional values of the same property are ignored.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaultsDeep
   * @example
   *
   * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
   * // => { 'a': 1, 'b': 2 }
   */
  var defaults = baseRest(function (object, sources) {
    object = Object(object);

    var index = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      length = 1;
    }

    while (++index < length) {
      var source = sources[index];
      var props = keysIn(source);
      var propsIndex = -1;
      var propsLength = props.length;

      while (++propsIndex < propsLength) {
        var key = props[propsIndex];
        var value = object[key];

        if (value === undefined || (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
          object[key] = source[key];
        }
      }
    }

    return object;
  });

  defaults_1 = defaults;
  return defaults_1;
}

var _createFind;
var hasRequired_createFind;

function require_createFind() {
  if (hasRequired_createFind) return _createFind;
  hasRequired_createFind = 1;
  var baseIteratee = require_baseIteratee(),
    isArrayLike = requireIsArrayLike(),
    keys = requireKeys();

  /**
   * Creates a `_.find` or `_.findLast` function.
   *
   * @private
   * @param {Function} findIndexFunc The function to find the collection index.
   * @returns {Function} Returns the new find function.
   */
  function createFind(findIndexFunc) {
    return function (collection, predicate, fromIndex) {
      var iterable = Object(collection);
      if (!isArrayLike(collection)) {
        var iteratee = baseIteratee(predicate, 3);
        collection = keys(collection);
        predicate = function (key) {
          return iteratee(iterable[key], key, iterable);
        };
      }
      var index = findIndexFunc(collection, predicate, fromIndex);
      return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
    };
  }

  _createFind = createFind;
  return _createFind;
}

/** Used to match a single whitespace character. */

var _trimmedEndIndex;
var hasRequired_trimmedEndIndex;

function require_trimmedEndIndex() {
  if (hasRequired_trimmedEndIndex) return _trimmedEndIndex;
  hasRequired_trimmedEndIndex = 1;
  var reWhitespace = /\s/;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  _trimmedEndIndex = trimmedEndIndex;
  return _trimmedEndIndex;
}

var _baseTrim;
var hasRequired_baseTrim;

function require_baseTrim() {
  if (hasRequired_baseTrim) return _baseTrim;
  hasRequired_baseTrim = 1;
  var trimmedEndIndex = require_trimmedEndIndex();

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
  }

  _baseTrim = baseTrim;
  return _baseTrim;
}

var toNumber_1;
var hasRequiredToNumber;

function requireToNumber() {
  if (hasRequiredToNumber) return toNumber_1;
  hasRequiredToNumber = 1;
  var baseTrim = require_baseTrim(),
    isObject = requireIsObject(),
    isSymbol = requireIsSymbol();

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value)
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : reIsBadHex.test(value)
      ? NAN
      : +value;
  }

  toNumber_1 = toNumber;
  return toNumber_1;
}

var toFinite_1;
var hasRequiredToFinite;

function requireToFinite() {
  if (hasRequiredToFinite) return toFinite_1;
  hasRequiredToFinite = 1;
  var toNumber = requireToNumber();

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e308;

  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }

  toFinite_1 = toFinite;
  return toFinite_1;
}

var toInteger_1;
var hasRequiredToInteger;

function requireToInteger() {
  if (hasRequiredToInteger) return toInteger_1;
  hasRequiredToInteger = 1;
  var toFinite = requireToFinite();

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
  function toInteger(value) {
    var result = toFinite(value),
      remainder = result % 1;

    return result === result ? (remainder ? result - remainder : result) : 0;
  }

  toInteger_1 = toInteger;
  return toInteger_1;
}

var findIndex_1;
var hasRequiredFindIndex;

function requireFindIndex() {
  if (hasRequiredFindIndex) return findIndex_1;
  hasRequiredFindIndex = 1;
  var baseFindIndex = require_baseFindIndex(),
    baseIteratee = require_baseIteratee(),
    toInteger = requireToInteger();

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * This method is like `_.find` except that it returns the index of the first
   * element `predicate` returns truthy for instead of the element itself.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the found element, else `-1`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false },
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * _.findIndex(users, function(o) { return o.user == 'barney'; });
   * // => 0
   *
   * // The `_.matches` iteratee shorthand.
   * _.findIndex(users, { 'user': 'fred', 'active': false });
   * // => 1
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.findIndex(users, ['active', false]);
   * // => 0
   *
   * // The `_.property` iteratee shorthand.
   * _.findIndex(users, 'active');
   * // => 2
   */
  function findIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
      return -1;
    }
    var index = fromIndex == null ? 0 : toInteger(fromIndex);
    if (index < 0) {
      index = nativeMax(length + index, 0);
    }
    return baseFindIndex(array, baseIteratee(predicate, 3), index);
  }

  findIndex_1 = findIndex;
  return findIndex_1;
}

var find_1;
var hasRequiredFind;

function requireFind() {
  if (hasRequiredFind) return find_1;
  hasRequiredFind = 1;
  var createFind = require_createFind(),
    findIndex = requireFindIndex();

  /**
   * Iterates over elements of `collection`, returning the first element
   * `predicate` returns truthy for. The predicate is invoked with three
   * arguments: (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {*} Returns the matched element, else `undefined`.
   * @example
   *
   * var users = [
   *   { 'user': 'barney',  'age': 36, 'active': true },
   *   { 'user': 'fred',    'age': 40, 'active': false },
   *   { 'user': 'pebbles', 'age': 1,  'active': true }
   * ];
   *
   * _.find(users, function(o) { return o.age < 40; });
   * // => object for 'barney'
   *
   * // The `_.matches` iteratee shorthand.
   * _.find(users, { 'age': 1, 'active': true });
   * // => object for 'pebbles'
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.find(users, ['active', false]);
   * // => object for 'fred'
   *
   * // The `_.property` iteratee shorthand.
   * _.find(users, 'active');
   * // => object for 'barney'
   */
  var find = createFind(findIndex);

  find_1 = find;
  return find_1;
}

var flatten_1;
var hasRequiredFlatten;

function requireFlatten() {
  if (hasRequiredFlatten) return flatten_1;
  hasRequiredFlatten = 1;
  var baseFlatten = require_baseFlatten();

  /**
   * Flattens `array` a single level deep.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */
  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
  }

  flatten_1 = flatten;
  return flatten_1;
}

var forIn_1;
var hasRequiredForIn;

function requireForIn() {
  if (hasRequiredForIn) return forIn_1;
  hasRequiredForIn = 1;
  var baseFor = require_baseFor(),
    castFunction = require_castFunction(),
    keysIn = requireKeysIn();

  /**
   * Iterates over own and inherited enumerable string keyed properties of an
   * object and invokes `iteratee` for each property. The iteratee is invoked
   * with three arguments: (value, key, object). Iteratee functions may exit
   * iteration early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @since 0.3.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns `object`.
   * @see _.forInRight
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.forIn(new Foo, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
   */
  function forIn(object, iteratee) {
    return object == null ? object : baseFor(object, castFunction(iteratee), keysIn);
  }

  forIn_1 = forIn;
  return forIn_1;
}

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */

var last_1;
var hasRequiredLast;

function requireLast() {
  if (hasRequiredLast) return last_1;
  hasRequiredLast = 1;
  function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
  }

  last_1 = last;
  return last_1;
}

var mapValues_1;
var hasRequiredMapValues;

function requireMapValues() {
  if (hasRequiredMapValues) return mapValues_1;
  hasRequiredMapValues = 1;
  var baseAssignValue = require_baseAssignValue(),
    baseForOwn = require_baseForOwn(),
    baseIteratee = require_baseIteratee();

  /**
   * Creates an object with the same keys as `object` and values generated
   * by running each own enumerable string keyed property of `object` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, key, object).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Object
   * @param {Object} object The object to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Object} Returns the new mapped object.
   * @see _.mapKeys
   * @example
   *
   * var users = {
   *   'fred':    { 'user': 'fred',    'age': 40 },
   *   'pebbles': { 'user': 'pebbles', 'age': 1 }
   * };
   *
   * _.mapValues(users, function(o) { return o.age; });
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   *
   * // The `_.property` iteratee shorthand.
   * _.mapValues(users, 'age');
   * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
   */
  function mapValues(object, iteratee) {
    var result = {};
    iteratee = baseIteratee(iteratee, 3);

    baseForOwn(object, function (value, key, object) {
      baseAssignValue(result, key, iteratee(value, key, object));
    });
    return result;
  }

  mapValues_1 = mapValues;
  return mapValues_1;
}

var _baseExtremum;
var hasRequired_baseExtremum;

function require_baseExtremum() {
  if (hasRequired_baseExtremum) return _baseExtremum;
  hasRequired_baseExtremum = 1;
  var isSymbol = requireIsSymbol();

  /**
   * The base implementation of methods like `_.max` and `_.min` which accepts a
   * `comparator` to determine the extremum value.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The iteratee invoked per iteration.
   * @param {Function} comparator The comparator used to compare values.
   * @returns {*} Returns the extremum value.
   */
  function baseExtremum(array, iteratee, comparator) {
    var index = -1,
      length = array.length;

    while (++index < length) {
      var value = array[index],
        current = iteratee(value);

      if (
        current != null &&
        (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))
      ) {
        var computed = current,
          result = value;
      }
    }
    return result;
  }

  _baseExtremum = baseExtremum;
  return _baseExtremum;
}

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */

var _baseGt;
var hasRequired_baseGt;

function require_baseGt() {
  if (hasRequired_baseGt) return _baseGt;
  hasRequired_baseGt = 1;
  function baseGt(value, other) {
    return value > other;
  }

  _baseGt = baseGt;
  return _baseGt;
}

var max_1;
var hasRequiredMax;

function requireMax() {
  if (hasRequiredMax) return max_1;
  hasRequiredMax = 1;
  var baseExtremum = require_baseExtremum(),
    baseGt = require_baseGt(),
    identity = requireIdentity();

  /**
   * Computes the maximum value of `array`. If `array` is empty or falsey,
   * `undefined` is returned.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the maximum value.
   * @example
   *
   * _.max([4, 2, 8, 6]);
   * // => 8
   *
   * _.max([]);
   * // => undefined
   */
  function max(array) {
    return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
  }

  max_1 = max;
  return max_1;
}

var _assignMergeValue;
var hasRequired_assignMergeValue;

function require_assignMergeValue() {
  if (hasRequired_assignMergeValue) return _assignMergeValue;
  hasRequired_assignMergeValue = 1;
  var baseAssignValue = require_baseAssignValue(),
    eq = requireEq();

  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignMergeValue(object, key, value) {
    if ((value !== undefined && !eq(object[key], value)) || (value === undefined && !(key in object))) {
      baseAssignValue(object, key, value);
    }
  }

  _assignMergeValue = assignMergeValue;
  return _assignMergeValue;
}

var isPlainObject_1;
var hasRequiredIsPlainObject;

function requireIsPlainObject() {
  if (hasRequiredIsPlainObject) return isPlainObject_1;
  hasRequiredIsPlainObject = 1;
  var baseGetTag = require_baseGetTag(),
    getPrototype = require_getPrototype(),
    isObjectLike = requireIsObjectLike();

  /** `Object#toString` result references. */
  var objectTag = '[object Object]';

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
    objectProto = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }

  isPlainObject_1 = isPlainObject;
  return isPlainObject_1;
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

var _safeGet;
var hasRequired_safeGet;

function require_safeGet() {
  if (hasRequired_safeGet) return _safeGet;
  hasRequired_safeGet = 1;
  function safeGet(object, key) {
    if (key === 'constructor' && typeof object[key] === 'function') {
      return;
    }

    if (key == '__proto__') {
      return;
    }

    return object[key];
  }

  _safeGet = safeGet;
  return _safeGet;
}

var toPlainObject_1;
var hasRequiredToPlainObject;

function requireToPlainObject() {
  if (hasRequiredToPlainObject) return toPlainObject_1;
  hasRequiredToPlainObject = 1;
  var copyObject = require_copyObject(),
    keysIn = requireKeysIn();

  /**
   * Converts `value` to a plain object flattening inherited enumerable string
   * keyed properties of `value` to own properties of the plain object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Object} Returns the converted plain object.
   * @example
   *
   * function Foo() {
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.assign({ 'a': 1 }, new Foo);
   * // => { 'a': 1, 'b': 2 }
   *
   * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
   * // => { 'a': 1, 'b': 2, 'c': 3 }
   */
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }

  toPlainObject_1 = toPlainObject;
  return toPlainObject_1;
}

var _baseMergeDeep;
var hasRequired_baseMergeDeep;

function require_baseMergeDeep() {
  if (hasRequired_baseMergeDeep) return _baseMergeDeep;
  hasRequired_baseMergeDeep = 1;
  var assignMergeValue = require_assignMergeValue(),
    cloneBuffer = require_cloneBuffer(),
    cloneTypedArray = require_cloneTypedArray(),
    copyArray = require_copyArray(),
    initCloneObject = require_initCloneObject(),
    isArguments = requireIsArguments(),
    isArray = requireIsArray(),
    isArrayLikeObject = requireIsArrayLikeObject(),
    isBuffer = requireIsBuffer(),
    isFunction = requireIsFunction(),
    isObject = requireIsObject(),
    isPlainObject = requireIsPlainObject(),
    isTypedArray = requireIsTypedArray(),
    safeGet = require_safeGet(),
    toPlainObject = requireToPlainObject();

  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;

    var isCommon = newValue === undefined;

    if (isCommon) {
      var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject(objValue) || isFunction(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack['delete'](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }

  _baseMergeDeep = baseMergeDeep;
  return _baseMergeDeep;
}

var _baseMerge;
var hasRequired_baseMerge;

function require_baseMerge() {
  if (hasRequired_baseMerge) return _baseMerge;
  hasRequired_baseMerge = 1;
  var Stack = require_Stack(),
    assignMergeValue = require_assignMergeValue(),
    baseFor = require_baseFor(),
    baseMergeDeep = require_baseMergeDeep(),
    isObject = requireIsObject(),
    keysIn = requireKeysIn(),
    safeGet = require_safeGet();

  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(
      source,
      function (srcValue, key) {
        stack || (stack = new Stack());
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      },
      keysIn
    );
  }

  _baseMerge = baseMerge;
  return _baseMerge;
}

var _createAssigner;
var hasRequired_createAssigner;

function require_createAssigner() {
  if (hasRequired_createAssigner) return _createAssigner;
  hasRequired_createAssigner = 1;
  var baseRest = require_baseRest(),
    isIterateeCall = require_isIterateeCall();

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return baseRest(function (object, sources) {
      var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

      customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  _createAssigner = createAssigner;
  return _createAssigner;
}

var merge_1;
var hasRequiredMerge;

function requireMerge() {
  if (hasRequiredMerge) return merge_1;
  hasRequiredMerge = 1;
  var baseMerge = require_baseMerge(),
    createAssigner = require_createAssigner();

  /**
   * This method is like `_.assign` except that it recursively merges own and
   * inherited enumerable string keyed properties of source objects into the
   * destination object. Source properties that resolve to `undefined` are
   * skipped if a destination value exists. Array and plain object properties
   * are merged recursively. Other objects and value types are overridden by
   * assignment. Source objects are applied from left to right. Subsequent
   * sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 0.5.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = {
   *   'a': [{ 'b': 2 }, { 'd': 4 }]
   * };
   *
   * var other = {
   *   'a': [{ 'c': 3 }, { 'e': 5 }]
   * };
   *
   * _.merge(object, other);
   * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
   */
  var merge = createAssigner(function (object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });

  merge_1 = merge;
  return merge_1;
}

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */

var _baseLt;
var hasRequired_baseLt;

function require_baseLt() {
  if (hasRequired_baseLt) return _baseLt;
  hasRequired_baseLt = 1;
  function baseLt(value, other) {
    return value < other;
  }

  _baseLt = baseLt;
  return _baseLt;
}

var min_1;
var hasRequiredMin;

function requireMin() {
  if (hasRequiredMin) return min_1;
  hasRequiredMin = 1;
  var baseExtremum = require_baseExtremum(),
    baseLt = require_baseLt(),
    identity = requireIdentity();

  /**
   * Computes the minimum value of `array`. If `array` is empty or falsey,
   * `undefined` is returned.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Math
   * @param {Array} array The array to iterate over.
   * @returns {*} Returns the minimum value.
   * @example
   *
   * _.min([4, 2, 8, 6]);
   * // => 2
   *
   * _.min([]);
   * // => undefined
   */
  function min(array) {
    return array && array.length ? baseExtremum(array, identity, baseLt) : undefined;
  }

  min_1 = min;
  return min_1;
}

var minBy_1;
var hasRequiredMinBy;

function requireMinBy() {
  if (hasRequiredMinBy) return minBy_1;
  hasRequiredMinBy = 1;
  var baseExtremum = require_baseExtremum(),
    baseIteratee = require_baseIteratee(),
    baseLt = require_baseLt();

  /**
   * This method is like `_.min` except that it accepts `iteratee` which is
   * invoked for each element in `array` to generate the criterion by which
   * the value is ranked. The iteratee is invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Math
   * @param {Array} array The array to iterate over.
   * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
   * @returns {*} Returns the minimum value.
   * @example
   *
   * var objects = [{ 'n': 1 }, { 'n': 2 }];
   *
   * _.minBy(objects, function(o) { return o.n; });
   * // => { 'n': 1 }
   *
   * // The `_.property` iteratee shorthand.
   * _.minBy(objects, 'n');
   * // => { 'n': 1 }
   */
  function minBy(array, iteratee) {
    return array && array.length ? baseExtremum(array, baseIteratee(iteratee, 2), baseLt) : undefined;
  }

  minBy_1 = minBy;
  return minBy_1;
}

var now_1;
var hasRequiredNow;

function requireNow() {
  if (hasRequiredNow) return now_1;
  hasRequiredNow = 1;
  var root = require_root();

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function () {
    return root.Date.now();
  };

  now_1 = now;
  return now_1;
}

var _baseSet;
var hasRequired_baseSet;

function require_baseSet() {
  if (hasRequired_baseSet) return _baseSet;
  hasRequired_baseSet = 1;
  var assignValue = require_assignValue(),
    castPath = require_castPath(),
    isIndex = require_isIndex(),
    isObject = requireIsObject(),
    toKey = require_toKey();

  /**
   * The base implementation of `_.set`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {*} value The value to set.
   * @param {Function} [customizer] The function to customize path creation.
   * @returns {Object} Returns `object`.
   */
  function baseSet(object, path, value, customizer) {
    if (!isObject(object)) {
      return object;
    }
    path = castPath(path, object);

    var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

    while (nested != null && ++index < length) {
      var key = toKey(path[index]),
        newValue = value;

      if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
        return object;
      }

      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : undefined;
        if (newValue === undefined) {
          newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
        }
      }
      assignValue(nested, key, newValue);
      nested = nested[key];
    }
    return object;
  }

  _baseSet = baseSet;
  return _baseSet;
}

var _basePickBy;
var hasRequired_basePickBy;

function require_basePickBy() {
  if (hasRequired_basePickBy) return _basePickBy;
  hasRequired_basePickBy = 1;
  var baseGet = require_baseGet(),
    baseSet = require_baseSet(),
    castPath = require_castPath();

  /**
   * The base implementation of  `_.pickBy` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @param {Function} predicate The function invoked per property.
   * @returns {Object} Returns the new object.
   */
  function basePickBy(object, paths, predicate) {
    var index = -1,
      length = paths.length,
      result = {};

    while (++index < length) {
      var path = paths[index],
        value = baseGet(object, path);

      if (predicate(value, path)) {
        baseSet(result, castPath(path, object), value);
      }
    }
    return result;
  }

  _basePickBy = basePickBy;
  return _basePickBy;
}

var _basePick;
var hasRequired_basePick;

function require_basePick() {
  if (hasRequired_basePick) return _basePick;
  hasRequired_basePick = 1;
  var basePickBy = require_basePickBy(),
    hasIn = requireHasIn();

  /**
   * The base implementation of `_.pick` without support for individual
   * property identifiers.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @returns {Object} Returns the new object.
   */
  function basePick(object, paths) {
    return basePickBy(object, paths, function (value, path) {
      return hasIn(object, path);
    });
  }

  _basePick = basePick;
  return _basePick;
}

var _flatRest;
var hasRequired_flatRest;

function require_flatRest() {
  if (hasRequired_flatRest) return _flatRest;
  hasRequired_flatRest = 1;
  var flatten = requireFlatten(),
    overRest = require_overRest(),
    setToString = require_setToString();

  /**
   * A specialized version of `baseRest` which flattens the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @returns {Function} Returns the new function.
   */
  function flatRest(func) {
    return setToString(overRest(func, undefined, flatten), func + '');
  }

  _flatRest = flatRest;
  return _flatRest;
}

var pick_1;
var hasRequiredPick;

function requirePick() {
  if (hasRequiredPick) return pick_1;
  hasRequiredPick = 1;
  var basePick = require_basePick(),
    flatRest = require_flatRest();

  /**
   * Creates an object composed of the picked `object` properties.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {...(string|string[])} [paths] The property paths to pick.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.pick(object, ['a', 'c']);
   * // => { 'a': 1, 'c': 3 }
   */
  var pick = flatRest(function (object, paths) {
    return object == null ? {} : basePick(object, paths);
  });

  pick_1 = pick;
  return pick_1;
}

/* Built-in method references for those with the same name as other `lodash` methods. */

var _baseRange;
var hasRequired_baseRange;

function require_baseRange() {
  if (hasRequired_baseRange) return _baseRange;
  hasRequired_baseRange = 1;
  var nativeCeil = Math.ceil,
    nativeMax = Math.max;

  /**
   * The base implementation of `_.range` and `_.rangeRight` which doesn't
   * coerce arguments.
   *
   * @private
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @param {number} step The value to increment or decrement by.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Array} Returns the range of numbers.
   */
  function baseRange(start, end, step, fromRight) {
    var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

    while (length--) {
      result[fromRight ? length : ++index] = start;
      start += step;
    }
    return result;
  }

  _baseRange = baseRange;
  return _baseRange;
}

var _createRange;
var hasRequired_createRange;

function require_createRange() {
  if (hasRequired_createRange) return _createRange;
  hasRequired_createRange = 1;
  var baseRange = require_baseRange(),
    isIterateeCall = require_isIterateeCall(),
    toFinite = requireToFinite();

  /**
   * Creates a `_.range` or `_.rangeRight` function.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new range function.
   */
  function createRange(fromRight) {
    return function (start, end, step) {
      if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
        end = step = undefined;
      }
      // Ensure the sign of `-0` is preserved.
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
      return baseRange(start, end, step, fromRight);
    };
  }

  _createRange = createRange;
  return _createRange;
}

var range_1;
var hasRequiredRange;

function requireRange() {
  if (hasRequiredRange) return range_1;
  hasRequiredRange = 1;
  var createRange = require_createRange();

  /**
   * Creates an array of numbers (positive and/or negative) progressing from
   * `start` up to, but not including, `end`. A step of `-1` is used if a negative
   * `start` is specified without an `end` or `step`. If `end` is not specified,
   * it's set to `start` with `start` then set to `0`.
   *
   * **Note:** JavaScript follows the IEEE-754 standard for resolving
   * floating-point values which can produce unexpected results.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {number} [start=0] The start of the range.
   * @param {number} end The end of the range.
   * @param {number} [step=1] The value to increment or decrement by.
   * @returns {Array} Returns the range of numbers.
   * @see _.inRange, _.rangeRight
   * @example
   *
   * _.range(4);
   * // => [0, 1, 2, 3]
   *
   * _.range(-4);
   * // => [0, -1, -2, -3]
   *
   * _.range(1, 5);
   * // => [1, 2, 3, 4]
   *
   * _.range(0, 20, 5);
   * // => [0, 5, 10, 15]
   *
   * _.range(0, -4, -1);
   * // => [0, -1, -2, -3]
   *
   * _.range(1, 4, 0);
   * // => [1, 1, 1]
   *
   * _.range(0);
   * // => []
   */
  var range = createRange();

  range_1 = range;
  return range_1;
}

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */

var _baseSortBy;
var hasRequired_baseSortBy;

function require_baseSortBy() {
  if (hasRequired_baseSortBy) return _baseSortBy;
  hasRequired_baseSortBy = 1;
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  _baseSortBy = baseSortBy;
  return _baseSortBy;
}

var _compareAscending;
var hasRequired_compareAscending;

function require_compareAscending() {
  if (hasRequired_compareAscending) return _compareAscending;
  hasRequired_compareAscending = 1;
  var isSymbol = requireIsSymbol();

  /**
   * Compares values to sort them in ascending order.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {number} Returns the sort order indicator for `value`.
   */
  function compareAscending(value, other) {
    if (value !== other) {
      var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

      var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

      if (
        (!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive
      ) {
        return 1;
      }
      if (
        (!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive
      ) {
        return -1;
      }
    }
    return 0;
  }

  _compareAscending = compareAscending;
  return _compareAscending;
}

var _compareMultiple;
var hasRequired_compareMultiple;

function require_compareMultiple() {
  if (hasRequired_compareMultiple) return _compareMultiple;
  hasRequired_compareMultiple = 1;
  var compareAscending = require_compareAscending();

  /**
   * Used by `_.orderBy` to compare multiple properties of a value to another
   * and stable sort them.
   *
   * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
   * specify an order of "desc" for descending or "asc" for ascending sort order
   * of corresponding values.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {boolean[]|string[]} orders The order to sort by for each property.
   * @returns {number} Returns the sort order indicator for `object`.
   */
  function compareMultiple(object, other, orders) {
    var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

    while (++index < length) {
      var result = compareAscending(objCriteria[index], othCriteria[index]);
      if (result) {
        if (index >= ordersLength) {
          return result;
        }
        var order = orders[index];
        return result * (order == 'desc' ? -1 : 1);
      }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to provide the same value for
    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
    // for more details.
    //
    // This also ensures a stable sort in V8 and other engines.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index;
  }

  _compareMultiple = compareMultiple;
  return _compareMultiple;
}

var _baseOrderBy;
var hasRequired_baseOrderBy;

function require_baseOrderBy() {
  if (hasRequired_baseOrderBy) return _baseOrderBy;
  hasRequired_baseOrderBy = 1;
  var arrayMap = require_arrayMap(),
    baseGet = require_baseGet(),
    baseIteratee = require_baseIteratee(),
    baseMap = require_baseMap(),
    baseSortBy = require_baseSortBy(),
    baseUnary = require_baseUnary(),
    compareMultiple = require_compareMultiple(),
    identity = requireIdentity(),
    isArray = requireIsArray();

  /**
   * The base implementation of `_.orderBy` without param guards.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
   * @param {string[]} orders The sort orders of `iteratees`.
   * @returns {Array} Returns the new sorted array.
   */
  function baseOrderBy(collection, iteratees, orders) {
    if (iteratees.length) {
      iteratees = arrayMap(iteratees, function (iteratee) {
        if (isArray(iteratee)) {
          return function (value) {
            return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
          };
        }
        return iteratee;
      });
    } else {
      iteratees = [identity];
    }

    var index = -1;
    iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

    var result = baseMap(collection, function (value, key, collection) {
      var criteria = arrayMap(iteratees, function (iteratee) {
        return iteratee(value);
      });
      return { criteria: criteria, index: ++index, value: value };
    });

    return baseSortBy(result, function (object, other) {
      return compareMultiple(object, other, orders);
    });
  }

  _baseOrderBy = baseOrderBy;
  return _baseOrderBy;
}

var sortBy_1;
var hasRequiredSortBy;

function requireSortBy() {
  if (hasRequiredSortBy) return sortBy_1;
  hasRequiredSortBy = 1;
  var baseFlatten = require_baseFlatten(),
    baseOrderBy = require_baseOrderBy(),
    baseRest = require_baseRest(),
    isIterateeCall = require_isIterateeCall();

  /**
   * Creates an array of elements, sorted in ascending order by the results of
   * running each element in a collection thru each iteratee. This method
   * performs a stable sort, that is, it preserves the original sort order of
   * equal elements. The iteratees are invoked with one argument: (value).
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {...(Function|Function[])} [iteratees=[_.identity]]
   *  The iteratees to sort by.
   * @returns {Array} Returns the new sorted array.
   * @example
   *
   * var users = [
   *   { 'user': 'fred',   'age': 48 },
   *   { 'user': 'barney', 'age': 36 },
   *   { 'user': 'fred',   'age': 30 },
   *   { 'user': 'barney', 'age': 34 }
   * ];
   *
   * _.sortBy(users, [function(o) { return o.user; }]);
   * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
   *
   * _.sortBy(users, ['user', 'age']);
   * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
   */
  var sortBy = baseRest(function (collection, iteratees) {
    if (collection == null) {
      return [];
    }
    var length = iteratees.length;
    if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
      iteratees = [];
    } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
      iteratees = [iteratees[0]];
    }
    return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
  });

  sortBy_1 = sortBy;
  return sortBy_1;
}

var uniqueId_1;
var hasRequiredUniqueId;

function requireUniqueId() {
  if (hasRequiredUniqueId) return uniqueId_1;
  hasRequiredUniqueId = 1;
  var toString = requireToString();

  /** Used to generate unique IDs. */
  var idCounter = 0;

  /**
   * Generates a unique ID. If `prefix` is given, the ID is appended to it.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {string} [prefix=''] The value to prefix the ID with.
   * @returns {string} Returns the unique ID.
   * @example
   *
   * _.uniqueId('contact_');
   * // => 'contact_104'
   *
   * _.uniqueId();
   * // => '105'
   */
  function uniqueId(prefix) {
    var id = ++idCounter;
    return toString(prefix) + id;
  }

  uniqueId_1 = uniqueId;
  return uniqueId_1;
}

/**
 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */

var _baseZipObject;
var hasRequired_baseZipObject;

function require_baseZipObject() {
  if (hasRequired_baseZipObject) return _baseZipObject;
  hasRequired_baseZipObject = 1;
  function baseZipObject(props, values, assignFunc) {
    var index = -1,
      length = props.length,
      valsLength = values.length,
      result = {};

    while (++index < length) {
      var value = index < valsLength ? values[index] : undefined;
      assignFunc(result, props[index], value);
    }
    return result;
  }

  _baseZipObject = baseZipObject;
  return _baseZipObject;
}

var zipObject_1;
var hasRequiredZipObject;

function requireZipObject() {
  if (hasRequiredZipObject) return zipObject_1;
  hasRequiredZipObject = 1;
  var assignValue = require_assignValue(),
    baseZipObject = require_baseZipObject();

  /**
   * This method is like `_.fromPairs` except that it accepts two arrays,
   * one of property identifiers and one of corresponding values.
   *
   * @static
   * @memberOf _
   * @since 0.4.0
   * @category Array
   * @param {Array} [props=[]] The property identifiers.
   * @param {Array} [values=[]] The property values.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.zipObject(['a', 'b'], [1, 2]);
   * // => { 'a': 1, 'b': 2 }
   */
  function zipObject(props, values) {
    return baseZipObject(props || [], values || [], assignValue);
  }

  zipObject_1 = zipObject;
  return zipObject_1;
}

/* global window */

var lodash;

if (typeof commonjsRequire === 'function') {
  try {
    lodash = {
      cloneDeep: requireCloneDeep(),
      constant: requireConstant(),
      defaults: requireDefaults(),
      each: requireEach(),
      filter: requireFilter(),
      find: requireFind(),
      flatten: requireFlatten(),
      forEach: requireForEach(),
      forIn: requireForIn(),
      has: requireHas(),
      isUndefined: requireIsUndefined(),
      last: requireLast(),
      map: requireMap(),
      mapValues: requireMapValues(),
      max: requireMax(),
      merge: requireMerge(),
      min: requireMin(),
      minBy: requireMinBy(),
      now: requireNow(),
      pick: requirePick(),
      range: requireRange(),
      reduce: requireReduce(),
      sortBy: requireSortBy(),
      uniqueId: requireUniqueId(),
      values: requireValues(),
      zipObject: requireZipObject()
    };
  } catch (e) {
    // continue regardless of error
  }
}

if (!lodash) {
  lodash = window._;
}

var lodash_1 = lodash;

/*
 * Simple doubly linked list implementation derived from Cormen, et al.,
 * "Introduction to Algorithms".
 */

var list = List$1;

function List$1() {
  var sentinel = {};
  sentinel._next = sentinel._prev = sentinel;
  this._sentinel = sentinel;
}

List$1.prototype.dequeue = function () {
  var sentinel = this._sentinel;
  var entry = sentinel._prev;
  if (entry !== sentinel) {
    unlink(entry);
    return entry;
  }
};

List$1.prototype.enqueue = function (entry) {
  var sentinel = this._sentinel;
  if (entry._prev && entry._next) {
    unlink(entry);
  }
  entry._next = sentinel._next;
  sentinel._next._prev = entry;
  sentinel._next = entry;
  entry._prev = sentinel;
};

List$1.prototype.toString = function () {
  var strs = [];
  var sentinel = this._sentinel;
  var curr = sentinel._prev;
  while (curr !== sentinel) {
    strs.push(JSON.stringify(curr, filterOutLinks));
    curr = curr._prev;
  }
  return '[' + strs.join(', ') + ']';
};

function unlink(entry) {
  entry._prev._next = entry._next;
  entry._next._prev = entry._prev;
  delete entry._next;
  delete entry._prev;
}

function filterOutLinks(k, v) {
  if (k !== '_next' && k !== '_prev') {
    return v;
  }
}

var _$n = lodash_1;
var Graph$7 = graphlib_1.Graph;
var List = list;

/*
 * A greedy heuristic for finding a feedback arc set for a graph. A feedback
 * arc set is a set of edges that can be removed to make a graph acyclic.
 * The algorithm comes from: P. Eades, X. Lin, and W. F. Smyth, "A fast and
 * effective heuristic for the feedback arc set problem." This implementation
 * adjusts that from the paper to allow for weighted edges.
 */
var greedyFas = greedyFAS$1;

var DEFAULT_WEIGHT_FN = _$n.constant(1);

function greedyFAS$1(g, weightFn) {
  if (g.nodeCount() <= 1) {
    return [];
  }
  var state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
  var results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx);

  // Expand multi-edges
  return _$n.flatten(
    _$n.map(results, function (e) {
      return g.outEdges(e.v, e.w);
    }),
    true
  );
}

function doGreedyFAS(g, buckets, zeroIdx) {
  var results = [];
  var sources = buckets[buckets.length - 1];
  var sinks = buckets[0];

  var entry;
  while (g.nodeCount()) {
    while ((entry = sinks.dequeue())) {
      removeNode(g, buckets, zeroIdx, entry);
    }
    while ((entry = sources.dequeue())) {
      removeNode(g, buckets, zeroIdx, entry);
    }
    if (g.nodeCount()) {
      for (var i = buckets.length - 2; i > 0; --i) {
        entry = buckets[i].dequeue();
        if (entry) {
          results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
          break;
        }
      }
    }
  }

  return results;
}

function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
  var results = collectPredecessors ? [] : undefined;

  _$n.forEach(g.inEdges(entry.v), function (edge) {
    var weight = g.edge(edge);
    var uEntry = g.node(edge.v);

    if (collectPredecessors) {
      results.push({ v: edge.v, w: edge.w });
    }

    uEntry.out -= weight;
    assignBucket(buckets, zeroIdx, uEntry);
  });

  _$n.forEach(g.outEdges(entry.v), function (edge) {
    var weight = g.edge(edge);
    var w = edge.w;
    var wEntry = g.node(w);
    wEntry['in'] -= weight;
    assignBucket(buckets, zeroIdx, wEntry);
  });

  g.removeNode(entry.v);

  return results;
}

function buildState(g, weightFn) {
  var fasGraph = new Graph$7();
  var maxIn = 0;
  var maxOut = 0;

  _$n.forEach(g.nodes(), function (v) {
    fasGraph.setNode(v, { v: v, in: 0, out: 0 });
  });

  // Aggregate weights on nodes, but also sum the weights across multi-edges
  // into a single edge for the fasGraph.
  _$n.forEach(g.edges(), function (e) {
    var prevWeight = fasGraph.edge(e.v, e.w) || 0;
    var weight = weightFn(e);
    var edgeWeight = prevWeight + weight;
    fasGraph.setEdge(e.v, e.w, edgeWeight);
    maxOut = Math.max(maxOut, (fasGraph.node(e.v).out += weight));
    maxIn = Math.max(maxIn, (fasGraph.node(e.w)['in'] += weight));
  });

  var buckets = _$n.range(maxOut + maxIn + 3).map(function () {
    return new List();
  });
  var zeroIdx = maxIn + 1;

  _$n.forEach(fasGraph.nodes(), function (v) {
    assignBucket(buckets, zeroIdx, fasGraph.node(v));
  });

  return { graph: fasGraph, buckets: buckets, zeroIdx: zeroIdx };
}

function assignBucket(buckets, zeroIdx, entry) {
  if (!entry.out) {
    buckets[0].enqueue(entry);
  } else if (!entry['in']) {
    buckets[buckets.length - 1].enqueue(entry);
  } else {
    buckets[entry.out - entry['in'] + zeroIdx].enqueue(entry);
  }
}

var _$m = lodash_1;
var greedyFAS = greedyFas;

var acyclic$1 = {
  run: run$2,
  undo: undo$2
};

function run$2(g) {
  var fas = g.graph().acyclicer === 'greedy' ? greedyFAS(g, weightFn(g)) : dfsFAS(g);
  _$m.forEach(fas, function (e) {
    var label = g.edge(e);
    g.removeEdge(e);
    label.forwardName = e.name;
    label.reversed = true;
    g.setEdge(e.w, e.v, label, _$m.uniqueId('rev'));
  });

  function weightFn(g) {
    return function (e) {
      return g.edge(e).weight;
    };
  }
}

function dfsFAS(g) {
  var fas = [];
  var stack = {};
  var visited = {};

  function dfs(v) {
    if (_$m.has(visited, v)) {
      return;
    }
    visited[v] = true;
    stack[v] = true;
    _$m.forEach(g.outEdges(v), function (e) {
      if (_$m.has(stack, e.w)) {
        fas.push(e);
      } else {
        dfs(e.w);
      }
    });
    delete stack[v];
  }

  _$m.forEach(g.nodes(), dfs);
  return fas;
}

function undo$2(g) {
  _$m.forEach(g.edges(), function (e) {
    var label = g.edge(e);
    if (label.reversed) {
      g.removeEdge(e);

      var forwardName = label.forwardName;
      delete label.reversed;
      delete label.forwardName;
      g.setEdge(e.w, e.v, label, forwardName);
    }
  });
}

/* eslint "no-console": off */

var _$l = lodash_1;
var Graph$6 = graphlib_1.Graph;

var util$a = {
  addDummyNode: addDummyNode,
  simplify: simplify$1,
  asNonCompoundGraph: asNonCompoundGraph,
  successorWeights: successorWeights,
  predecessorWeights: predecessorWeights,
  intersectRect: intersectRect,
  buildLayerMatrix: buildLayerMatrix,
  normalizeRanks: normalizeRanks$1,
  removeEmptyRanks: removeEmptyRanks$1,
  addBorderNode: addBorderNode$1,
  maxRank: maxRank,
  partition: partition,
  time: time,
  notime: notime
};

/*
 * Adds a dummy node to the graph and return v.
 */
function addDummyNode(g, type, attrs, name) {
  var v;
  do {
    v = _$l.uniqueId(name);
  } while (g.hasNode(v));

  attrs.dummy = type;
  g.setNode(v, attrs);
  return v;
}

/*
 * Returns a new graph with only simple edges. Handles aggregation of data
 * associated with multi-edges.
 */
function simplify$1(g) {
  var simplified = new Graph$6().setGraph(g.graph());
  _$l.forEach(g.nodes(), function (v) {
    simplified.setNode(v, g.node(v));
  });
  _$l.forEach(g.edges(), function (e) {
    var simpleLabel = simplified.edge(e.v, e.w) || { weight: 0, minlen: 1 };
    var label = g.edge(e);
    simplified.setEdge(e.v, e.w, {
      weight: simpleLabel.weight + label.weight,
      minlen: Math.max(simpleLabel.minlen, label.minlen)
    });
  });
  return simplified;
}

function asNonCompoundGraph(g) {
  var simplified = new Graph$6({ multigraph: g.isMultigraph() }).setGraph(g.graph());
  _$l.forEach(g.nodes(), function (v) {
    if (!g.children(v).length) {
      simplified.setNode(v, g.node(v));
    }
  });
  _$l.forEach(g.edges(), function (e) {
    simplified.setEdge(e, g.edge(e));
  });
  return simplified;
}

function successorWeights(g) {
  var weightMap = _$l.map(g.nodes(), function (v) {
    var sucs = {};
    _$l.forEach(g.outEdges(v), function (e) {
      sucs[e.w] = (sucs[e.w] || 0) + g.edge(e).weight;
    });
    return sucs;
  });
  return _$l.zipObject(g.nodes(), weightMap);
}

function predecessorWeights(g) {
  var weightMap = _$l.map(g.nodes(), function (v) {
    var preds = {};
    _$l.forEach(g.inEdges(v), function (e) {
      preds[e.v] = (preds[e.v] || 0) + g.edge(e).weight;
    });
    return preds;
  });
  return _$l.zipObject(g.nodes(), weightMap);
}

/*
 * Finds where a line starting at point ({x, y}) would intersect a rectangle
 * ({x, y, width, height}) if it were pointing at the rectangle's center.
 */
function intersectRect(rect, point) {
  var x = rect.x;
  var y = rect.y;

  // Rectangle intersection algorithm from:
  // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
  var dx = point.x - x;
  var dy = point.y - y;
  var w = rect.width / 2;
  var h = rect.height / 2;

  if (!dx && !dy) {
    throw new Error('Not possible to find intersection inside of the rectangle');
  }

  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    // Intersection is top or bottom of rect.
    if (dy < 0) {
      h = -h;
    }
    sx = (h * dx) / dy;
    sy = h;
  } else {
    // Intersection is left or right of rect.
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = (w * dy) / dx;
  }

  return { x: x + sx, y: y + sy };
}

/*
 * Given a DAG with each node assigned "rank" and "order" properties, this
 * function will produce a matrix with the ids of each node.
 */
function buildLayerMatrix(g) {
  var layering = _$l.map(_$l.range(maxRank(g) + 1), function () {
    return [];
  });
  _$l.forEach(g.nodes(), function (v) {
    var node = g.node(v);
    var rank = node.rank;
    if (!_$l.isUndefined(rank)) {
      layering[rank][node.order] = v;
    }
  });
  return layering;
}

/*
 * Adjusts the ranks for all nodes in the graph such that all nodes v have
 * rank(v) >= 0 and at least one node w has rank(w) = 0.
 */
function normalizeRanks$1(g) {
  var min = _$l.min(
    _$l.map(g.nodes(), function (v) {
      return g.node(v).rank;
    })
  );
  _$l.forEach(g.nodes(), function (v) {
    var node = g.node(v);
    if (_$l.has(node, 'rank')) {
      node.rank -= min;
    }
  });
}

function removeEmptyRanks$1(g) {
  // Ranks may not start at 0, so we need to offset them
  var offset = _$l.min(
    _$l.map(g.nodes(), function (v) {
      return g.node(v).rank;
    })
  );

  var layers = [];
  _$l.forEach(g.nodes(), function (v) {
    var rank = g.node(v).rank - offset;
    if (!layers[rank]) {
      layers[rank] = [];
    }
    layers[rank].push(v);
  });

  var delta = 0;
  var nodeRankFactor = g.graph().nodeRankFactor;
  _$l.forEach(layers, function (vs, i) {
    if (_$l.isUndefined(vs) && i % nodeRankFactor !== 0) {
      --delta;
    } else if (delta) {
      _$l.forEach(vs, function (v) {
        g.node(v).rank += delta;
      });
    }
  });
}

function addBorderNode$1(g, prefix, rank, order) {
  var node = {
    width: 0,
    height: 0
  };
  if (arguments.length >= 4) {
    node.rank = rank;
    node.order = order;
  }
  return addDummyNode(g, 'border', node, prefix);
}

function maxRank(g) {
  return _$l.max(
    _$l.map(g.nodes(), function (v) {
      var rank = g.node(v).rank;
      if (!_$l.isUndefined(rank)) {
        return rank;
      }
    })
  );
}

/*
 * Partition a collection into two groups: `lhs` and `rhs`. If the supplied
 * function returns true for an entry it goes into `lhs`. Otherwise it goes
 * into `rhs.
 */
function partition(collection, fn) {
  var result = { lhs: [], rhs: [] };
  _$l.forEach(collection, function (value) {
    if (fn(value)) {
      result.lhs.push(value);
    } else {
      result.rhs.push(value);
    }
  });
  return result;
}

/*
 * Returns a new function that wraps `fn` with a timer. The wrapper logs the
 * time it takes to execute the function.
 */
function time(name, fn) {
  var start = _$l.now();
  try {
    return fn();
  } finally {
    console.log(name + ' time: ' + (_$l.now() - start) + 'ms');
  }
}

function notime(name, fn) {
  return fn();
}

var _$k = lodash_1;
var util$9 = util$a;

var normalize$1 = {
  run: run$1,
  undo: undo$1
};

/*
 * Breaks any long edges in the graph into short segments that span 1 layer
 * each. This operation is undoable with the denormalize function.
 *
 * Pre-conditions:
 *
 *    1. The input graph is a DAG.
 *    2. Each node in the graph has a "rank" property.
 *
 * Post-condition:
 *
 *    1. All edges in the graph have a length of 1.
 *    2. Dummy nodes are added where edges have been split into segments.
 *    3. The graph is augmented with a "dummyChains" attribute which contains
 *       the first dummy in each chain of dummy nodes produced.
 */
function run$1(g) {
  g.graph().dummyChains = [];
  _$k.forEach(g.edges(), function (edge) {
    normalizeEdge(g, edge);
  });
}

function normalizeEdge(g, e) {
  var v = e.v;
  var vRank = g.node(v).rank;
  var w = e.w;
  var wRank = g.node(w).rank;
  var name = e.name;
  var edgeLabel = g.edge(e);
  var labelRank = edgeLabel.labelRank;

  if (wRank === vRank + 1) return;

  g.removeEdge(e);

  var dummy, attrs, i;
  for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
    edgeLabel.points = [];
    attrs = {
      width: 0,
      height: 0,
      edgeLabel: edgeLabel,
      edgeObj: e,
      rank: vRank
    };
    dummy = util$9.addDummyNode(g, 'edge', attrs, '_d');
    if (vRank === labelRank) {
      attrs.width = edgeLabel.width;
      attrs.height = edgeLabel.height;
      attrs.dummy = 'edge-label';
      attrs.labelpos = edgeLabel.labelpos;
    }
    g.setEdge(v, dummy, { weight: edgeLabel.weight }, name);
    if (i === 0) {
      g.graph().dummyChains.push(dummy);
    }
    v = dummy;
  }

  g.setEdge(v, w, { weight: edgeLabel.weight }, name);
}

function undo$1(g) {
  _$k.forEach(g.graph().dummyChains, function (v) {
    var node = g.node(v);
    var origLabel = node.edgeLabel;
    var w;
    g.setEdge(node.edgeObj, origLabel);
    while (node.dummy) {
      w = g.successors(v)[0];
      g.removeNode(v);
      origLabel.points.push({ x: node.x, y: node.y });
      if (node.dummy === 'edge-label') {
        origLabel.x = node.x;
        origLabel.y = node.y;
        origLabel.width = node.width;
        origLabel.height = node.height;
      }
      v = w;
      node = g.node(v);
    }
  });
}

var _$j = lodash_1;

var util$8 = {
  longestPath: longestPath$1,
  slack: slack$2
};

/*
 * Initializes ranks for the input graph using the longest path algorithm. This
 * algorithm scales well and is fast in practice, it yields rather poor
 * solutions. Nodes are pushed to the lowest layer possible, leaving the bottom
 * ranks wide and leaving edges longer than necessary. However, due to its
 * speed, this algorithm is good for getting an initial ranking that can be fed
 * into other algorithms.
 *
 * This algorithm does not normalize layers because it will be used by other
 * algorithms in most cases. If using this algorithm directly, be sure to
 * run normalize at the end.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG.
 *    2. Input graph node labels can be assigned properties.
 *
 * Post-conditions:
 *
 *    1. Each node will be assign an (unnormalized) "rank" property.
 */
function longestPath$1(g) {
  var visited = {};

  function dfs(v) {
    var label = g.node(v);
    if (_$j.has(visited, v)) {
      return label.rank;
    }
    visited[v] = true;

    var rank = _$j.min(
      _$j.map(g.outEdges(v), function (e) {
        return dfs(e.w) - g.edge(e).minlen;
      })
    );

    if (
      rank === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
      rank === undefined || // return value of _.map([]) for Lodash 4
      rank === null
    ) {
      // return value of _.map([null])
      rank = 0;
    }

    return (label.rank = rank);
  }

  _$j.forEach(g.sources(), dfs);
}

/*
 * Returns the amount of slack for the given edge. The slack is defined as the
 * difference between the length of the edge and its minimum length.
 */
function slack$2(g, e) {
  return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
}

var _$i = lodash_1;
var Graph$5 = graphlib_1.Graph;
var slack$1 = util$8.slack;

var feasibleTree_1 = feasibleTree$2;

/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */
function feasibleTree$2(g) {
  var t = new Graph$5({ directed: false });

  // Choose arbitrary node from which to start our tree
  var start = g.nodes()[0];
  var size = g.nodeCount();
  t.setNode(start, {});

  var edge, delta;
  while (tightTree(t, g) < size) {
    edge = findMinSlackEdge(t, g);
    delta = t.hasNode(edge.v) ? slack$1(g, edge) : -slack$1(g, edge);
    shiftRanks(t, g, delta);
  }

  return t;
}

/*
 * Finds a maximal tree of tight edges and returns the number of nodes in the
 * tree.
 */
function tightTree(t, g) {
  function dfs(v) {
    _$i.forEach(g.nodeEdges(v), function (e) {
      var edgeV = e.v,
        w = v === edgeV ? e.w : edgeV;
      if (!t.hasNode(w) && !slack$1(g, e)) {
        t.setNode(w, {});
        t.setEdge(v, w, {});
        dfs(w);
      }
    });
  }

  _$i.forEach(t.nodes(), dfs);
  return t.nodeCount();
}

/*
 * Finds the edge with the smallest slack that is incident on tree and returns
 * it.
 */
function findMinSlackEdge(t, g) {
  return _$i.minBy(g.edges(), function (e) {
    if (t.hasNode(e.v) !== t.hasNode(e.w)) {
      return slack$1(g, e);
    }
  });
}

function shiftRanks(t, g, delta) {
  _$i.forEach(t.nodes(), function (v) {
    g.node(v).rank += delta;
  });
}

var _$h = lodash_1;
var feasibleTree$1 = feasibleTree_1;
var slack = util$8.slack;
var initRank = util$8.longestPath;
var preorder = graphlib_1.alg.preorder;
var postorder$1 = graphlib_1.alg.postorder;
var simplify = util$a.simplify;

var networkSimplex_1 = networkSimplex$1;

// Expose some internals for testing purposes
networkSimplex$1.initLowLimValues = initLowLimValues;
networkSimplex$1.initCutValues = initCutValues;
networkSimplex$1.calcCutValue = calcCutValue;
networkSimplex$1.leaveEdge = leaveEdge;
networkSimplex$1.enterEdge = enterEdge;
networkSimplex$1.exchangeEdges = exchangeEdges;

/*
 * The network simplex algorithm assigns ranks to each node in the input graph
 * and iteratively improves the ranking to reduce the length of edges.
 *
 * Preconditions:
 *
 *    1. The input graph must be a DAG.
 *    2. All nodes in the graph must have an object value.
 *    3. All edges in the graph must have "minlen" and "weight" attributes.
 *
 * Postconditions:
 *
 *    1. All nodes in the graph will have an assigned "rank" attribute that has
 *       been optimized by the network simplex algorithm. Ranks start at 0.
 *
 *
 * A rough sketch of the algorithm is as follows:
 *
 *    1. Assign initial ranks to each node. We use the longest path algorithm,
 *       which assigns ranks to the lowest position possible. In general this
 *       leads to very wide bottom ranks and unnecessarily long edges.
 *    2. Construct a feasible tight tree. A tight tree is one such that all
 *       edges in the tree have no slack (difference between length of edge
 *       and minlen for the edge). This by itself greatly improves the assigned
 *       rankings by shorting edges.
 *    3. Iteratively find edges that have negative cut values. Generally a
 *       negative cut value indicates that the edge could be removed and a new
 *       tree edge could be added to produce a more compact graph.
 *
 * Much of the algorithms here are derived from Gansner, et al., "A Technique
 * for Drawing Directed Graphs." The structure of the file roughly follows the
 * structure of the overall algorithm.
 */
function networkSimplex$1(g) {
  g = simplify(g);
  initRank(g);
  var t = feasibleTree$1(g);
  initLowLimValues(t);
  initCutValues(t, g);

  var e, f;
  while ((e = leaveEdge(t))) {
    f = enterEdge(t, g, e);
    exchangeEdges(t, g, e, f);
  }
}

/*
 * Initializes cut values for all edges in the tree.
 */
function initCutValues(t, g) {
  var vs = postorder$1(t, t.nodes());
  vs = vs.slice(0, vs.length - 1);
  _$h.forEach(vs, function (v) {
    assignCutValue(t, g, v);
  });
}

function assignCutValue(t, g, child) {
  var childLab = t.node(child);
  var parent = childLab.parent;
  t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
}

/*
 * Given the tight tree, its graph, and a child in the graph calculate and
 * return the cut value for the edge between the child and its parent.
 */
function calcCutValue(t, g, child) {
  var childLab = t.node(child);
  var parent = childLab.parent;
  // True if the child is on the tail end of the edge in the directed graph
  var childIsTail = true;
  // The graph's view of the tree edge we're inspecting
  var graphEdge = g.edge(child, parent);
  // The accumulated cut value for the edge between this node and its parent
  var cutValue = 0;

  if (!graphEdge) {
    childIsTail = false;
    graphEdge = g.edge(parent, child);
  }

  cutValue = graphEdge.weight;

  _$h.forEach(g.nodeEdges(child), function (e) {
    var isOutEdge = e.v === child,
      other = isOutEdge ? e.w : e.v;

    if (other !== parent) {
      var pointsToHead = isOutEdge === childIsTail,
        otherWeight = g.edge(e).weight;

      cutValue += pointsToHead ? otherWeight : -otherWeight;
      if (isTreeEdge(t, child, other)) {
        var otherCutValue = t.edge(child, other).cutvalue;
        cutValue += pointsToHead ? -otherCutValue : otherCutValue;
      }
    }
  });

  return cutValue;
}

function initLowLimValues(tree, root) {
  if (arguments.length < 2) {
    root = tree.nodes()[0];
  }
  dfsAssignLowLim(tree, {}, 1, root);
}

function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
  var low = nextLim;
  var label = tree.node(v);

  visited[v] = true;
  _$h.forEach(tree.neighbors(v), function (w) {
    if (!_$h.has(visited, w)) {
      nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
    }
  });

  label.low = low;
  label.lim = nextLim++;
  if (parent) {
    label.parent = parent;
  } else {
    // TODO should be able to remove this when we incrementally update low lim
    delete label.parent;
  }

  return nextLim;
}

function leaveEdge(tree) {
  return _$h.find(tree.edges(), function (e) {
    return tree.edge(e).cutvalue < 0;
  });
}

function enterEdge(t, g, edge) {
  var v = edge.v;
  var w = edge.w;

  // For the rest of this function we assume that v is the tail and w is the
  // head, so if we don't have this edge in the graph we should flip it to
  // match the correct orientation.
  if (!g.hasEdge(v, w)) {
    v = edge.w;
    w = edge.v;
  }

  var vLabel = t.node(v);
  var wLabel = t.node(w);
  var tailLabel = vLabel;
  var flip = false;

  // If the root is in the tail of the edge then we need to flip the logic that
  // checks for the head and tail nodes in the candidates function below.
  if (vLabel.lim > wLabel.lim) {
    tailLabel = wLabel;
    flip = true;
  }

  var candidates = _$h.filter(g.edges(), function (edge) {
    return flip === isDescendant(t, t.node(edge.v), tailLabel) && flip !== isDescendant(t, t.node(edge.w), tailLabel);
  });

  return _$h.minBy(candidates, function (edge) {
    return slack(g, edge);
  });
}

function exchangeEdges(t, g, e, f) {
  var v = e.v;
  var w = e.w;
  t.removeEdge(v, w);
  t.setEdge(f.v, f.w, {});
  initLowLimValues(t);
  initCutValues(t, g);
  updateRanks(t, g);
}

function updateRanks(t, g) {
  var root = _$h.find(t.nodes(), function (v) {
    return !g.node(v).parent;
  });
  var vs = preorder(t, root);
  vs = vs.slice(1);
  _$h.forEach(vs, function (v) {
    var parent = t.node(v).parent,
      edge = g.edge(v, parent),
      flipped = false;

    if (!edge) {
      edge = g.edge(parent, v);
      flipped = true;
    }

    g.node(v).rank = g.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
  });
}

/*
 * Returns true if the edge is in the tree.
 */
function isTreeEdge(tree, u, v) {
  return tree.hasEdge(u, v);
}

/*
 * Returns true if the specified node is descendant of the root node per the
 * assigned low and lim attributes in the tree.
 */
function isDescendant(tree, vLabel, rootLabel) {
  return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
}

var rankUtil = util$8;
var longestPath = rankUtil.longestPath;
var feasibleTree = feasibleTree_1;
var networkSimplex = networkSimplex_1;

var rank_1 = rank$1;

/*
 * Assigns a rank to each node in the input graph that respects the "minlen"
 * constraint specified on edges between nodes.
 *
 * This basic structure is derived from Gansner, et al., "A Technique for
 * Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a connected DAG
 *    2. Graph nodes must be objects
 *    3. Graph edges must have "weight" and "minlen" attributes
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have a "rank" attribute based on the results of the
 *       algorithm. Ranks can start at any index (including negative), we'll
 *       fix them up later.
 */
function rank$1(g) {
  switch (g.graph().ranker) {
    case 'network-simplex':
      networkSimplexRanker(g);
      break;
    case 'tight-tree':
      tightTreeRanker(g);
      break;
    case 'longest-path':
      longestPathRanker(g);
      break;
    default:
      networkSimplexRanker(g);
  }
}

// A fast and simple ranker, but results are far from optimal.
var longestPathRanker = longestPath;

function tightTreeRanker(g) {
  longestPath(g);
  feasibleTree(g);
}

function networkSimplexRanker(g) {
  networkSimplex(g);
}

var _$g = lodash_1;

var parentDummyChains_1 = parentDummyChains$1;

function parentDummyChains$1(g) {
  var postorderNums = postorder(g);

  _$g.forEach(g.graph().dummyChains, function (v) {
    var node = g.node(v);
    var edgeObj = node.edgeObj;
    var pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w);
    var path = pathData.path;
    var lca = pathData.lca;
    var pathIdx = 0;
    var pathV = path[pathIdx];
    var ascending = true;

    while (v !== edgeObj.w) {
      node = g.node(v);

      if (ascending) {
        while ((pathV = path[pathIdx]) !== lca && g.node(pathV).maxRank < node.rank) {
          pathIdx++;
        }

        if (pathV === lca) {
          ascending = false;
        }
      }

      if (!ascending) {
        while (pathIdx < path.length - 1 && g.node((pathV = path[pathIdx + 1])).minRank <= node.rank) {
          pathIdx++;
        }
        pathV = path[pathIdx];
      }

      g.setParent(v, pathV);
      v = g.successors(v)[0];
    }
  });
}

// Find a path from v to w through the lowest common ancestor (LCA). Return the
// full path and the LCA.
function findPath(g, postorderNums, v, w) {
  var vPath = [];
  var wPath = [];
  var low = Math.min(postorderNums[v].low, postorderNums[w].low);
  var lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
  var parent;
  var lca;

  // Traverse up from v to find the LCA
  parent = v;
  do {
    parent = g.parent(parent);
    vPath.push(parent);
  } while (parent && (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
  lca = parent;

  // Traverse from w to LCA
  parent = w;
  while ((parent = g.parent(parent)) !== lca) {
    wPath.push(parent);
  }

  return { path: vPath.concat(wPath.reverse()), lca: lca };
}

function postorder(g) {
  var result = {};
  var lim = 0;

  function dfs(v) {
    var low = lim;
    _$g.forEach(g.children(v), dfs);
    result[v] = { low: low, lim: lim++ };
  }
  _$g.forEach(g.children(), dfs);

  return result;
}

var _$f = lodash_1;
var util$7 = util$a;

var nestingGraph$1 = {
  run: run,
  cleanup: cleanup
};

/*
 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
 * adds appropriate edges to ensure that all cluster nodes are placed between
 * these boundries, and ensures that the graph is connected.
 *
 * In addition we ensure, through the use of the minlen property, that nodes
 * and subgraph border nodes to not end up on the same rank.
 *
 * Preconditions:
 *
 *    1. Input graph is a DAG
 *    2. Nodes in the input graph has a minlen attribute
 *
 * Postconditions:
 *
 *    1. Input graph is connected.
 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
 *       get placed on the same rank as subgraph border nodes.
 *
 * The nesting graph idea comes from Sander, "Layout of Compound Directed
 * Graphs."
 */
function run(g) {
  var root = util$7.addDummyNode(g, 'root', {}, '_root');
  var depths = treeDepths(g);
  var height = _$f.max(_$f.values(depths)) - 1; // Note: depths is an Object not an array
  var nodeSep = 2 * height + 1;

  g.graph().nestingRoot = root;

  // Multiply minlen by nodeSep to align nodes on non-border ranks.
  _$f.forEach(g.edges(), function (e) {
    g.edge(e).minlen *= nodeSep;
  });

  // Calculate a weight that is sufficient to keep subgraphs vertically compact
  var weight = sumWeights(g) + 1;

  // Create border nodes and link them up
  _$f.forEach(g.children(), function (child) {
    dfs(g, root, nodeSep, weight, height, depths, child);
  });

  // Save the multiplier for node layers for later removal of empty border
  // layers.
  g.graph().nodeRankFactor = nodeSep;
}

function dfs(g, root, nodeSep, weight, height, depths, v) {
  var children = g.children(v);
  if (!children.length) {
    if (v !== root) {
      g.setEdge(root, v, { weight: 0, minlen: nodeSep });
    }
    return;
  }

  var top = util$7.addBorderNode(g, '_bt');
  var bottom = util$7.addBorderNode(g, '_bb');
  var label = g.node(v);

  g.setParent(top, v);
  label.borderTop = top;
  g.setParent(bottom, v);
  label.borderBottom = bottom;

  _$f.forEach(children, function (child) {
    dfs(g, root, nodeSep, weight, height, depths, child);

    var childNode = g.node(child);
    var childTop = childNode.borderTop ? childNode.borderTop : child;
    var childBottom = childNode.borderBottom ? childNode.borderBottom : child;
    var thisWeight = childNode.borderTop ? weight : 2 * weight;
    var minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;

    g.setEdge(top, childTop, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true
    });

    g.setEdge(childBottom, bottom, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true
    });
  });

  if (!g.parent(v)) {
    g.setEdge(root, top, { weight: 0, minlen: height + depths[v] });
  }
}

function treeDepths(g) {
  var depths = {};
  function dfs(v, depth) {
    var children = g.children(v);
    if (children && children.length) {
      _$f.forEach(children, function (child) {
        dfs(child, depth + 1);
      });
    }
    depths[v] = depth;
  }
  _$f.forEach(g.children(), function (v) {
    dfs(v, 1);
  });
  return depths;
}

function sumWeights(g) {
  return _$f.reduce(
    g.edges(),
    function (acc, e) {
      return acc + g.edge(e).weight;
    },
    0
  );
}

function cleanup(g) {
  var graphLabel = g.graph();
  g.removeNode(graphLabel.nestingRoot);
  delete graphLabel.nestingRoot;
  _$f.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    if (edge.nestingEdge) {
      g.removeEdge(e);
    }
  });
}

var _$e = lodash_1;
var util$6 = util$a;

var addBorderSegments_1 = addBorderSegments$1;

function addBorderSegments$1(g) {
  function dfs(v) {
    var children = g.children(v);
    var node = g.node(v);
    if (children.length) {
      _$e.forEach(children, dfs);
    }

    if (_$e.has(node, 'minRank')) {
      node.borderLeft = [];
      node.borderRight = [];
      for (var rank = node.minRank, maxRank = node.maxRank + 1; rank < maxRank; ++rank) {
        addBorderNode(g, 'borderLeft', '_bl', v, node, rank);
        addBorderNode(g, 'borderRight', '_br', v, node, rank);
      }
    }
  }

  _$e.forEach(g.children(), dfs);
}

function addBorderNode(g, prop, prefix, sg, sgNode, rank) {
  var label = { width: 0, height: 0, rank: rank, borderType: prop };
  var prev = sgNode[prop][rank - 1];
  var curr = util$6.addDummyNode(g, 'border', label, prefix);
  sgNode[prop][rank] = curr;
  g.setParent(curr, sg);
  if (prev) {
    g.setEdge(prev, curr, { weight: 1 });
  }
}

var _$d = lodash_1;

var coordinateSystem$1 = {
  adjust: adjust,
  undo: undo
};

function adjust(g) {
  var rankDir = g.graph().rankdir.toLowerCase();
  if (rankDir === 'lr' || rankDir === 'rl') {
    swapWidthHeight(g);
  }
}

function undo(g) {
  var rankDir = g.graph().rankdir.toLowerCase();
  if (rankDir === 'bt' || rankDir === 'rl') {
    reverseY(g);
  }

  if (rankDir === 'lr' || rankDir === 'rl') {
    swapXY(g);
    swapWidthHeight(g);
  }
}

function swapWidthHeight(g) {
  _$d.forEach(g.nodes(), function (v) {
    swapWidthHeightOne(g.node(v));
  });
  _$d.forEach(g.edges(), function (e) {
    swapWidthHeightOne(g.edge(e));
  });
}

function swapWidthHeightOne(attrs) {
  var w = attrs.width;
  attrs.width = attrs.height;
  attrs.height = w;
}

function reverseY(g) {
  _$d.forEach(g.nodes(), function (v) {
    reverseYOne(g.node(v));
  });

  _$d.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    _$d.forEach(edge.points, reverseYOne);
    if (_$d.has(edge, 'y')) {
      reverseYOne(edge);
    }
  });
}

function reverseYOne(attrs) {
  attrs.y = -attrs.y;
}

function swapXY(g) {
  _$d.forEach(g.nodes(), function (v) {
    swapXYOne(g.node(v));
  });

  _$d.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    _$d.forEach(edge.points, swapXYOne);
    if (_$d.has(edge, 'x')) {
      swapXYOne(edge);
    }
  });
}

function swapXYOne(attrs) {
  var x = attrs.x;
  attrs.x = attrs.y;
  attrs.y = x;
}

var _$c = lodash_1;

var initOrder_1 = initOrder$1;

/*
 * Assigns an initial order value for each node by performing a DFS search
 * starting from nodes in the first rank. Nodes are assigned an order in their
 * rank as they are first visited.
 *
 * This approach comes from Gansner, et al., "A Technique for Drawing Directed
 * Graphs."
 *
 * Returns a layering matrix with an array per layer and each layer sorted by
 * the order of its nodes.
 */
function initOrder$1(g) {
  var visited = {};
  var simpleNodes = _$c.filter(g.nodes(), function (v) {
    return !g.children(v).length;
  });
  var maxRank = _$c.max(
    _$c.map(simpleNodes, function (v) {
      return g.node(v).rank;
    })
  );
  var layers = _$c.map(_$c.range(maxRank + 1), function () {
    return [];
  });

  function dfs(v) {
    if (_$c.has(visited, v)) return;
    visited[v] = true;
    var node = g.node(v);
    layers[node.rank].push(v);
    _$c.forEach(g.successors(v), dfs);
  }

  var orderedVs = _$c.sortBy(simpleNodes, function (v) {
    return g.node(v).rank;
  });
  _$c.forEach(orderedVs, dfs);

  return layers;
}

var _$b = lodash_1;

var crossCount_1 = crossCount$1;

/*
 * A function that takes a layering (an array of layers, each with an array of
 * ordererd nodes) and a graph and returns a weighted crossing count.
 *
 * Pre-conditions:
 *
 *    1. Input graph must be simple (not a multigraph), directed, and include
 *       only simple edges.
 *    2. Edges in the input graph must have assigned weights.
 *
 * Post-conditions:
 *
 *    1. The graph and layering matrix are left unchanged.
 *
 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
 */
function crossCount$1(g, layering) {
  var cc = 0;
  for (var i = 1; i < layering.length; ++i) {
    cc += twoLayerCrossCount(g, layering[i - 1], layering[i]);
  }
  return cc;
}

function twoLayerCrossCount(g, northLayer, southLayer) {
  // Sort all of the edges between the north and south layers by their position
  // in the north layer and then the south. Map these edges to the position of
  // their head in the south layer.
  var southPos = _$b.zipObject(
    southLayer,
    _$b.map(southLayer, function (v, i) {
      return i;
    })
  );
  var southEntries = _$b.flatten(
    _$b.map(northLayer, function (v) {
      return _$b.sortBy(
        _$b.map(g.outEdges(v), function (e) {
          return { pos: southPos[e.w], weight: g.edge(e).weight };
        }),
        'pos'
      );
    }),
    true
  );

  // Build the accumulator tree
  var firstIndex = 1;
  while (firstIndex < southLayer.length) firstIndex <<= 1;
  var treeSize = 2 * firstIndex - 1;
  firstIndex -= 1;
  var tree = _$b.map(new Array(treeSize), function () {
    return 0;
  });

  // Calculate the weighted crossings
  var cc = 0;
  _$b.forEach(
    southEntries.forEach(function (entry) {
      var index = entry.pos + firstIndex;
      tree[index] += entry.weight;
      var weightSum = 0;
      while (index > 0) {
        if (index % 2) {
          weightSum += tree[index + 1];
        }
        index = (index - 1) >> 1;
        tree[index] += entry.weight;
      }
      cc += entry.weight * weightSum;
    })
  );

  return cc;
}

var _$a = lodash_1;

var barycenter_1 = barycenter$1;

function barycenter$1(g, movable) {
  return _$a.map(movable, function (v) {
    var inV = g.inEdges(v);
    if (!inV.length) {
      return { v: v };
    } else {
      var result = _$a.reduce(
        inV,
        function (acc, e) {
          var edge = g.edge(e),
            nodeU = g.node(e.v);
          return {
            sum: acc.sum + edge.weight * nodeU.order,
            weight: acc.weight + edge.weight
          };
        },
        { sum: 0, weight: 0 }
      );

      return {
        v: v,
        barycenter: result.sum / result.weight,
        weight: result.weight
      };
    }
  });
}

var _$9 = lodash_1;

var resolveConflicts_1 = resolveConflicts$1;

/*
 * Given a list of entries of the form {v, barycenter, weight} and a
 * constraint graph this function will resolve any conflicts between the
 * constraint graph and the barycenters for the entries. If the barycenters for
 * an entry would violate a constraint in the constraint graph then we coalesce
 * the nodes in the conflict into a new node that respects the contraint and
 * aggregates barycenter and weight information.
 *
 * This implementation is based on the description in Forster, "A Fast and
 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
 * differs in some specific details.
 *
 * Pre-conditions:
 *
 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
 *       no barycenter, then {v}.
 *
 * Returns:
 *
 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
 *    `vs` may either be a singleton or it may be an aggregation of nodes
 *    ordered such that they do not violate constraints from the constraint
 *    graph. The property `i` is the lowest original index of any of the
 *    elements in `vs`.
 */
function resolveConflicts$1(entries, cg) {
  var mappedEntries = {};
  _$9.forEach(entries, function (entry, i) {
    var tmp = (mappedEntries[entry.v] = {
      indegree: 0,
      in: [],
      out: [],
      vs: [entry.v],
      i: i
    });
    if (!_$9.isUndefined(entry.barycenter)) {
      tmp.barycenter = entry.barycenter;
      tmp.weight = entry.weight;
    }
  });

  _$9.forEach(cg.edges(), function (e) {
    var entryV = mappedEntries[e.v];
    var entryW = mappedEntries[e.w];
    if (!_$9.isUndefined(entryV) && !_$9.isUndefined(entryW)) {
      entryW.indegree++;
      entryV.out.push(mappedEntries[e.w]);
    }
  });

  var sourceSet = _$9.filter(mappedEntries, function (entry) {
    return !entry.indegree;
  });

  return doResolveConflicts(sourceSet);
}

function doResolveConflicts(sourceSet) {
  var entries = [];

  function handleIn(vEntry) {
    return function (uEntry) {
      if (uEntry.merged) {
        return;
      }
      if (
        _$9.isUndefined(uEntry.barycenter) ||
        _$9.isUndefined(vEntry.barycenter) ||
        uEntry.barycenter >= vEntry.barycenter
      ) {
        mergeEntries(vEntry, uEntry);
      }
    };
  }

  function handleOut(vEntry) {
    return function (wEntry) {
      wEntry['in'].push(vEntry);
      if (--wEntry.indegree === 0) {
        sourceSet.push(wEntry);
      }
    };
  }

  while (sourceSet.length) {
    var entry = sourceSet.pop();
    entries.push(entry);
    _$9.forEach(entry['in'].reverse(), handleIn(entry));
    _$9.forEach(entry.out, handleOut(entry));
  }

  return _$9.map(
    _$9.filter(entries, function (entry) {
      return !entry.merged;
    }),
    function (entry) {
      return _$9.pick(entry, ['vs', 'i', 'barycenter', 'weight']);
    }
  );
}

function mergeEntries(target, source) {
  var sum = 0;
  var weight = 0;

  if (target.weight) {
    sum += target.barycenter * target.weight;
    weight += target.weight;
  }

  if (source.weight) {
    sum += source.barycenter * source.weight;
    weight += source.weight;
  }

  target.vs = source.vs.concat(target.vs);
  target.barycenter = sum / weight;
  target.weight = weight;
  target.i = Math.min(source.i, target.i);
  source.merged = true;
}

var _$8 = lodash_1;
var util$5 = util$a;

var sort_1 = sort$1;

function sort$1(entries, biasRight) {
  var parts = util$5.partition(entries, function (entry) {
    return _$8.has(entry, 'barycenter');
  });
  var sortable = parts.lhs,
    unsortable = _$8.sortBy(parts.rhs, function (entry) {
      return -entry.i;
    }),
    vs = [],
    sum = 0,
    weight = 0,
    vsIndex = 0;

  sortable.sort(compareWithBias(!!biasRight));

  vsIndex = consumeUnsortable(vs, unsortable, vsIndex);

  _$8.forEach(sortable, function (entry) {
    vsIndex += entry.vs.length;
    vs.push(entry.vs);
    sum += entry.barycenter * entry.weight;
    weight += entry.weight;
    vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
  });

  var result = { vs: _$8.flatten(vs, true) };
  if (weight) {
    result.barycenter = sum / weight;
    result.weight = weight;
  }
  return result;
}

function consumeUnsortable(vs, unsortable, index) {
  var last;
  while (unsortable.length && (last = _$8.last(unsortable)).i <= index) {
    unsortable.pop();
    vs.push(last.vs);
    index++;
  }
  return index;
}

function compareWithBias(bias) {
  return function (entryV, entryW) {
    if (entryV.barycenter < entryW.barycenter) {
      return -1;
    } else if (entryV.barycenter > entryW.barycenter) {
      return 1;
    }

    return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
  };
}

var _$7 = lodash_1;
var barycenter = barycenter_1;
var resolveConflicts = resolveConflicts_1;
var sort = sort_1;

var sortSubgraph_1 = sortSubgraph$1;

function sortSubgraph$1(g, v, cg, biasRight) {
  var movable = g.children(v);
  var node = g.node(v);
  var bl = node ? node.borderLeft : undefined;
  var br = node ? node.borderRight : undefined;
  var subgraphs = {};

  if (bl) {
    movable = _$7.filter(movable, function (w) {
      return w !== bl && w !== br;
    });
  }

  var barycenters = barycenter(g, movable);
  _$7.forEach(barycenters, function (entry) {
    if (g.children(entry.v).length) {
      var subgraphResult = sortSubgraph$1(g, entry.v, cg, biasRight);
      subgraphs[entry.v] = subgraphResult;
      if (_$7.has(subgraphResult, 'barycenter')) {
        mergeBarycenters(entry, subgraphResult);
      }
    }
  });

  var entries = resolveConflicts(barycenters, cg);
  expandSubgraphs(entries, subgraphs);

  var result = sort(entries, biasRight);

  if (bl) {
    result.vs = _$7.flatten([bl, result.vs, br], true);
    if (g.predecessors(bl).length) {
      var blPred = g.node(g.predecessors(bl)[0]),
        brPred = g.node(g.predecessors(br)[0]);
      if (!_$7.has(result, 'barycenter')) {
        result.barycenter = 0;
        result.weight = 0;
      }
      result.barycenter = (result.barycenter * result.weight + blPred.order + brPred.order) / (result.weight + 2);
      result.weight += 2;
    }
  }

  return result;
}

function expandSubgraphs(entries, subgraphs) {
  _$7.forEach(entries, function (entry) {
    entry.vs = _$7.flatten(
      entry.vs.map(function (v) {
        if (subgraphs[v]) {
          return subgraphs[v].vs;
        }
        return v;
      }),
      true
    );
  });
}

function mergeBarycenters(target, other) {
  if (!_$7.isUndefined(target.barycenter)) {
    target.barycenter =
      (target.barycenter * target.weight + other.barycenter * other.weight) / (target.weight + other.weight);
    target.weight += other.weight;
  } else {
    target.barycenter = other.barycenter;
    target.weight = other.weight;
  }
}

var _$6 = lodash_1;
var Graph$4 = graphlib_1.Graph;

var buildLayerGraph_1 = buildLayerGraph$1;

/*
 * Constructs a graph that can be used to sort a layer of nodes. The graph will
 * contain all base and subgraph nodes from the request layer in their original
 * hierarchy and any edges that are incident on these nodes and are of the type
 * requested by the "relationship" parameter.
 *
 * Nodes from the requested rank that do not have parents are assigned a root
 * node in the output graph, which is set in the root graph attribute. This
 * makes it easy to walk the hierarchy of movable nodes during ordering.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG
 *    2. Base nodes in the input graph have a rank attribute
 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
 *    4. Edges have an assigned weight
 *
 * Post-conditions:
 *
 *    1. Output graph has all nodes in the movable rank with preserved
 *       hierarchy.
 *    2. Root nodes in the movable layer are made children of the node
 *       indicated by the root attribute of the graph.
 *    3. Non-movable nodes incident on movable nodes, selected by the
 *       relationship parameter, are included in the graph (without hierarchy).
 *    4. Edges incident on movable nodes, selected by the relationship
 *       parameter, are added to the output graph.
 *    5. The weights for copied edges are aggregated as need, since the output
 *       graph is not a multi-graph.
 */
function buildLayerGraph$1(g, rank, relationship) {
  var root = createRootNode(g),
    result = new Graph$4({ compound: true }).setGraph({ root: root }).setDefaultNodeLabel(function (v) {
      return g.node(v);
    });

  _$6.forEach(g.nodes(), function (v) {
    var node = g.node(v),
      parent = g.parent(v);

    if (node.rank === rank || (node.minRank <= rank && rank <= node.maxRank)) {
      result.setNode(v);
      result.setParent(v, parent || root);

      // This assumes we have only short edges!
      _$6.forEach(g[relationship](v), function (e) {
        var u = e.v === v ? e.w : e.v,
          edge = result.edge(u, v),
          weight = !_$6.isUndefined(edge) ? edge.weight : 0;
        result.setEdge(u, v, { weight: g.edge(e).weight + weight });
      });

      if (_$6.has(node, 'minRank')) {
        result.setNode(v, {
          borderLeft: node.borderLeft[rank],
          borderRight: node.borderRight[rank]
        });
      }
    }
  });

  return result;
}

function createRootNode(g) {
  var v;
  while (g.hasNode((v = _$6.uniqueId('_root'))));
  return v;
}

var _$5 = lodash_1;

var addSubgraphConstraints_1 = addSubgraphConstraints$1;

function addSubgraphConstraints$1(g, cg, vs) {
  var prev = {},
    rootPrev;

  _$5.forEach(vs, function (v) {
    var child = g.parent(v),
      parent,
      prevChild;
    while (child) {
      parent = g.parent(child);
      if (parent) {
        prevChild = prev[parent];
        prev[parent] = child;
      } else {
        prevChild = rootPrev;
        rootPrev = child;
      }
      if (prevChild && prevChild !== child) {
        cg.setEdge(prevChild, child);
        return;
      }
      child = parent;
    }
  });

  /*
  function dfs(v) {
    var children = v ? g.children(v) : g.children();
    if (children.length) {
      var min = Number.POSITIVE_INFINITY,
          subgraphs = [];
      _.each(children, function(child) {
        var childMin = dfs(child);
        if (g.children(child).length) {
          subgraphs.push({ v: child, order: childMin });
        }
        min = Math.min(min, childMin);
      });
      _.reduce(_.sortBy(subgraphs, "order"), function(prev, curr) {
        cg.setEdge(prev.v, curr.v);
        return curr;
      });
      return min;
    }
    return g.node(v).order;
  }
  dfs(undefined);
  */
}

var _$4 = lodash_1;
var initOrder = initOrder_1;
var crossCount = crossCount_1;
var sortSubgraph = sortSubgraph_1;
var buildLayerGraph = buildLayerGraph_1;
var addSubgraphConstraints = addSubgraphConstraints_1;
var Graph$3 = graphlib_1.Graph;
var util$4 = util$a;

var order_1 = order$1;

/*
 * Applies heuristics to minimize edge crossings in the graph and sets the best
 * order solution as an order attribute on each node.
 *
 * Pre-conditions:
 *
 *    1. Graph must be DAG
 *    2. Graph nodes must be objects with a "rank" attribute
 *    3. Graph edges must have the "weight" attribute
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have an "order" attribute based on the results of the
 *       algorithm.
 */
function order$1(g) {
  var maxRank = util$4.maxRank(g),
    downLayerGraphs = buildLayerGraphs(g, _$4.range(1, maxRank + 1), 'inEdges'),
    upLayerGraphs = buildLayerGraphs(g, _$4.range(maxRank - 1, -1, -1), 'outEdges');

  var layering = initOrder(g);
  assignOrder(g, layering);

  var bestCC = Number.POSITIVE_INFINITY,
    best;

  for (var i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
    sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);

    layering = util$4.buildLayerMatrix(g);
    var cc = crossCount(g, layering);
    if (cc < bestCC) {
      lastBest = 0;
      best = _$4.cloneDeep(layering);
      bestCC = cc;
    }
  }

  assignOrder(g, best);
}

function buildLayerGraphs(g, ranks, relationship) {
  return _$4.map(ranks, function (rank) {
    return buildLayerGraph(g, rank, relationship);
  });
}

function sweepLayerGraphs(layerGraphs, biasRight) {
  var cg = new Graph$3();
  _$4.forEach(layerGraphs, function (lg) {
    var root = lg.graph().root;
    var sorted = sortSubgraph(lg, root, cg, biasRight);
    _$4.forEach(sorted.vs, function (v, i) {
      lg.node(v).order = i;
    });
    addSubgraphConstraints(lg, cg, sorted.vs);
  });
}

function assignOrder(g, layering) {
  _$4.forEach(layering, function (layer) {
    _$4.forEach(layer, function (v, i) {
      g.node(v).order = i;
    });
  });
}

var _$3 = lodash_1;
var Graph$2 = graphlib_1.Graph;
var util$3 = util$a;

/*
 * This module provides coordinate assignment based on Brandes and Köpf, "Fast
 * and Simple Horizontal Coordinate Assignment."
 */

var bk = {
  positionX: positionX$1,
  findType1Conflicts: findType1Conflicts,
  findType2Conflicts: findType2Conflicts,
  addConflict: addConflict,
  hasConflict: hasConflict,
  verticalAlignment: verticalAlignment,
  horizontalCompaction: horizontalCompaction,
  alignCoordinates: alignCoordinates,
  findSmallestWidthAlignment: findSmallestWidthAlignment,
  balance: balance
};

/*
 * Marks all edges in the graph with a type-1 conflict with the "type1Conflict"
 * property. A type-1 conflict is one where a non-inner segment crosses an
 * inner segment. An inner segment is an edge with both incident nodes marked
 * with the "dummy" property.
 *
 * This algorithm scans layer by layer, starting with the second, for type-1
 * conflicts between the current layer and the previous layer. For each layer
 * it scans the nodes from left to right until it reaches one that is incident
 * on an inner segment. It then scans predecessors to determine if they have
 * edges that cross that inner segment. At the end a final scan is done for all
 * nodes on the current rank to see if they cross the last visited inner
 * segment.
 *
 * This algorithm (safely) assumes that a dummy node will only be incident on a
 * single node in the layers being scanned.
 */
function findType1Conflicts(g, layering) {
  var conflicts = {};

  function visitLayer(prevLayer, layer) {
    var // last visited node in the previous layer that is incident on an inner
      // segment.
      k0 = 0,
      // Tracks the last node in this layer scanned for crossings with a type-1
      // segment.
      scanPos = 0,
      prevLayerLength = prevLayer.length,
      lastNode = _$3.last(layer);

    _$3.forEach(layer, function (v, i) {
      var w = findOtherInnerSegmentNode(g, v),
        k1 = w ? g.node(w).order : prevLayerLength;

      if (w || v === lastNode) {
        _$3.forEach(layer.slice(scanPos, i + 1), function (scanNode) {
          _$3.forEach(g.predecessors(scanNode), function (u) {
            var uLabel = g.node(u),
              uPos = uLabel.order;
            if ((uPos < k0 || k1 < uPos) && !(uLabel.dummy && g.node(scanNode).dummy)) {
              addConflict(conflicts, u, scanNode);
            }
          });
        });
        scanPos = i + 1;
        k0 = k1;
      }
    });

    return layer;
  }

  _$3.reduce(layering, visitLayer);
  return conflicts;
}

function findType2Conflicts(g, layering) {
  var conflicts = {};

  function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
    var v;
    _$3.forEach(_$3.range(southPos, southEnd), function (i) {
      v = south[i];
      if (g.node(v).dummy) {
        _$3.forEach(g.predecessors(v), function (u) {
          var uNode = g.node(u);
          if (uNode.dummy && (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) {
            addConflict(conflicts, u, v);
          }
        });
      }
    });
  }

  function visitLayer(north, south) {
    var prevNorthPos = -1,
      nextNorthPos,
      southPos = 0;

    _$3.forEach(south, function (v, southLookahead) {
      if (g.node(v).dummy === 'border') {
        var predecessors = g.predecessors(v);
        if (predecessors.length) {
          nextNorthPos = g.node(predecessors[0]).order;
          scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
          southPos = southLookahead;
          prevNorthPos = nextNorthPos;
        }
      }
      scan(south, southPos, south.length, nextNorthPos, north.length);
    });

    return south;
  }

  _$3.reduce(layering, visitLayer);
  return conflicts;
}

function findOtherInnerSegmentNode(g, v) {
  if (g.node(v).dummy) {
    return _$3.find(g.predecessors(v), function (u) {
      return g.node(u).dummy;
    });
  }
}

function addConflict(conflicts, v, w) {
  if (v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }

  var conflictsV = conflicts[v];
  if (!conflictsV) {
    conflicts[v] = conflictsV = {};
  }
  conflictsV[w] = true;
}

function hasConflict(conflicts, v, w) {
  if (v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  return _$3.has(conflicts[v], w);
}

/*
 * Try to align nodes into vertical "blocks" where possible. This algorithm
 * attempts to align a node with one of its median neighbors. If the edge
 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
 * If a previous node has already formed a block with a node after the node
 * we're trying to form a block with, we also ignore that possibility - our
 * blocks would be split in that scenario.
 */
function verticalAlignment(g, layering, conflicts, neighborFn) {
  var root = {},
    align = {},
    pos = {};

  // We cache the position here based on the layering because the graph and
  // layering may be out of sync. The layering matrix is manipulated to
  // generate different extreme alignments.
  _$3.forEach(layering, function (layer) {
    _$3.forEach(layer, function (v, order) {
      root[v] = v;
      align[v] = v;
      pos[v] = order;
    });
  });

  _$3.forEach(layering, function (layer) {
    var prevIdx = -1;
    _$3.forEach(layer, function (v) {
      var ws = neighborFn(v);
      if (ws.length) {
        ws = _$3.sortBy(ws, function (w) {
          return pos[w];
        });
        var mp = (ws.length - 1) / 2;
        for (var i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
          var w = ws[i];
          if (align[v] === v && prevIdx < pos[w] && !hasConflict(conflicts, v, w)) {
            align[w] = v;
            align[v] = root[v] = root[w];
            prevIdx = pos[w];
          }
        }
      }
    });
  });

  return { root: root, align: align };
}

function horizontalCompaction(g, layering, root, align, reverseSep) {
  // This portion of the algorithm differs from BK due to a number of problems.
  // Instead of their algorithm we construct a new block graph and do two
  // sweeps. The first sweep places blocks with the smallest possible
  // coordinates. The second sweep removes unused space by moving blocks to the
  // greatest coordinates without violating separation.
  var xs = {},
    blockG = buildBlockGraph(g, layering, root, reverseSep),
    borderType = reverseSep ? 'borderLeft' : 'borderRight';

  function iterate(setXsFunc, nextNodesFunc) {
    var stack = blockG.nodes();
    var elem = stack.pop();
    var visited = {};
    while (elem) {
      if (visited[elem]) {
        setXsFunc(elem);
      } else {
        visited[elem] = true;
        stack.push(elem);
        stack = stack.concat(nextNodesFunc(elem));
      }

      elem = stack.pop();
    }
  }

  // First pass, assign smallest coordinates
  function pass1(elem) {
    xs[elem] = blockG.inEdges(elem).reduce(function (acc, e) {
      return Math.max(acc, xs[e.v] + blockG.edge(e));
    }, 0);
  }

  // Second pass, assign greatest coordinates
  function pass2(elem) {
    var min = blockG.outEdges(elem).reduce(function (acc, e) {
      return Math.min(acc, xs[e.w] - blockG.edge(e));
    }, Number.POSITIVE_INFINITY);

    var node = g.node(elem);
    if (min !== Number.POSITIVE_INFINITY && node.borderType !== borderType) {
      xs[elem] = Math.max(xs[elem], min);
    }
  }

  iterate(pass1, blockG.predecessors.bind(blockG));
  iterate(pass2, blockG.successors.bind(blockG));

  // Assign x coordinates to all nodes
  _$3.forEach(align, function (v) {
    xs[v] = xs[root[v]];
  });

  return xs;
}

function buildBlockGraph(g, layering, root, reverseSep) {
  var blockGraph = new Graph$2(),
    graphLabel = g.graph(),
    sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);

  _$3.forEach(layering, function (layer) {
    var u;
    _$3.forEach(layer, function (v) {
      var vRoot = root[v];
      blockGraph.setNode(vRoot);
      if (u) {
        var uRoot = root[u],
          prevMax = blockGraph.edge(uRoot, vRoot);
        blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
      }
      u = v;
    });
  });

  return blockGraph;
}

/*
 * Returns the alignment that has the smallest width of the given alignments.
 */
function findSmallestWidthAlignment(g, xss) {
  return _$3.minBy(_$3.values(xss), function (xs) {
    var max = Number.NEGATIVE_INFINITY;
    var min = Number.POSITIVE_INFINITY;

    _$3.forIn(xs, function (x, v) {
      var halfWidth = width(g, v) / 2;

      max = Math.max(x + halfWidth, max);
      min = Math.min(x - halfWidth, min);
    });

    return max - min;
  });
}

/*
 * Align the coordinates of each of the layout alignments such that
 * left-biased alignments have their minimum coordinate at the same point as
 * the minimum coordinate of the smallest width alignment and right-biased
 * alignments have their maximum coordinate at the same point as the maximum
 * coordinate of the smallest width alignment.
 */
function alignCoordinates(xss, alignTo) {
  var alignToVals = _$3.values(alignTo),
    alignToMin = _$3.min(alignToVals),
    alignToMax = _$3.max(alignToVals);

  _$3.forEach(['u', 'd'], function (vert) {
    _$3.forEach(['l', 'r'], function (horiz) {
      var alignment = vert + horiz,
        xs = xss[alignment],
        delta;
      if (xs === alignTo) return;

      var xsVals = _$3.values(xs);
      delta = horiz === 'l' ? alignToMin - _$3.min(xsVals) : alignToMax - _$3.max(xsVals);

      if (delta) {
        xss[alignment] = _$3.mapValues(xs, function (x) {
          return x + delta;
        });
      }
    });
  });
}

function balance(xss, align) {
  return _$3.mapValues(xss.ul, function (ignore, v) {
    if (align) {
      return xss[align.toLowerCase()][v];
    } else {
      var xs = _$3.sortBy(_$3.map(xss, v));
      return (xs[1] + xs[2]) / 2;
    }
  });
}

function positionX$1(g) {
  var layering = util$3.buildLayerMatrix(g);
  var conflicts = _$3.merge(findType1Conflicts(g, layering), findType2Conflicts(g, layering));

  var xss = {};
  var adjustedLayering;
  _$3.forEach(['u', 'd'], function (vert) {
    adjustedLayering = vert === 'u' ? layering : _$3.values(layering).reverse();
    _$3.forEach(['l', 'r'], function (horiz) {
      if (horiz === 'r') {
        adjustedLayering = _$3.map(adjustedLayering, function (inner) {
          return _$3.values(inner).reverse();
        });
      }

      var neighborFn = (vert === 'u' ? g.predecessors : g.successors).bind(g);
      var align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
      var xs = horizontalCompaction(g, adjustedLayering, align.root, align.align, horiz === 'r');
      if (horiz === 'r') {
        xs = _$3.mapValues(xs, function (x) {
          return -x;
        });
      }
      xss[vert + horiz] = xs;
    });
  });

  var smallestWidth = findSmallestWidthAlignment(g, xss);
  alignCoordinates(xss, smallestWidth);
  return balance(xss, g.graph().align);
}

function sep(nodeSep, edgeSep, reverseSep) {
  return function (g, v, w) {
    var vLabel = g.node(v);
    var wLabel = g.node(w);
    var sum = 0;
    var delta;

    sum += vLabel.width / 2;
    if (_$3.has(vLabel, 'labelpos')) {
      switch (vLabel.labelpos.toLowerCase()) {
        case 'l':
          delta = -vLabel.width / 2;
          break;
        case 'r':
          delta = vLabel.width / 2;
          break;
      }
    }
    if (delta) {
      sum += reverseSep ? delta : -delta;
    }
    delta = 0;

    sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
    sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;

    sum += wLabel.width / 2;
    if (_$3.has(wLabel, 'labelpos')) {
      switch (wLabel.labelpos.toLowerCase()) {
        case 'l':
          delta = wLabel.width / 2;
          break;
        case 'r':
          delta = -wLabel.width / 2;
          break;
      }
    }
    if (delta) {
      sum += reverseSep ? delta : -delta;
    }
    delta = 0;

    return sum;
  };
}

function width(g, v) {
  return g.node(v).width;
}

var _$2 = lodash_1;
var util$2 = util$a;
var positionX = bk.positionX;

var position_1 = position$1;

function position$1(g) {
  g = util$2.asNonCompoundGraph(g);

  positionY(g);
  _$2.forEach(positionX(g), function (x, v) {
    g.node(v).x = x;
  });
}

function positionY(g) {
  var layering = util$2.buildLayerMatrix(g);
  var rankSep = g.graph().ranksep;
  var prevY = 0;
  _$2.forEach(layering, function (layer) {
    var maxHeight = _$2.max(
      _$2.map(layer, function (v) {
        return g.node(v).height;
      })
    );
    _$2.forEach(layer, function (v) {
      g.node(v).y = prevY + maxHeight / 2;
    });
    prevY += maxHeight + rankSep;
  });
}

var _$1 = lodash_1;
var acyclic = acyclic$1;
var normalize = normalize$1;
var rank = rank_1;
var normalizeRanks = util$a.normalizeRanks;
var parentDummyChains = parentDummyChains_1;
var removeEmptyRanks = util$a.removeEmptyRanks;
var nestingGraph = nestingGraph$1;
var addBorderSegments = addBorderSegments_1;
var coordinateSystem = coordinateSystem$1;
var order = order_1;
var position = position_1;
var util$1 = util$a;
var Graph$1 = graphlib_1.Graph;

var layout_1$4 = layout$1;

function layout$1(g, opts) {
  var time = opts && opts.debugTiming ? util$1.time : util$1.notime;
  time('layout', function () {
    var layoutGraph = time('  buildLayoutGraph', function () {
      return buildLayoutGraph(g);
    });
    time('  runLayout', function () {
      runLayout(layoutGraph, time);
    });
    time('  updateInputGraph', function () {
      updateInputGraph(g, layoutGraph);
    });
  });
}

function runLayout(g, time) {
  time('    makeSpaceForEdgeLabels', function () {
    makeSpaceForEdgeLabels(g);
  });
  time('    removeSelfEdges', function () {
    removeSelfEdges(g);
  });
  time('    acyclic', function () {
    acyclic.run(g);
  });
  time('    nestingGraph.run', function () {
    nestingGraph.run(g);
  });
  time('    rank', function () {
    rank(util$1.asNonCompoundGraph(g));
  });
  time('    injectEdgeLabelProxies', function () {
    injectEdgeLabelProxies(g);
  });
  time('    removeEmptyRanks', function () {
    removeEmptyRanks(g);
  });
  time('    nestingGraph.cleanup', function () {
    nestingGraph.cleanup(g);
  });
  time('    normalizeRanks', function () {
    normalizeRanks(g);
  });
  time('    assignRankMinMax', function () {
    assignRankMinMax(g);
  });
  time('    removeEdgeLabelProxies', function () {
    removeEdgeLabelProxies(g);
  });
  time('    normalize.run', function () {
    normalize.run(g);
  });
  time('    parentDummyChains', function () {
    parentDummyChains(g);
  });
  time('    addBorderSegments', function () {
    addBorderSegments(g);
  });
  time('    order', function () {
    order(g);
  });
  time('    insertSelfEdges', function () {
    insertSelfEdges(g);
  });
  time('    adjustCoordinateSystem', function () {
    coordinateSystem.adjust(g);
  });
  time('    position', function () {
    position(g);
  });
  time('    positionSelfEdges', function () {
    positionSelfEdges(g);
  });
  time('    removeBorderNodes', function () {
    removeBorderNodes(g);
  });
  time('    normalize.undo', function () {
    normalize.undo(g);
  });
  time('    fixupEdgeLabelCoords', function () {
    fixupEdgeLabelCoords(g);
  });
  time('    undoCoordinateSystem', function () {
    coordinateSystem.undo(g);
  });
  time('    translateGraph', function () {
    translateGraph(g);
  });
  time('    assignNodeIntersects', function () {
    assignNodeIntersects(g);
  });
  time('    reversePoints', function () {
    reversePointsForReversedEdges(g);
  });
  time('    acyclic.undo', function () {
    acyclic.undo(g);
  });
}

/*
 * Copies final layout information from the layout graph back to the input
 * graph. This process only copies whitelisted attributes from the layout graph
 * to the input graph, so it serves as a good place to determine what
 * attributes can influence layout.
 */
function updateInputGraph(inputGraph, layoutGraph) {
  _$1.forEach(inputGraph.nodes(), function (v) {
    var inputLabel = inputGraph.node(v);
    var layoutLabel = layoutGraph.node(v);

    if (inputLabel) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;

      if (layoutGraph.children(v).length) {
        inputLabel.width = layoutLabel.width;
        inputLabel.height = layoutLabel.height;
      }
    }
  });

  _$1.forEach(inputGraph.edges(), function (e) {
    var inputLabel = inputGraph.edge(e);
    var layoutLabel = layoutGraph.edge(e);

    inputLabel.points = layoutLabel.points;
    if (_$1.has(layoutLabel, 'x')) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;
    }
  });

  inputGraph.graph().width = layoutGraph.graph().width;
  inputGraph.graph().height = layoutGraph.graph().height;
}

var graphNumAttrs = ['nodesep', 'edgesep', 'ranksep', 'marginx', 'marginy'];
var graphDefaults = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: 'tb' };
var graphAttrs = ['acyclicer', 'ranker', 'rankdir', 'align'];
var nodeNumAttrs = ['width', 'height'];
var nodeDefaults = { width: 0, height: 0 };
var edgeNumAttrs = ['minlen', 'weight', 'width', 'height', 'labeloffset'];
var edgeDefaults = {
  minlen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labeloffset: 10,
  labelpos: 'r'
};
var edgeAttrs = ['labelpos'];

/*
 * Constructs a new graph from the input graph, which can be used for layout.
 * This process copies only whitelisted attributes from the input graph to the
 * layout graph. Thus this function serves as a good place to determine what
 * attributes can influence layout.
 */
function buildLayoutGraph(inputGraph) {
  var g = new Graph$1({ multigraph: true, compound: true });
  var graph = canonicalize(inputGraph.graph());

  g.setGraph(_$1.merge({}, graphDefaults, selectNumberAttrs(graph, graphNumAttrs), _$1.pick(graph, graphAttrs)));

  _$1.forEach(inputGraph.nodes(), function (v) {
    var node = canonicalize(inputGraph.node(v));
    g.setNode(v, _$1.defaults(selectNumberAttrs(node, nodeNumAttrs), nodeDefaults));
    g.setParent(v, inputGraph.parent(v));
  });

  _$1.forEach(inputGraph.edges(), function (e) {
    var edge = canonicalize(inputGraph.edge(e));
    g.setEdge(e, _$1.merge({}, edgeDefaults, selectNumberAttrs(edge, edgeNumAttrs), _$1.pick(edge, edgeAttrs)));
  });

  return g;
}

/*
 * This idea comes from the Gansner paper: to account for edge labels in our
 * layout we split each rank in half by doubling minlen and halving ranksep.
 * Then we can place labels at these mid-points between nodes.
 *
 * We also add some minimal padding to the width to push the label for the edge
 * away from the edge itself a bit.
 */
function makeSpaceForEdgeLabels(g) {
  var graph = g.graph();
  graph.ranksep /= 2;
  _$1.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    edge.minlen *= 2;
    if (edge.labelpos.toLowerCase() !== 'c') {
      if (graph.rankdir === 'TB' || graph.rankdir === 'BT') {
        edge.width += edge.labeloffset;
      } else {
        edge.height += edge.labeloffset;
      }
    }
  });
}

/*
 * Creates temporary dummy nodes that capture the rank in which each edge's
 * label is going to, if it has one of non-zero width and height. We do this
 * so that we can safely remove empty ranks while preserving balance for the
 * label's position.
 */
function injectEdgeLabelProxies(g) {
  _$1.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    if (edge.width && edge.height) {
      var v = g.node(e.v);
      var w = g.node(e.w);
      var label = { rank: (w.rank - v.rank) / 2 + v.rank, e: e };
      util$1.addDummyNode(g, 'edge-proxy', label, '_ep');
    }
  });
}

function assignRankMinMax(g) {
  var maxRank = 0;
  _$1.forEach(g.nodes(), function (v) {
    var node = g.node(v);
    if (node.borderTop) {
      node.minRank = g.node(node.borderTop).rank;
      node.maxRank = g.node(node.borderBottom).rank;
      maxRank = _$1.max(maxRank, node.maxRank);
    }
  });
  g.graph().maxRank = maxRank;
}

function removeEdgeLabelProxies(g) {
  _$1.forEach(g.nodes(), function (v) {
    var node = g.node(v);
    if (node.dummy === 'edge-proxy') {
      g.edge(node.e).labelRank = node.rank;
      g.removeNode(v);
    }
  });
}

function translateGraph(g) {
  var minX = Number.POSITIVE_INFINITY;
  var maxX = 0;
  var minY = Number.POSITIVE_INFINITY;
  var maxY = 0;
  var graphLabel = g.graph();
  var marginX = graphLabel.marginx || 0;
  var marginY = graphLabel.marginy || 0;

  function getExtremes(attrs) {
    var x = attrs.x;
    var y = attrs.y;
    var w = attrs.width;
    var h = attrs.height;
    minX = Math.min(minX, x - w / 2);
    maxX = Math.max(maxX, x + w / 2);
    minY = Math.min(minY, y - h / 2);
    maxY = Math.max(maxY, y + h / 2);
  }

  _$1.forEach(g.nodes(), function (v) {
    getExtremes(g.node(v));
  });
  _$1.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    if (_$1.has(edge, 'x')) {
      getExtremes(edge);
    }
  });

  minX -= marginX;
  minY -= marginY;

  _$1.forEach(g.nodes(), function (v) {
    var node = g.node(v);
    node.x -= minX;
    node.y -= minY;
  });

  _$1.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    _$1.forEach(edge.points, function (p) {
      p.x -= minX;
      p.y -= minY;
    });
    if (_$1.has(edge, 'x')) {
      edge.x -= minX;
    }
    if (_$1.has(edge, 'y')) {
      edge.y -= minY;
    }
  });

  graphLabel.width = maxX - minX + marginX;
  graphLabel.height = maxY - minY + marginY;
}

function assignNodeIntersects(g) {
  _$1.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    var nodeV = g.node(e.v);
    var nodeW = g.node(e.w);
    var p1, p2;
    if (!edge.points) {
      edge.points = [];
      p1 = nodeW;
      p2 = nodeV;
    } else {
      p1 = edge.points[0];
      p2 = edge.points[edge.points.length - 1];
    }
    edge.points.unshift(util$1.intersectRect(nodeV, p1));
    edge.points.push(util$1.intersectRect(nodeW, p2));
  });
}

function fixupEdgeLabelCoords(g) {
  _$1.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    if (_$1.has(edge, 'x')) {
      if (edge.labelpos === 'l' || edge.labelpos === 'r') {
        edge.width -= edge.labeloffset;
      }
      switch (edge.labelpos) {
        case 'l':
          edge.x -= edge.width / 2 + edge.labeloffset;
          break;
        case 'r':
          edge.x += edge.width / 2 + edge.labeloffset;
          break;
      }
    }
  });
}

function reversePointsForReversedEdges(g) {
  _$1.forEach(g.edges(), function (e) {
    var edge = g.edge(e);
    if (edge.reversed) {
      edge.points.reverse();
    }
  });
}

function removeBorderNodes(g) {
  _$1.forEach(g.nodes(), function (v) {
    if (g.children(v).length) {
      var node = g.node(v);
      var t = g.node(node.borderTop);
      var b = g.node(node.borderBottom);
      var l = g.node(_$1.last(node.borderLeft));
      var r = g.node(_$1.last(node.borderRight));

      node.width = Math.abs(r.x - l.x);
      node.height = Math.abs(b.y - t.y);
      node.x = l.x + node.width / 2;
      node.y = t.y + node.height / 2;
    }
  });

  _$1.forEach(g.nodes(), function (v) {
    if (g.node(v).dummy === 'border') {
      g.removeNode(v);
    }
  });
}

function removeSelfEdges(g) {
  _$1.forEach(g.edges(), function (e) {
    if (e.v === e.w) {
      var node = g.node(e.v);
      if (!node.selfEdges) {
        node.selfEdges = [];
      }
      node.selfEdges.push({ e: e, label: g.edge(e) });
      g.removeEdge(e);
    }
  });
}

function insertSelfEdges(g) {
  var layers = util$1.buildLayerMatrix(g);
  _$1.forEach(layers, function (layer) {
    var orderShift = 0;
    _$1.forEach(layer, function (v, i) {
      var node = g.node(v);
      node.order = i + orderShift;
      _$1.forEach(node.selfEdges, function (selfEdge) {
        util$1.addDummyNode(
          g,
          'selfedge',
          {
            width: selfEdge.label.width,
            height: selfEdge.label.height,
            rank: node.rank,
            order: i + ++orderShift,
            e: selfEdge.e,
            label: selfEdge.label
          },
          '_se'
        );
      });
      delete node.selfEdges;
    });
  });
}

function positionSelfEdges(g) {
  _$1.forEach(g.nodes(), function (v) {
    var node = g.node(v);
    if (node.dummy === 'selfedge') {
      var selfNode = g.node(node.e.v);
      var x = selfNode.x + selfNode.width / 2;
      var y = selfNode.y;
      var dx = node.x - x;
      var dy = selfNode.height / 2;
      g.setEdge(node.e, node.label);
      g.removeNode(v);
      node.label.points = [
        { x: x + (2 * dx) / 3, y: y - dy },
        { x: x + (5 * dx) / 6, y: y - dy },
        { x: x + dx, y: y },
        { x: x + (5 * dx) / 6, y: y + dy },
        { x: x + (2 * dx) / 3, y: y + dy }
      ];
      node.label.x = node.x;
      node.label.y = node.y;
    }
  });
}

function selectNumberAttrs(obj, attrs) {
  return _$1.mapValues(_$1.pick(obj, attrs), Number);
}

function canonicalize(attrs) {
  var newAttrs = {};
  _$1.forEach(attrs, function (v, k) {
    newAttrs[k.toLowerCase()] = v;
  });
  return newAttrs;
}

var _ = lodash_1;
var util = util$a;
var Graph = graphlib_1.Graph;

var debug = {
  debugOrdering: debugOrdering
};

/* istanbul ignore next */
function debugOrdering(g) {
  var layerMatrix = util.buildLayerMatrix(g);

  var h = new Graph({ compound: true, multigraph: true }).setGraph({});

  _.forEach(g.nodes(), function (v) {
    h.setNode(v, { label: v });
    h.setParent(v, 'layer' + g.node(v).rank);
  });

  _.forEach(g.edges(), function (e) {
    h.setEdge(e.v, e.w, {}, e.name);
  });

  _.forEach(layerMatrix, function (layer, i) {
    var layerV = 'layer' + i;
    h.setNode(layerV, { rank: 'same' });
    _.reduce(layer, function (u, v) {
      h.setEdge(u, v, { style: 'invis' });
      return v;
    });
  });

  return h;
}

var version = '0.8.5';

/*
Copyright (c) 2012-2014 Chris Pettitt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var dagre = {
  graphlib: graphlib_1,

  layout: layout_1$4,
  debug: debug,
  util: {
    time: util$a.time,
    notime: util$a.notime
  },
  version: version
};

var dist = {};

var adaptor$1 = {};

var layout = {};

var powergraph = {};

Object.defineProperty(powergraph, '__esModule', { value: true });
var PowerEdge = (function () {
  function PowerEdge(source, target, type) {
    this.source = source;
    this.target = target;
    this.type = type;
  }
  return PowerEdge;
})();
powergraph.PowerEdge = PowerEdge;
var Configuration = (function () {
  function Configuration(n, edges, linkAccessor, rootGroup) {
    var _this = this;
    this.linkAccessor = linkAccessor;
    this.modules = new Array(n);
    this.roots = [];
    if (rootGroup) {
      this.initModulesFromGroup(rootGroup);
    } else {
      this.roots.push(new ModuleSet());
      for (var i = 0; i < n; ++i) this.roots[0].add((this.modules[i] = new Module(i)));
    }
    this.R = edges.length;
    edges.forEach(function (e) {
      var s = _this.modules[linkAccessor.getSourceIndex(e)],
        t = _this.modules[linkAccessor.getTargetIndex(e)],
        type = linkAccessor.getType(e);
      s.outgoing.add(type, t);
      t.incoming.add(type, s);
    });
  }
  Configuration.prototype.initModulesFromGroup = function (group) {
    var moduleSet = new ModuleSet();
    this.roots.push(moduleSet);
    for (var i = 0; i < group.leaves.length; ++i) {
      var node = group.leaves[i];
      var module = new Module(node.id);
      this.modules[node.id] = module;
      moduleSet.add(module);
    }
    if (group.groups) {
      for (var j = 0; j < group.groups.length; ++j) {
        var child = group.groups[j];
        var definition = {};
        for (var prop in child)
          if (prop !== 'leaves' && prop !== 'groups' && child.hasOwnProperty(prop)) definition[prop] = child[prop];
        moduleSet.add(new Module(-1 - j, new LinkSets(), new LinkSets(), this.initModulesFromGroup(child), definition));
      }
    }
    return moduleSet;
  };
  Configuration.prototype.merge = function (a, b, k) {
    if (k === void 0) {
      k = 0;
    }
    var inInt = a.incoming.intersection(b.incoming),
      outInt = a.outgoing.intersection(b.outgoing);
    var children = new ModuleSet();
    children.add(a);
    children.add(b);
    var m = new Module(this.modules.length, outInt, inInt, children);
    this.modules.push(m);
    var update = function (s, i, o) {
      s.forAll(function (ms, linktype) {
        ms.forAll(function (n) {
          var nls = n[i];
          nls.add(linktype, m);
          nls.remove(linktype, a);
          nls.remove(linktype, b);
          a[o].remove(linktype, n);
          b[o].remove(linktype, n);
        });
      });
    };
    update(outInt, 'incoming', 'outgoing');
    update(inInt, 'outgoing', 'incoming');
    this.R -= inInt.count() + outInt.count();
    this.roots[k].remove(a);
    this.roots[k].remove(b);
    this.roots[k].add(m);
    return m;
  };
  Configuration.prototype.rootMerges = function (k) {
    if (k === void 0) {
      k = 0;
    }
    var rs = this.roots[k].modules();
    var n = rs.length;
    var merges = new Array(n * (n - 1));
    var ctr = 0;
    for (var i = 0, i_ = n - 1; i < i_; ++i) {
      for (var j = i + 1; j < n; ++j) {
        var a = rs[i],
          b = rs[j];
        merges[ctr] = { id: ctr, nEdges: this.nEdges(a, b), a: a, b: b };
        ctr++;
      }
    }
    return merges;
  };
  Configuration.prototype.greedyMerge = function () {
    for (var i = 0; i < this.roots.length; ++i) {
      if (this.roots[i].modules().length < 2) continue;
      var ms = this.rootMerges(i).sort(function (a, b) {
        return a.nEdges == b.nEdges ? a.id - b.id : a.nEdges - b.nEdges;
      });
      var m = ms[0];
      if (m.nEdges >= this.R) continue;
      this.merge(m.a, m.b, i);
      return true;
    }
  };
  Configuration.prototype.nEdges = function (a, b) {
    var inInt = a.incoming.intersection(b.incoming),
      outInt = a.outgoing.intersection(b.outgoing);
    return this.R - inInt.count() - outInt.count();
  };
  Configuration.prototype.getGroupHierarchy = function (retargetedEdges) {
    var _this = this;
    var groups = [];
    var root = {};
    toGroups(this.roots[0], root, groups);
    var es = this.allEdges();
    es.forEach(function (e) {
      var a = _this.modules[e.source];
      var b = _this.modules[e.target];
      retargetedEdges.push(
        new PowerEdge(
          typeof a.gid === 'undefined' ? e.source : groups[a.gid],
          typeof b.gid === 'undefined' ? e.target : groups[b.gid],
          e.type
        )
      );
    });
    return groups;
  };
  Configuration.prototype.allEdges = function () {
    var es = [];
    Configuration.getEdges(this.roots[0], es);
    return es;
  };
  Configuration.getEdges = function (modules, es) {
    modules.forAll(function (m) {
      m.getEdges(es);
      Configuration.getEdges(m.children, es);
    });
  };
  return Configuration;
})();
powergraph.Configuration = Configuration;
function toGroups(modules, group, groups) {
  modules.forAll(function (m) {
    if (m.isLeaf()) {
      if (!group.leaves) group.leaves = [];
      group.leaves.push(m.id);
    } else {
      var g = group;
      m.gid = groups.length;
      if (!m.isIsland() || m.isPredefined()) {
        g = { id: m.gid };
        if (m.isPredefined()) for (var prop in m.definition) g[prop] = m.definition[prop];
        if (!group.groups) group.groups = [];
        group.groups.push(m.gid);
        groups.push(g);
      }
      toGroups(m.children, g, groups);
    }
  });
}
var Module = (function () {
  function Module(id, outgoing, incoming, children, definition) {
    if (outgoing === void 0) {
      outgoing = new LinkSets();
    }
    if (incoming === void 0) {
      incoming = new LinkSets();
    }
    if (children === void 0) {
      children = new ModuleSet();
    }
    this.id = id;
    this.outgoing = outgoing;
    this.incoming = incoming;
    this.children = children;
    this.definition = definition;
  }
  Module.prototype.getEdges = function (es) {
    var _this = this;
    this.outgoing.forAll(function (ms, edgetype) {
      ms.forAll(function (target) {
        es.push(new PowerEdge(_this.id, target.id, edgetype));
      });
    });
  };
  Module.prototype.isLeaf = function () {
    return this.children.count() === 0;
  };
  Module.prototype.isIsland = function () {
    return this.outgoing.count() === 0 && this.incoming.count() === 0;
  };
  Module.prototype.isPredefined = function () {
    return typeof this.definition !== 'undefined';
  };
  return Module;
})();
powergraph.Module = Module;
function intersection(m, n) {
  var i = {};
  for (var v in m) if (v in n) i[v] = m[v];
  return i;
}
var ModuleSet = (function () {
  function ModuleSet() {
    this.table = {};
  }
  ModuleSet.prototype.count = function () {
    return Object.keys(this.table).length;
  };
  ModuleSet.prototype.intersection = function (other) {
    var result = new ModuleSet();
    result.table = intersection(this.table, other.table);
    return result;
  };
  ModuleSet.prototype.intersectionCount = function (other) {
    return this.intersection(other).count();
  };
  ModuleSet.prototype.contains = function (id) {
    return id in this.table;
  };
  ModuleSet.prototype.add = function (m) {
    this.table[m.id] = m;
  };
  ModuleSet.prototype.remove = function (m) {
    delete this.table[m.id];
  };
  ModuleSet.prototype.forAll = function (f) {
    for (var mid in this.table) {
      f(this.table[mid]);
    }
  };
  ModuleSet.prototype.modules = function () {
    var vs = [];
    this.forAll(function (m) {
      if (!m.isPredefined()) vs.push(m);
    });
    return vs;
  };
  return ModuleSet;
})();
powergraph.ModuleSet = ModuleSet;
var LinkSets = (function () {
  function LinkSets() {
    this.sets = {};
    this.n = 0;
  }
  LinkSets.prototype.count = function () {
    return this.n;
  };
  LinkSets.prototype.contains = function (id) {
    var result = false;
    this.forAllModules(function (m) {
      if (!result && m.id == id) {
        result = true;
      }
    });
    return result;
  };
  LinkSets.prototype.add = function (linktype, m) {
    var s = linktype in this.sets ? this.sets[linktype] : (this.sets[linktype] = new ModuleSet());
    s.add(m);
    ++this.n;
  };
  LinkSets.prototype.remove = function (linktype, m) {
    var ms = this.sets[linktype];
    ms.remove(m);
    if (ms.count() === 0) {
      delete this.sets[linktype];
    }
    --this.n;
  };
  LinkSets.prototype.forAll = function (f) {
    for (var linktype in this.sets) {
      f(this.sets[linktype], Number(linktype));
    }
  };
  LinkSets.prototype.forAllModules = function (f) {
    this.forAll(function (ms, lt) {
      return ms.forAll(f);
    });
  };
  LinkSets.prototype.intersection = function (other) {
    var result = new LinkSets();
    this.forAll(function (ms, lt) {
      if (lt in other.sets) {
        var i = ms.intersection(other.sets[lt]),
          n = i.count();
        if (n > 0) {
          result.sets[lt] = i;
          result.n += n;
        }
      }
    });
    return result;
  };
  return LinkSets;
})();
powergraph.LinkSets = LinkSets;
function getGroups(nodes, links, la, rootGroup) {
  var n = nodes.length,
    c = new Configuration(n, links, la, rootGroup);
  while (c.greedyMerge());
  var powerEdges = [];
  var g = c.getGroupHierarchy(powerEdges);
  powerEdges.forEach(function (e) {
    var f = function (end) {
      var g = e[end];
      if (typeof g == 'number') e[end] = nodes[g];
    };
    f('source');
    f('target');
  });
  return { groups: g, powerEdges: powerEdges };
}
powergraph.getGroups = getGroups;

var linklengths = {};

Object.defineProperty(linklengths, '__esModule', { value: true });
function unionCount(a, b) {
  var u = {};
  for (var i in a) u[i] = {};
  for (var i in b) u[i] = {};
  return Object.keys(u).length;
}
function intersectionCount(a, b) {
  var n = 0;
  for (var i in a) if (typeof b[i] !== 'undefined') ++n;
  return n;
}
function getNeighbours(links, la) {
  var neighbours = {};
  var addNeighbours = function (u, v) {
    if (typeof neighbours[u] === 'undefined') neighbours[u] = {};
    neighbours[u][v] = {};
  };
  links.forEach(function (e) {
    var u = la.getSourceIndex(e),
      v = la.getTargetIndex(e);
    addNeighbours(u, v);
    addNeighbours(v, u);
  });
  return neighbours;
}
function computeLinkLengths(links, w, f, la) {
  var neighbours = getNeighbours(links, la);
  links.forEach(function (l) {
    var a = neighbours[la.getSourceIndex(l)];
    var b = neighbours[la.getTargetIndex(l)];
    la.setLength(l, 1 + w * f(a, b));
  });
}
function symmetricDiffLinkLengths(links, la, w) {
  if (w === void 0) {
    w = 1;
  }
  computeLinkLengths(
    links,
    w,
    function (a, b) {
      return Math.sqrt(unionCount(a, b) - intersectionCount(a, b));
    },
    la
  );
}
linklengths.symmetricDiffLinkLengths = symmetricDiffLinkLengths;
function jaccardLinkLengths(links, la, w) {
  if (w === void 0) {
    w = 1;
  }
  computeLinkLengths(
    links,
    w,
    function (a, b) {
      return Math.min(Object.keys(a).length, Object.keys(b).length) < 1.1
        ? 0
        : intersectionCount(a, b) / unionCount(a, b);
    },
    la
  );
}
linklengths.jaccardLinkLengths = jaccardLinkLengths;
function generateDirectedEdgeConstraints(n, links, axis, la) {
  var components = stronglyConnectedComponents(n, links, la);
  var nodes = {};
  components.forEach(function (c, i) {
    return c.forEach(function (v) {
      return (nodes[v] = i);
    });
  });
  var constraints = [];
  links.forEach(function (l) {
    var ui = la.getSourceIndex(l),
      vi = la.getTargetIndex(l),
      u = nodes[ui],
      v = nodes[vi];
    if (u !== v) {
      constraints.push({
        axis: axis,
        left: ui,
        right: vi,
        gap: la.getMinSeparation(l)
      });
    }
  });
  return constraints;
}
linklengths.generateDirectedEdgeConstraints = generateDirectedEdgeConstraints;
function stronglyConnectedComponents(numVertices, edges, la) {
  var nodes = [];
  var index = 0;
  var stack = [];
  var components = [];
  function strongConnect(v) {
    v.index = v.lowlink = index++;
    stack.push(v);
    v.onStack = true;
    for (var _i = 0, _a = v.out; _i < _a.length; _i++) {
      var w = _a[_i];
      if (typeof w.index === 'undefined') {
        strongConnect(w);
        v.lowlink = Math.min(v.lowlink, w.lowlink);
      } else if (w.onStack) {
        v.lowlink = Math.min(v.lowlink, w.index);
      }
    }
    if (v.lowlink === v.index) {
      var component = [];
      while (stack.length) {
        w = stack.pop();
        w.onStack = false;
        component.push(w);
        if (w === v) break;
      }
      components.push(
        component.map(function (v) {
          return v.id;
        })
      );
    }
  }
  for (var i = 0; i < numVertices; i++) {
    nodes.push({ id: i, out: [] });
  }
  for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
    var e = edges_1[_i];
    var v_1 = nodes[la.getSourceIndex(e)],
      w = nodes[la.getTargetIndex(e)];
    v_1.out.push(w);
  }
  for (var _a = 0, nodes_1 = nodes; _a < nodes_1.length; _a++) {
    var v = nodes_1[_a];
    if (typeof v.index === 'undefined') strongConnect(v);
  }
  return components;
}
linklengths.stronglyConnectedComponents = stronglyConnectedComponents;

var descent = {};

Object.defineProperty(descent, '__esModule', { value: true });
var Locks = (function () {
  function Locks() {
    this.locks = {};
  }
  Locks.prototype.add = function (id, x) {
    this.locks[id] = x;
  };
  Locks.prototype.clear = function () {
    this.locks = {};
  };
  Locks.prototype.isEmpty = function () {
    for (var l in this.locks) return false;
    return true;
  };
  Locks.prototype.apply = function (f) {
    for (var l in this.locks) {
      f(Number(l), this.locks[l]);
    }
  };
  return Locks;
})();
descent.Locks = Locks;
var Descent = (function () {
  function Descent(x, D, G) {
    if (G === void 0) {
      G = null;
    }
    this.D = D;
    this.G = G;
    this.threshold = 0.0001;
    this.numGridSnapNodes = 0;
    this.snapGridSize = 100;
    this.snapStrength = 1000;
    this.scaleSnapByMaxH = false;
    this.random = new PseudoRandom();
    this.project = null;
    this.x = x;
    this.k = x.length;
    var n = (this.n = x[0].length);
    this.H = new Array(this.k);
    this.g = new Array(this.k);
    this.Hd = new Array(this.k);
    this.a = new Array(this.k);
    this.b = new Array(this.k);
    this.c = new Array(this.k);
    this.d = new Array(this.k);
    this.e = new Array(this.k);
    this.ia = new Array(this.k);
    this.ib = new Array(this.k);
    this.xtmp = new Array(this.k);
    this.locks = new Locks();
    this.minD = Number.MAX_VALUE;
    var i = n,
      j;
    while (i--) {
      j = n;
      while (--j > i) {
        var d = D[i][j];
        if (d > 0 && d < this.minD) {
          this.minD = d;
        }
      }
    }
    if (this.minD === Number.MAX_VALUE) this.minD = 1;
    i = this.k;
    while (i--) {
      this.g[i] = new Array(n);
      this.H[i] = new Array(n);
      j = n;
      while (j--) {
        this.H[i][j] = new Array(n);
      }
      this.Hd[i] = new Array(n);
      this.a[i] = new Array(n);
      this.b[i] = new Array(n);
      this.c[i] = new Array(n);
      this.d[i] = new Array(n);
      this.e[i] = new Array(n);
      this.ia[i] = new Array(n);
      this.ib[i] = new Array(n);
      this.xtmp[i] = new Array(n);
    }
  }
  Descent.createSquareMatrix = function (n, f) {
    var M = new Array(n);
    for (var i = 0; i < n; ++i) {
      M[i] = new Array(n);
      for (var j = 0; j < n; ++j) {
        M[i][j] = f(i, j);
      }
    }
    return M;
  };
  Descent.prototype.offsetDir = function () {
    var _this = this;
    var u = new Array(this.k);
    var l = 0;
    for (var i = 0; i < this.k; ++i) {
      var x = (u[i] = this.random.getNextBetween(0.01, 1) - 0.5);
      l += x * x;
    }
    l = Math.sqrt(l);
    return u.map(function (x) {
      return (x *= _this.minD / l);
    });
  };
  Descent.prototype.computeDerivatives = function (x) {
    var _this = this;
    var n = this.n;
    if (n < 1) return;
    var i;
    var d = new Array(this.k);
    var d2 = new Array(this.k);
    var Huu = new Array(this.k);
    var maxH = 0;
    for (var u = 0; u < n; ++u) {
      for (i = 0; i < this.k; ++i) Huu[i] = this.g[i][u] = 0;
      for (var v = 0; v < n; ++v) {
        if (u === v) continue;
        var maxDisplaces = n;
        while (maxDisplaces--) {
          var sd2 = 0;
          for (i = 0; i < this.k; ++i) {
            var dx = (d[i] = x[i][u] - x[i][v]);
            sd2 += d2[i] = dx * dx;
          }
          if (sd2 > 1e-9) break;
          var rd = this.offsetDir();
          for (i = 0; i < this.k; ++i) x[i][v] += rd[i];
        }
        var l = Math.sqrt(sd2);
        var D = this.D[u][v];
        var weight = this.G != null ? this.G[u][v] : 1;
        if ((weight > 1 && l > D) || !isFinite(D)) {
          for (i = 0; i < this.k; ++i) this.H[i][u][v] = 0;
          continue;
        }
        if (weight > 1) {
          weight = 1;
        }
        var D2 = D * D;
        var gs = (2 * weight * (l - D)) / (D2 * l);
        var l3 = l * l * l;
        var hs = (2 * -weight) / (D2 * l3);
        if (!isFinite(gs)) console.log(gs);
        for (i = 0; i < this.k; ++i) {
          this.g[i][u] += d[i] * gs;
          Huu[i] -= this.H[i][u][v] = hs * (l3 + D * (d2[i] - sd2) + l * sd2);
        }
      }
      for (i = 0; i < this.k; ++i) maxH = Math.max(maxH, (this.H[i][u][u] = Huu[i]));
    }
    var r = this.snapGridSize / 2;
    var g = this.snapGridSize;
    var w = this.snapStrength;
    var k = w / (r * r);
    var numNodes = this.numGridSnapNodes;
    for (var u = 0; u < numNodes; ++u) {
      for (i = 0; i < this.k; ++i) {
        var xiu = this.x[i][u];
        var m = xiu / g;
        var f = m % 1;
        var q = m - f;
        var a = Math.abs(f);
        var dx = a <= 0.5 ? xiu - q * g : xiu > 0 ? xiu - (q + 1) * g : xiu - (q - 1) * g;
        if (-r < dx && dx <= r) {
          if (this.scaleSnapByMaxH) {
            this.g[i][u] += maxH * k * dx;
            this.H[i][u][u] += maxH * k;
          } else {
            this.g[i][u] += k * dx;
            this.H[i][u][u] += k;
          }
        }
      }
    }
    if (!this.locks.isEmpty()) {
      this.locks.apply(function (u, p) {
        for (i = 0; i < _this.k; ++i) {
          _this.H[i][u][u] += maxH;
          _this.g[i][u] -= maxH * (p[i] - x[i][u]);
        }
      });
    }
  };
  Descent.dotProd = function (a, b) {
    var x = 0,
      i = a.length;
    while (i--) x += a[i] * b[i];
    return x;
  };
  Descent.rightMultiply = function (m, v, r) {
    var i = m.length;
    while (i--) r[i] = Descent.dotProd(m[i], v);
  };
  Descent.prototype.computeStepSize = function (d) {
    var numerator = 0,
      denominator = 0;
    for (var i = 0; i < this.k; ++i) {
      numerator += Descent.dotProd(this.g[i], d[i]);
      Descent.rightMultiply(this.H[i], d[i], this.Hd[i]);
      denominator += Descent.dotProd(d[i], this.Hd[i]);
    }
    if (denominator === 0 || !isFinite(denominator)) return 0;
    return (1 * numerator) / denominator;
  };
  Descent.prototype.reduceStress = function () {
    this.computeDerivatives(this.x);
    var alpha = this.computeStepSize(this.g);
    for (var i = 0; i < this.k; ++i) {
      this.takeDescentStep(this.x[i], this.g[i], alpha);
    }
    return this.computeStress();
  };
  Descent.copy = function (a, b) {
    var m = a.length,
      n = b[0].length;
    for (var i = 0; i < m; ++i) {
      for (var j = 0; j < n; ++j) {
        b[i][j] = a[i][j];
      }
    }
  };
  Descent.prototype.stepAndProject = function (x0, r, d, stepSize) {
    Descent.copy(x0, r);
    this.takeDescentStep(r[0], d[0], stepSize);
    if (this.project) this.project[0](x0[0], x0[1], r[0]);
    this.takeDescentStep(r[1], d[1], stepSize);
    if (this.project) this.project[1](r[0], x0[1], r[1]);
    for (var i = 2; i < this.k; i++) this.takeDescentStep(r[i], d[i], stepSize);
  };
  Descent.mApply = function (m, n, f) {
    var i = m;
    while (i-- > 0) {
      var j = n;
      while (j-- > 0) f(i, j);
    }
  };
  Descent.prototype.matrixApply = function (f) {
    Descent.mApply(this.k, this.n, f);
  };
  Descent.prototype.computeNextPosition = function (x0, r) {
    var _this = this;
    this.computeDerivatives(x0);
    var alpha = this.computeStepSize(this.g);
    this.stepAndProject(x0, r, this.g, alpha);
    if (this.project) {
      this.matrixApply(function (i, j) {
        return (_this.e[i][j] = x0[i][j] - r[i][j]);
      });
      var beta = this.computeStepSize(this.e);
      beta = Math.max(0.2, Math.min(beta, 1));
      this.stepAndProject(x0, r, this.e, beta);
    }
  };
  Descent.prototype.run = function (iterations) {
    var stress = Number.MAX_VALUE,
      converged = false;
    while (!converged && iterations-- > 0) {
      var s = this.rungeKutta();
      converged = Math.abs(stress / s - 1) < this.threshold;
      stress = s;
    }
    return stress;
  };
  Descent.prototype.rungeKutta = function () {
    var _this = this;
    this.computeNextPosition(this.x, this.a);
    Descent.mid(this.x, this.a, this.ia);
    this.computeNextPosition(this.ia, this.b);
    Descent.mid(this.x, this.b, this.ib);
    this.computeNextPosition(this.ib, this.c);
    this.computeNextPosition(this.c, this.d);
    var disp = 0;
    this.matrixApply(function (i, j) {
      var x = (_this.a[i][j] + 2.0 * _this.b[i][j] + 2.0 * _this.c[i][j] + _this.d[i][j]) / 6.0,
        d = _this.x[i][j] - x;
      disp += d * d;
      _this.x[i][j] = x;
    });
    return disp;
  };
  Descent.mid = function (a, b, m) {
    Descent.mApply(a.length, a[0].length, function (i, j) {
      return (m[i][j] = a[i][j] + (b[i][j] - a[i][j]) / 2.0);
    });
  };
  Descent.prototype.takeDescentStep = function (x, d, stepSize) {
    for (var i = 0; i < this.n; ++i) {
      x[i] = x[i] - stepSize * d[i];
    }
  };
  Descent.prototype.computeStress = function () {
    var stress = 0;
    for (var u = 0, nMinus1 = this.n - 1; u < nMinus1; ++u) {
      for (var v = u + 1, n = this.n; v < n; ++v) {
        var l = 0;
        for (var i = 0; i < this.k; ++i) {
          var dx = this.x[i][u] - this.x[i][v];
          l += dx * dx;
        }
        l = Math.sqrt(l);
        var d = this.D[u][v];
        if (!isFinite(d)) continue;
        var rl = d - l;
        var d2 = d * d;
        stress += (rl * rl) / d2;
      }
    }
    return stress;
  };
  Descent.zeroDistance = 1e-10;
  return Descent;
})();
descent.Descent = Descent;
var PseudoRandom = (function () {
  function PseudoRandom(seed) {
    if (seed === void 0) {
      seed = 1;
    }
    this.seed = seed;
    this.a = 214013;
    this.c = 2531011;
    this.m = 2147483648;
    this.range = 32767;
  }
  PseudoRandom.prototype.getNext = function () {
    this.seed = (this.seed * this.a + this.c) % this.m;
    return (this.seed >> 16) / this.range;
  };
  PseudoRandom.prototype.getNextBetween = function (min, max) {
    return min + this.getNext() * (max - min);
  };
  return PseudoRandom;
})();
descent.PseudoRandom = PseudoRandom;

var rectangle = {};

var vpsc = {};

Object.defineProperty(vpsc, '__esModule', { value: true });
var PositionStats = (function () {
  function PositionStats(scale) {
    this.scale = scale;
    this.AB = 0;
    this.AD = 0;
    this.A2 = 0;
  }
  PositionStats.prototype.addVariable = function (v) {
    var ai = this.scale / v.scale;
    var bi = v.offset / v.scale;
    var wi = v.weight;
    this.AB += wi * ai * bi;
    this.AD += wi * ai * v.desiredPosition;
    this.A2 += wi * ai * ai;
  };
  PositionStats.prototype.getPosn = function () {
    return (this.AD - this.AB) / this.A2;
  };
  return PositionStats;
})();
vpsc.PositionStats = PositionStats;
var Constraint = (function () {
  function Constraint(left, right, gap, equality) {
    if (equality === void 0) {
      equality = false;
    }
    this.left = left;
    this.right = right;
    this.gap = gap;
    this.equality = equality;
    this.active = false;
    this.unsatisfiable = false;
    this.left = left;
    this.right = right;
    this.gap = gap;
    this.equality = equality;
  }
  Constraint.prototype.slack = function () {
    return this.unsatisfiable
      ? Number.MAX_VALUE
      : this.right.scale * this.right.position() - this.gap - this.left.scale * this.left.position();
  };
  return Constraint;
})();
vpsc.Constraint = Constraint;
var Variable = (function () {
  function Variable(desiredPosition, weight, scale) {
    if (weight === void 0) {
      weight = 1;
    }
    if (scale === void 0) {
      scale = 1;
    }
    this.desiredPosition = desiredPosition;
    this.weight = weight;
    this.scale = scale;
    this.offset = 0;
  }
  Variable.prototype.dfdv = function () {
    return 2.0 * this.weight * (this.position() - this.desiredPosition);
  };
  Variable.prototype.position = function () {
    return (this.block.ps.scale * this.block.posn + this.offset) / this.scale;
  };
  Variable.prototype.visitNeighbours = function (prev, f) {
    var ff = function (c, next) {
      return c.active && prev !== next && f(c, next);
    };
    this.cOut.forEach(function (c) {
      return ff(c, c.right);
    });
    this.cIn.forEach(function (c) {
      return ff(c, c.left);
    });
  };
  return Variable;
})();
vpsc.Variable = Variable;
var Block = (function () {
  function Block(v) {
    this.vars = [];
    v.offset = 0;
    this.ps = new PositionStats(v.scale);
    this.addVariable(v);
  }
  Block.prototype.addVariable = function (v) {
    v.block = this;
    this.vars.push(v);
    this.ps.addVariable(v);
    this.posn = this.ps.getPosn();
  };
  Block.prototype.updateWeightedPosition = function () {
    this.ps.AB = this.ps.AD = this.ps.A2 = 0;
    for (var i = 0, n = this.vars.length; i < n; ++i) this.ps.addVariable(this.vars[i]);
    this.posn = this.ps.getPosn();
  };
  Block.prototype.compute_lm = function (v, u, postAction) {
    var _this = this;
    var dfdv = v.dfdv();
    v.visitNeighbours(u, function (c, next) {
      var _dfdv = _this.compute_lm(next, v, postAction);
      if (next === c.right) {
        dfdv += _dfdv * c.left.scale;
        c.lm = _dfdv;
      } else {
        dfdv += _dfdv * c.right.scale;
        c.lm = -_dfdv;
      }
      postAction(c);
    });
    return dfdv / v.scale;
  };
  Block.prototype.populateSplitBlock = function (v, prev) {
    var _this = this;
    v.visitNeighbours(prev, function (c, next) {
      next.offset = v.offset + (next === c.right ? c.gap : -c.gap);
      _this.addVariable(next);
      _this.populateSplitBlock(next, v);
    });
  };
  Block.prototype.traverse = function (visit, acc, v, prev) {
    var _this = this;
    if (v === void 0) {
      v = this.vars[0];
    }
    if (prev === void 0) {
      prev = null;
    }
    v.visitNeighbours(prev, function (c, next) {
      acc.push(visit(c));
      _this.traverse(visit, acc, next, v);
    });
  };
  Block.prototype.findMinLM = function () {
    var m = null;
    this.compute_lm(this.vars[0], null, function (c) {
      if (!c.equality && (m === null || c.lm < m.lm)) m = c;
    });
    return m;
  };
  Block.prototype.findMinLMBetween = function (lv, rv) {
    this.compute_lm(lv, null, function () {});
    var m = null;
    this.findPath(lv, null, rv, function (c, next) {
      if (!c.equality && c.right === next && (m === null || c.lm < m.lm)) m = c;
    });
    return m;
  };
  Block.prototype.findPath = function (v, prev, to, visit) {
    var _this = this;
    var endFound = false;
    v.visitNeighbours(prev, function (c, next) {
      if (!endFound && (next === to || _this.findPath(next, v, to, visit))) {
        endFound = true;
        visit(c, next);
      }
    });
    return endFound;
  };
  Block.prototype.isActiveDirectedPathBetween = function (u, v) {
    if (u === v) return true;
    var i = u.cOut.length;
    while (i--) {
      var c = u.cOut[i];
      if (c.active && this.isActiveDirectedPathBetween(c.right, v)) return true;
    }
    return false;
  };
  Block.split = function (c) {
    c.active = false;
    return [Block.createSplitBlock(c.left), Block.createSplitBlock(c.right)];
  };
  Block.createSplitBlock = function (startVar) {
    var b = new Block(startVar);
    b.populateSplitBlock(startVar, null);
    return b;
  };
  Block.prototype.splitBetween = function (vl, vr) {
    var c = this.findMinLMBetween(vl, vr);
    if (c !== null) {
      var bs = Block.split(c);
      return { constraint: c, lb: bs[0], rb: bs[1] };
    }
    return null;
  };
  Block.prototype.mergeAcross = function (b, c, dist) {
    c.active = true;
    for (var i = 0, n = b.vars.length; i < n; ++i) {
      var v = b.vars[i];
      v.offset += dist;
      this.addVariable(v);
    }
    this.posn = this.ps.getPosn();
  };
  Block.prototype.cost = function () {
    var sum = 0,
      i = this.vars.length;
    while (i--) {
      var v = this.vars[i],
        d = v.position() - v.desiredPosition;
      sum += d * d * v.weight;
    }
    return sum;
  };
  return Block;
})();
vpsc.Block = Block;
var Blocks = (function () {
  function Blocks(vs) {
    this.vs = vs;
    var n = vs.length;
    this.list = new Array(n);
    while (n--) {
      var b = new Block(vs[n]);
      this.list[n] = b;
      b.blockInd = n;
    }
  }
  Blocks.prototype.cost = function () {
    var sum = 0,
      i = this.list.length;
    while (i--) sum += this.list[i].cost();
    return sum;
  };
  Blocks.prototype.insert = function (b) {
    b.blockInd = this.list.length;
    this.list.push(b);
  };
  Blocks.prototype.remove = function (b) {
    var last = this.list.length - 1;
    var swapBlock = this.list[last];
    this.list.length = last;
    if (b !== swapBlock) {
      this.list[b.blockInd] = swapBlock;
      swapBlock.blockInd = b.blockInd;
    }
  };
  Blocks.prototype.merge = function (c) {
    var l = c.left.block,
      r = c.right.block;
    var dist = c.right.offset - c.left.offset - c.gap;
    if (l.vars.length < r.vars.length) {
      r.mergeAcross(l, c, dist);
      this.remove(l);
    } else {
      l.mergeAcross(r, c, -dist);
      this.remove(r);
    }
  };
  Blocks.prototype.forEach = function (f) {
    this.list.forEach(f);
  };
  Blocks.prototype.updateBlockPositions = function () {
    this.list.forEach(function (b) {
      return b.updateWeightedPosition();
    });
  };
  Blocks.prototype.split = function (inactive) {
    var _this = this;
    this.updateBlockPositions();
    this.list.forEach(function (b) {
      var v = b.findMinLM();
      if (v !== null && v.lm < Solver.LAGRANGIAN_TOLERANCE) {
        b = v.left.block;
        Block.split(v).forEach(function (nb) {
          return _this.insert(nb);
        });
        _this.remove(b);
        inactive.push(v);
      }
    });
  };
  return Blocks;
})();
vpsc.Blocks = Blocks;
var Solver = (function () {
  function Solver(vs, cs) {
    this.vs = vs;
    this.cs = cs;
    this.vs = vs;
    vs.forEach(function (v) {
      (v.cIn = []), (v.cOut = []);
    });
    this.cs = cs;
    cs.forEach(function (c) {
      c.left.cOut.push(c);
      c.right.cIn.push(c);
    });
    this.inactive = cs.map(function (c) {
      c.active = false;
      return c;
    });
    this.bs = null;
  }
  Solver.prototype.cost = function () {
    return this.bs.cost();
  };
  Solver.prototype.setStartingPositions = function (ps) {
    this.inactive = this.cs.map(function (c) {
      c.active = false;
      return c;
    });
    this.bs = new Blocks(this.vs);
    this.bs.forEach(function (b, i) {
      return (b.posn = ps[i]);
    });
  };
  Solver.prototype.setDesiredPositions = function (ps) {
    this.vs.forEach(function (v, i) {
      return (v.desiredPosition = ps[i]);
    });
  };
  Solver.prototype.mostViolated = function () {
    var minSlack = Number.MAX_VALUE,
      v = null,
      l = this.inactive,
      n = l.length,
      deletePoint = n;
    for (var i = 0; i < n; ++i) {
      var c = l[i];
      if (c.unsatisfiable) continue;
      var slack = c.slack();
      if (c.equality || slack < minSlack) {
        minSlack = slack;
        v = c;
        deletePoint = i;
        if (c.equality) break;
      }
    }
    if (deletePoint !== n && ((minSlack < Solver.ZERO_UPPERBOUND && !v.active) || v.equality)) {
      l[deletePoint] = l[n - 1];
      l.length = n - 1;
    }
    return v;
  };
  Solver.prototype.satisfy = function () {
    if (this.bs == null) {
      this.bs = new Blocks(this.vs);
    }
    this.bs.split(this.inactive);
    var v = null;
    while ((v = this.mostViolated()) && (v.equality || (v.slack() < Solver.ZERO_UPPERBOUND && !v.active))) {
      var lb = v.left.block,
        rb = v.right.block;
      if (lb !== rb) {
        this.bs.merge(v);
      } else {
        if (lb.isActiveDirectedPathBetween(v.right, v.left)) {
          v.unsatisfiable = true;
          continue;
        }
        var split = lb.splitBetween(v.left, v.right);
        if (split !== null) {
          this.bs.insert(split.lb);
          this.bs.insert(split.rb);
          this.bs.remove(lb);
          this.inactive.push(split.constraint);
        } else {
          v.unsatisfiable = true;
          continue;
        }
        if (v.slack() >= 0) {
          this.inactive.push(v);
        } else {
          this.bs.merge(v);
        }
      }
    }
  };
  Solver.prototype.solve = function () {
    this.satisfy();
    var lastcost = Number.MAX_VALUE,
      cost = this.bs.cost();
    while (Math.abs(lastcost - cost) > 0.0001) {
      this.satisfy();
      lastcost = cost;
      cost = this.bs.cost();
    }
    return cost;
  };
  Solver.LAGRANGIAN_TOLERANCE = -1e-4;
  Solver.ZERO_UPPERBOUND = -1e-10;
  return Solver;
})();
vpsc.Solver = Solver;
function removeOverlapInOneDimension(spans, lowerBound, upperBound) {
  var vs = spans.map(function (s) {
    return new Variable(s.desiredCenter);
  });
  var cs = [];
  var n = spans.length;
  for (var i = 0; i < n - 1; i++) {
    var left = spans[i],
      right = spans[i + 1];
    cs.push(new Constraint(vs[i], vs[i + 1], (left.size + right.size) / 2));
  }
  var leftMost = vs[0],
    rightMost = vs[n - 1],
    leftMostSize = spans[0].size / 2,
    rightMostSize = spans[n - 1].size / 2;
  var vLower = null,
    vUpper = null;
  if (lowerBound) {
    vLower = new Variable(lowerBound, leftMost.weight * 1000);
    vs.push(vLower);
    cs.push(new Constraint(vLower, leftMost, leftMostSize));
  }
  if (upperBound) {
    vUpper = new Variable(upperBound, rightMost.weight * 1000);
    vs.push(vUpper);
    cs.push(new Constraint(rightMost, vUpper, rightMostSize));
  }
  var solver = new Solver(vs, cs);
  solver.solve();
  return {
    newCenters: vs.slice(0, spans.length).map(function (v) {
      return v.position();
    }),
    lowerBound: vLower ? vLower.position() : leftMost.position() - leftMostSize,
    upperBound: vUpper ? vUpper.position() : rightMost.position() + rightMostSize
  };
}
vpsc.removeOverlapInOneDimension = removeOverlapInOneDimension;

var rbtree = {};

var __extends$5 =
  (commonjsGlobal && commonjsGlobal.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(rbtree, '__esModule', { value: true });
var TreeBase = (function () {
  function TreeBase() {
    this.findIter = function (data) {
      var res = this._root;
      var iter = this.iterator();
      while (res !== null) {
        var c = this._comparator(data, res.data);
        if (c === 0) {
          iter._cursor = res;
          return iter;
        } else {
          iter._ancestors.push(res);
          res = res.get_child(c > 0);
        }
      }
      return null;
    };
  }
  TreeBase.prototype.clear = function () {
    this._root = null;
    this.size = 0;
  };
  TreeBase.prototype.find = function (data) {
    var res = this._root;
    while (res !== null) {
      var c = this._comparator(data, res.data);
      if (c === 0) {
        return res.data;
      } else {
        res = res.get_child(c > 0);
      }
    }
    return null;
  };
  TreeBase.prototype.lowerBound = function (data) {
    return this._bound(data, this._comparator);
  };
  TreeBase.prototype.upperBound = function (data) {
    var cmp = this._comparator;
    function reverse_cmp(a, b) {
      return cmp(b, a);
    }
    return this._bound(data, reverse_cmp);
  };
  TreeBase.prototype.min = function () {
    var res = this._root;
    if (res === null) {
      return null;
    }
    while (res.left !== null) {
      res = res.left;
    }
    return res.data;
  };
  TreeBase.prototype.max = function () {
    var res = this._root;
    if (res === null) {
      return null;
    }
    while (res.right !== null) {
      res = res.right;
    }
    return res.data;
  };
  TreeBase.prototype.iterator = function () {
    return new Iterator(this);
  };
  TreeBase.prototype.each = function (cb) {
    var it = this.iterator(),
      data;
    while ((data = it.next()) !== null) {
      cb(data);
    }
  };
  TreeBase.prototype.reach = function (cb) {
    var it = this.iterator(),
      data;
    while ((data = it.prev()) !== null) {
      cb(data);
    }
  };
  TreeBase.prototype._bound = function (data, cmp) {
    var cur = this._root;
    var iter = this.iterator();
    while (cur !== null) {
      var c = this._comparator(data, cur.data);
      if (c === 0) {
        iter._cursor = cur;
        return iter;
      }
      iter._ancestors.push(cur);
      cur = cur.get_child(c > 0);
    }
    for (var i = iter._ancestors.length - 1; i >= 0; --i) {
      cur = iter._ancestors[i];
      if (cmp(data, cur.data) > 0) {
        iter._cursor = cur;
        iter._ancestors.length = i;
        return iter;
      }
    }
    iter._ancestors.length = 0;
    return iter;
  };
  return TreeBase;
})();
rbtree.TreeBase = TreeBase;
var Iterator = (function () {
  function Iterator(tree) {
    this._tree = tree;
    this._ancestors = [];
    this._cursor = null;
  }
  Iterator.prototype.data = function () {
    return this._cursor !== null ? this._cursor.data : null;
  };
  Iterator.prototype.next = function () {
    if (this._cursor === null) {
      var root = this._tree._root;
      if (root !== null) {
        this._minNode(root);
      }
    } else {
      if (this._cursor.right === null) {
        var save;
        do {
          save = this._cursor;
          if (this._ancestors.length) {
            this._cursor = this._ancestors.pop();
          } else {
            this._cursor = null;
            break;
          }
        } while (this._cursor.right === save);
      } else {
        this._ancestors.push(this._cursor);
        this._minNode(this._cursor.right);
      }
    }
    return this._cursor !== null ? this._cursor.data : null;
  };
  Iterator.prototype.prev = function () {
    if (this._cursor === null) {
      var root = this._tree._root;
      if (root !== null) {
        this._maxNode(root);
      }
    } else {
      if (this._cursor.left === null) {
        var save;
        do {
          save = this._cursor;
          if (this._ancestors.length) {
            this._cursor = this._ancestors.pop();
          } else {
            this._cursor = null;
            break;
          }
        } while (this._cursor.left === save);
      } else {
        this._ancestors.push(this._cursor);
        this._maxNode(this._cursor.left);
      }
    }
    return this._cursor !== null ? this._cursor.data : null;
  };
  Iterator.prototype._minNode = function (start) {
    while (start.left !== null) {
      this._ancestors.push(start);
      start = start.left;
    }
    this._cursor = start;
  };
  Iterator.prototype._maxNode = function (start) {
    while (start.right !== null) {
      this._ancestors.push(start);
      start = start.right;
    }
    this._cursor = start;
  };
  return Iterator;
})();
rbtree.Iterator = Iterator;
var Node$2 = (function () {
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.red = true;
  }
  Node.prototype.get_child = function (dir) {
    return dir ? this.right : this.left;
  };
  Node.prototype.set_child = function (dir, val) {
    if (dir) {
      this.right = val;
    } else {
      this.left = val;
    }
  };
  return Node;
})();
var RBTree = (function (_super) {
  __extends$5(RBTree, _super);
  function RBTree(comparator) {
    var _this = _super.call(this) || this;
    _this._root = null;
    _this._comparator = comparator;
    _this.size = 0;
    return _this;
  }
  RBTree.prototype.insert = function (data) {
    var ret = false;
    if (this._root === null) {
      this._root = new Node$2(data);
      ret = true;
      this.size++;
    } else {
      var head = new Node$2(undefined);
      var dir = false;
      var last = false;
      var gp = null;
      var ggp = head;
      var p = null;
      var node = this._root;
      ggp.right = this._root;
      while (true) {
        if (node === null) {
          node = new Node$2(data);
          p.set_child(dir, node);
          ret = true;
          this.size++;
        } else if (RBTree.is_red(node.left) && RBTree.is_red(node.right)) {
          node.red = true;
          node.left.red = false;
          node.right.red = false;
        }
        if (RBTree.is_red(node) && RBTree.is_red(p)) {
          var dir2 = ggp.right === gp;
          if (node === p.get_child(last)) {
            ggp.set_child(dir2, RBTree.single_rotate(gp, !last));
          } else {
            ggp.set_child(dir2, RBTree.double_rotate(gp, !last));
          }
        }
        var cmp = this._comparator(node.data, data);
        if (cmp === 0) {
          break;
        }
        last = dir;
        dir = cmp < 0;
        if (gp !== null) {
          ggp = gp;
        }
        gp = p;
        p = node;
        node = node.get_child(dir);
      }
      this._root = head.right;
    }
    this._root.red = false;
    return ret;
  };
  RBTree.prototype.remove = function (data) {
    if (this._root === null) {
      return false;
    }
    var head = new Node$2(undefined);
    var node = head;
    node.right = this._root;
    var p = null;
    var gp = null;
    var found = null;
    var dir = true;
    while (node.get_child(dir) !== null) {
      var last = dir;
      gp = p;
      p = node;
      node = node.get_child(dir);
      var cmp = this._comparator(data, node.data);
      dir = cmp > 0;
      if (cmp === 0) {
        found = node;
      }
      if (!RBTree.is_red(node) && !RBTree.is_red(node.get_child(dir))) {
        if (RBTree.is_red(node.get_child(!dir))) {
          var sr = RBTree.single_rotate(node, dir);
          p.set_child(last, sr);
          p = sr;
        } else if (!RBTree.is_red(node.get_child(!dir))) {
          var sibling = p.get_child(!last);
          if (sibling !== null) {
            if (!RBTree.is_red(sibling.get_child(!last)) && !RBTree.is_red(sibling.get_child(last))) {
              p.red = false;
              sibling.red = true;
              node.red = true;
            } else {
              var dir2 = gp.right === p;
              if (RBTree.is_red(sibling.get_child(last))) {
                gp.set_child(dir2, RBTree.double_rotate(p, last));
              } else if (RBTree.is_red(sibling.get_child(!last))) {
                gp.set_child(dir2, RBTree.single_rotate(p, last));
              }
              var gpc = gp.get_child(dir2);
              gpc.red = true;
              node.red = true;
              gpc.left.red = false;
              gpc.right.red = false;
            }
          }
        }
      }
    }
    if (found !== null) {
      found.data = node.data;
      p.set_child(p.right === node, node.get_child(node.left === null));
      this.size--;
    }
    this._root = head.right;
    if (this._root !== null) {
      this._root.red = false;
    }
    return found !== null;
  };
  RBTree.is_red = function (node) {
    return node !== null && node.red;
  };
  RBTree.single_rotate = function (root, dir) {
    var save = root.get_child(!dir);
    root.set_child(!dir, save.get_child(dir));
    save.set_child(dir, root);
    root.red = true;
    save.red = false;
    return save;
  };
  RBTree.double_rotate = function (root, dir) {
    root.set_child(!dir, RBTree.single_rotate(root.get_child(!dir), !dir));
    return RBTree.single_rotate(root, dir);
  };
  return RBTree;
})(TreeBase);
rbtree.RBTree = RBTree;

var __extends$4 =
  (commonjsGlobal && commonjsGlobal.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(rectangle, '__esModule', { value: true });
var vpsc_1$1 = vpsc;
var rbtree_1 = rbtree;
function computeGroupBounds(g) {
  g.bounds =
    typeof g.leaves !== 'undefined'
      ? g.leaves.reduce(function (r, c) {
          return c.bounds.union(r);
        }, Rectangle.empty())
      : Rectangle.empty();
  if (typeof g.groups !== 'undefined')
    g.bounds = g.groups.reduce(function (r, c) {
      return computeGroupBounds(c).union(r);
    }, g.bounds);
  g.bounds = g.bounds.inflate(g.padding);
  return g.bounds;
}
rectangle.computeGroupBounds = computeGroupBounds;
var Rectangle = (function () {
  function Rectangle(x, X, y, Y) {
    this.x = x;
    this.X = X;
    this.y = y;
    this.Y = Y;
  }
  Rectangle.empty = function () {
    return new Rectangle(
      Number.POSITIVE_INFINITY,
      Number.NEGATIVE_INFINITY,
      Number.POSITIVE_INFINITY,
      Number.NEGATIVE_INFINITY
    );
  };
  Rectangle.prototype.cx = function () {
    return (this.x + this.X) / 2;
  };
  Rectangle.prototype.cy = function () {
    return (this.y + this.Y) / 2;
  };
  Rectangle.prototype.overlapX = function (r) {
    var ux = this.cx(),
      vx = r.cx();
    if (ux <= vx && r.x < this.X) return this.X - r.x;
    if (vx <= ux && this.x < r.X) return r.X - this.x;
    return 0;
  };
  Rectangle.prototype.overlapY = function (r) {
    var uy = this.cy(),
      vy = r.cy();
    if (uy <= vy && r.y < this.Y) return this.Y - r.y;
    if (vy <= uy && this.y < r.Y) return r.Y - this.y;
    return 0;
  };
  Rectangle.prototype.setXCentre = function (cx) {
    var dx = cx - this.cx();
    this.x += dx;
    this.X += dx;
  };
  Rectangle.prototype.setYCentre = function (cy) {
    var dy = cy - this.cy();
    this.y += dy;
    this.Y += dy;
  };
  Rectangle.prototype.width = function () {
    return this.X - this.x;
  };
  Rectangle.prototype.height = function () {
    return this.Y - this.y;
  };
  Rectangle.prototype.union = function (r) {
    return new Rectangle(Math.min(this.x, r.x), Math.max(this.X, r.X), Math.min(this.y, r.y), Math.max(this.Y, r.Y));
  };
  Rectangle.prototype.lineIntersections = function (x1, y1, x2, y2) {
    var sides = [
      [this.x, this.y, this.X, this.y],
      [this.X, this.y, this.X, this.Y],
      [this.X, this.Y, this.x, this.Y],
      [this.x, this.Y, this.x, this.y]
    ];
    var intersections = [];
    for (var i = 0; i < 4; ++i) {
      var r = Rectangle.lineIntersection(x1, y1, x2, y2, sides[i][0], sides[i][1], sides[i][2], sides[i][3]);
      if (r !== null) intersections.push({ x: r.x, y: r.y });
    }
    return intersections;
  };
  Rectangle.prototype.rayIntersection = function (x2, y2) {
    var ints = this.lineIntersections(this.cx(), this.cy(), x2, y2);
    return ints.length > 0 ? ints[0] : null;
  };
  Rectangle.prototype.vertices = function () {
    return [
      { x: this.x, y: this.y },
      { x: this.X, y: this.y },
      { x: this.X, y: this.Y },
      { x: this.x, y: this.Y }
    ];
  };
  Rectangle.lineIntersection = function (x1, y1, x2, y2, x3, y3, x4, y4) {
    var dx12 = x2 - x1,
      dx34 = x4 - x3,
      dy12 = y2 - y1,
      dy34 = y4 - y3,
      denominator = dy34 * dx12 - dx34 * dy12;
    if (denominator == 0) return null;
    var dx31 = x1 - x3,
      dy31 = y1 - y3,
      numa = dx34 * dy31 - dy34 * dx31,
      a = numa / denominator,
      numb = dx12 * dy31 - dy12 * dx31,
      b = numb / denominator;
    if (a >= 0 && a <= 1 && b >= 0 && b <= 1) {
      return {
        x: x1 + a * dx12,
        y: y1 + a * dy12
      };
    }
    return null;
  };
  Rectangle.prototype.inflate = function (pad) {
    return new Rectangle(this.x - pad, this.X + pad, this.y - pad, this.Y + pad);
  };
  return Rectangle;
})();
rectangle.Rectangle = Rectangle;
function makeEdgeBetween(source, target, ah) {
  var si = source.rayIntersection(target.cx(), target.cy()) || { x: source.cx(), y: source.cy() },
    ti = target.rayIntersection(source.cx(), source.cy()) || { x: target.cx(), y: target.cy() },
    dx = ti.x - si.x,
    dy = ti.y - si.y,
    l = Math.sqrt(dx * dx + dy * dy),
    al = l - ah;
  return {
    sourceIntersection: si,
    targetIntersection: ti,
    arrowStart: { x: si.x + (al * dx) / l, y: si.y + (al * dy) / l }
  };
}
rectangle.makeEdgeBetween = makeEdgeBetween;
function makeEdgeTo(s, target, ah) {
  var ti = target.rayIntersection(s.x, s.y);
  if (!ti) ti = { x: target.cx(), y: target.cy() };
  var dx = ti.x - s.x,
    dy = ti.y - s.y,
    l = Math.sqrt(dx * dx + dy * dy);
  return { x: ti.x - (ah * dx) / l, y: ti.y - (ah * dy) / l };
}
rectangle.makeEdgeTo = makeEdgeTo;
var Node$1 = (function () {
  function Node(v, r, pos) {
    this.v = v;
    this.r = r;
    this.pos = pos;
    this.prev = makeRBTree();
    this.next = makeRBTree();
  }
  return Node;
})();
var Event = (function () {
  function Event(isOpen, v, pos) {
    this.isOpen = isOpen;
    this.v = v;
    this.pos = pos;
  }
  return Event;
})();
function compareEvents(a, b) {
  if (a.pos > b.pos) {
    return 1;
  }
  if (a.pos < b.pos) {
    return -1;
  }
  if (a.isOpen) {
    return -1;
  }
  if (b.isOpen) {
    return 1;
  }
  return 0;
}
function makeRBTree() {
  return new rbtree_1.RBTree(function (a, b) {
    return a.pos - b.pos;
  });
}
var xRect = {
  getCentre: function (r) {
    return r.cx();
  },
  getOpen: function (r) {
    return r.y;
  },
  getClose: function (r) {
    return r.Y;
  },
  getSize: function (r) {
    return r.width();
  },
  makeRect: function (open, close, center, size) {
    return new Rectangle(center - size / 2, center + size / 2, open, close);
  },
  findNeighbours: findXNeighbours
};
var yRect = {
  getCentre: function (r) {
    return r.cy();
  },
  getOpen: function (r) {
    return r.x;
  },
  getClose: function (r) {
    return r.X;
  },
  getSize: function (r) {
    return r.height();
  },
  makeRect: function (open, close, center, size) {
    return new Rectangle(open, close, center - size / 2, center + size / 2);
  },
  findNeighbours: findYNeighbours
};
function generateGroupConstraints(root, f, minSep, isContained) {
  if (isContained === void 0) {
    isContained = false;
  }
  var padding = root.padding,
    gn = typeof root.groups !== 'undefined' ? root.groups.length : 0,
    ln = typeof root.leaves !== 'undefined' ? root.leaves.length : 0,
    childConstraints = !gn
      ? []
      : root.groups.reduce(function (ccs, g) {
          return ccs.concat(generateGroupConstraints(g, f, minSep, true));
        }, []),
    n = (isContained ? 2 : 0) + ln + gn,
    vs = new Array(n),
    rs = new Array(n),
    i = 0,
    add = function (r, v) {
      rs[i] = r;
      vs[i++] = v;
    };
  if (isContained) {
    var b = root.bounds,
      c = f.getCentre(b),
      s = f.getSize(b) / 2,
      open = f.getOpen(b),
      close = f.getClose(b),
      min = c - s + padding / 2,
      max = c + s - padding / 2;
    root.minVar.desiredPosition = min;
    add(f.makeRect(open, close, min, padding), root.minVar);
    root.maxVar.desiredPosition = max;
    add(f.makeRect(open, close, max, padding), root.maxVar);
  }
  if (ln)
    root.leaves.forEach(function (l) {
      return add(l.bounds, l.variable);
    });
  if (gn)
    root.groups.forEach(function (g) {
      var b = g.bounds;
      add(f.makeRect(f.getOpen(b), f.getClose(b), f.getCentre(b), f.getSize(b)), g.minVar);
    });
  var cs = generateConstraints(rs, vs, f, minSep);
  if (gn) {
    vs.forEach(function (v) {
      (v.cOut = []), (v.cIn = []);
    });
    cs.forEach(function (c) {
      c.left.cOut.push(c), c.right.cIn.push(c);
    });
    root.groups.forEach(function (g) {
      var gapAdjustment = (g.padding - f.getSize(g.bounds)) / 2;
      g.minVar.cIn.forEach(function (c) {
        return (c.gap += gapAdjustment);
      });
      g.minVar.cOut.forEach(function (c) {
        c.left = g.maxVar;
        c.gap += gapAdjustment;
      });
    });
  }
  return childConstraints.concat(cs);
}
function generateConstraints(rs, vars, rect, minSep) {
  var i,
    n = rs.length;
  var N = 2 * n;
  console.assert(vars.length >= n);
  var events = new Array(N);
  for (i = 0; i < n; ++i) {
    var r = rs[i];
    var v = new Node$1(vars[i], r, rect.getCentre(r));
    events[i] = new Event(true, v, rect.getOpen(r));
    events[i + n] = new Event(false, v, rect.getClose(r));
  }
  events.sort(compareEvents);
  var cs = new Array();
  var scanline = makeRBTree();
  for (i = 0; i < N; ++i) {
    var e = events[i];
    var v = e.v;
    if (e.isOpen) {
      scanline.insert(v);
      rect.findNeighbours(v, scanline);
    } else {
      scanline.remove(v);
      var makeConstraint = function (l, r) {
        var sep = (rect.getSize(l.r) + rect.getSize(r.r)) / 2 + minSep;
        cs.push(new vpsc_1$1.Constraint(l.v, r.v, sep));
      };
      var visitNeighbours = function (forward, reverse, mkcon) {
        var u,
          it = v[forward].iterator();
        while ((u = it[forward]()) !== null) {
          mkcon(u, v);
          u[reverse].remove(v);
        }
      };
      visitNeighbours('prev', 'next', function (u, v) {
        return makeConstraint(u, v);
      });
      visitNeighbours('next', 'prev', function (u, v) {
        return makeConstraint(v, u);
      });
    }
  }
  console.assert(scanline.size === 0);
  return cs;
}
function findXNeighbours(v, scanline) {
  var f = function (forward, reverse) {
    var it = scanline.findIter(v);
    var u;
    while ((u = it[forward]()) !== null) {
      var uovervX = u.r.overlapX(v.r);
      if (uovervX <= 0 || uovervX <= u.r.overlapY(v.r)) {
        v[forward].insert(u);
        u[reverse].insert(v);
      }
      if (uovervX <= 0) {
        break;
      }
    }
  };
  f('next', 'prev');
  f('prev', 'next');
}
function findYNeighbours(v, scanline) {
  var f = function (forward, reverse) {
    var u = scanline.findIter(v)[forward]();
    if (u !== null && u.r.overlapX(v.r) > 0) {
      v[forward].insert(u);
      u[reverse].insert(v);
    }
  };
  f('next', 'prev');
  f('prev', 'next');
}
function generateXConstraints(rs, vars) {
  return generateConstraints(rs, vars, xRect, 1e-6);
}
rectangle.generateXConstraints = generateXConstraints;
function generateYConstraints(rs, vars) {
  return generateConstraints(rs, vars, yRect, 1e-6);
}
rectangle.generateYConstraints = generateYConstraints;
function generateXGroupConstraints(root) {
  return generateGroupConstraints(root, xRect, 1e-6);
}
rectangle.generateXGroupConstraints = generateXGroupConstraints;
function generateYGroupConstraints(root) {
  return generateGroupConstraints(root, yRect, 1e-6);
}
rectangle.generateYGroupConstraints = generateYGroupConstraints;
function removeOverlaps(rs) {
  var vs = rs.map(function (r) {
    return new vpsc_1$1.Variable(r.cx());
  });
  var cs = generateXConstraints(rs, vs);
  var solver = new vpsc_1$1.Solver(vs, cs);
  solver.solve();
  vs.forEach(function (v, i) {
    return rs[i].setXCentre(v.position());
  });
  vs = rs.map(function (r) {
    return new vpsc_1$1.Variable(r.cy());
  });
  cs = generateYConstraints(rs, vs);
  solver = new vpsc_1$1.Solver(vs, cs);
  solver.solve();
  vs.forEach(function (v, i) {
    return rs[i].setYCentre(v.position());
  });
}
rectangle.removeOverlaps = removeOverlaps;
var IndexedVariable = (function (_super) {
  __extends$4(IndexedVariable, _super);
  function IndexedVariable(index, w) {
    var _this = _super.call(this, 0, w) || this;
    _this.index = index;
    return _this;
  }
  return IndexedVariable;
})(vpsc_1$1.Variable);
rectangle.IndexedVariable = IndexedVariable;
var Projection = (function () {
  function Projection(nodes, groups, rootGroup, constraints, avoidOverlaps) {
    var _this = this;
    if (rootGroup === void 0) {
      rootGroup = null;
    }
    if (constraints === void 0) {
      constraints = null;
    }
    if (avoidOverlaps === void 0) {
      avoidOverlaps = false;
    }
    this.nodes = nodes;
    this.groups = groups;
    this.rootGroup = rootGroup;
    this.avoidOverlaps = avoidOverlaps;
    this.variables = nodes.map(function (v, i) {
      return (v.variable = new IndexedVariable(i, 1));
    });
    if (constraints) this.createConstraints(constraints);
    if (avoidOverlaps && rootGroup && typeof rootGroup.groups !== 'undefined') {
      nodes.forEach(function (v) {
        if (!v.width || !v.height) {
          v.bounds = new Rectangle(v.x, v.x, v.y, v.y);
          return;
        }
        var w2 = v.width / 2,
          h2 = v.height / 2;
        v.bounds = new Rectangle(v.x - w2, v.x + w2, v.y - h2, v.y + h2);
      });
      computeGroupBounds(rootGroup);
      var i = nodes.length;
      groups.forEach(function (g) {
        _this.variables[i] = g.minVar = new IndexedVariable(
          i++,
          typeof g.stiffness !== 'undefined' ? g.stiffness : 0.01
        );
        _this.variables[i] = g.maxVar = new IndexedVariable(
          i++,
          typeof g.stiffness !== 'undefined' ? g.stiffness : 0.01
        );
      });
    }
  }
  Projection.prototype.createSeparation = function (c) {
    return new vpsc_1$1.Constraint(
      this.nodes[c.left].variable,
      this.nodes[c.right].variable,
      c.gap,
      typeof c.equality !== 'undefined' ? c.equality : false
    );
  };
  Projection.prototype.makeFeasible = function (c) {
    var _this = this;
    if (!this.avoidOverlaps) return;
    var axis = 'x',
      dim = 'width';
    if (c.axis === 'x') (axis = 'y'), (dim = 'height');
    var vs = c.offsets
      .map(function (o) {
        return _this.nodes[o.node];
      })
      .sort(function (a, b) {
        return a[axis] - b[axis];
      });
    var p = null;
    vs.forEach(function (v) {
      if (p) {
        var nextPos = p[axis] + p[dim];
        if (nextPos > v[axis]) {
          v[axis] = nextPos;
        }
      }
      p = v;
    });
  };
  Projection.prototype.createAlignment = function (c) {
    var _this = this;
    var u = this.nodes[c.offsets[0].node].variable;
    this.makeFeasible(c);
    var cs = c.axis === 'x' ? this.xConstraints : this.yConstraints;
    c.offsets.slice(1).forEach(function (o) {
      var v = _this.nodes[o.node].variable;
      cs.push(new vpsc_1$1.Constraint(u, v, o.offset, true));
    });
  };
  Projection.prototype.createConstraints = function (constraints) {
    var _this = this;
    var isSep = function (c) {
      return typeof c.type === 'undefined' || c.type === 'separation';
    };
    this.xConstraints = constraints
      .filter(function (c) {
        return c.axis === 'x' && isSep(c);
      })
      .map(function (c) {
        return _this.createSeparation(c);
      });
    this.yConstraints = constraints
      .filter(function (c) {
        return c.axis === 'y' && isSep(c);
      })
      .map(function (c) {
        return _this.createSeparation(c);
      });
    constraints
      .filter(function (c) {
        return c.type === 'alignment';
      })
      .forEach(function (c) {
        return _this.createAlignment(c);
      });
  };
  Projection.prototype.setupVariablesAndBounds = function (x0, y0, desired, getDesired) {
    this.nodes.forEach(function (v, i) {
      if (v.fixed) {
        v.variable.weight = v.fixedWeight ? v.fixedWeight : 1000;
        desired[i] = getDesired(v);
      } else {
        v.variable.weight = 1;
      }
      var w = (v.width || 0) / 2,
        h = (v.height || 0) / 2;
      var ix = x0[i],
        iy = y0[i];
      v.bounds = new Rectangle(ix - w, ix + w, iy - h, iy + h);
    });
  };
  Projection.prototype.xProject = function (x0, y0, x) {
    if (!this.rootGroup && !(this.avoidOverlaps || this.xConstraints)) return;
    this.project(
      x0,
      y0,
      x0,
      x,
      function (v) {
        return v.px;
      },
      this.xConstraints,
      generateXGroupConstraints,
      function (v) {
        return v.bounds.setXCentre((x[v.variable.index] = v.variable.position()));
      },
      function (g) {
        var xmin = (x[g.minVar.index] = g.minVar.position());
        var xmax = (x[g.maxVar.index] = g.maxVar.position());
        var p2 = g.padding / 2;
        g.bounds.x = xmin - p2;
        g.bounds.X = xmax + p2;
      }
    );
  };
  Projection.prototype.yProject = function (x0, y0, y) {
    if (!this.rootGroup && !this.yConstraints) return;
    this.project(
      x0,
      y0,
      y0,
      y,
      function (v) {
        return v.py;
      },
      this.yConstraints,
      generateYGroupConstraints,
      function (v) {
        return v.bounds.setYCentre((y[v.variable.index] = v.variable.position()));
      },
      function (g) {
        var ymin = (y[g.minVar.index] = g.minVar.position());
        var ymax = (y[g.maxVar.index] = g.maxVar.position());
        var p2 = g.padding / 2;
        g.bounds.y = ymin - p2;
        g.bounds.Y = ymax + p2;
      }
    );
  };
  Projection.prototype.projectFunctions = function () {
    var _this = this;
    return [
      function (x0, y0, x) {
        return _this.xProject(x0, y0, x);
      },
      function (x0, y0, y) {
        return _this.yProject(x0, y0, y);
      }
    ];
  };
  Projection.prototype.project = function (
    x0,
    y0,
    start,
    desired,
    getDesired,
    cs,
    generateConstraints,
    updateNodeBounds,
    updateGroupBounds
  ) {
    this.setupVariablesAndBounds(x0, y0, desired, getDesired);
    if (this.rootGroup && this.avoidOverlaps) {
      computeGroupBounds(this.rootGroup);
      cs = cs.concat(generateConstraints(this.rootGroup));
    }
    this.solve(this.variables, cs, start, desired);
    this.nodes.forEach(updateNodeBounds);
    if (this.rootGroup && this.avoidOverlaps) {
      this.groups.forEach(updateGroupBounds);
      computeGroupBounds(this.rootGroup);
    }
  };
  Projection.prototype.solve = function (vs, cs, starting, desired) {
    var solver = new vpsc_1$1.Solver(vs, cs);
    solver.setStartingPositions(starting);
    solver.setDesiredPositions(desired);
    solver.solve();
  };
  return Projection;
})();
rectangle.Projection = Projection;

var shortestpaths = {};

var pqueue = {};

Object.defineProperty(pqueue, '__esModule', { value: true });
var PairingHeap = (function () {
  function PairingHeap(elem) {
    this.elem = elem;
    this.subheaps = [];
  }
  PairingHeap.prototype.toString = function (selector) {
    var str = '',
      needComma = false;
    for (var i = 0; i < this.subheaps.length; ++i) {
      var subheap = this.subheaps[i];
      if (!subheap.elem) {
        needComma = false;
        continue;
      }
      if (needComma) {
        str = str + ',';
      }
      str = str + subheap.toString(selector);
      needComma = true;
    }
    if (str !== '') {
      str = '(' + str + ')';
    }
    return (this.elem ? selector(this.elem) : '') + str;
  };
  PairingHeap.prototype.forEach = function (f) {
    if (!this.empty()) {
      f(this.elem, this);
      this.subheaps.forEach(function (s) {
        return s.forEach(f);
      });
    }
  };
  PairingHeap.prototype.count = function () {
    return this.empty()
      ? 0
      : 1 +
          this.subheaps.reduce(function (n, h) {
            return n + h.count();
          }, 0);
  };
  PairingHeap.prototype.min = function () {
    return this.elem;
  };
  PairingHeap.prototype.empty = function () {
    return this.elem == null;
  };
  PairingHeap.prototype.contains = function (h) {
    if (this === h) return true;
    for (var i = 0; i < this.subheaps.length; i++) {
      if (this.subheaps[i].contains(h)) return true;
    }
    return false;
  };
  PairingHeap.prototype.isHeap = function (lessThan) {
    var _this = this;
    return this.subheaps.every(function (h) {
      return lessThan(_this.elem, h.elem) && h.isHeap(lessThan);
    });
  };
  PairingHeap.prototype.insert = function (obj, lessThan) {
    return this.merge(new PairingHeap(obj), lessThan);
  };
  PairingHeap.prototype.merge = function (heap2, lessThan) {
    if (this.empty()) return heap2;
    else if (heap2.empty()) return this;
    else if (lessThan(this.elem, heap2.elem)) {
      this.subheaps.push(heap2);
      return this;
    } else {
      heap2.subheaps.push(this);
      return heap2;
    }
  };
  PairingHeap.prototype.removeMin = function (lessThan) {
    if (this.empty()) return null;
    else return this.mergePairs(lessThan);
  };
  PairingHeap.prototype.mergePairs = function (lessThan) {
    if (this.subheaps.length == 0) return new PairingHeap(null);
    else if (this.subheaps.length == 1) {
      return this.subheaps[0];
    } else {
      var firstPair = this.subheaps.pop().merge(this.subheaps.pop(), lessThan);
      var remaining = this.mergePairs(lessThan);
      return firstPair.merge(remaining, lessThan);
    }
  };
  PairingHeap.prototype.decreaseKey = function (subheap, newValue, setHeapNode, lessThan) {
    var newHeap = subheap.removeMin(lessThan);
    subheap.elem = newHeap.elem;
    subheap.subheaps = newHeap.subheaps;
    if (setHeapNode !== null && newHeap.elem !== null) {
      setHeapNode(subheap.elem, subheap);
    }
    var pairingNode = new PairingHeap(newValue);
    if (setHeapNode !== null) {
      setHeapNode(newValue, pairingNode);
    }
    return this.merge(pairingNode, lessThan);
  };
  return PairingHeap;
})();
pqueue.PairingHeap = PairingHeap;
var PriorityQueue = (function () {
  function PriorityQueue(lessThan) {
    this.lessThan = lessThan;
  }
  PriorityQueue.prototype.top = function () {
    if (this.empty()) {
      return null;
    }
    return this.root.elem;
  };
  PriorityQueue.prototype.push = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var pairingNode;
    for (var i = 0, arg; (arg = args[i]); ++i) {
      pairingNode = new PairingHeap(arg);
      this.root = this.empty() ? pairingNode : this.root.merge(pairingNode, this.lessThan);
    }
    return pairingNode;
  };
  PriorityQueue.prototype.empty = function () {
    return !this.root || !this.root.elem;
  };
  PriorityQueue.prototype.isHeap = function () {
    return this.root.isHeap(this.lessThan);
  };
  PriorityQueue.prototype.forEach = function (f) {
    this.root.forEach(f);
  };
  PriorityQueue.prototype.pop = function () {
    if (this.empty()) {
      return null;
    }
    var obj = this.root.min();
    this.root = this.root.removeMin(this.lessThan);
    return obj;
  };
  PriorityQueue.prototype.reduceKey = function (heapNode, newKey, setHeapNode) {
    if (setHeapNode === void 0) {
      setHeapNode = null;
    }
    this.root = this.root.decreaseKey(heapNode, newKey, setHeapNode, this.lessThan);
  };
  PriorityQueue.prototype.toString = function (selector) {
    return this.root.toString(selector);
  };
  PriorityQueue.prototype.count = function () {
    return this.root.count();
  };
  return PriorityQueue;
})();
pqueue.PriorityQueue = PriorityQueue;

Object.defineProperty(shortestpaths, '__esModule', { value: true });
var pqueue_1 = pqueue;
var Neighbour = (function () {
  function Neighbour(id, distance) {
    this.id = id;
    this.distance = distance;
  }
  return Neighbour;
})();
var Node = (function () {
  function Node(id) {
    this.id = id;
    this.neighbours = [];
  }
  return Node;
})();
var QueueEntry = (function () {
  function QueueEntry(node, prev, d) {
    this.node = node;
    this.prev = prev;
    this.d = d;
  }
  return QueueEntry;
})();
var Calculator = (function () {
  function Calculator(n, es, getSourceIndex, getTargetIndex, getLength) {
    this.n = n;
    this.es = es;
    this.neighbours = new Array(this.n);
    var i = this.n;
    while (i--) this.neighbours[i] = new Node(i);
    i = this.es.length;
    while (i--) {
      var e = this.es[i];
      var u = getSourceIndex(e),
        v = getTargetIndex(e);
      var d = getLength(e);
      this.neighbours[u].neighbours.push(new Neighbour(v, d));
      this.neighbours[v].neighbours.push(new Neighbour(u, d));
    }
  }
  Calculator.prototype.DistanceMatrix = function () {
    var D = new Array(this.n);
    for (var i = 0; i < this.n; ++i) {
      D[i] = this.dijkstraNeighbours(i);
    }
    return D;
  };
  Calculator.prototype.DistancesFromNode = function (start) {
    return this.dijkstraNeighbours(start);
  };
  Calculator.prototype.PathFromNodeToNode = function (start, end) {
    return this.dijkstraNeighbours(start, end);
  };
  Calculator.prototype.PathFromNodeToNodeWithPrevCost = function (start, end, prevCost) {
    var q = new pqueue_1.PriorityQueue(function (a, b) {
        return a.d <= b.d;
      }),
      u = this.neighbours[start],
      qu = new QueueEntry(u, null, 0),
      visitedFrom = {};
    q.push(qu);
    while (!q.empty()) {
      qu = q.pop();
      u = qu.node;
      if (u.id === end) {
        break;
      }
      var i = u.neighbours.length;
      while (i--) {
        var neighbour = u.neighbours[i],
          v = this.neighbours[neighbour.id];
        if (qu.prev && v.id === qu.prev.node.id) continue;
        var viduid = v.id + ',' + u.id;
        if (viduid in visitedFrom && visitedFrom[viduid] <= qu.d) continue;
        var cc = qu.prev ? prevCost(qu.prev.node.id, u.id, v.id) : 0,
          t = qu.d + neighbour.distance + cc;
        visitedFrom[viduid] = t;
        q.push(new QueueEntry(v, qu, t));
      }
    }
    var path = [];
    while (qu.prev) {
      qu = qu.prev;
      path.push(qu.node.id);
    }
    return path;
  };
  Calculator.prototype.dijkstraNeighbours = function (start, dest) {
    if (dest === void 0) {
      dest = -1;
    }
    var q = new pqueue_1.PriorityQueue(function (a, b) {
        return a.d <= b.d;
      }),
      i = this.neighbours.length,
      d = new Array(i);
    while (i--) {
      var node = this.neighbours[i];
      node.d = i === start ? 0 : Number.POSITIVE_INFINITY;
      node.q = q.push(node);
    }
    while (!q.empty()) {
      var u = q.pop();
      d[u.id] = u.d;
      if (u.id === dest) {
        var path = [];
        var v = u;
        while (typeof v.prev !== 'undefined') {
          path.push(v.prev.id);
          v = v.prev;
        }
        return path;
      }
      i = u.neighbours.length;
      while (i--) {
        var neighbour = u.neighbours[i];
        var v = this.neighbours[neighbour.id];
        var t = u.d + neighbour.distance;
        if (u.d !== Number.MAX_VALUE && v.d > t) {
          v.d = t;
          v.prev = u;
          q.reduceKey(v.q, v, function (e, q) {
            return (e.q = q);
          });
        }
      }
    }
    return d;
  };
  return Calculator;
})();
shortestpaths.Calculator = Calculator;

var geom = {};

var __extends$3 =
  (commonjsGlobal && commonjsGlobal.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(geom, '__esModule', { value: true });
var rectangle_1$2 = rectangle;
var Point = (function () {
  function Point() {}
  return Point;
})();
geom.Point = Point;
var LineSegment = (function () {
  function LineSegment(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  return LineSegment;
})();
geom.LineSegment = LineSegment;
var PolyPoint = (function (_super) {
  __extends$3(PolyPoint, _super);
  function PolyPoint() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  return PolyPoint;
})(Point);
geom.PolyPoint = PolyPoint;
function isLeft(P0, P1, P2) {
  return (P1.x - P0.x) * (P2.y - P0.y) - (P2.x - P0.x) * (P1.y - P0.y);
}
geom.isLeft = isLeft;
function above(p, vi, vj) {
  return isLeft(p, vi, vj) > 0;
}
function below(p, vi, vj) {
  return isLeft(p, vi, vj) < 0;
}
function ConvexHull(S) {
  var P = S.slice(0).sort(function (a, b) {
    return a.x !== b.x ? b.x - a.x : b.y - a.y;
  });
  var n = S.length,
    i;
  var minmin = 0;
  var xmin = P[0].x;
  for (i = 1; i < n; ++i) {
    if (P[i].x !== xmin) break;
  }
  var minmax = i - 1;
  var H = [];
  H.push(P[minmin]);
  if (minmax === n - 1) {
    if (P[minmax].y !== P[minmin].y) H.push(P[minmax]);
  } else {
    var maxmin,
      maxmax = n - 1;
    var xmax = P[n - 1].x;
    for (i = n - 2; i >= 0; i--) if (P[i].x !== xmax) break;
    maxmin = i + 1;
    i = minmax;
    while (++i <= maxmin) {
      if (isLeft(P[minmin], P[maxmin], P[i]) >= 0 && i < maxmin) continue;
      while (H.length > 1) {
        if (isLeft(H[H.length - 2], H[H.length - 1], P[i]) > 0) break;
        else H.length -= 1;
      }
      if (i != minmin) H.push(P[i]);
    }
    if (maxmax != maxmin) H.push(P[maxmax]);
    var bot = H.length;
    i = maxmin;
    while (--i >= minmax) {
      if (isLeft(P[maxmax], P[minmax], P[i]) >= 0 && i > minmax) continue;
      while (H.length > bot) {
        if (isLeft(H[H.length - 2], H[H.length - 1], P[i]) > 0) break;
        else H.length -= 1;
      }
      if (i != minmin) H.push(P[i]);
    }
  }
  return H;
}
geom.ConvexHull = ConvexHull;
function clockwiseRadialSweep(p, P, f) {
  P.slice(0)
    .sort(function (a, b) {
      return Math.atan2(a.y - p.y, a.x - p.x) - Math.atan2(b.y - p.y, b.x - p.x);
    })
    .forEach(f);
}
geom.clockwiseRadialSweep = clockwiseRadialSweep;
function tangent_PointPolyC(P, V) {
  var Vclosed = V.slice(0);
  Vclosed.push(V[0]);
  return { rtan: Rtangent_PointPolyC(P, Vclosed), ltan: Ltangent_PointPolyC(P, Vclosed) };
}
function Rtangent_PointPolyC(P, V) {
  var n = V.length - 1;
  var a, b, c;
  var upA, dnC;
  if (below(P, V[1], V[0]) && !above(P, V[n - 1], V[0])) return 0;
  for (a = 0, b = n; ; ) {
    if (b - a === 1)
      if (above(P, V[a], V[b])) return a;
      else return b;
    c = Math.floor((a + b) / 2);
    dnC = below(P, V[c + 1], V[c]);
    if (dnC && !above(P, V[c - 1], V[c])) return c;
    upA = above(P, V[a + 1], V[a]);
    if (upA) {
      if (dnC) b = c;
      else {
        if (above(P, V[a], V[c])) b = c;
        else a = c;
      }
    } else {
      if (!dnC) a = c;
      else {
        if (below(P, V[a], V[c])) b = c;
        else a = c;
      }
    }
  }
}
function Ltangent_PointPolyC(P, V) {
  var n = V.length - 1;
  var a, b, c;
  var dnA, dnC;
  if (above(P, V[n - 1], V[0]) && !below(P, V[1], V[0])) return 0;
  for (a = 0, b = n; ; ) {
    if (b - a === 1)
      if (below(P, V[a], V[b])) return a;
      else return b;
    c = Math.floor((a + b) / 2);
    dnC = below(P, V[c + 1], V[c]);
    if (above(P, V[c - 1], V[c]) && !dnC) return c;
    dnA = below(P, V[a + 1], V[a]);
    if (dnA) {
      if (!dnC) b = c;
      else {
        if (below(P, V[a], V[c])) b = c;
        else a = c;
      }
    } else {
      if (dnC) a = c;
      else {
        if (above(P, V[a], V[c])) b = c;
        else a = c;
      }
    }
  }
}
function tangent_PolyPolyC(V, W, t1, t2, cmp1, cmp2) {
  var ix1, ix2;
  ix1 = t1(W[0], V);
  ix2 = t2(V[ix1], W);
  var done = false;
  while (!done) {
    done = true;
    while (true) {
      if (ix1 === V.length - 1) ix1 = 0;
      if (cmp1(W[ix2], V[ix1], V[ix1 + 1])) break;
      ++ix1;
    }
    while (true) {
      if (ix2 === 0) ix2 = W.length - 1;
      if (cmp2(V[ix1], W[ix2], W[ix2 - 1])) break;
      --ix2;
      done = false;
    }
  }
  return { t1: ix1, t2: ix2 };
}
geom.tangent_PolyPolyC = tangent_PolyPolyC;
function LRtangent_PolyPolyC(V, W) {
  var rl = RLtangent_PolyPolyC(W, V);
  return { t1: rl.t2, t2: rl.t1 };
}
geom.LRtangent_PolyPolyC = LRtangent_PolyPolyC;
function RLtangent_PolyPolyC(V, W) {
  return tangent_PolyPolyC(V, W, Rtangent_PointPolyC, Ltangent_PointPolyC, above, below);
}
geom.RLtangent_PolyPolyC = RLtangent_PolyPolyC;
function LLtangent_PolyPolyC(V, W) {
  return tangent_PolyPolyC(V, W, Ltangent_PointPolyC, Ltangent_PointPolyC, below, below);
}
geom.LLtangent_PolyPolyC = LLtangent_PolyPolyC;
function RRtangent_PolyPolyC(V, W) {
  return tangent_PolyPolyC(V, W, Rtangent_PointPolyC, Rtangent_PointPolyC, above, above);
}
geom.RRtangent_PolyPolyC = RRtangent_PolyPolyC;
var BiTangent = (function () {
  function BiTangent(t1, t2) {
    this.t1 = t1;
    this.t2 = t2;
  }
  return BiTangent;
})();
geom.BiTangent = BiTangent;
var BiTangents = (function () {
  function BiTangents() {}
  return BiTangents;
})();
geom.BiTangents = BiTangents;
var TVGPoint = (function (_super) {
  __extends$3(TVGPoint, _super);
  function TVGPoint() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  return TVGPoint;
})(Point);
geom.TVGPoint = TVGPoint;
var VisibilityVertex = (function () {
  function VisibilityVertex(id, polyid, polyvertid, p) {
    this.id = id;
    this.polyid = polyid;
    this.polyvertid = polyvertid;
    this.p = p;
    p.vv = this;
  }
  return VisibilityVertex;
})();
geom.VisibilityVertex = VisibilityVertex;
var VisibilityEdge = (function () {
  function VisibilityEdge(source, target) {
    this.source = source;
    this.target = target;
  }
  VisibilityEdge.prototype.length = function () {
    var dx = this.source.p.x - this.target.p.x;
    var dy = this.source.p.y - this.target.p.y;
    return Math.sqrt(dx * dx + dy * dy);
  };
  return VisibilityEdge;
})();
geom.VisibilityEdge = VisibilityEdge;
var TangentVisibilityGraph = (function () {
  function TangentVisibilityGraph(P, g0) {
    this.P = P;
    this.V = [];
    this.E = [];
    if (!g0) {
      var n = P.length;
      for (var i = 0; i < n; i++) {
        var p = P[i];
        for (var j = 0; j < p.length; ++j) {
          var pj = p[j],
            vv = new VisibilityVertex(this.V.length, i, j, pj);
          this.V.push(vv);
          if (j > 0) this.E.push(new VisibilityEdge(p[j - 1].vv, vv));
        }
        if (p.length > 1) this.E.push(new VisibilityEdge(p[0].vv, p[p.length - 1].vv));
      }
      for (var i = 0; i < n - 1; i++) {
        var Pi = P[i];
        for (var j = i + 1; j < n; j++) {
          var Pj = P[j],
            t = tangents(Pi, Pj);
          for (var q in t) {
            var c = t[q],
              source = Pi[c.t1],
              target = Pj[c.t2];
            this.addEdgeIfVisible(source, target, i, j);
          }
        }
      }
    } else {
      this.V = g0.V.slice(0);
      this.E = g0.E.slice(0);
    }
  }
  TangentVisibilityGraph.prototype.addEdgeIfVisible = function (u, v, i1, i2) {
    if (!this.intersectsPolys(new LineSegment(u.x, u.y, v.x, v.y), i1, i2)) {
      this.E.push(new VisibilityEdge(u.vv, v.vv));
    }
  };
  TangentVisibilityGraph.prototype.addPoint = function (p, i1) {
    var n = this.P.length;
    this.V.push(new VisibilityVertex(this.V.length, n, 0, p));
    for (var i = 0; i < n; ++i) {
      if (i === i1) continue;
      var poly = this.P[i],
        t = tangent_PointPolyC(p, poly);
      this.addEdgeIfVisible(p, poly[t.ltan], i1, i);
      this.addEdgeIfVisible(p, poly[t.rtan], i1, i);
    }
    return p.vv;
  };
  TangentVisibilityGraph.prototype.intersectsPolys = function (l, i1, i2) {
    for (var i = 0, n = this.P.length; i < n; ++i) {
      if (i != i1 && i != i2 && intersects(l, this.P[i]).length > 0) {
        return true;
      }
    }
    return false;
  };
  return TangentVisibilityGraph;
})();
geom.TangentVisibilityGraph = TangentVisibilityGraph;
function intersects(l, P) {
  var ints = [];
  for (var i = 1, n = P.length; i < n; ++i) {
    var int = rectangle_1$2.Rectangle.lineIntersection(l.x1, l.y1, l.x2, l.y2, P[i - 1].x, P[i - 1].y, P[i].x, P[i].y);
    if (int) ints.push(int);
  }
  return ints;
}
function tangents(V, W) {
  var m = V.length - 1,
    n = W.length - 1;
  var bt = new BiTangents();
  for (var i = 0; i < m; ++i) {
    for (var j = 0; j < n; ++j) {
      var v1 = V[i == 0 ? m - 1 : i - 1];
      var v2 = V[i];
      var v3 = V[i + 1];
      var w1 = W[j == 0 ? n - 1 : j - 1];
      var w2 = W[j];
      var w3 = W[j + 1];
      var v1v2w2 = isLeft(v1, v2, w2);
      var v2w1w2 = isLeft(v2, w1, w2);
      var v2w2w3 = isLeft(v2, w2, w3);
      var w1w2v2 = isLeft(w1, w2, v2);
      var w2v1v2 = isLeft(w2, v1, v2);
      var w2v2v3 = isLeft(w2, v2, v3);
      if (v1v2w2 >= 0 && v2w1w2 >= 0 && v2w2w3 < 0 && w1w2v2 >= 0 && w2v1v2 >= 0 && w2v2v3 < 0) {
        bt.ll = new BiTangent(i, j);
      } else if (v1v2w2 <= 0 && v2w1w2 <= 0 && v2w2w3 > 0 && w1w2v2 <= 0 && w2v1v2 <= 0 && w2v2v3 > 0) {
        bt.rr = new BiTangent(i, j);
      } else if (v1v2w2 <= 0 && v2w1w2 > 0 && v2w2w3 <= 0 && w1w2v2 >= 0 && w2v1v2 < 0 && w2v2v3 >= 0) {
        bt.rl = new BiTangent(i, j);
      } else if (v1v2w2 >= 0 && v2w1w2 < 0 && v2w2w3 >= 0 && w1w2v2 <= 0 && w2v1v2 > 0 && w2v2v3 <= 0) {
        bt.lr = new BiTangent(i, j);
      }
    }
  }
  return bt;
}
geom.tangents = tangents;
function isPointInsidePoly(p, poly) {
  for (var i = 1, n = poly.length; i < n; ++i) if (below(poly[i - 1], poly[i], p)) return false;
  return true;
}
function isAnyPInQ(p, q) {
  return !p.every(function (v) {
    return !isPointInsidePoly(v, q);
  });
}
function polysOverlap(p, q) {
  if (isAnyPInQ(p, q)) return true;
  if (isAnyPInQ(q, p)) return true;
  for (var i = 1, n = p.length; i < n; ++i) {
    var v = p[i],
      u = p[i - 1];
    if (intersects(new LineSegment(u.x, u.y, v.x, v.y), q).length > 0) return true;
  }
  return false;
}
geom.polysOverlap = polysOverlap;

var handledisconnected = {};

Object.defineProperty(handledisconnected, '__esModule', { value: true });
var packingOptions = {
  PADDING: 10,
  GOLDEN_SECTION: (1 + Math.sqrt(5)) / 2,
  FLOAT_EPSILON: 0.0001,
  MAX_INERATIONS: 100
};
function applyPacking(graphs, w, h, node_size, desired_ratio, centerGraph) {
  if (desired_ratio === void 0) {
    desired_ratio = 1;
  }
  if (centerGraph === void 0) {
    centerGraph = true;
  }
  var init_x = 0,
    init_y = 0,
    svg_width = w,
    svg_height = h,
    desired_ratio = typeof desired_ratio !== 'undefined' ? desired_ratio : 1,
    node_size = typeof node_size !== 'undefined' ? node_size : 0,
    real_width = 0,
    real_height = 0,
    min_width = 0,
    global_bottom = 0,
    line = [];
  if (graphs.length == 0) return;
  calculate_bb(graphs);
  apply(graphs);
  if (centerGraph) {
    put_nodes_to_right_positions(graphs);
  }
  function calculate_bb(graphs) {
    graphs.forEach(function (g) {
      calculate_single_bb(g);
    });
    function calculate_single_bb(graph) {
      var min_x = Number.MAX_VALUE,
        min_y = Number.MAX_VALUE,
        max_x = 0,
        max_y = 0;
      graph.array.forEach(function (v) {
        var w = typeof v.width !== 'undefined' ? v.width : node_size;
        var h = typeof v.height !== 'undefined' ? v.height : node_size;
        w /= 2;
        h /= 2;
        max_x = Math.max(v.x + w, max_x);
        min_x = Math.min(v.x - w, min_x);
        max_y = Math.max(v.y + h, max_y);
        min_y = Math.min(v.y - h, min_y);
      });
      graph.width = max_x - min_x;
      graph.height = max_y - min_y;
    }
  }
  function put_nodes_to_right_positions(graphs) {
    graphs.forEach(function (g) {
      var center = { x: 0, y: 0 };
      g.array.forEach(function (node) {
        center.x += node.x;
        center.y += node.y;
      });
      center.x /= g.array.length;
      center.y /= g.array.length;
      var corner = { x: center.x - g.width / 2, y: center.y - g.height / 2 };
      var offset = {
        x: g.x - corner.x + svg_width / 2 - real_width / 2,
        y: g.y - corner.y + svg_height / 2 - real_height / 2
      };
      g.array.forEach(function (node) {
        node.x += offset.x;
        node.y += offset.y;
      });
    });
  }
  function apply(data, desired_ratio) {
    var curr_best_f = Number.POSITIVE_INFINITY;
    var curr_best = 0;
    data.sort(function (a, b) {
      return b.height - a.height;
    });
    min_width = data.reduce(function (a, b) {
      return a.width < b.width ? a.width : b.width;
    });
    var left = (x1 = min_width);
    var right = (x2 = get_entire_width(data));
    var iterationCounter = 0;
    var f_x1 = Number.MAX_VALUE;
    var f_x2 = Number.MAX_VALUE;
    var flag = -1;
    var dx = Number.MAX_VALUE;
    var df = Number.MAX_VALUE;
    while (dx > min_width || df > packingOptions.FLOAT_EPSILON) {
      if (flag != 1) {
        var x1 = right - (right - left) / packingOptions.GOLDEN_SECTION;
        var f_x1 = step(data, x1);
      }
      if (flag != 0) {
        var x2 = left + (right - left) / packingOptions.GOLDEN_SECTION;
        var f_x2 = step(data, x2);
      }
      dx = Math.abs(x1 - x2);
      df = Math.abs(f_x1 - f_x2);
      if (f_x1 < curr_best_f) {
        curr_best_f = f_x1;
        curr_best = x1;
      }
      if (f_x2 < curr_best_f) {
        curr_best_f = f_x2;
        curr_best = x2;
      }
      if (f_x1 > f_x2) {
        left = x1;
        x1 = x2;
        f_x1 = f_x2;
        flag = 1;
      } else {
        right = x2;
        x2 = x1;
        f_x2 = f_x1;
        flag = 0;
      }
      if (iterationCounter++ > 100) {
        break;
      }
    }
    step(data, curr_best);
  }
  function step(data, max_width) {
    line = [];
    real_width = 0;
    real_height = 0;
    global_bottom = init_y;
    for (var i = 0; i < data.length; i++) {
      var o = data[i];
      put_rect(o, max_width);
    }
    return Math.abs(get_real_ratio() - desired_ratio);
  }
  function put_rect(rect, max_width) {
    var parent = undefined;
    for (var i = 0; i < line.length; i++) {
      if (
        line[i].space_left >= rect.height &&
        line[i].x + line[i].width + rect.width + packingOptions.PADDING - max_width <= packingOptions.FLOAT_EPSILON
      ) {
        parent = line[i];
        break;
      }
    }
    line.push(rect);
    if (parent !== undefined) {
      rect.x = parent.x + parent.width + packingOptions.PADDING;
      rect.y = parent.bottom;
      rect.space_left = rect.height;
      rect.bottom = rect.y;
      parent.space_left -= rect.height + packingOptions.PADDING;
      parent.bottom += rect.height + packingOptions.PADDING;
    } else {
      rect.y = global_bottom;
      global_bottom += rect.height + packingOptions.PADDING;
      rect.x = init_x;
      rect.bottom = rect.y;
      rect.space_left = rect.height;
    }
    if (rect.y + rect.height - real_height > -packingOptions.FLOAT_EPSILON) real_height = rect.y + rect.height - init_y;
    if (rect.x + rect.width - real_width > -packingOptions.FLOAT_EPSILON) real_width = rect.x + rect.width - init_x;
  }
  function get_entire_width(data) {
    var width = 0;
    data.forEach(function (d) {
      return (width += d.width + packingOptions.PADDING);
    });
    return width;
  }
  function get_real_ratio() {
    return real_width / real_height;
  }
}
handledisconnected.applyPacking = applyPacking;
function separateGraphs(nodes, links) {
  var marks = {};
  var ways = {};
  var graphs = [];
  var clusters = 0;
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var n1 = link.source;
    var n2 = link.target;
    if (ways[n1.index]) ways[n1.index].push(n2);
    else ways[n1.index] = [n2];
    if (ways[n2.index]) ways[n2.index].push(n1);
    else ways[n2.index] = [n1];
  }
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (marks[node.index]) continue;
    explore_node(node, true);
  }
  function explore_node(n, is_new) {
    if (marks[n.index] !== undefined) return;
    if (is_new) {
      clusters++;
      graphs.push({ array: [] });
    }
    marks[n.index] = clusters;
    graphs[clusters - 1].array.push(n);
    var adjacent = ways[n.index];
    if (!adjacent) return;
    for (var j = 0; j < adjacent.length; j++) {
      explore_node(adjacent[j], false);
    }
  }
  return graphs;
}
handledisconnected.separateGraphs = separateGraphs;

(function (exports) {
  Object.defineProperty(exports, '__esModule', { value: true });
  var powergraph$1 = powergraph;
  var linklengths_1 = linklengths;
  var descent_1 = descent;
  var rectangle_1 = rectangle;
  var shortestpaths_1 = shortestpaths;
  var geom_1 = geom;
  var handledisconnected_1 = handledisconnected;
  var EventType;
  (function (EventType) {
    EventType[(EventType['start'] = 0)] = 'start';
    EventType[(EventType['tick'] = 1)] = 'tick';
    EventType[(EventType['end'] = 2)] = 'end';
  })((EventType = exports.EventType || (exports.EventType = {})));
  function isGroup(g) {
    return typeof g.leaves !== 'undefined' || typeof g.groups !== 'undefined';
  }
  var Layout = (function () {
    function Layout() {
      var _this = this;
      this._canvasSize = [1, 1];
      this._linkDistance = 20;
      this._defaultNodeSize = 10;
      this._linkLengthCalculator = null;
      this._linkType = null;
      this._avoidOverlaps = false;
      this._handleDisconnected = true;
      this._running = false;
      this._nodes = [];
      this._groups = [];
      this._rootGroup = null;
      this._links = [];
      this._constraints = [];
      this._distanceMatrix = null;
      this._descent = null;
      this._directedLinkConstraints = null;
      this._threshold = 0.01;
      this._visibilityGraph = null;
      this._groupCompactness = 1e-6;
      this.event = null;
      this.linkAccessor = {
        getSourceIndex: Layout.getSourceIndex,
        getTargetIndex: Layout.getTargetIndex,
        setLength: Layout.setLinkLength,
        getType: function (l) {
          return typeof _this._linkType === 'function' ? _this._linkType(l) : 0;
        }
      };
    }
    Layout.prototype.on = function (e, listener) {
      if (!this.event) this.event = {};
      if (typeof e === 'string') {
        this.event[EventType[e]] = listener;
      } else {
        this.event[e] = listener;
      }
      return this;
    };
    Layout.prototype.trigger = function (e) {
      if (this.event && typeof this.event[e.type] !== 'undefined') {
        this.event[e.type](e);
      }
    };
    Layout.prototype.kick = function () {
      while (!this.tick());
    };
    Layout.prototype.tick = function () {
      if (this._alpha < this._threshold) {
        this._running = false;
        this.trigger({ type: EventType.end, alpha: (this._alpha = 0), stress: this._lastStress });
        return true;
      }
      var n = this._nodes.length;
      this._links.length;
      var o, i;
      this._descent.locks.clear();
      for (i = 0; i < n; ++i) {
        o = this._nodes[i];
        if (o.fixed) {
          if (typeof o.px === 'undefined' || typeof o.py === 'undefined') {
            o.px = o.x;
            o.py = o.y;
          }
          var p = [o.px, o.py];
          this._descent.locks.add(i, p);
        }
      }
      var s1 = this._descent.rungeKutta();
      if (s1 === 0) {
        this._alpha = 0;
      } else if (typeof this._lastStress !== 'undefined') {
        this._alpha = s1;
      }
      this._lastStress = s1;
      this.updateNodePositions();
      this.trigger({ type: EventType.tick, alpha: this._alpha, stress: this._lastStress });
      return false;
    };
    Layout.prototype.updateNodePositions = function () {
      var x = this._descent.x[0],
        y = this._descent.x[1];
      var o,
        i = this._nodes.length;
      while (i--) {
        o = this._nodes[i];
        o.x = x[i];
        o.y = y[i];
      }
    };
    Layout.prototype.nodes = function (v) {
      if (!v) {
        if (this._nodes.length === 0 && this._links.length > 0) {
          var n = 0;
          this._links.forEach(function (l) {
            n = Math.max(n, l.source, l.target);
          });
          this._nodes = new Array(++n);
          for (var i = 0; i < n; ++i) {
            this._nodes[i] = {};
          }
        }
        return this._nodes;
      }
      this._nodes = v;
      return this;
    };
    Layout.prototype.groups = function (x) {
      var _this = this;
      if (!x) return this._groups;
      this._groups = x;
      this._rootGroup = {};
      this._groups.forEach(function (g) {
        if (typeof g.padding === 'undefined') g.padding = 1;
        if (typeof g.leaves !== 'undefined') {
          g.leaves.forEach(function (v, i) {
            if (typeof v === 'number') (g.leaves[i] = _this._nodes[v]).parent = g;
          });
        }
        if (typeof g.groups !== 'undefined') {
          g.groups.forEach(function (gi, i) {
            if (typeof gi === 'number') (g.groups[i] = _this._groups[gi]).parent = g;
          });
        }
      });
      this._rootGroup.leaves = this._nodes.filter(function (v) {
        return typeof v.parent === 'undefined';
      });
      this._rootGroup.groups = this._groups.filter(function (g) {
        return typeof g.parent === 'undefined';
      });
      return this;
    };
    Layout.prototype.powerGraphGroups = function (f) {
      var g = powergraph$1.getGroups(this._nodes, this._links, this.linkAccessor, this._rootGroup);
      this.groups(g.groups);
      f(g);
      return this;
    };
    Layout.prototype.avoidOverlaps = function (v) {
      if (!arguments.length) return this._avoidOverlaps;
      this._avoidOverlaps = v;
      return this;
    };
    Layout.prototype.handleDisconnected = function (v) {
      if (!arguments.length) return this._handleDisconnected;
      this._handleDisconnected = v;
      return this;
    };
    Layout.prototype.flowLayout = function (axis, minSeparation) {
      if (!arguments.length) axis = 'y';
      this._directedLinkConstraints = {
        axis: axis,
        getMinSeparation:
          typeof minSeparation === 'number'
            ? function () {
                return minSeparation;
              }
            : minSeparation
      };
      return this;
    };
    Layout.prototype.links = function (x) {
      if (!arguments.length) return this._links;
      this._links = x;
      return this;
    };
    Layout.prototype.constraints = function (c) {
      if (!arguments.length) return this._constraints;
      this._constraints = c;
      return this;
    };
    Layout.prototype.distanceMatrix = function (d) {
      if (!arguments.length) return this._distanceMatrix;
      this._distanceMatrix = d;
      return this;
    };
    Layout.prototype.size = function (x) {
      if (!x) return this._canvasSize;
      this._canvasSize = x;
      return this;
    };
    Layout.prototype.defaultNodeSize = function (x) {
      if (!x) return this._defaultNodeSize;
      this._defaultNodeSize = x;
      return this;
    };
    Layout.prototype.groupCompactness = function (x) {
      if (!x) return this._groupCompactness;
      this._groupCompactness = x;
      return this;
    };
    Layout.prototype.linkDistance = function (x) {
      if (!x) {
        return this._linkDistance;
      }
      this._linkDistance = typeof x === 'function' ? x : +x;
      this._linkLengthCalculator = null;
      return this;
    };
    Layout.prototype.linkType = function (f) {
      this._linkType = f;
      return this;
    };
    Layout.prototype.convergenceThreshold = function (x) {
      if (!x) return this._threshold;
      this._threshold = typeof x === 'function' ? x : +x;
      return this;
    };
    Layout.prototype.alpha = function (x) {
      if (!arguments.length) return this._alpha;
      else {
        x = +x;
        if (this._alpha) {
          if (x > 0) this._alpha = x;
          else this._alpha = 0;
        } else if (x > 0) {
          if (!this._running) {
            this._running = true;
            this.trigger({ type: EventType.start, alpha: (this._alpha = x) });
            this.kick();
          }
        }
        return this;
      }
    };
    Layout.prototype.getLinkLength = function (link) {
      return typeof this._linkDistance === 'function' ? +this._linkDistance(link) : this._linkDistance;
    };
    Layout.setLinkLength = function (link, length) {
      link.length = length;
    };
    Layout.prototype.getLinkType = function (link) {
      return typeof this._linkType === 'function' ? this._linkType(link) : 0;
    };
    Layout.prototype.symmetricDiffLinkLengths = function (idealLength, w) {
      var _this = this;
      if (w === void 0) {
        w = 1;
      }
      this.linkDistance(function (l) {
        return idealLength * l.length;
      });
      this._linkLengthCalculator = function () {
        return linklengths_1.symmetricDiffLinkLengths(_this._links, _this.linkAccessor, w);
      };
      return this;
    };
    Layout.prototype.jaccardLinkLengths = function (idealLength, w) {
      var _this = this;
      if (w === void 0) {
        w = 1;
      }
      this.linkDistance(function (l) {
        return idealLength * l.length;
      });
      this._linkLengthCalculator = function () {
        return linklengths_1.jaccardLinkLengths(_this._links, _this.linkAccessor, w);
      };
      return this;
    };
    Layout.prototype.start = function (
      initialUnconstrainedIterations,
      initialUserConstraintIterations,
      initialAllConstraintsIterations,
      gridSnapIterations,
      keepRunning,
      centerGraph
    ) {
      var _this = this;
      if (initialUnconstrainedIterations === void 0) {
        initialUnconstrainedIterations = 0;
      }
      if (initialUserConstraintIterations === void 0) {
        initialUserConstraintIterations = 0;
      }
      if (initialAllConstraintsIterations === void 0) {
        initialAllConstraintsIterations = 0;
      }
      if (gridSnapIterations === void 0) {
        gridSnapIterations = 0;
      }
      if (keepRunning === void 0) {
        keepRunning = true;
      }
      if (centerGraph === void 0) {
        centerGraph = true;
      }
      var i,
        n = this.nodes().length,
        N = n + 2 * this._groups.length;
      this._links.length;
      var w = this._canvasSize[0],
        h = this._canvasSize[1];
      var x = new Array(N),
        y = new Array(N);
      var G = null;
      var ao = this._avoidOverlaps;
      this._nodes.forEach(function (v, i) {
        v.index = i;
        if (typeof v.x === 'undefined') {
          (v.x = w / 2), (v.y = h / 2);
        }
        (x[i] = v.x), (y[i] = v.y);
      });
      if (this._linkLengthCalculator) this._linkLengthCalculator();
      var distances;
      if (this._distanceMatrix) {
        distances = this._distanceMatrix;
      } else {
        distances = new shortestpaths_1.Calculator(
          N,
          this._links,
          Layout.getSourceIndex,
          Layout.getTargetIndex,
          function (l) {
            return _this.getLinkLength(l);
          }
        ).DistanceMatrix();
        G = descent_1.Descent.createSquareMatrix(N, function () {
          return 2;
        });
        this._links.forEach(function (l) {
          if (typeof l.source == 'number') l.source = _this._nodes[l.source];
          if (typeof l.target == 'number') l.target = _this._nodes[l.target];
        });
        this._links.forEach(function (e) {
          var u = Layout.getSourceIndex(e),
            v = Layout.getTargetIndex(e);
          G[u][v] = G[v][u] = e.weight || 1;
        });
      }
      var D = descent_1.Descent.createSquareMatrix(N, function (i, j) {
        return distances[i][j];
      });
      if (this._rootGroup && typeof this._rootGroup.groups !== 'undefined') {
        var i = n;
        var addAttraction = function (i, j, strength, idealDistance) {
          G[i][j] = G[j][i] = strength;
          D[i][j] = D[j][i] = idealDistance;
        };
        this._groups.forEach(function (g) {
          addAttraction(i, i + 1, _this._groupCompactness, 0.1);
          (x[i] = 0), (y[i++] = 0);
          (x[i] = 0), (y[i++] = 0);
        });
      } else this._rootGroup = { leaves: this._nodes, groups: [] };
      var curConstraints = this._constraints || [];
      if (this._directedLinkConstraints) {
        this.linkAccessor.getMinSeparation = this._directedLinkConstraints.getMinSeparation;
        curConstraints = curConstraints.concat(
          linklengths_1.generateDirectedEdgeConstraints(
            n,
            this._links,
            this._directedLinkConstraints.axis,
            this.linkAccessor
          )
        );
      }
      this.avoidOverlaps(false);
      this._descent = new descent_1.Descent([x, y], D);
      this._descent.locks.clear();
      for (var i = 0; i < n; ++i) {
        var o = this._nodes[i];
        if (o.fixed) {
          o.px = o.x;
          o.py = o.y;
          var p = [o.x, o.y];
          this._descent.locks.add(i, p);
        }
      }
      this._descent.threshold = this._threshold;
      this.initialLayout(initialUnconstrainedIterations, x, y);
      if (curConstraints.length > 0)
        this._descent.project = new rectangle_1.Projection(
          this._nodes,
          this._groups,
          this._rootGroup,
          curConstraints
        ).projectFunctions();
      this._descent.run(initialUserConstraintIterations);
      this.separateOverlappingComponents(w, h, centerGraph);
      this.avoidOverlaps(ao);
      if (ao) {
        this._nodes.forEach(function (v, i) {
          (v.x = x[i]), (v.y = y[i]);
        });
        this._descent.project = new rectangle_1.Projection(
          this._nodes,
          this._groups,
          this._rootGroup,
          curConstraints,
          true
        ).projectFunctions();
        this._nodes.forEach(function (v, i) {
          (x[i] = v.x), (y[i] = v.y);
        });
      }
      this._descent.G = G;
      this._descent.run(initialAllConstraintsIterations);
      if (gridSnapIterations) {
        this._descent.snapStrength = 1000;
        this._descent.snapGridSize = this._nodes[0].width;
        this._descent.numGridSnapNodes = n;
        this._descent.scaleSnapByMaxH = n != N;
        var G0 = descent_1.Descent.createSquareMatrix(N, function (i, j) {
          if (i >= n || j >= n) return G[i][j];
          return 0;
        });
        this._descent.G = G0;
        this._descent.run(gridSnapIterations);
      }
      this.updateNodePositions();
      this.separateOverlappingComponents(w, h, centerGraph);
      return keepRunning ? this.resume() : this;
    };
    Layout.prototype.initialLayout = function (iterations, x, y) {
      if (this._groups.length > 0 && iterations > 0) {
        var n = this._nodes.length;
        var edges = this._links.map(function (e) {
          return { source: e.source.index, target: e.target.index };
        });
        var vs = this._nodes.map(function (v) {
          return { index: v.index };
        });
        this._groups.forEach(function (g, i) {
          vs.push({ index: (g.index = n + i) });
        });
        this._groups.forEach(function (g, i) {
          if (typeof g.leaves !== 'undefined')
            g.leaves.forEach(function (v) {
              return edges.push({ source: g.index, target: v.index });
            });
          if (typeof g.groups !== 'undefined')
            g.groups.forEach(function (gg) {
              return edges.push({ source: g.index, target: gg.index });
            });
        });
        new Layout()
          .size(this.size())
          .nodes(vs)
          .links(edges)
          .avoidOverlaps(false)
          .linkDistance(this.linkDistance())
          .symmetricDiffLinkLengths(5)
          .convergenceThreshold(1e-4)
          .start(iterations, 0, 0, 0, false);
        this._nodes.forEach(function (v) {
          x[v.index] = vs[v.index].x;
          y[v.index] = vs[v.index].y;
        });
      } else {
        this._descent.run(iterations);
      }
    };
    Layout.prototype.separateOverlappingComponents = function (width, height, centerGraph) {
      var _this = this;
      if (centerGraph === void 0) {
        centerGraph = true;
      }
      if (!this._distanceMatrix && this._handleDisconnected) {
        var x_1 = this._descent.x[0],
          y_1 = this._descent.x[1];
        this._nodes.forEach(function (v, i) {
          (v.x = x_1[i]), (v.y = y_1[i]);
        });
        var graphs = handledisconnected_1.separateGraphs(this._nodes, this._links);
        handledisconnected_1.applyPacking(graphs, width, height, this._defaultNodeSize, 1, centerGraph);
        this._nodes.forEach(function (v, i) {
          (_this._descent.x[0][i] = v.x), (_this._descent.x[1][i] = v.y);
          if (v.bounds) {
            v.bounds.setXCentre(v.x);
            v.bounds.setYCentre(v.y);
          }
        });
      }
    };
    Layout.prototype.resume = function () {
      return this.alpha(0.1);
    };
    Layout.prototype.stop = function () {
      return this.alpha(0);
    };
    Layout.prototype.prepareEdgeRouting = function (nodeMargin) {
      if (nodeMargin === void 0) {
        nodeMargin = 0;
      }
      this._visibilityGraph = new geom_1.TangentVisibilityGraph(
        this._nodes.map(function (v) {
          return v.bounds.inflate(-nodeMargin).vertices();
        })
      );
    };
    Layout.prototype.routeEdge = function (edge, ah, draw) {
      if (ah === void 0) {
        ah = 5;
      }
      var lineData = [];
      var vg2 = new geom_1.TangentVisibilityGraph(this._visibilityGraph.P, {
          V: this._visibilityGraph.V,
          E: this._visibilityGraph.E
        }),
        port1 = { x: edge.source.x, y: edge.source.y },
        port2 = { x: edge.target.x, y: edge.target.y },
        start = vg2.addPoint(port1, edge.source.index),
        end = vg2.addPoint(port2, edge.target.index);
      vg2.addEdgeIfVisible(port1, port2, edge.source.index, edge.target.index);
      if (typeof draw !== 'undefined') {
        draw(vg2);
      }
      var sourceInd = function (e) {
          return e.source.id;
        },
        targetInd = function (e) {
          return e.target.id;
        },
        length = function (e) {
          return e.length();
        },
        spCalc = new shortestpaths_1.Calculator(vg2.V.length, vg2.E, sourceInd, targetInd, length),
        shortestPath = spCalc.PathFromNodeToNode(start.id, end.id);
      if (shortestPath.length === 1 || shortestPath.length === vg2.V.length) {
        var route = rectangle_1.makeEdgeBetween(edge.source.innerBounds, edge.target.innerBounds, ah);
        lineData = [route.sourceIntersection, route.arrowStart];
      } else {
        var n = shortestPath.length - 2,
          p = vg2.V[shortestPath[n]].p,
          q = vg2.V[shortestPath[0]].p,
          lineData = [edge.source.innerBounds.rayIntersection(p.x, p.y)];
        for (var i = n; i >= 0; --i) lineData.push(vg2.V[shortestPath[i]].p);
        lineData.push(rectangle_1.makeEdgeTo(q, edge.target.innerBounds, ah));
      }
      return lineData;
    };
    Layout.getSourceIndex = function (e) {
      return typeof e.source === 'number' ? e.source : e.source.index;
    };
    Layout.getTargetIndex = function (e) {
      return typeof e.target === 'number' ? e.target : e.target.index;
    };
    Layout.linkId = function (e) {
      return Layout.getSourceIndex(e) + '-' + Layout.getTargetIndex(e);
    };
    Layout.dragStart = function (d) {
      if (isGroup(d)) {
        Layout.storeOffset(d, Layout.dragOrigin(d));
      } else {
        Layout.stopNode(d);
        d.fixed |= 2;
      }
    };
    Layout.stopNode = function (v) {
      v.px = v.x;
      v.py = v.y;
    };
    Layout.storeOffset = function (d, origin) {
      if (typeof d.leaves !== 'undefined') {
        d.leaves.forEach(function (v) {
          v.fixed |= 2;
          Layout.stopNode(v);
          v._dragGroupOffsetX = v.x - origin.x;
          v._dragGroupOffsetY = v.y - origin.y;
        });
      }
      if (typeof d.groups !== 'undefined') {
        d.groups.forEach(function (g) {
          return Layout.storeOffset(g, origin);
        });
      }
    };
    Layout.dragOrigin = function (d) {
      if (isGroup(d)) {
        return {
          x: d.bounds.cx(),
          y: d.bounds.cy()
        };
      } else {
        return d;
      }
    };
    Layout.drag = function (d, position) {
      if (isGroup(d)) {
        if (typeof d.leaves !== 'undefined') {
          d.leaves.forEach(function (v) {
            d.bounds.setXCentre(position.x);
            d.bounds.setYCentre(position.y);
            v.px = v._dragGroupOffsetX + position.x;
            v.py = v._dragGroupOffsetY + position.y;
          });
        }
        if (typeof d.groups !== 'undefined') {
          d.groups.forEach(function (g) {
            return Layout.drag(g, position);
          });
        }
      } else {
        d.px = position.x;
        d.py = position.y;
      }
    };
    Layout.dragEnd = function (d) {
      if (isGroup(d)) {
        if (typeof d.leaves !== 'undefined') {
          d.leaves.forEach(function (v) {
            Layout.dragEnd(v);
            delete v._dragGroupOffsetX;
            delete v._dragGroupOffsetY;
          });
        }
        if (typeof d.groups !== 'undefined') {
          d.groups.forEach(Layout.dragEnd);
        }
      } else {
        d.fixed &= ~6;
      }
    };
    Layout.mouseOver = function (d) {
      d.fixed |= 4;
      (d.px = d.x), (d.py = d.y);
    };
    Layout.mouseOut = function (d) {
      d.fixed &= ~4;
    };
    return Layout;
  })();
  exports.Layout = Layout;
})(layout);

var __extends$2 =
  (commonjsGlobal && commonjsGlobal.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(adaptor$1, '__esModule', { value: true });
var layout_1$3 = layout;
var LayoutAdaptor = (function (_super) {
  __extends$2(LayoutAdaptor, _super);
  function LayoutAdaptor(options) {
    var _this = _super.call(this) || this;
    var o = options;
    if (o.trigger) {
      _this.trigger = o.trigger;
    }
    if (o.kick) {
      _this.kick = o.kick;
    }
    if (o.drag) {
      _this.drag = o.drag;
    }
    if (o.on) {
      _this.on = o.on;
    }
    _this.dragstart = _this.dragStart = layout_1$3.Layout.dragStart;
    _this.dragend = _this.dragEnd = layout_1$3.Layout.dragEnd;
    return _this;
  }
  LayoutAdaptor.prototype.trigger = function (e) {};
  LayoutAdaptor.prototype.kick = function () {};
  LayoutAdaptor.prototype.drag = function () {};
  LayoutAdaptor.prototype.on = function (eventType, listener) {
    return this;
  };
  return LayoutAdaptor;
})(layout_1$3.Layout);
adaptor$1.LayoutAdaptor = LayoutAdaptor;
function adaptor(options) {
  return new LayoutAdaptor(options);
}
adaptor$1.adaptor = adaptor;

var d3adaptor$2 = {};

var d3v3adaptor = {};

var __extends$1 =
  (commonjsGlobal && commonjsGlobal.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(d3v3adaptor, '__esModule', { value: true });
var layout_1$2 = layout;
var D3StyleLayoutAdaptor$1 = (function (_super) {
  __extends$1(D3StyleLayoutAdaptor, _super);
  function D3StyleLayoutAdaptor() {
    var _this = _super.call(this) || this;
    _this.event = d3.dispatch(
      layout_1$2.EventType[layout_1$2.EventType.start],
      layout_1$2.EventType[layout_1$2.EventType.tick],
      layout_1$2.EventType[layout_1$2.EventType.end]
    );
    var d3layout = _this;
    _this.drag = function () {
      if (!drag) {
        var drag = d3.behavior
          .drag()
          .origin(layout_1$2.Layout.dragOrigin)
          .on('dragstart.d3adaptor', layout_1$2.Layout.dragStart)
          .on('drag.d3adaptor', function (d) {
            layout_1$2.Layout.drag(d, d3.event);
            d3layout.resume();
          })
          .on('dragend.d3adaptor', layout_1$2.Layout.dragEnd);
      }
      if (!arguments.length) return drag;
      this.call(drag);
    };
    return _this;
  }
  D3StyleLayoutAdaptor.prototype.trigger = function (e) {
    var d3event = { type: layout_1$2.EventType[e.type], alpha: e.alpha, stress: e.stress };
    this.event[d3event.type](d3event);
  };
  D3StyleLayoutAdaptor.prototype.kick = function () {
    var _this = this;
    d3.timer(function () {
      return _super.prototype.tick.call(_this);
    });
  };
  D3StyleLayoutAdaptor.prototype.on = function (eventType, listener) {
    if (typeof eventType === 'string') {
      this.event.on(eventType, listener);
    } else {
      this.event.on(layout_1$2.EventType[eventType], listener);
    }
    return this;
  };
  return D3StyleLayoutAdaptor;
})(layout_1$2.Layout);
d3v3adaptor.D3StyleLayoutAdaptor = D3StyleLayoutAdaptor$1;
function d3adaptor$1() {
  return new D3StyleLayoutAdaptor$1();
}
d3v3adaptor.d3adaptor = d3adaptor$1;

var d3v4adaptor = {};

var __extends =
  (commonjsGlobal && commonjsGlobal.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(d3v4adaptor, '__esModule', { value: true });
var layout_1$1 = layout;
var D3StyleLayoutAdaptor = (function (_super) {
  __extends(D3StyleLayoutAdaptor, _super);
  function D3StyleLayoutAdaptor(d3Context) {
    var _this = _super.call(this) || this;
    _this.d3Context = d3Context;
    _this.event = d3Context.dispatch(
      layout_1$1.EventType[layout_1$1.EventType.start],
      layout_1$1.EventType[layout_1$1.EventType.tick],
      layout_1$1.EventType[layout_1$1.EventType.end]
    );
    var d3layout = _this;
    _this.drag = function () {
      if (!drag) {
        var drag = d3Context
          .drag()
          .subject(layout_1$1.Layout.dragOrigin)
          .on('start.d3adaptor', layout_1$1.Layout.dragStart)
          .on('drag.d3adaptor', function (d) {
            layout_1$1.Layout.drag(d, d3Context.event);
            d3layout.resume();
          })
          .on('end.d3adaptor', layout_1$1.Layout.dragEnd);
      }
      if (!arguments.length) return drag;
      arguments[0].call(drag);
    };
    return _this;
  }
  D3StyleLayoutAdaptor.prototype.trigger = function (e) {
    var d3event = { type: layout_1$1.EventType[e.type], alpha: e.alpha, stress: e.stress };
    this.event.call(d3event.type, d3event);
  };
  D3StyleLayoutAdaptor.prototype.kick = function () {
    var _this = this;
    var t = this.d3Context.timer(function () {
      return _super.prototype.tick.call(_this) && t.stop();
    });
  };
  D3StyleLayoutAdaptor.prototype.on = function (eventType, listener) {
    if (typeof eventType === 'string') {
      this.event.on(eventType, listener);
    } else {
      this.event.on(layout_1$1.EventType[eventType], listener);
    }
    return this;
  };
  return D3StyleLayoutAdaptor;
})(layout_1$1.Layout);
d3v4adaptor.D3StyleLayoutAdaptor = D3StyleLayoutAdaptor;

Object.defineProperty(d3adaptor$2, '__esModule', { value: true });
var d3v3 = d3v3adaptor;
var d3v4 = d3v4adaptor;
function d3adaptor(d3Context) {
  if (!d3Context || isD3V3(d3Context)) {
    return new d3v3.D3StyleLayoutAdaptor();
  }
  return new d3v4.D3StyleLayoutAdaptor(d3Context);
}
d3adaptor$2.d3adaptor = d3adaptor;
function isD3V3(d3Context) {
  var v3exp = /^3\./;
  return d3Context.version && d3Context.version.match(v3exp) !== null;
}

var gridrouter = {};

Object.defineProperty(gridrouter, '__esModule', { value: true });
var rectangle_1$1 = rectangle;
var vpsc_1 = vpsc;
var shortestpaths_1$1 = shortestpaths;
var NodeWrapper = (function () {
  function NodeWrapper(id, rect, children) {
    this.id = id;
    this.rect = rect;
    this.children = children;
    this.leaf = typeof children === 'undefined' || children.length === 0;
  }
  return NodeWrapper;
})();
gridrouter.NodeWrapper = NodeWrapper;
var Vert = (function () {
  function Vert(id, x, y, node, line) {
    if (node === void 0) {
      node = null;
    }
    if (line === void 0) {
      line = null;
    }
    this.id = id;
    this.x = x;
    this.y = y;
    this.node = node;
    this.line = line;
  }
  return Vert;
})();
gridrouter.Vert = Vert;
var LongestCommonSubsequence = (function () {
  function LongestCommonSubsequence(s, t) {
    this.s = s;
    this.t = t;
    var mf = LongestCommonSubsequence.findMatch(s, t);
    var tr = t.slice(0).reverse();
    var mr = LongestCommonSubsequence.findMatch(s, tr);
    if (mf.length >= mr.length) {
      this.length = mf.length;
      this.si = mf.si;
      this.ti = mf.ti;
      this.reversed = false;
    } else {
      this.length = mr.length;
      this.si = mr.si;
      this.ti = t.length - mr.ti - mr.length;
      this.reversed = true;
    }
  }
  LongestCommonSubsequence.findMatch = function (s, t) {
    var m = s.length;
    var n = t.length;
    var match = { length: 0, si: -1, ti: -1 };
    var l = new Array(m);
    for (var i = 0; i < m; i++) {
      l[i] = new Array(n);
      for (var j = 0; j < n; j++)
        if (s[i] === t[j]) {
          var v = (l[i][j] = i === 0 || j === 0 ? 1 : l[i - 1][j - 1] + 1);
          if (v > match.length) {
            match.length = v;
            match.si = i - v + 1;
            match.ti = j - v + 1;
          }
        } else l[i][j] = 0;
    }
    return match;
  };
  LongestCommonSubsequence.prototype.getSequence = function () {
    return this.length >= 0 ? this.s.slice(this.si, this.si + this.length) : [];
  };
  return LongestCommonSubsequence;
})();
gridrouter.LongestCommonSubsequence = LongestCommonSubsequence;
var GridRouter = (function () {
  function GridRouter(originalnodes, accessor, groupPadding) {
    var _this = this;
    if (groupPadding === void 0) {
      groupPadding = 12;
    }
    this.originalnodes = originalnodes;
    this.groupPadding = groupPadding;
    this.leaves = null;
    this.nodes = originalnodes.map(function (v, i) {
      return new NodeWrapper(i, accessor.getBounds(v), accessor.getChildren(v));
    });
    this.leaves = this.nodes.filter(function (v) {
      return v.leaf;
    });
    this.groups = this.nodes.filter(function (g) {
      return !g.leaf;
    });
    this.cols = this.getGridLines('x');
    this.rows = this.getGridLines('y');
    this.groups.forEach(function (v) {
      return v.children.forEach(function (c) {
        return (_this.nodes[c].parent = v);
      });
    });
    this.root = { children: [] };
    this.nodes.forEach(function (v) {
      if (typeof v.parent === 'undefined') {
        v.parent = _this.root;
        _this.root.children.push(v.id);
      }
      v.ports = [];
    });
    this.backToFront = this.nodes.slice(0);
    this.backToFront.sort(function (x, y) {
      return _this.getDepth(x) - _this.getDepth(y);
    });
    var frontToBackGroups = this.backToFront
      .slice(0)
      .reverse()
      .filter(function (g) {
        return !g.leaf;
      });
    frontToBackGroups.forEach(function (v) {
      var r = rectangle_1$1.Rectangle.empty();
      v.children.forEach(function (c) {
        return (r = r.union(_this.nodes[c].rect));
      });
      v.rect = r.inflate(_this.groupPadding);
    });
    var colMids = this.midPoints(
      this.cols.map(function (r) {
        return r.pos;
      })
    );
    var rowMids = this.midPoints(
      this.rows.map(function (r) {
        return r.pos;
      })
    );
    var rowx = colMids[0],
      rowX = colMids[colMids.length - 1];
    var coly = rowMids[0],
      colY = rowMids[rowMids.length - 1];
    var hlines = this.rows
      .map(function (r) {
        return { x1: rowx, x2: rowX, y1: r.pos, y2: r.pos };
      })
      .concat(
        rowMids.map(function (m) {
          return { x1: rowx, x2: rowX, y1: m, y2: m };
        })
      );
    var vlines = this.cols
      .map(function (c) {
        return { x1: c.pos, x2: c.pos, y1: coly, y2: colY };
      })
      .concat(
        colMids.map(function (m) {
          return { x1: m, x2: m, y1: coly, y2: colY };
        })
      );
    var lines = hlines.concat(vlines);
    lines.forEach(function (l) {
      return (l.verts = []);
    });
    this.verts = [];
    this.edges = [];
    hlines.forEach(function (h) {
      return vlines.forEach(function (v) {
        var p = new Vert(_this.verts.length, v.x1, h.y1);
        h.verts.push(p);
        v.verts.push(p);
        _this.verts.push(p);
        var i = _this.backToFront.length;
        while (i-- > 0) {
          var node = _this.backToFront[i],
            r = node.rect;
          var dx = Math.abs(p.x - r.cx()),
            dy = Math.abs(p.y - r.cy());
          if (dx < r.width() / 2 && dy < r.height() / 2) {
            p.node = node;
            break;
          }
        }
      });
    });
    lines.forEach(function (l, li) {
      _this.nodes.forEach(function (v, i) {
        v.rect.lineIntersections(l.x1, l.y1, l.x2, l.y2).forEach(function (intersect, j) {
          var p = new Vert(_this.verts.length, intersect.x, intersect.y, v, l);
          _this.verts.push(p);
          l.verts.push(p);
          v.ports.push(p);
        });
      });
      var isHoriz = Math.abs(l.y1 - l.y2) < 0.1;
      var delta = function (a, b) {
        return isHoriz ? b.x - a.x : b.y - a.y;
      };
      l.verts.sort(delta);
      for (var i = 1; i < l.verts.length; i++) {
        var u = l.verts[i - 1],
          v = l.verts[i];
        if (u.node && u.node === v.node && u.node.leaf) continue;
        _this.edges.push({ source: u.id, target: v.id, length: Math.abs(delta(u, v)) });
      }
    });
  }
  GridRouter.prototype.avg = function (a) {
    return (
      a.reduce(function (x, y) {
        return x + y;
      }) / a.length
    );
  };
  GridRouter.prototype.getGridLines = function (axis) {
    var columns = [];
    var ls = this.leaves.slice(0, this.leaves.length);
    while (ls.length > 0) {
      var overlapping = ls.filter(function (v) {
        return v.rect['overlap' + axis.toUpperCase()](ls[0].rect);
      });
      var col = {
        nodes: overlapping,
        pos: this.avg(
          overlapping.map(function (v) {
            return v.rect['c' + axis]();
          })
        )
      };
      columns.push(col);
      col.nodes.forEach(function (v) {
        return ls.splice(ls.indexOf(v), 1);
      });
    }
    columns.sort(function (a, b) {
      return a.pos - b.pos;
    });
    return columns;
  };
  GridRouter.prototype.getDepth = function (v) {
    var depth = 0;
    while (v.parent !== this.root) {
      depth++;
      v = v.parent;
    }
    return depth;
  };
  GridRouter.prototype.midPoints = function (a) {
    var gap = a[1] - a[0];
    var mids = [a[0] - gap / 2];
    for (var i = 1; i < a.length; i++) {
      mids.push((a[i] + a[i - 1]) / 2);
    }
    mids.push(a[a.length - 1] + gap / 2);
    return mids;
  };
  GridRouter.prototype.findLineage = function (v) {
    var lineage = [v];
    do {
      v = v.parent;
      lineage.push(v);
    } while (v !== this.root);
    return lineage.reverse();
  };
  GridRouter.prototype.findAncestorPathBetween = function (a, b) {
    var aa = this.findLineage(a),
      ba = this.findLineage(b),
      i = 0;
    while (aa[i] === ba[i]) i++;
    return { commonAncestor: aa[i - 1], lineages: aa.slice(i).concat(ba.slice(i)) };
  };
  GridRouter.prototype.siblingObstacles = function (a, b) {
    var _this = this;
    var path = this.findAncestorPathBetween(a, b);
    var lineageLookup = {};
    path.lineages.forEach(function (v) {
      return (lineageLookup[v.id] = {});
    });
    var obstacles = path.commonAncestor.children.filter(function (v) {
      return !(v in lineageLookup);
    });
    path.lineages
      .filter(function (v) {
        return v.parent !== path.commonAncestor;
      })
      .forEach(function (v) {
        return (obstacles = obstacles.concat(
          v.parent.children.filter(function (c) {
            return c !== v.id;
          })
        ));
      });
    return obstacles.map(function (v) {
      return _this.nodes[v];
    });
  };
  GridRouter.getSegmentSets = function (routes, x, y) {
    var vsegments = [];
    for (var ei = 0; ei < routes.length; ei++) {
      var route = routes[ei];
      for (var si = 0; si < route.length; si++) {
        var s = route[si];
        s.edgeid = ei;
        s.i = si;
        var sdx = s[1][x] - s[0][x];
        if (Math.abs(sdx) < 0.1) {
          vsegments.push(s);
        }
      }
    }
    vsegments.sort(function (a, b) {
      return a[0][x] - b[0][x];
    });
    var vsegmentsets = [];
    var segmentset = null;
    for (var i = 0; i < vsegments.length; i++) {
      var s = vsegments[i];
      if (!segmentset || Math.abs(s[0][x] - segmentset.pos) > 0.1) {
        segmentset = { pos: s[0][x], segments: [] };
        vsegmentsets.push(segmentset);
      }
      segmentset.segments.push(s);
    }
    return vsegmentsets;
  };
  GridRouter.nudgeSegs = function (x, y, routes, segments, leftOf, gap) {
    var n = segments.length;
    if (n <= 1) return;
    var vs = segments.map(function (s) {
      return new vpsc_1.Variable(s[0][x]);
    });
    var cs = [];
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (i === j) continue;
        var s1 = segments[i],
          s2 = segments[j],
          e1 = s1.edgeid,
          e2 = s2.edgeid,
          lind = -1,
          rind = -1;
        if (x == 'x') {
          if (leftOf(e1, e2)) {
            if (s1[0][y] < s1[1][y]) {
              (lind = j), (rind = i);
            } else {
              (lind = i), (rind = j);
            }
          }
        } else {
          if (leftOf(e1, e2)) {
            if (s1[0][y] < s1[1][y]) {
              (lind = i), (rind = j);
            } else {
              (lind = j), (rind = i);
            }
          }
        }
        if (lind >= 0) {
          cs.push(new vpsc_1.Constraint(vs[lind], vs[rind], gap));
        }
      }
    }
    var solver = new vpsc_1.Solver(vs, cs);
    solver.solve();
    vs.forEach(function (v, i) {
      var s = segments[i];
      var pos = v.position();
      s[0][x] = s[1][x] = pos;
      var route = routes[s.edgeid];
      if (s.i > 0) route[s.i - 1][1][x] = pos;
      if (s.i < route.length - 1) route[s.i + 1][0][x] = pos;
    });
  };
  GridRouter.nudgeSegments = function (routes, x, y, leftOf, gap) {
    var vsegmentsets = GridRouter.getSegmentSets(routes, x, y);
    for (var i = 0; i < vsegmentsets.length; i++) {
      var ss = vsegmentsets[i];
      var events = [];
      for (var j = 0; j < ss.segments.length; j++) {
        var s = ss.segments[j];
        events.push({ type: 0, s: s, pos: Math.min(s[0][y], s[1][y]) });
        events.push({ type: 1, s: s, pos: Math.max(s[0][y], s[1][y]) });
      }
      events.sort(function (a, b) {
        return a.pos - b.pos + a.type - b.type;
      });
      var open = [];
      var openCount = 0;
      events.forEach(function (e) {
        if (e.type === 0) {
          open.push(e.s);
          openCount++;
        } else {
          openCount--;
        }
        if (openCount == 0) {
          GridRouter.nudgeSegs(x, y, routes, open, leftOf, gap);
          open = [];
        }
      });
    }
  };
  GridRouter.prototype.routeEdges = function (edges, nudgeGap, source, target) {
    var _this = this;
    var routePaths = edges.map(function (e) {
      return _this.route(source(e), target(e));
    });
    var order = GridRouter.orderEdges(routePaths);
    var routes = routePaths.map(function (e) {
      return GridRouter.makeSegments(e);
    });
    GridRouter.nudgeSegments(routes, 'x', 'y', order, nudgeGap);
    GridRouter.nudgeSegments(routes, 'y', 'x', order, nudgeGap);
    GridRouter.unreverseEdges(routes, routePaths);
    return routes;
  };
  GridRouter.unreverseEdges = function (routes, routePaths) {
    routes.forEach(function (segments, i) {
      var path = routePaths[i];
      if (path.reversed) {
        segments.reverse();
        segments.forEach(function (segment) {
          segment.reverse();
        });
      }
    });
  };
  GridRouter.angleBetween2Lines = function (line1, line2) {
    var angle1 = Math.atan2(line1[0].y - line1[1].y, line1[0].x - line1[1].x);
    var angle2 = Math.atan2(line2[0].y - line2[1].y, line2[0].x - line2[1].x);
    var diff = angle1 - angle2;
    if (diff > Math.PI || diff < -Math.PI) {
      diff = angle2 - angle1;
    }
    return diff;
  };
  GridRouter.isLeft = function (a, b, c) {
    return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) <= 0;
  };
  GridRouter.getOrder = function (pairs) {
    var outgoing = {};
    for (var i = 0; i < pairs.length; i++) {
      var p = pairs[i];
      if (typeof outgoing[p.l] === 'undefined') outgoing[p.l] = {};
      outgoing[p.l][p.r] = true;
    }
    return function (l, r) {
      return typeof outgoing[l] !== 'undefined' && outgoing[l][r];
    };
  };
  GridRouter.orderEdges = function (edges) {
    var edgeOrder = [];
    for (var i = 0; i < edges.length - 1; i++) {
      for (var j = i + 1; j < edges.length; j++) {
        var e = edges[i],
          f = edges[j],
          lcs = new LongestCommonSubsequence(e, f);
        var u, vi, vj;
        if (lcs.length === 0) continue;
        if (lcs.reversed) {
          f.reverse();
          f.reversed = true;
          lcs = new LongestCommonSubsequence(e, f);
        }
        if ((lcs.si <= 0 || lcs.ti <= 0) && (lcs.si + lcs.length >= e.length || lcs.ti + lcs.length >= f.length)) {
          edgeOrder.push({ l: i, r: j });
          continue;
        }
        if (lcs.si + lcs.length >= e.length || lcs.ti + lcs.length >= f.length) {
          u = e[lcs.si + 1];
          vj = e[lcs.si - 1];
          vi = f[lcs.ti - 1];
        } else {
          u = e[lcs.si + lcs.length - 2];
          vi = e[lcs.si + lcs.length];
          vj = f[lcs.ti + lcs.length];
        }
        if (GridRouter.isLeft(u, vi, vj)) {
          edgeOrder.push({ l: j, r: i });
        } else {
          edgeOrder.push({ l: i, r: j });
        }
      }
    }
    return GridRouter.getOrder(edgeOrder);
  };
  GridRouter.makeSegments = function (path) {
    function copyPoint(p) {
      return { x: p.x, y: p.y };
    }
    var isStraight = function (a, b, c) {
      return Math.abs((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) < 0.001;
    };
    var segments = [];
    var a = copyPoint(path[0]);
    for (var i = 1; i < path.length; i++) {
      var b = copyPoint(path[i]),
        c = i < path.length - 1 ? path[i + 1] : null;
      if (!c || !isStraight(a, b, c)) {
        segments.push([a, b]);
        a = b;
      }
    }
    return segments;
  };
  GridRouter.prototype.route = function (s, t) {
    var _this = this;
    var source = this.nodes[s],
      target = this.nodes[t];
    this.obstacles = this.siblingObstacles(source, target);
    var obstacleLookup = {};
    this.obstacles.forEach(function (o) {
      return (obstacleLookup[o.id] = o);
    });
    this.passableEdges = this.edges.filter(function (e) {
      var u = _this.verts[e.source],
        v = _this.verts[e.target];
      return !((u.node && u.node.id in obstacleLookup) || (v.node && v.node.id in obstacleLookup));
    });
    for (var i = 1; i < source.ports.length; i++) {
      var u = source.ports[0].id;
      var v = source.ports[i].id;
      this.passableEdges.push({
        source: u,
        target: v,
        length: 0
      });
    }
    for (var i = 1; i < target.ports.length; i++) {
      var u = target.ports[0].id;
      var v = target.ports[i].id;
      this.passableEdges.push({
        source: u,
        target: v,
        length: 0
      });
    }
    var getSource = function (e) {
        return e.source;
      },
      getTarget = function (e) {
        return e.target;
      },
      getLength = function (e) {
        return e.length;
      };
    var shortestPathCalculator = new shortestpaths_1$1.Calculator(
      this.verts.length,
      this.passableEdges,
      getSource,
      getTarget,
      getLength
    );
    var bendPenalty = function (u, v, w) {
      var a = _this.verts[u],
        b = _this.verts[v],
        c = _this.verts[w];
      var dx = Math.abs(c.x - a.x),
        dy = Math.abs(c.y - a.y);
      if ((a.node === source && a.node === b.node) || (b.node === target && b.node === c.node)) return 0;
      return dx > 1 && dy > 1 ? 1000 : 0;
    };
    var shortestPath = shortestPathCalculator.PathFromNodeToNodeWithPrevCost(
      source.ports[0].id,
      target.ports[0].id,
      bendPenalty
    );
    var pathPoints = shortestPath.reverse().map(function (vi) {
      return _this.verts[vi];
    });
    pathPoints.push(this.nodes[target.id].ports[0]);
    return pathPoints.filter(function (v, i) {
      return !(
        (i < pathPoints.length - 1 && pathPoints[i + 1].node === source && v.node === source) ||
        (i > 0 && v.node === target && pathPoints[i - 1].node === target)
      );
    });
  };
  GridRouter.getRoutePath = function (route, cornerradius, arrowwidth, arrowheight) {
    var result = {
      routepath: 'M ' + route[0][0].x + ' ' + route[0][0].y + ' ',
      arrowpath: ''
    };
    if (route.length > 1) {
      for (var i = 0; i < route.length; i++) {
        var li = route[i];
        var x = li[1].x,
          y = li[1].y;
        var dx = x - li[0].x;
        var dy = y - li[0].y;
        if (i < route.length - 1) {
          if (Math.abs(dx) > 0) {
            x -= (dx / Math.abs(dx)) * cornerradius;
          } else {
            y -= (dy / Math.abs(dy)) * cornerradius;
          }
          result.routepath += 'L ' + x + ' ' + y + ' ';
          var l = route[i + 1];
          var x0 = l[0].x,
            y0 = l[0].y;
          var x1 = l[1].x;
          var y1 = l[1].y;
          dx = x1 - x0;
          dy = y1 - y0;
          var angle = GridRouter.angleBetween2Lines(li, l) < 0 ? 1 : 0;
          var x2, y2;
          if (Math.abs(dx) > 0) {
            x2 = x0 + (dx / Math.abs(dx)) * cornerradius;
            y2 = y0;
          } else {
            x2 = x0;
            y2 = y0 + (dy / Math.abs(dy)) * cornerradius;
          }
          var cx = Math.abs(x2 - x);
          var cy = Math.abs(y2 - y);
          result.routepath += 'A ' + cx + ' ' + cy + ' 0 0 ' + angle + ' ' + x2 + ' ' + y2 + ' ';
        } else {
          var arrowtip = [x, y];
          var arrowcorner1, arrowcorner2;
          if (Math.abs(dx) > 0) {
            x -= (dx / Math.abs(dx)) * arrowheight;
            arrowcorner1 = [x, y + arrowwidth];
            arrowcorner2 = [x, y - arrowwidth];
          } else {
            y -= (dy / Math.abs(dy)) * arrowheight;
            arrowcorner1 = [x + arrowwidth, y];
            arrowcorner2 = [x - arrowwidth, y];
          }
          result.routepath += 'L ' + x + ' ' + y + ' ';
          if (arrowheight > 0) {
            result.arrowpath =
              'M ' +
              arrowtip[0] +
              ' ' +
              arrowtip[1] +
              ' L ' +
              arrowcorner1[0] +
              ' ' +
              arrowcorner1[1] +
              ' L ' +
              arrowcorner2[0] +
              ' ' +
              arrowcorner2[1];
          }
        }
      }
    } else {
      var li = route[0];
      var x = li[1].x,
        y = li[1].y;
      var dx = x - li[0].x;
      var dy = y - li[0].y;
      var arrowtip = [x, y];
      var arrowcorner1, arrowcorner2;
      if (Math.abs(dx) > 0) {
        x -= (dx / Math.abs(dx)) * arrowheight;
        arrowcorner1 = [x, y + arrowwidth];
        arrowcorner2 = [x, y - arrowwidth];
      } else {
        y -= (dy / Math.abs(dy)) * arrowheight;
        arrowcorner1 = [x + arrowwidth, y];
        arrowcorner2 = [x - arrowwidth, y];
      }
      result.routepath += 'L ' + x + ' ' + y + ' ';
      if (arrowheight > 0) {
        result.arrowpath =
          'M ' +
          arrowtip[0] +
          ' ' +
          arrowtip[1] +
          ' L ' +
          arrowcorner1[0] +
          ' ' +
          arrowcorner1[1] +
          ' L ' +
          arrowcorner2[0] +
          ' ' +
          arrowcorner2[1];
      }
    }
    return result;
  };
  return GridRouter;
})();
gridrouter.GridRouter = GridRouter;

var layout3d = {};

Object.defineProperty(layout3d, '__esModule', { value: true });
var shortestpaths_1 = shortestpaths;
var descent_1 = descent;
var rectangle_1 = rectangle;
var linklengths_1 = linklengths;
var Link3D = (function () {
  function Link3D(source, target) {
    this.source = source;
    this.target = target;
  }
  Link3D.prototype.actualLength = function (x) {
    var _this = this;
    return Math.sqrt(
      x.reduce(function (c, v) {
        var dx = v[_this.target] - v[_this.source];
        return c + dx * dx;
      }, 0)
    );
  };
  return Link3D;
})();
layout3d.Link3D = Link3D;
var Node3D = (function () {
  function Node3D(x, y, z) {
    if (x === void 0) {
      x = 0;
    }
    if (y === void 0) {
      y = 0;
    }
    if (z === void 0) {
      z = 0;
    }
    this.x = x;
    this.y = y;
    this.z = z;
  }
  return Node3D;
})();
layout3d.Node3D = Node3D;
var Layout3D = (function () {
  function Layout3D(nodes, links, idealLinkLength) {
    var _this = this;
    if (idealLinkLength === void 0) {
      idealLinkLength = 1;
    }
    this.nodes = nodes;
    this.links = links;
    this.idealLinkLength = idealLinkLength;
    this.constraints = null;
    this.useJaccardLinkLengths = true;
    this.result = new Array(Layout3D.k);
    for (var i = 0; i < Layout3D.k; ++i) {
      this.result[i] = new Array(nodes.length);
    }
    nodes.forEach(function (v, i) {
      for (var _i = 0, _a = Layout3D.dims; _i < _a.length; _i++) {
        var dim = _a[_i];
        if (typeof v[dim] == 'undefined') v[dim] = Math.random();
      }
      _this.result[0][i] = v.x;
      _this.result[1][i] = v.y;
      _this.result[2][i] = v.z;
    });
  }
  Layout3D.prototype.linkLength = function (l) {
    return l.actualLength(this.result);
  };
  Layout3D.prototype.start = function (iterations) {
    var _this = this;
    if (iterations === void 0) {
      iterations = 100;
    }
    var n = this.nodes.length;
    var linkAccessor = new LinkAccessor();
    if (this.useJaccardLinkLengths) linklengths_1.jaccardLinkLengths(this.links, linkAccessor, 1.5);
    this.links.forEach(function (e) {
      return (e.length *= _this.idealLinkLength);
    });
    var distanceMatrix = new shortestpaths_1.Calculator(
      n,
      this.links,
      function (e) {
        return e.source;
      },
      function (e) {
        return e.target;
      },
      function (e) {
        return e.length;
      }
    ).DistanceMatrix();
    var D = descent_1.Descent.createSquareMatrix(n, function (i, j) {
      return distanceMatrix[i][j];
    });
    var G = descent_1.Descent.createSquareMatrix(n, function () {
      return 2;
    });
    this.links.forEach(function (_a) {
      var source = _a.source,
        target = _a.target;
      return (G[source][target] = G[target][source] = 1);
    });
    this.descent = new descent_1.Descent(this.result, D);
    this.descent.threshold = 1e-3;
    this.descent.G = G;
    if (this.constraints)
      this.descent.project = new rectangle_1.Projection(this.nodes, null, null, this.constraints).projectFunctions();
    for (var i = 0; i < this.nodes.length; i++) {
      var v = this.nodes[i];
      if (v.fixed) {
        this.descent.locks.add(i, [v.x, v.y, v.z]);
      }
    }
    this.descent.run(iterations);
    return this;
  };
  Layout3D.prototype.tick = function () {
    this.descent.locks.clear();
    for (var i = 0; i < this.nodes.length; i++) {
      var v = this.nodes[i];
      if (v.fixed) {
        this.descent.locks.add(i, [v.x, v.y, v.z]);
      }
    }
    return this.descent.rungeKutta();
  };
  Layout3D.dims = ['x', 'y', 'z'];
  Layout3D.k = Layout3D.dims.length;
  return Layout3D;
})();
layout3d.Layout3D = Layout3D;
var LinkAccessor = (function () {
  function LinkAccessor() {}
  LinkAccessor.prototype.getSourceIndex = function (e) {
    return e.source;
  };
  LinkAccessor.prototype.getTargetIndex = function (e) {
    return e.target;
  };
  LinkAccessor.prototype.getLength = function (e) {
    return e.length;
  };
  LinkAccessor.prototype.setLength = function (e, l) {
    e.length = l;
  };
  return LinkAccessor;
})();

var batch = {};

Object.defineProperty(batch, '__esModule', { value: true });
var layout_1 = layout;
var gridrouter_1 = gridrouter;
function gridify(pgLayout, nudgeGap, margin, groupMargin) {
  pgLayout.cola.start(0, 0, 0, 10, false);
  var gridrouter = route(pgLayout.cola.nodes(), pgLayout.cola.groups(), margin, groupMargin);
  return gridrouter.routeEdges(
    pgLayout.powerGraph.powerEdges,
    nudgeGap,
    function (e) {
      return e.source.routerNode.id;
    },
    function (e) {
      return e.target.routerNode.id;
    }
  );
}
batch.gridify = gridify;
function route(nodes, groups, margin, groupMargin) {
  nodes.forEach(function (d) {
    d.routerNode = {
      name: d.name,
      bounds: d.bounds.inflate(-margin)
    };
  });
  groups.forEach(function (d) {
    d.routerNode = {
      bounds: d.bounds.inflate(-groupMargin),
      children: (typeof d.groups !== 'undefined'
        ? d.groups.map(function (c) {
            return nodes.length + c.id;
          })
        : []
      ).concat(
        typeof d.leaves !== 'undefined'
          ? d.leaves.map(function (c) {
              return c.index;
            })
          : []
      )
    };
  });
  var gridRouterNodes = nodes.concat(groups).map(function (d, i) {
    d.routerNode.id = i;
    return d.routerNode;
  });
  return new gridrouter_1.GridRouter(
    gridRouterNodes,
    {
      getChildren: function (v) {
        return v.children;
      },
      getBounds: function (v) {
        return v.bounds;
      }
    },
    margin - groupMargin
  );
}
function powerGraphGridLayout(graph, size, grouppadding) {
  var powerGraph;
  graph.nodes.forEach(function (v, i) {
    return (v.index = i);
  });
  new layout_1.Layout()
    .avoidOverlaps(false)
    .nodes(graph.nodes)
    .links(graph.links)
    .powerGraphGroups(function (d) {
      powerGraph = d;
      powerGraph.groups.forEach(function (v) {
        return (v.padding = grouppadding);
      });
    });
  var n = graph.nodes.length;
  var edges = [];
  var vs = graph.nodes.slice(0);
  vs.forEach(function (v, i) {
    return (v.index = i);
  });
  powerGraph.groups.forEach(function (g) {
    var sourceInd = (g.index = g.id + n);
    vs.push(g);
    if (typeof g.leaves !== 'undefined')
      g.leaves.forEach(function (v) {
        return edges.push({ source: sourceInd, target: v.index });
      });
    if (typeof g.groups !== 'undefined')
      g.groups.forEach(function (gg) {
        return edges.push({ source: sourceInd, target: gg.id + n });
      });
  });
  powerGraph.powerEdges.forEach(function (e) {
    edges.push({ source: e.source.index, target: e.target.index });
  });
  new layout_1.Layout()
    .size(size)
    .nodes(vs)
    .links(edges)
    .avoidOverlaps(false)
    .linkDistance(30)
    .symmetricDiffLinkLengths(5)
    .convergenceThreshold(1e-4)
    .start(100, 0, 0, 0, false);
  return {
    cola: new layout_1.Layout()
      .convergenceThreshold(1e-3)
      .size(size)
      .avoidOverlaps(true)
      .nodes(graph.nodes)
      .links(graph.links)
      .groupCompactness(1e-4)
      .linkDistance(30)
      .symmetricDiffLinkLengths(5)
      .powerGraphGroups(function (d) {
        powerGraph = d;
        powerGraph.groups.forEach(function (v) {
          v.padding = grouppadding;
        });
      })
      .start(50, 0, 100, 0, false),
    powerGraph: powerGraph
  };
}
batch.powerGraphGridLayout = powerGraphGridLayout;

(function (exports) {
  function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
  Object.defineProperty(exports, '__esModule', { value: true });
  __export(adaptor$1);
  __export(d3adaptor$2);
  __export(descent);
  __export(geom);
  __export(gridrouter);
  __export(handledisconnected);
  __export(layout);
  __export(layout3d);
  __export(linklengths);
  __export(powergraph);
  __export(pqueue);
  __export(rbtree);
  __export(rectangle);
  __export(shortestpaths);
  __export(vpsc);
  __export(batch);
})(dist);

var ID3StyleLayoutAdaptor = dist.ID3StyleLayoutAdaptor;
var Layout = dist.Layout;
var d3adaptor$3 = dist.d3adaptor;
export { ID3StyleLayoutAdaptor, Layout, d3adaptor$3 as d3adaptor, dagre as default };
