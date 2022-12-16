var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.org_kie_lienzo_LienzoShowcase;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats("moduleStartup", "moduleEvalStart");
var $gwt_version = "2.9.0";
var $strongName = "36380E12A8AAAF76CB952859FA31D56A";
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
  var fragFile = "deferredjs/" + $strongName + "/" + frag + ".cache.js";
  return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {
  return __gwtModuleFunction.__installRunAsyncCode(code);
}
function __gwt_isKnownPropertyValue(propName, propValue) {
  return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
  return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent
  ? function (a) {
      return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
    }
  : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = -17592186044416,
  $intern_1 = 17592186044416,
  $intern_2 = 4194304,
  $intern_3 = 1048575,
  $intern_4 = { 3: 1, 4: 1 },
  $intern_5 = { 3: 1, 10: 1, 4: 1 },
  $intern_6 = { 3: 1, 24: 1, 19: 1, 16: 1 },
  $intern_7 = { 37: 1, 86: 1 },
  $intern_8 = { 3: 1, 37: 1, 86: 1 },
  $intern_9 = { 91: 1 },
  $intern_10 = 0.3333333333333333,
  $intern_11 = { 11: 1, 3: 1 },
  $intern_12 = { 22: 1, 21: 1, 26: 1, 18: 1, 17: 1, 27: 1 },
  $intern_13 = 3.141592653589793,
  $intern_14 = 6.283185307179586,
  $intern_15 = { 22: 1, 43: 1, 66: 1, 21: 1, 18: 1 },
  $intern_16 = { 22: 1, 43: 1, 66: 1, 21: 1, 26: 1, 18: 1, 27: 1 },
  $intern_17 = { 22: 1, 43: 1, 66: 1, 21: 1, 67: 1, 18: 1 },
  $intern_18 = 4.71238898038469,
  $intern_19 = 1.5707963267948966,
  $intern_20 = { 116: 1, 3: 1, 4: 1 },
  $intern_21 = { 13: 1, 3: 1, 8: 1, 7: 1 },
  $intern_22 = { 15: 1, 3: 1, 8: 1, 7: 1 },
  $intern_23 = { 30: 1, 3: 1, 8: 1, 7: 1 },
  $intern_24 = { 50: 1, 3: 1, 8: 1, 7: 1 },
  $intern_25 = { 51: 1, 3: 1, 8: 1, 7: 1 },
  $intern_26 = { 31: 1, 3: 1, 8: 1, 7: 1 },
  $intern_27 = { 81: 1, 3: 1, 8: 1, 7: 1 },
  $intern_28 = 1.7976931348623157e308,
  $intern_29 = -1.7976931348623157e308,
  $intern_30 = 0.6666666666666666,
  $intern_31 = { 3: 1, 106: 1 },
  $intern_32 = 4194303,
  $intern_33 = 524288,
  $intern_34 = { 3: 1, 58: 1, 16: 1 },
  $intern_35 = { 37: 1, 72: 1 },
  $intern_36 = { 64: 1 };
var _,
  prototypesByTypeId_0,
  initFnList_0,
  permutationId = -1;
function setGwtProperty(propertyName, propertyValue) {
  typeof window === "object" && typeof window["$gwt"] === "object" && (window["$gwt"][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId) {
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules() {
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    } catch (e) {
      errFn(modName, e);
    }
  } else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit() {
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions() {
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn() {}

function toString_34(object) {
  var number;
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return (
      $getName(getClass__Ljava_lang_Class___devirtual$(object)) +
      "@" +
      ((number = hashCode__I__devirtual$(object) >>> 0), number.toString(16))
    );
  }
  return object.toString();
}

function provide(namespace, optCtor) {
  var cur = $wnd;
  if (namespace === "") {
    return cur;
  }
  var parts = namespace.split(".");
  !(parts[0] in cur) && cur.execScript && cur.execScript("var " + parts[0]);
  if (optCtor) {
    var clazz = optCtor.prototype.___clazz;
    clazz.jsConstructor = optCtor;
  }
  for (var part; parts.length && (part = parts.shift()); ) {
    cur = cur[part] = cur[part] || (!parts.length && optCtor) || {};
  }
  return cur;
}

function portableObjCreate(obj) {
  function F() {}

  F.prototype = obj || {};
  return new F();
}

function makeLambdaFunction(samMethod, ctor, ctorArguments) {
  var lambda = function () {
    return samMethod.apply(lambda, arguments);
  };
  ctor.apply(lambda, ctorArguments);
  return lambda;
}

function emptyMethod() {}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap) {
  var prototypesByTypeId = prototypesByTypeId_0,
    superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array ? prototype_0[0] : null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  } else {
    _ =
      ((superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype),
      !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]),
      portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap() {
  prototypesByTypeId_0 = {};
  !Array.isArray &&
    (Array.isArray = function (vArg) {
      return Object.prototype.toString.call(vArg) === "[object Array]";
    });
  function now_0() {
    return new Date().getTime();
  }

  !Date.now && (Date.now = now_0);
}

$wnd.goog = $wnd.goog || {};
$wnd.goog.global = $wnd.goog.global || $wnd;
bootstrap();
function $equals(this$static, other) {
  return maskUndefined(this$static) === maskUndefined(other);
}

function Object_0() {}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other) {
  return instanceOfString(this$static)
    ? $equals_1(this$static, other)
    : instanceOfDouble(this$static)
    ? (checkCriticalNotNull(this$static), maskUndefined(this$static) === maskUndefined(other))
    : instanceOfBoolean(this$static)
    ? (checkCriticalNotNull(this$static), maskUndefined(this$static) === maskUndefined(other))
    : hasJavaObjectVirtualDispatch(this$static)
    ? this$static.equals_0(other)
    : isJavaArray(this$static)
    ? $equals(this$static, other)
    : !!this$static && !!this$static.equals
    ? this$static.equals(other)
    : maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static) {
  return instanceOfString(this$static)
    ? Ljava_lang_String_2_classLit
    : instanceOfDouble(this$static)
    ? Ljava_lang_Double_2_classLit
    : instanceOfBoolean(this$static)
    ? Ljava_lang_Boolean_2_classLit
    : hasJavaObjectVirtualDispatch(this$static)
    ? this$static.___clazz
    : isJavaArray(this$static)
    ? this$static.___clazz
    : this$static.___clazz ||
      (Array.isArray(this$static) &&
        getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1)) ||
      Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static) {
  return instanceOfString(this$static)
    ? getHashCode_1(this$static)
    : instanceOfDouble(this$static)
    ? round_int((checkCriticalNotNull(this$static), this$static))
    : instanceOfBoolean(this$static)
    ? (checkCriticalNotNull(this$static), this$static)
      ? 1231
      : 1237
    : hasJavaObjectVirtualDispatch(this$static)
    ? this$static.hashCode_0()
    : isJavaArray(this$static)
    ? getHashCode_0(this$static)
    : !!this$static && !!this$static.hashCode
    ? this$static.hashCode()
    : getHashCode_0(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other) {
  return $equals(this, other);
};
_.getClass_0 = function getClass_0() {
  return this.___clazz;
};
_.hashCode_0 = function hashCode_0() {
  return getHashCode_0(this);
};
_.toString_0 = function toString_0() {
  var number;
  return (
    $getName(getClass__Ljava_lang_Class___devirtual$(this)) +
    "@" +
    ((number = hashCode__I__devirtual$(this) >>> 0), number.toString(16))
  );
};
_.equals = function (other) {
  return this.equals_0(other);
};
_.hashCode = function () {
  return this.hashCode_0();
};
_.toString = function () {
  return this.toString_0();
};
function $clinit_StackTraceCreator() {
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModern();
  collector = enforceLegacy ? new StackTraceCreator$CollectorLegacy() : c;
}

function captureStackTrace(error) {
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function extractFunctionName(fnName) {
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return (match_0 && match_0[1]) || "anonymous";
}

function supportsErrorStack() {
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return "stack" in new Error();
}

var collector;
defineClass(431, 1, {});
function StackTraceCreator$CollectorLegacy() {}

defineClass(231, 431, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error) {
  var seen = {},
    name_1;
  var fnStack = [];
  error["fnStack"] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator(), callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ":" + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0, j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
};
function StackTraceCreator$CollectorModern() {}

defineClass(232, 431, {}, StackTraceCreator$CollectorModern);
_.collect = function collect_0(error) {};
function ensureNotNull(array) {
  return checkCriticalNotNull(array), array;
}

function getClassLiteralForArray(clazz, dimensions) {
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array) {
  return array.__elementTypeCategory$ == null ? 10 : array.__elementTypeCategory$;
}

function initMultidimensionalArray(
  leafClassLiteral,
  castableTypeMapExprs,
  elementTypeIds,
  leafElementTypeCategory,
  dimExprs,
  count
) {
  return initMultidimensionalArray_0(
    leafClassLiteral,
    castableTypeMapExprs,
    elementTypeIds,
    leafElementTypeCategory,
    dimExprs,
    0,
    count
  );
}

function initMultidimensionalArray_0(
  leafClassLiteral,
  castableTypeMapExprs,
  elementTypeIds,
  leafElementTypeCategory,
  dimExprs,
  index_0,
  count
) {
  var elementTypeCategory, i, isLastDimension, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDimension = index_0 == count - 1;
  elementTypeCategory = isLastDimension ? leafElementTypeCategory : 0;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  leafElementTypeCategory != 10 &&
    stampJavaTypeInfo(
      getClassLiteralForArray(leafClassLiteral, count - index_0),
      castableTypeMapExprs[index_0],
      elementTypeIds[index_0],
      elementTypeCategory,
      result
    );
  if (!isLastDimension) {
    ++index_0;
    for (i = 0; i < length_0; ++i) {
      result[i] = initMultidimensionalArray_0(
        leafClassLiteral,
        castableTypeMapExprs,
        elementTypeIds,
        leafElementTypeCategory,
        dimExprs,
        index_0,
        count
      );
    }
  }
  return result;
}

function initUnidimensionalArray(
  leafClassLiteral,
  castableTypeMap,
  elementTypeId,
  length_0,
  elementTypeCategory,
  dimensions
) {
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 &&
    stampJavaTypeInfo(
      getClassLiteralForArray(leafClassLiteral, dimensions),
      castableTypeMap,
      elementTypeId,
      elementTypeCategory,
      result
    );
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0) {
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:
      return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0) {
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array) {
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function stampJavaTypeInfo_0(array, referenceType) {
  getElementTypeCategory(referenceType) != 10 &&
    stampJavaTypeInfo(
      getClass__Ljava_lang_Class___devirtual$(referenceType),
      referenceType.castableTypeMap,
      referenceType.__elementTypeId$,
      getElementTypeCategory(referenceType),
      array
    );
  return array;
}

function canCast(src_0, dstId) {
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  } else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  } else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  } else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function hasJavaObjectVirtualDispatch(src_0) {
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId) {
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0) {
  return typeof src_0 === "boolean";
}

function instanceOfDouble(src_0) {
  return typeof src_0 === "number";
}

function instanceOfJso(src_0) {
  return (
    src_0 != null && (typeof src_0 === "object" || typeof src_0 === "function") && !(src_0.typeMarker === typeMarkerFn)
  );
}

function instanceOfNative(src_0, jsType) {
  return src_0 && jsType && src_0 instanceof jsType;
}

function instanceOfString(src_0) {
  return typeof src_0 === "string";
}

function maskUndefined(src_0) {
  return src_0 == null ? null : src_0;
}

function round_int(x_0) {
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function toJava(e) {
  var javaException;
  if (instanceOf(e, 16)) {
    return e;
  }
  javaException = e && e.__java$exception;
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t) {
  return t.backingJsObject;
}

function add_6(a, b) {
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a + b;
    if ($intern_0 < result && result < $intern_1) {
      return result;
    }
  }
  return createLongEmul(add_5(isSmallLong0(a) ? toBigLong(a) : a, isSmallLong0(b) ? toBigLong(b) : b));
}

function compare_0(a, b) {
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a) ? toBigLong(a) : a, isSmallLong0(b) ? toBigLong(b) : b);
}

function createLongEmul(big_0) {
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_2;
  }
  if (a2 == $intern_3) {
    return big_0.l + big_0.m * $intern_2 - $intern_1;
  }
  return big_0;
}

function fromDouble_0(value_0) {
  if ($intern_0 < value_0 && value_0 < $intern_1) {
    return value_0 < 0 ? $wnd.Math.ceil(value_0) : $wnd.Math.floor(value_0);
  }
  return createLongEmul(fromDouble(value_0));
}

function isSmallLong0(value_0) {
  return typeof value_0 === "number";
}

function lte(a, b) {
  return compare_0(a, b) <= 0;
}

function toBigLong(longValue) {
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += $intern_1;
    a3 = $intern_3;
  }
  a1 = round_int(value_0 / $intern_2);
  a0 = round_int(value_0 - a1 * $intern_2);
  return create0(a0, a1, a3);
}

function toDouble_0(a) {
  var d;
  if (isSmallLong0(a)) {
    d = a;
    return d == -0 ? 0 : d;
  }
  return toDouble(a);
}

function toInt_0(a) {
  if (isSmallLong0(a)) {
    return a | 0;
  }
  return toInt(a);
}

function toString_33(a) {
  if (isSmallLong0(a)) {
    return "" + a;
  }
  return toString_32(a);
}

function $isInstance(instance) {
  var type_0;
  if (instance == null) {
    return false;
  }
  type_0 = typeof instance;
  return (
    $equals_1(type_0, "boolean") ||
    $equals_1(type_0, "number") ||
    $equals_1(type_0, "string") ||
    instance.$implements__java_io_Serializable ||
    Array.isArray(instance)
  );
}

function $fillInStackTrace(this$static) {
  this$static.writableStackTrace &&
    this$static.backingJsObject !== "__noinit__" &&
    this$static.initializeBackingError();
  return this$static;
}

function $linkBack(this$static, error) {
  if (error instanceof Object) {
    try {
      error.__java$exception = this$static;
      if (navigator.userAgent.toLowerCase().indexOf("msie") != -1 && $doc.documentMode < 9) {
        return;
      }
      var throwable = this$static;
      Object.defineProperties(error, {
        cause: {
          get: function () {
            var cause = throwable.getCause();
            return cause && cause.getBackingJsObject();
          },
        },
        suppressed: {
          get: function () {
            return throwable.getBackingSuppressed();
          },
        },
      });
    } catch (ignored) {}
  }
}

function $setBackingJsObject(this$static, backingJsObject) {
  this$static.backingJsObject = backingJsObject;
  $linkBack(this$static, backingJsObject);
}

function $toString(this$static, message) {
  var className;
  className = $getName(this$static.___clazz);
  return message == null ? className : className + ": " + message;
}

function Throwable() {
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function fixIE(e) {
  if (!("stack" in e)) {
    try {
      throw e;
    } catch (ignored) {}
  }
  return e;
}

function of(e) {
  var throwable;
  if (e != null) {
    throwable = e.__java$exception;
    if (throwable) {
      return throwable;
    }
  }
  return instanceOfNative(e, TypeError) ? new NullPointerException_0(e) : new JsException(e);
}

defineClass(16, 1, { 3: 1, 16: 1 });
_.createError = function createError(msg) {
  return new Error(msg);
};
_.getBackingJsObject = function getBackingJsObject() {
  return this.backingJsObject;
};
_.getBackingSuppressed = function getBackingSuppressed() {
  var collected, lastArg, lastArg0;
  return (
    (collected = $reduce(
      ((lastArg0 = $map(
        stream(
          (this.suppressedExceptions == null &&
            (this.suppressedExceptions = initUnidimensionalArray(
              Ljava_lang_Throwable_2_classLit,
              $intern_4,
              16,
              0,
              0,
              1
            )),
          this.suppressedExceptions)
        ),
        new Throwable$lambda$0$Type()
      )),
      of_0(
        new Collectors$21methodref$ctor$Type(),
        new Collectors$20methodref$add$Type(),
        new Collectors$lambda$42$Type(),
        stampJavaTypeInfo(
          getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1),
          $intern_5,
          69,
          0,
          [($clinit_Collector$Characteristics(), IDENTITY_FINISH)]
        )
      ),
      lastArg0),
      ((lastArg = new ArrayList()), lastArg)
    )),
    collected.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, collected.size(), 5, 1))
  );
};
_.getCause = function getCause() {
  return this.cause_0;
};
_.getMessage = function getMessage() {
  return this.detailMessage;
};
_.initializeBackingError = function initializeBackingError() {
  $setBackingJsObject(this, fixIE(this.createError($toString(this, this.detailMessage))));
  captureStackTrace(this);
};
_.toString_0 = function toString_11() {
  return $toString(this, this.getMessage());
};
_.backingJsObject = "__noinit__";
_.writableStackTrace = true;
defineClass(24, 16, { 3: 1, 24: 1, 16: 1 });
function RuntimeException() {
  Throwable.call(this);
}

function RuntimeException_0(message) {
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_1(cause) {
  this.detailMessage = !cause ? null : $toString(cause, cause.getMessage());
  this.cause_0 = cause;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(19, 24, $intern_6, RuntimeException_0, RuntimeException_1);
function IndexOutOfBoundsException(message) {
  RuntimeException_0.call(this, message);
}

defineClass(98, 19, $intern_6, IndexOutOfBoundsException);
function ArrayIndexOutOfBoundsException(msg) {
  IndexOutOfBoundsException.call(this, msg);
}

defineClass(178, 98, $intern_6, ArrayIndexOutOfBoundsException);
function $isInstance_3(instance) {
  var type_0;
  type_0 = typeof instance;
  if ($equals_1(type_0, "boolean") || $equals_1(type_0, "number") || $equals_1(type_0, "string")) {
    return true;
  }
  return instance != null && instance.$implements__java_lang_Comparable;
}

function $clinit_Boolean() {
  $clinit_Boolean = emptyMethod;
}

function $isInstance_0(instance) {
  $clinit_Boolean();
  return $equals_1("boolean", typeof instance);
}

booleanCastMap = { 3: 1, 8: 1 };
function $isInstance_1(instance) {
  if ($equals_1(typeof instance, "string")) {
    return true;
  }
  return instance != null && instance.$implements__java_lang_CharSequence;
}

function $ensureNamesAreInitialized(this$static) {
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getEnumConstants(this$static) {
  return this$static.enumConstantsFunc && this$static.enumConstantsFunc();
}

function $getName(this$static) {
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function $getSimpleName(this$static) {
  $ensureNamesAreInitialized(this$static);
  return this$static.simpleName;
}

function Class() {
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName) {
  var clazz;
  clazz = new Class();
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId) {
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc) {
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc ? 8 : 0;
  clazz.enumConstantsFunc = enumConstantsFunc;
  return clazz;
}

function createForInterface(packageName, compoundClassName) {
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId) {
  var clazz;
  clazz = createClassObject("", className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions) {
  var arrayLiterals = (leafClass.arrayLiterals = leafClass.arrayLiterals || []);
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz) {
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz) {
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()
      ? (clazz.typeName = "[" + componentType.typeId)
      : !componentType.isArray_0()
      ? (clazz.typeName = "[L" + componentType.getName() + ";")
      : (clazz.typeName = "[" + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + "[]";
    clazz.simpleName = componentType.getSimpleName() + "[]";
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split("/");
  clazz.typeName = join_1(".", [packageName, join_1("$", compoundName)]);
  clazz.canonicalName = join_1(".", [packageName, join_1(".", compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_1(separator, strings) {
  var i = 0;
  while (!strings[i] || strings[i] == "") {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == "") {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz) {
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(129, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions) {
  var clazz;
  clazz = new Class();
  clazz.modifiers = 4;
  dimensions > 1
    ? (clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1))
    : (clazz.componentType = this);
  return clazz;
};
_.getCanonicalName = function getCanonicalName() {
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
};
_.getName = function getName() {
  return $getName(this);
};
_.getSimpleName = function getSimpleName() {
  return $getSimpleName(this);
};
_.isArray_0 = function isArray() {
  return (this.modifiers & 4) != 0;
};
_.isPrimitive = function isPrimitive() {
  return (this.modifiers & 1) != 0;
};
_.toString_0 = function toString_36() {
  return (
    ((this.modifiers & 2) != 0 ? "interface " : (this.modifiers & 1) != 0 ? "" : "class ") +
    ($ensureNamesAreInitialized(this), this.typeName)
  );
};
_.modifiers = 0;
var nextSequentialId = 1;
function $isInstance_2(instance) {
  if (instance == null) {
    return false;
  }
  return instance.$implements__java_lang_Cloneable || Array.isArray(instance);
}

function $isInstance_4(instance) {
  return $equals_1("number", typeof instance) || instanceOfNative(instance, $wnd.java.lang.Number$impl);
}

function __parseAndValidateDouble(s) {
  floatRegex == null &&
    (floatRegex = new RegExp("^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$"));
  if (!floatRegex.test(s)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return parseFloat(s);
}

function __parseAndValidateInt(s) {
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException("null"));
  }
  length_0 = s.length;
  startIndex =
    length_0 > 0 &&
    (checkCriticalStringElementIndex(0, s.length),
    s.charCodeAt(0) == 45 || (checkCriticalStringElementIndex(0, s.length), s.charCodeAt(0) == 43))
      ? 1
      : 0;
  for (i = startIndex; i < length_0; i++) {
    if (digit((checkCriticalStringElementIndex(i, s.length), s.charCodeAt(i))) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  } else if (isTooLow || toReturn > 2147483647) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(112, 1, { 3: 1, 112: 1 });
var floatRegex;
function $doubleValue(this$static) {
  return checkCriticalNotNull(this$static), this$static;
}

function $isInstance_5(instance) {
  return $equals_1("number", typeof instance);
}

doubleCastMap = { 3: 1, 8: 1, 184: 1, 112: 1 };
function Enum(name_0, ordinal) {
  this.name_0 = name_0;
  this.ordinal_0 = ordinal;
}

defineClass(7, 1, { 3: 1, 8: 1, 7: 1 });
_.compareTo = function compareTo(other) {
  return this.ordinal_0 - other.ordinal_0;
};
_.equals = function equals_3(other) {
  return this === other;
};
_.equals_0 = function (other) {
  return this.equals(other);
};
_.hashCode = function hashCode_4() {
  return getHashCode_0(this);
};
_.hashCode_0 = function () {
  return this.hashCode();
};
_.name = function name_2() {
  return this.name_0 != null ? this.name_0 : "" + this.ordinal_0;
};
_.ordinal = function ordinal_0() {
  return this.ordinal_0;
};
_.toString = function toString_4() {
  return this.name_0 != null ? this.name_0 : "" + this.ordinal_0;
};
_.toString_0 = function () {
  return this.toString();
};
_.ordinal_0 = 0;
function IllegalArgumentException(message) {
  RuntimeException_0.call(this, message);
}

defineClass(47, 19, $intern_6, IllegalArgumentException);
function IllegalStateException() {
  RuntimeException.call(this);
}

function IllegalStateException_0(s) {
  RuntimeException_0.call(this, s);
}

defineClass(97, 19, $intern_6, IllegalStateException, IllegalStateException_0);
function Integer(value_0) {
  this.value_0 = value_0;
}

function numberOfLeadingZeros_0(i) {
  var m, n, y_0;
  if (i < 0) {
    return 0;
  } else if (i == 0) {
    return 32;
  } else {
    y_0 = -(i >> 16);
    m = (y_0 >> 16) & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = (y_0 >> 16) & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = (y_0 >> 16) & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = (y_0 >> 16) & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i) {
  var r, rtn;
  if (i == 0) {
    return 32;
  } else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf(i) {
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues(), boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(96, 112, { 3: 1, 8: 1, 96: 1, 112: 1 }, Integer);
_.equals_0 = function equals_15(o) {
  return instanceOf(o, 96) && o.value_0 == this.value_0;
};
_.hashCode_0 = function hashCode_15() {
  return this.value_0;
};
_.toString_0 = function toString_37() {
  return "" + this.value_0;
};
_.value_0 = 0;
function JsException(backingJsObject) {
  $fillInStackTrace(this);
  this.backingJsObject = backingJsObject;
  $linkBack(this, backingJsObject);
  this.detailMessage = backingJsObject == null ? "null" : toString_34(backingJsObject);
}

defineClass(85, 19, $intern_6, JsException);
defineClass(1106, 1, {});
function NullPointerException() {
  RuntimeException.call(this);
}

function NullPointerException_0(typeError) {
  JsException.call(this, typeError);
}

defineClass(103, 85, $intern_6, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg) {
  return new TypeError(msg);
};
function $charAt(this$static, index_0) {
  checkCriticalStringElementIndex(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function $equals_1(this$static, other) {
  return checkCriticalNotNull(this$static), maskUndefined(this$static) === maskUndefined(other);
}

function $getChars0(srcBegin, srcEnd, dst, dstBegin) {
  while (srcBegin < srcEnd) {
    dst[dstBegin++] = $charAt("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", srcBegin++);
  }
}

function $isInstance_6(instance) {
  return $equals_1("string", typeof instance);
}

function $replaceAll(this$static, regex, replace) {
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, "g"), replace);
}

function $split(this$static, regex) {
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp(regex, "g");
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_4, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == "") {
      out[count] = trail;
      break;
    } else {
      matchIndex = matchObj.index;
      out[count] = trail.substr(0, matchIndex);
      trail = $substring_0(trail, matchIndex + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == "") {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty);
  }
  return out;
}

function $substring(this$static, beginIndex) {
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex) {
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static) {
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (
    start_0 < length_0 &&
    (checkCriticalStringElementIndex(start_0, this$static.length), this$static.charCodeAt(start_0) <= 32)
  ) {
    ++start_0;
  }
  end = length_0;
  while (
    end > start_0 &&
    (checkCriticalStringElementIndex(end - 1, this$static.length), this$static.charCodeAt(end - 1) <= 32)
  ) {
    --end;
  }
  return start_0 > 0 || end < length_0 ? this$static.substr(start_0, end - start_0) : this$static;
}

function fromCharCode(array) {
  return String.fromCharCode.apply(null, array);
}

function translateReplaceString(replaceStr) {
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf("\\", pos))) {
    checkCriticalStringElementIndex(pos + 1, replaceStr.length);
    replaceStr.charCodeAt(pos + 1) == 36
      ? (replaceStr = replaceStr.substr(0, pos) + "$" + $substring(replaceStr, ++pos))
      : (replaceStr = replaceStr.substr(0, pos) + ("" + $substring(replaceStr, ++pos)));
  }
  return replaceStr;
}

function valueOf_0(x_0, count) {
  var batchEnd, batchStart, end, s;
  end = count;
  checkCriticalStringBounds(end, x_0.length);
  s = "";
  for (batchStart = 0; batchStart < end; ) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    s += fromCharCode(x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

stringCastMap = { 3: 1, 177: 1, 8: 1, 2: 1 };
function StringIndexOutOfBoundsException(message) {
  IndexOutOfBoundsException.call(this, message);
}

defineClass(165, 98, $intern_6, StringIndexOutOfBoundsException);
function Throwable$lambda$0$Type() {}

defineClass(172, 1, {}, Throwable$lambda$0$Type);
function UnsupportedOperationException() {
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message) {
  RuntimeException_0.call(this, message);
}

defineClass(29, 19, $intern_6, UnsupportedOperationException, UnsupportedOperationException_0);
function $advanceToFind(this$static, o, remove) {
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0(); ) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || (o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e))) {
      remove && iter.remove_0();
      return true;
    }
  }
  return false;
}

function $clear_3(this$static) {
  var iter;
  for (iter = this$static.iterator(); iter.hasNext_0(); ) {
    iter.next_1();
    iter.remove_0();
  }
}

function $containsAll(this$static, c) {
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0(); ) {
    e = e$iterator.next_1();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

defineClass(399, 1, { 37: 1 });
_.add = function add_7(o) {
  throw toJs(new UnsupportedOperationException_0("Add not supported on this collection"));
};
_.addAll = function addAll(c) {
  var changed, e, e$iterator;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0(); ) {
    e = e$iterator.next_1();
    changed = changed | this.add(e);
  }
  return changed;
};
_.clear = function clear_3() {
  $clear_3(this);
};
_.contains = function contains(o) {
  return $advanceToFind(this, o, false);
};
_.containsAll = function containsAll(c) {
  return $containsAll(this, c);
};
_.isEmpty = function isEmpty_1() {
  return this.size() == 0;
};
_.remove = function remove_5(o) {
  return $advanceToFind(this, o, true);
};
_.removeAll = function removeAll(c) {
  var changed, iter, o;
  checkCriticalNotNull(c);
  changed = false;
  for (iter = this.iterator(); iter.hasNext_0(); ) {
    o = iter.next_1();
    if (c.contains(o)) {
      iter.remove_0();
      changed = true;
    }
  }
  return changed;
};
_.retainAll = function retainAll(c) {
  var changed, iter, o;
  checkCriticalNotNull(c);
  changed = false;
  for (iter = this.iterator(); iter.hasNext_0(); ) {
    o = iter.next_1();
    if (!c.contains(o)) {
      iter.remove_0();
      changed = true;
    }
  }
  return changed;
};
_.toArray = function toArray() {
  return this.toArray_0(initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, this.size(), 5, 1));
};
_.toArray_0 = function toArray_0(a) {
  var i, it, result, size_0;
  size_0 = this.size();
  a.length < size_0 && (a = stampJavaTypeInfo_1(new Array(size_0), a));
  result = a;
  it = this.iterator();
  for (i = 0; i < size_0; ++i) {
    result[i] = it.next_1();
  }
  a.length > size_0 && (a[size_0] = null);
  return a;
};
_.toString_0 = function toString_38() {
  var e, e$iterator, joiner;
  joiner = new StringJoiner("[", "]");
  for (e$iterator = this.iterator(); e$iterator.hasNext_0(); ) {
    e = e$iterator.next_1();
    $add_13(joiner, e === this ? "(this Collection)" : e == null ? "null" : toString_34(e));
  }
  return !joiner.builder
    ? joiner.emptyValue
    : joiner.suffix.length == 0
    ? joiner.builder.string
    : joiner.builder.string + ("" + joiner.suffix);
};
function $indexOf(this$static, toFind) {
  var i, n;
  for (i = 0, n = this$static.size(); i < n; ++i) {
    if (equals_21(toFind, this$static.getAtIndex(i))) {
      return i;
    }
  }
  return -1;
}

defineClass(432, 399, $intern_7);
_.addAtIndex = function add_8(index_0, element) {
  throw toJs(new UnsupportedOperationException_0("Add not supported on this list"));
};
_.add = function add_9(obj) {
  this.addAtIndex(this.size(), obj);
  return true;
};
_.addAllAtIndex = function addAll_0(index_0, c) {
  var changed, e, e$iterator;
  checkCriticalNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0(); ) {
    e = e$iterator.next_1();
    this.addAtIndex(index_0++, e);
    changed = true;
  }
  return changed;
};
_.clear = function clear_5() {
  this.removeRange_0(0, this.size());
};
_.equals_0 = function equals_17(o) {
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 86)) {
    return false;
  }
  other = o;
  if (this.size() != other.size()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0(); ) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (
      !(
        maskUndefined(elem) === maskUndefined(elemOther) ||
        (elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))
      )
    ) {
      return false;
    }
  }
  return true;
};
_.hashCode_0 = function hashCode_17() {
  return hashCode_22(this);
};
_.indexOf = function indexOf(toFind) {
  return $indexOf(this, toFind);
};
_.iterator = function iterator_5() {
  return new AbstractList$IteratorImpl(this);
};
_.lastIndexOf = function lastIndexOf(toFind) {
  var i;
  for (i = this.size() - 1; i > -1; --i) {
    if (equals_21(toFind, this.getAtIndex(i))) {
      return i;
    }
  }
  return -1;
};
_.removeAtIndex = function remove_8(index_0) {
  throw toJs(new UnsupportedOperationException_0("Remove not supported on this list"));
};
_.removeRange_0 = function removeRange(fromIndex, endIndex) {
  var i, iter;
  iter = new AbstractList$ListIteratorImpl(this, fromIndex);
  for (i = fromIndex; i < endIndex; ++i) {
    checkCriticalElement(iter.i < iter.this$01.size());
    iter.this$01.getAtIndex((iter.last = iter.i++));
    $remove_6(iter);
  }
};
_.setAtIndex = function set_1(index_0, o) {
  throw toJs(new UnsupportedOperationException_0("Set not supported on this list"));
};
_.subList = function subList(fromIndex, toIndex) {
  return new AbstractList$SubList(this, fromIndex, toIndex);
};
function $remove_6(this$static) {
  checkCriticalState(this$static.last != -1);
  this$static.this$01.removeAtIndex(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0) {
  this.this$01 = this$0;
}

defineClass(78, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_2() {
  return this.i < this.this$01.size();
};
_.next_1 = function next_2() {
  return checkCriticalElement(this.i < this.this$01.size()), this.this$01.getAtIndex((this.last = this.i++));
};
_.remove_0 = function remove_9() {
  $remove_6(this);
};
_.i = 0;
_.last = -1;
function AbstractList$ListIteratorImpl(this$0, start_0) {
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size());
  this.i = start_0;
}

defineClass(233, 78, {}, AbstractList$ListIteratorImpl);
_.remove_0 = function remove_10() {
  $remove_6(this);
};
function AbstractList$SubList(wrapped, fromIndex, toIndex) {
  checkCriticalPositionIndexes(fromIndex, toIndex, wrapped.size());
  this.wrapped = wrapped;
  this.fromIndex = fromIndex;
  this.size_0 = toIndex - fromIndex;
}

defineClass(234, 432, $intern_7, AbstractList$SubList);
_.addAtIndex = function add_10(index_0, element) {
  checkCriticalPositionIndex(index_0, this.size_0);
  this.wrapped.addAtIndex(this.fromIndex + index_0, element);
  ++this.size_0;
};
_.getAtIndex = function get_5(index_0) {
  checkCriticalElementIndex(index_0, this.size_0);
  return this.wrapped.getAtIndex(this.fromIndex + index_0);
};
_.removeAtIndex = function remove_11(index_0) {
  var result;
  checkCriticalElementIndex(index_0, this.size_0);
  result = this.wrapped.removeAtIndex(this.fromIndex + index_0);
  --this.size_0;
  return result;
};
_.setAtIndex = function set_2(index_0, element) {
  checkCriticalElementIndex(index_0, this.size_0);
  return this.wrapped.setAtIndex(this.fromIndex + index_0, element);
};
_.size = function size_5() {
  return this.size_0;
};
_.fromIndex = 0;
_.size_0 = 0;
function $$init_0(this$static) {
  this$static.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
}

function $add_10(this$static, o) {
  this$static.array[this$static.array.length] = o;
  return true;
}

function $addAll(this$static, c) {
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this$static.array, this$static.array.length, cArray);
  return true;
}

function $indexOf_0(this$static, o, index_0) {
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_21(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $lastIndexOf(this$static, o, index_0) {
  for (; index_0 >= 0; --index_0) {
    if (equals_21(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_7(this$static, index_0) {
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length), this$static.array[index_0]);
  removeFrom(this$static.array, index_0, 1);
  return previous;
}

function ArrayList() {
  $$init_0(this);
}

function ArrayList_0() {
  $$init_0(this);
  checkCriticalArgument(true, "Initial capacity must not be negative");
}

function ArrayList_1(c) {
  $$init_0(this);
  insertTo_0(this.array, 0, c.coll.toArray());
}

defineClass(59, 432, $intern_8, ArrayList, ArrayList_0, ArrayList_1);
_.addAtIndex = function add_11(index_0, o) {
  checkCriticalPositionIndex(index_0, this.array.length);
  insertTo(this.array, index_0, o);
};
_.add = function add_12(o) {
  return $add_10(this, o);
};
_.addAllAtIndex = function addAll_1(index_0, c) {
  var cArray, len;
  checkCriticalPositionIndex(index_0, this.array.length);
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this.array, index_0, cArray);
  return true;
};
_.addAll = function addAll_2(c) {
  return $addAll(this, c);
};
_.clear = function clear_8() {
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 5, 1);
};
_.contains = function contains_3(o) {
  return $indexOf_0(this, o, 0) != -1;
};
_.getAtIndex = function get_6(index_0) {
  return checkCriticalElementIndex(index_0, this.array.length), this.array[index_0];
};
_.indexOf = function indexOf_0(o) {
  return $indexOf_0(this, o, 0);
};
_.isEmpty = function isEmpty_2() {
  return this.array.length == 0;
};
_.iterator = function iterator_8() {
  return new ArrayList$1(this);
};
_.lastIndexOf = function lastIndexOf_0(o) {
  return $lastIndexOf(this, o, this.array.length - 1);
};
_.removeAtIndex = function remove_15(index_0) {
  return $remove_7(this, index_0);
};
_.remove = function remove_16(o) {
  var i;
  i = $indexOf_0(this, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this.array.length);
  removeFrom(this.array, i, 1);
  return true;
};
_.removeRange_0 = function removeRange_0(fromIndex, endIndex) {
  var count;
  checkCriticalPositionIndexes(fromIndex, endIndex, this.array.length);
  count = endIndex - fromIndex;
  removeFrom(this.array, fromIndex, count);
};
_.setAtIndex = function set_3(index_0, o) {
  var previous;
  previous = (checkCriticalElementIndex(index_0, this.array.length), this.array[index_0]);
  this.array[index_0] = o;
  return previous;
};
_.size = function size_8() {
  return this.array.length;
};
_.toArray = function toArray_1() {
  return clone_0(this.array, this.array.length);
};
_.toArray_0 = function toArray_2(out) {
  var i, size_0;
  size_0 = this.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_1(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    out[i] = this.array[i];
  }
  out.length > size_0 && (out[size_0] = null);
  return out;
};
function $next_1(this$static) {
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function ArrayList$1(this$0) {
  this.this$01 = this$0;
}

defineClass(161, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_5() {
  return this.i < this.this$01.array.length;
};
_.next_1 = function next_5() {
  return $next_1(this);
};
_.remove_0 = function remove_17() {
  checkCriticalState(this.last != -1);
  $remove_7(this.this$01, (this.i = this.last));
  this.last = -1;
};
_.i = 0;
_.last = -1;
function hashCode_20(a) {
  var e, e$array, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$array = a, e$index = 0, e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    hashCode = 31 * hashCode + (e != null ? hashCode__I__devirtual$(e) : 0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function spliterator_0(array, endExclusive) {
  return checkCriticalArrayBounds(endExclusive, array.length), new Spliterators$ArraySpliterator(array, endExclusive);
}

function stream(array) {
  return new StreamImpl(null, spliterator_0(array, array.length));
}

function hashCode_21(collection) {
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0(); ) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null ? hashCode__I__devirtual$(e) : 0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_22(list) {
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0(); ) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null ? hashCode__I__devirtual$(e) : 0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function NoSuchElementException() {
  RuntimeException.call(this);
}

defineClass(127, 19, $intern_6, NoSuchElementException);
function equals_21(a, b) {
  return maskUndefined(a) === maskUndefined(b) || (a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b));
}

function hashCode_24(o) {
  return o != null ? hashCode__I__devirtual$(o) : 0;
}

function requireNonNull(obj) {
  if (obj == null) {
    throw toJs(new NullPointerException());
  }
  return obj;
}

function $forEachRemaining(this$static, consumer) {
  while (this$static.tryAdvance(consumer));
}

function checkCriticalArrayBounds(end, length_0) {
  if (0 > end || end > length_0) {
    throw toJs(new ArrayIndexOutOfBoundsException("fromIndex: 0, toIndex: " + end + ", length: " + length_0));
  }
}

defineClass(179, 1, {});
_.forEachRemaining = function forEachRemaining(consumer) {
  $forEachRemaining(this, consumer);
};
_.characteristics_0 = function characteristics_0() {
  return this.characteristics;
};
_.estimateSize = function estimateSize() {
  return this.sizeEstimate;
};
_.characteristics = 0;
_.sizeEstimate = 0;
function Spliterators$AbstractSpliterator(size_0, characteristics) {
  this.sizeEstimate = size_0;
  this.characteristics = (characteristics & 64) != 0 ? characteristics | 16384 : characteristics;
}

defineClass(180, 179, {});
function $forEachRemaining_0(this$static, consumer) {
  checkCriticalNotNull(consumer);
  while (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
  }
}

function $tryAdvance(this$static, consumer) {
  checkCriticalNotNull(consumer);
  if (this$static.index_0 < this$static.limit) {
    $consume(this$static, consumer, this$static.index_0++);
    return true;
  }
  return false;
}

defineClass(181, 1, {});
_.forEachRemaining = function forEachRemaining_0(consumer) {
  $forEachRemaining(this, consumer);
};
_.characteristics_0 = function characteristics_1() {
  return this.characteristics;
};
_.estimateSize = function estimateSize_0() {
  return this.limit - this.index_0;
};
_.characteristics = 0;
_.index_0 = 0;
_.limit = 0;
function $consume(this$static, consumer, index_0) {
  consumer.accept(this$static.array[index_0]);
}

function Spliterators$ArraySpliterator(array, limit) {
  this.index_0 = 0;
  this.limit = limit;
  this.characteristics = 17488;
  this.array = array;
}

defineClass(182, 181, {}, Spliterators$ArraySpliterator);
_.forEachRemaining = function forEachRemaining_1(consumer) {
  $forEachRemaining_0(this, consumer);
};
_.tryAdvance = function tryAdvance(consumer) {
  return $tryAdvance(this, consumer);
};
function of_0(supplier, accumulator, combiner, characteristics) {
  checkCriticalNotNull(supplier);
  checkCriticalNotNull(accumulator);
  checkCriticalNotNull(combiner);
  checkCriticalNotNull(characteristics);
  return new CollectorImpl();
}

function $clinit_Collector$Characteristics() {
  $clinit_Collector$Characteristics = emptyMethod;
  CONCURRENT = new Collector$Characteristics("CONCURRENT", 0);
  IDENTITY_FINISH = new Collector$Characteristics("IDENTITY_FINISH", 1);
  UNORDERED = new Collector$Characteristics("UNORDERED", 2);
}

function Collector$Characteristics(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_23() {
  $clinit_Collector$Characteristics();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Ljava_util_stream_Collector$Characteristics_2_classLit, 1),
    $intern_5,
    69,
    0,
    [CONCURRENT, IDENTITY_FINISH, UNORDERED]
  );
}

defineClass(69, 7, { 3: 1, 8: 1, 7: 1, 69: 1 }, Collector$Characteristics);
var CONCURRENT, IDENTITY_FINISH, UNORDERED;
function CollectorImpl() {}

defineClass(393, 1, {}, CollectorImpl);
function Collectors$20methodref$add$Type() {}

defineClass(174, 1, {}, Collectors$20methodref$add$Type);
function Collectors$21methodref$ctor$Type() {}

defineClass(173, 1, {}, Collectors$21methodref$ctor$Type);
function Collectors$lambda$42$Type() {}

defineClass(175, 1, {}, Collectors$lambda$42$Type);
function $terminate(this$static) {
  if (!this$static.root_0) {
    $throwIfTerminated(this$static);
    this$static.terminated = true;
  } else {
    $terminate(this$static.root_0);
  }
}

function $throwIfTerminated(this$static) {
  if (this$static.root_0) {
    $throwIfTerminated(this$static.root_0);
  } else if (this$static.terminated) {
    throw toJs(new IllegalStateException_0("Stream already terminated, can't be modified or used"));
  }
}

function TerminatableStream(previous) {
  if (!previous) {
    this.root_0 = null;
    new ArrayList();
  } else {
    this.root_0 = previous;
  }
}

defineClass(340, 1, {});
_.terminated = false;
function $map(this$static, mapper) {
  $throwIfTerminated(this$static);
  return new StreamImpl(this$static, new StreamImpl$MapToObjSpliterator(mapper, this$static.spliterator));
}

function $reduce(this$static, identity) {
  var consumer;
  $terminate(this$static);
  consumer = new StreamImpl$ValueConsumer();
  consumer.value_0 = identity;
  this$static.spliterator.forEachRemaining(new StreamImpl$lambda$5$Type(consumer));
  return consumer.value_0;
}

function StreamImpl(prev, spliterator) {
  TerminatableStream.call(this, prev);
  this.spliterator = spliterator;
}

function lambda$4(a_1, t_2) {
  a_1.add(t_2);
  return a_1;
}

function lambda$5(consumer_0, item_2) {
  $accept(consumer_0, lambda$4(consumer_0.value_0, item_2));
}

defineClass(125, 340, { 125: 1 }, StreamImpl);
function StreamImpl$MapToObjSpliterator(map_0, original) {
  Spliterators$AbstractSpliterator.call(this, original.estimateSize(), original.characteristics_0() & -6);
  checkCriticalNotNull(map_0);
  this.original = original;
}

defineClass(341, 180, {}, StreamImpl$MapToObjSpliterator);
_.tryAdvance = function tryAdvance_0(action) {
  return this.original.tryAdvance(new StreamImpl$MapToObjSpliterator$lambda$0$Type(action));
};
function StreamImpl$MapToObjSpliterator$lambda$0$Type(action_1) {
  this.action_1 = action_1;
}

defineClass(343, 1, {}, StreamImpl$MapToObjSpliterator$lambda$0$Type);
_.accept = function accept(arg0) {
  this.action_1.accept(arg0.backingJsObject);
};
function $accept(this$static, value_0) {
  this$static.value_0 = value_0;
}

function StreamImpl$ValueConsumer() {}

defineClass(342, 1, {}, StreamImpl$ValueConsumer);
_.accept = function accept_0(value_0) {
  $accept(this, value_0);
};
function StreamImpl$lambda$5$Type(consumer_0) {
  this.consumer_0 = consumer_0;
}

defineClass(344, 1, {}, StreamImpl$lambda$5$Type);
_.accept = function accept_1(arg0) {
  lambda$5(this.consumer_0, arg0);
};
function clone_0(array, toIndex) {
  var result;
  result = array.slice(0, toIndex);
  return stampJavaTypeInfo_0(result, array);
}

function copy_6(src_0, srcOfs, dest, destOfs, len) {
  var batchEnd, batchStart, destArray, end, spliceArgs;
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  destArray = dest;
  for (batchStart = srcOfs, end = srcOfs + len; batchStart < end; ) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    spliceArgs = src_0.slice(batchStart, batchEnd);
    spliceArgs.splice(0, 0, destOfs, 0);
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}

function createFrom(array, length_0) {
  return stampJavaTypeInfo_1(new Array(length_0), array);
}

function insertTo(array, index_0, value_0) {
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values) {
  copy_6(values, 0, array, index_0, values.length);
}

function removeFrom(array, index_0, deleteCount) {
  array.splice(index_0, deleteCount);
}

defineClass(1108, 1, {});
function stampJavaTypeInfo_1(array, referenceType) {
  return stampJavaTypeInfo_0(array, referenceType);
}

function checkCriticalArgument(expression, errorMessage) {
  if (!expression) {
    throw toJs(new IllegalArgumentException(errorMessage));
  }
}

function checkCriticalElement(expression) {
  if (!expression) {
    throw toJs(new NoSuchElementException());
  }
}

function checkCriticalElementIndex(index_0, size_0) {
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException("Index: " + index_0 + ", Size: " + size_0));
  }
}

function checkCriticalNotNull(reference) {
  if (reference == null) {
    throw toJs(new NullPointerException());
  }
  return reference;
}

function checkCriticalPositionIndex(index_0, size_0) {
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException("Index: " + index_0 + ", Size: " + size_0));
  }
}

function checkCriticalPositionIndexes(start_0, end, size_0) {
  if (start_0 < 0 || end > size_0) {
    throw toJs(new IndexOutOfBoundsException("fromIndex: " + start_0 + ", toIndex: " + end + ", size: " + size_0));
  }
  if (start_0 > end) {
    throw toJs(new IllegalArgumentException("fromIndex: " + start_0 + " > toIndex: " + end));
  }
}

function checkCriticalState(expression) {
  if (!expression) {
    throw toJs(new IllegalStateException());
  }
}

function checkCriticalStringBounds(end, length_0) {
  if (end > length_0 || end < 0) {
    throw toJs(new StringIndexOutOfBoundsException("fromIndex: 0, toIndex: " + end + ", length: " + length_0));
  }
}

function checkCriticalStringElementIndex(index_0, size_0) {
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new StringIndexOutOfBoundsException("Index: " + index_0 + ", Size: " + size_0));
  }
}

defineClass(1104, 1, {});
function getHashCode_0(o) {
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache() {
  $clinit_StringHashCache = emptyMethod;
  back_0 = new Object_0();
  front = new Object_0();
}

function compute(str) {
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode =
      (checkCriticalStringElementIndex(i + 3, str.length),
      str.charCodeAt(i + 3) +
        (checkCriticalStringElementIndex(i + 2, str.length),
        31 *
          (str.charCodeAt(i + 2) +
            (checkCriticalStringElementIndex(i + 1, str.length),
            31 *
              (str.charCodeAt(i + 1) +
                (checkCriticalStringElementIndex(i, str.length), 31 * (str.charCodeAt(i) + 31 * hashCode)))))));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_1(str) {
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ":" + str;
  result = front[key];
  if (result != null) {
    return round_int((checkCriticalNotNull(result), result));
  }
  result = back_0[key];
  hashCode = result == null ? compute(str) : round_int((checkCriticalNotNull(result), result));
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment() {
  if (count_0 == 256) {
    back_0 = front;
    front = new Object_0();
    count_0 = 0;
  }
  ++count_0;
}

var back_0,
  count_0 = 0,
  front;
var Ljava_lang_Object_2_classLit = createForClass("java.lang", "Object", 1);
var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass(
  "com.google.gwt.core.client",
  "JavaScriptObject$",
  0
);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass(
  "com.google.gwt.core.client.impl",
  "StackTraceCreator/Collector",
  431
);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass(
  "com.google.gwt.core.client.impl",
  "StackTraceCreator/CollectorLegacy",
  231
);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass(
  "com.google.gwt.core.client.impl",
  "StackTraceCreator/CollectorModern",
  232
);
var Ljava_lang_Throwable_2_classLit = createForClass("java.lang", "Throwable", 16);
var Ljava_lang_Exception_2_classLit = createForClass("java.lang", "Exception", 24);
var Ljava_lang_RuntimeException_2_classLit = createForClass("java.lang", "RuntimeException", 19);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass("java.lang", "IndexOutOfBoundsException", 98);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass(
  "java.lang",
  "ArrayIndexOutOfBoundsException",
  178
);
var Ljava_lang_Boolean_2_classLit = createForClass("java.lang", "Boolean", 427);
var Ljava_lang_Class_2_classLit = createForClass("java.lang", "Class", 129);
var Ljava_lang_Number_2_classLit = createForClass("java.lang", "Number", 112);
var Ljava_lang_Double_2_classLit = createForClass("java.lang", "Double", 184);
var Ljava_lang_Enum_2_classLit = createForClass("java.lang", "Enum", 7);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass("java.lang", "IllegalArgumentException", 47);
var Ljava_lang_IllegalStateException_2_classLit = createForClass("java.lang", "IllegalStateException", 97);
var Ljava_lang_Integer_2_classLit = createForClass("java.lang", "Integer", 96);
var Ljava_lang_JsException_2_classLit = createForClass("java.lang", "JsException", 85);
var Ljava_lang_NullPointerException_2_classLit = createForClass("java.lang", "NullPointerException", 103);
var Ljava_lang_String_2_classLit = createForClass("java.lang", "String", 2);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass(
  "java.lang",
  "StringIndexOutOfBoundsException",
  165
);
var Ljava_lang_Throwable$lambda$0$Type_2_classLit = createForClass("java.lang", "Throwable/lambda$0$Type", 172);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass(
  "java.lang",
  "UnsupportedOperationException",
  29
);
var Ljava_util_AbstractCollection_2_classLit = createForClass("java.util", "AbstractCollection", 399);
var Ljava_util_AbstractList_2_classLit = createForClass("java.util", "AbstractList", 432);
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass("java.util", "AbstractList/IteratorImpl", 78);
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass(
  "java.util",
  "AbstractList/ListIteratorImpl",
  233
);
var Ljava_util_AbstractList$SubList_2_classLit = createForClass("java.util", "AbstractList/SubList", 234);
var Ljava_util_ArrayList_2_classLit = createForClass("java.util", "ArrayList", 59);
var Ljava_util_ArrayList$1_2_classLit = createForClass("java.util", "ArrayList/1", 161);
var Ljava_util_NoSuchElementException_2_classLit = createForClass("java.util", "NoSuchElementException", 127);
var Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass(
  "java.util",
  "Spliterators/BaseSpliterator",
  179
);
var Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass(
  "java.util",
  "Spliterators/AbstractSpliterator",
  180
);
var Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass(
  "java.util",
  "Spliterators/BaseArraySpliterator",
  181
);
var Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass(
  "java.util",
  "Spliterators/ArraySpliterator",
  182
);
var Ljava_util_stream_Collector$Characteristics_2_classLit = createForEnum(
  "java.util.stream",
  "Collector/Characteristics",
  69,
  values_23
);
var Ljava_util_stream_CollectorImpl_2_classLit = createForClass("java.util.stream", "CollectorImpl", 393);
var Ljava_util_stream_Collectors$20methodref$add$Type_2_classLit = createForClass(
  "java.util.stream",
  "Collectors/20methodref$add$Type",
  174
);
var Ljava_util_stream_Collectors$21methodref$ctor$Type_2_classLit = createForClass(
  "java.util.stream",
  "Collectors/21methodref$ctor$Type",
  173
);
var Ljava_util_stream_Collectors$lambda$42$Type_2_classLit = createForClass(
  "java.util.stream",
  "Collectors/lambda$42$Type",
  175
);
var Ljava_util_stream_TerminatableStream_2_classLit = createForClass("java.util.stream", "TerminatableStream", 340);
var Ljava_util_stream_StreamImpl_2_classLit = createForClass("java.util.stream", "StreamImpl", 125);
var Ljava_util_stream_StreamImpl$MapToObjSpliterator_2_classLit = createForClass(
  "java.util.stream",
  "StreamImpl/MapToObjSpliterator",
  341
);
var Ljava_util_stream_StreamImpl$MapToObjSpliterator$lambda$0$Type_2_classLit = createForClass(
  "java.util.stream",
  "StreamImpl/MapToObjSpliterator/lambda$0$Type",
  343
);
var Ljava_util_stream_StreamImpl$ValueConsumer_2_classLit = createForClass(
  "java.util.stream",
  "StreamImpl/ValueConsumer",
  342
);
var Ljava_util_stream_StreamImpl$lambda$5$Type_2_classLit = createForClass(
  "java.util.stream",
  "StreamImpl/lambda$5$Type",
  344
);
function $clinit_Attribute() {
  $clinit_Attribute = emptyMethod;
  MESSAGES = ($clinit_MessageConstants(), MESSAGES_0);
  WIDTH = new Attribute_0("width", MESSAGES.emptyString, MESSAGES.emptyString, true);
  HEIGHT = new Attribute_0("height", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("minWidth", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("maxWidth", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("minHeight", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("maxHeight", MESSAGES.emptyString, MESSAGES.emptyString, true);
  CORNER_RADIUS = new Attribute_0("cornerRadius", MESSAGES.emptyString, MESSAGES.emptyString, true);
  FILL = new Attribute_0("fill", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("stroke", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("strokeWidth", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute("lineJoin", MESSAGES.emptyString, MESSAGES.emptyString);
  X = new Attribute_0("x", MESSAGES.emptyString, MESSAGES.emptyString, true);
  Y = new Attribute_0("y", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute("visible", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("listening", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("id", MESSAGES.emptyString, MESSAGES.emptyString);
  ALPHA = new Attribute_0("alpha", MESSAGES.emptyString, MESSAGES.emptyString, true);
  FILL_ALPHA = new Attribute_0("fillAlpha", MESSAGES.emptyString, MESSAGES.emptyString, true);
  STROKE_ALPHA = new Attribute_0("strokeAlpha", MESSAGES.emptyString, MESSAGES.emptyString, true);
  SCALE = new Attribute_0("scale", MESSAGES.emptyString, MESSAGES.emptyString, true);
  ROTATION = new Attribute_0("rotation", MESSAGES.emptyString, MESSAGES.emptyString, true);
  OFFSET = new Attribute_0("offset", MESSAGES.emptyString, MESSAGES.emptyString, true);
  SHEAR = new Attribute_0("shear", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute("transform", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("draggable", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("editable", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("fillShapeForSelection", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("fillBoundsForSelection", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("selectionBoundsOffset", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("selectionStrokeOffset", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("dragConstraint", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("dragBounds", MESSAGES.emptyString, MESSAGES.emptyString);
  RADIUS = new Attribute_0("radius", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("radiusX", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("radiusY", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute("clearLayerBeforeDraw", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("transformable", MESSAGES.emptyString, MESSAGES.emptyString);
  TEXT = new Attribute("text", MESSAGES.emptyString, MESSAGES.emptyString);
  FONT_SIZE = new Attribute_0("fontSize", MESSAGES.emptyString, MESSAGES.emptyString, true);
  FONT_FAMILY = new Attribute("fontFamily", MESSAGES.emptyString, MESSAGES.emptyString);
  FONT_STYLE = new Attribute("fontStyle", MESSAGES.emptyString, MESSAGES.emptyString);
  POINTS = new Attribute_0("points", MESSAGES.emptyString, MESSAGES.emptyString, true);
  STAR_POINTS = new Attribute_0("starPoints", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute("lineCap", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute_0("dashArray", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("dashOffset", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("sides", MESSAGES.emptyString, MESSAGES.emptyString, true);
  OUTER_RADIUS = new Attribute_0("outerRadius", MESSAGES.emptyString, MESSAGES.emptyString, true);
  INNER_RADIUS = new Attribute_0("innerRadius", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("skew", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute("shadow", MESSAGES.emptyString, MESSAGES.emptyString);
  START_ANGLE = new Attribute_0("startAngle", MESSAGES.emptyString, MESSAGES.emptyString, true);
  END_ANGLE = new Attribute_0("endAngle", MESSAGES.emptyString, MESSAGES.emptyString, true);
  COUNTER_CLOCKWISE = new Attribute("counterClockwise", MESSAGES.emptyString, MESSAGES.emptyString);
  CONTROL_POINTS = new Attribute("controlPoints", MESSAGES.emptyString, MESSAGES.emptyString);
  TEXT_BASELINE = new Attribute("textBaseline", MESSAGES.emptyString, MESSAGES.emptyString);
  TEXT_ALIGN = new Attribute("textAlign", MESSAGES.emptyString, MESSAGES.emptyString);
  TEXT_UNIT = new Attribute("textUnit", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute_0("clippedImageWidth", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("clippedImageHeight", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("clippedImageStartX", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("clippedImageStartY", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("clippedImageDestinationWidth", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("clippedImageDestinationHeight", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute("serializationMode", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("url", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("loop", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("autoPlay", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("playbackRate", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("showPoster", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("volume", MESSAGES.emptyString, MESSAGES.emptyString);
  BASE_WIDTH = new Attribute_0("baseWidth", MESSAGES.emptyString, MESSAGES.emptyString, true);
  HEAD_WIDTH = new Attribute_0("headWidth", MESSAGES.emptyString, MESSAGES.emptyString, true);
  ARROW_ANGLE = new Attribute_0("arrowAngle", MESSAGES.emptyString, MESSAGES.emptyString, true);
  BASE_ANGLE = new Attribute_0("baseAngle", MESSAGES.emptyString, MESSAGES.emptyString, true);
  ARROW_TYPE = new Attribute("arrowType", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute_0("miterLimit", MESSAGES.emptyString, MESSAGES.emptyString, true);
  CURVE_FACTOR = new Attribute_0("curveFactor", MESSAGES.emptyString, MESSAGES.emptyString, true);
  ANGLE_FACTOR = new Attribute_0("angleFactor", MESSAGES.emptyString, MESSAGES.emptyString, true);
  LINE_FLATTEN = new Attribute("lineFlatten", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute_0("topWidth", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("bottomWidth", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute("imageSelectionMode", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("dragMode", MESSAGES.emptyString, MESSAGES.emptyString);
  PATH = new Attribute("path", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute_0("tickRate", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute("spriteBehaviorMap", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("spriteBehavior", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("active", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute_0("value", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("color", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute("matrix", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("inverted", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute_0("gain", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("bias", MESSAGES.emptyString, MESSAGES.emptyString, true);
  HEAD_OFFSET = new Attribute_0("headOffset", MESSAGES.emptyString, MESSAGES.emptyString, true);
  TAIL_OFFSET = new Attribute_0("tailOffset", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute_0("correctionOffset", MESSAGES.emptyString, MESSAGES.emptyString, true);
  new Attribute("headDirection", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("tailDirection", MESSAGES.emptyString, MESSAGES.emptyString);
  new Attribute("eventPropagationMode", MESSAGES.emptyString, MESSAGES.emptyString);
}

function Attribute(prop, labl, desc) {
  Attribute_0.call(this, prop, labl, desc, false);
}

function Attribute_0(prop, labl, desc, anim) {
  this.m_anim = anim;
  requireNonNull(labl);
  this.m_prop = requireNonNull(prop);
  requireNonNull(desc);
}

defineClass(6, 1, { 6: 1 }, Attribute, Attribute_0);
_.toString_0 = function toString_1() {
  return this.m_prop;
};
_.m_anim = false;
var ALPHA,
  ANGLE_FACTOR,
  ARROW_ANGLE,
  ARROW_TYPE,
  BASE_ANGLE,
  BASE_WIDTH,
  CONTROL_POINTS,
  CORNER_RADIUS,
  COUNTER_CLOCKWISE,
  CURVE_FACTOR,
  END_ANGLE,
  FILL,
  FILL_ALPHA,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_STYLE,
  HEAD_OFFSET,
  HEAD_WIDTH,
  HEIGHT,
  INNER_RADIUS,
  LINE_FLATTEN,
  MESSAGES,
  OFFSET,
  OUTER_RADIUS,
  PATH,
  POINTS,
  RADIUS,
  ROTATION,
  SCALE,
  SHEAR,
  START_ANGLE,
  STAR_POINTS,
  STROKE_ALPHA,
  TAIL_OFFSET,
  TEXT,
  TEXT_ALIGN,
  TEXT_BASELINE,
  TEXT_UNIT,
  WIDTH,
  X,
  Y;
var Lcom_ait_lienzo_client_core_Attribute_2_classLit = createForClass("com.ait.lienzo.client.core", "Attribute", 6);
function $arc(this$static, radius, startAngle, endAngle, antiClockwise) {
  this$static.m_jso.arc(0, 0, radius, startAngle, endAngle, antiClockwise);
}

function $bezierCurveTo(this$static, cp1x, cp1y, cp2x, cp2y, x_0, y_0) {
  this$static.m_jso.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x_0, y_0);
}

function $clearRect(this$static, wide, high) {
  this$static.m_jso.clearRect(0, 0, wide, high);
}

function $fillRect(this$static, x_0, y_0, w, h) {
  this$static.m_jso.fillRect(x_0, y_0, w, h);
}

function $fillText(this$static, text_0, x_0, y_0) {
  this$static.m_jso.fillText(text_0, x_0, y_0);
}

function $fillTextWithGradient(this$static, text_0, x_0, y_0, ex, ey, color_0) {
  $fillTextWithGradient_0(this$static.m_jso, text_0, x_0, y_0, ex, ey, color_0);
}

function $getImageDataPixelColor(this$static, x_0, y_0) {
  return new ImageDataPixelColor(this$static.m_jso.getImageData(x_0, y_0, 1, 1));
}

function $lineTo(this$static, x_0, y_0) {
  this$static.m_jso.lineTo(x_0, y_0);
}

function $measureText(this$static, text_0) {
  return this$static.m_jso.measureText(text_0);
}

function $moveTo(this$static, x_0, y_0) {
  this$static.m_jso.moveTo(x_0, y_0);
}

function $path(this$static, list) {
  if (list) {
    return $path_0(this$static.m_jso, list.m_jso);
  }
  return false;
}

function $quadraticCurveTo(this$static, cpx, cpy, x_0, y_0) {
  this$static.m_jso.quadraticCurveTo(cpx, cpy, x_0, y_0);
}

function $setFillColor(this$static, color_0) {
  $setFillColor_0(this$static, color_0 ? color_0.m_value : null);
}

function $setFillColor_0(this$static, color_0) {
  this$static.m_jso.fillStyle = color_0;
}

function $setLineCap(this$static, linecap) {
  this$static.m_jso.lineCap = linecap ? linecap.m_value : null;
}

function $setLineDash(this$static, dashes) {
  $setLineDash_0(this$static.m_jso, dashes.m_jso);
}

function $setLineDashOffset(this$static, offset) {
  this$static.m_jso.lineDashOffset = offset;
}

function $setMiterLimit(this$static, limit) {
  this$static.m_jso.miterLimit = limit;
}

function $setStrokeColor(this$static, color_0) {
  this$static.m_jso.strokeStyle = color_0 ? color_0.m_value : null;
}

function $setTextAlign(this$static, textAlign) {
  this$static.m_jso.textAlign = textAlign ? textAlign.m_value : null;
}

function $setTextBaseline(this$static, baseline) {
  this$static.m_jso.textBaseline = baseline ? baseline.m_value : null;
}

function $setTextFont(this$static, font) {
  this$static.m_jso.font = font;
}

function $strokeText(this$static, text_0, x_0, y_0) {
  this$static.m_jso.strokeText(text_0, x_0, y_0);
}

function $transform(this$static, transform) {
  $transform_0(this$static.m_jso, transform ? transform : null);
}

function Context2D(jso) {
  this.m_jso = jso;
}

function Context2D_0(element) {
  Context2D.call(this, make_0(element, ($clinit_LienzoCore(), false)));
}

defineClass(90, 1, {}, Context2D_0);
_.isDrag = function isDrag() {
  return false;
};
_.isSelection = function isSelection() {
  return false;
};
_.setGlobalAlpha = function setGlobalAlpha(alpha_0) {
  $setGlobalAlpha(this.m_jso, alpha_0);
};
var Lcom_ait_lienzo_client_core_Context2D_2_classLit = createForClass("com.ait.lienzo.client.core", "Context2D", 90);
function $setLineDash_0(this$static, segments) {
  this$static.setLineDash(segments);
}

function $fillTextWithGradient_0(this$static, text_0, x_0, y_0, ex, ey, color_0) {
  var grad;
  grad = this$static.createLinearGradient(0, 0, ex, ey);
  grad.addColorStop(0, color_0);
  grad.addColorStop(1, color_0);
  this$static.fillStyle = grad;
  this$static.fillText(text_0, x_0, y_0);
}

function $init(this$static, enableHidpi) {
  var canvasMap;
  canvasMap = this$static.canvas;
  canvasMap["imageSmoothingEnabled"] = false;
  canvasMap["webkitImageSmoothingEnabled"] = false;
  canvasMap["mozImageSmoothingEnabled"] = false;
  canvasMap["msImageSmoothingEnabled"] = false;
  canvasMap["oImageSmoothingEnabled"] = false;
  this$static.scalingRatio = 1;
  this$static.hidpiEnabled = enableHidpi;
  enableHidpi &&
    ("backingStorePixelRatio" in canvasMap
      ? (this$static.backingStorePixelRatio = $doubleValue(canvasMap["backingStorePixelRatio"]))
      : "webkitBackingStorePixelRatio" in canvasMap
      ? (this$static.backingStorePixelRatio = $doubleValue(canvasMap["webkitBackingStorePixelRatio"]))
      : "mozBackingStorePixelRatio" in canvasMap
      ? (this$static.backingStorePixelRatio = $doubleValue(canvasMap["mozBackingStorePixelRatio"]))
      : "msBackingStorePixelRatio" in canvasMap
      ? (this$static.backingStorePixelRatio = $doubleValue(canvasMap["msBackingStorePixelRatio"]))
      : "oBackingStorePixelRatio" in canvasMap
      ? (this$static.backingStorePixelRatio = $doubleValue(canvasMap["oBackingStorePixelRatio"]))
      : (this$static.backingStorePixelRatio = 1));
  return this$static;
}

function $initDeviceRatio(this$static) {
  var backingStoreRatio, canvas, oldHeight, oldWidth, windowMap;
  if (!this$static.hidpiEnabled) {
    return;
  }
  canvas = this$static.canvas;
  windowMap = ($clinit_DomGlobal(), $wnd.goog.global.window);
  this$static.devicePixelRatio = "devicePixelRatio" in windowMap ? $doubleValue(windowMap["devicePixelRatio"]) : 1;
  backingStoreRatio = this$static.backingStorePixelRatio;
  if (this$static.devicePixelRatio != backingStoreRatio) {
    this$static.scalingRatio = this$static.devicePixelRatio / backingStoreRatio;
    oldWidth = canvas.width;
    oldHeight = canvas.height;
    canvas.width = toInt_0(fromDouble_0($wnd.Math.round(oldWidth * this$static.scalingRatio)));
    canvas.height = toInt_0(fromDouble_0($wnd.Math.round(oldHeight * this$static.scalingRatio)));
    canvas.style.width = oldWidth + ($clinit_Style$Unit(), "px");
    canvas.style.height = oldHeight + "px";
    this$static.scale(this$static.scalingRatio, this$static.scalingRatio);
  }
}

function $path_0(this$static, list) {
  var e, fill, indx, leng, p;
  if (list == null) {
    return false;
  }
  leng = list.length;
  if (leng < 1) {
    return false;
  }
  indx = 0;
  fill = false;
  this$static.beginPath();
  while (indx < leng) {
    e = list[indx++];
    p = e.points;
    switch (e.command) {
      case 1:
        this$static.lineTo(p[0], p[1]);
        break;
      case 2:
        this$static.moveTo(p[0], p[1]);
        break;
      case 3:
        this$static.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
        break;
      case 4:
        this$static.quadraticCurveTo(p[0], p[1], p[2], p[3]);
        break;
      case 5:
        this$static.ellipse(p[0], p[1], p[2], p[3], p[6], p[4], p[4] + p[5], 1 - p[7] > 0);
        break;
      case 6:
        this$static.closePath();
        fill = true;
        break;
      case 7:
        this$static.arcTo(p[0], p[1], p[2], p[3], p[4]);
    }
  }
  return fill;
}

function $setGlobalAlpha(this$static, alpha_0) {
  this$static.globalAlpha = alpha_0;
}

function $transform_0(this$static, jso) {
  !!jso && this$static.transform(jso.v[0], jso.v[1], jso.v[2], jso.v[3], jso.v[4], jso.v[5]);
}

function make_0(element, enableHidpi) {
  return $init(element.getContext("2d"), enableHidpi);
}

function $doClose(this$static) {
  var node;
  node = this$static.m_node;
  !!node && $unAnimating(node.m_opts_0);
  return this$static;
}

function $doStart(this$static) {
  var node;
  node = this$static.m_node;
  !!node && $doAnimating(node.m_opts_0);
  return this$static;
}

function $run(this$static) {
  if (this$static.m_running) {
    return this$static;
  }
  this$static.m_running = true;
  this$static.m_begtime = toDouble_0(fromDouble_0(Date.now()));
  this$static.doStart();
  $requestAnimationFrame(
    (!INSTANCE && (INSTANCE = new AnimationScheduler()),
    !this$static.m_animate && (this$static.m_animate = new AbstractAnimation$1(this$static)),
    this$static.m_animate),
    null
  );
  return this$static;
}

function $stop(this$static) {
  this$static.m_running = false;
  this$static.m_animate = null;
  return this$static;
}

function AbstractAnimation(duration, callback) {
  this.m_duration = duration;
  this.m_callback = callback;
}

defineClass(163, 1, {});
_.doClose = function doClose() {
  return $doClose(this);
};
_.doFrame = function doFrame() {
  return !!this.m_callback && $onFrame(this.m_callback), this;
};
_.doStart = function doStart() {
  return $doStart(this);
};
_.m_animate = null;
_.m_begtime = 0;
_.m_duration = 0;
_.m_running = false;
var Lcom_ait_lienzo_client_core_animation_AbstractAnimation_2_classLit = createForClass(
  "com.ait.lienzo.client.core.animation",
  "AbstractAnimation",
  163
);
function AbstractAnimation$1(this$0) {
  this.this$01 = this$0;
}

defineClass(329, 1, {}, AbstractAnimation$1);
_.execute = function execute(time) {
  var callback;
  this.this$01.doFrame();
  this.this$01.m_running && !!this.this$01.m_animate
    ? ((callback = makeLambdaFunction(
        AnimationScheduler$lambda$1$Type.prototype.onInvoke,
        AnimationScheduler$lambda$1$Type,
        [(!INSTANCE && (INSTANCE = new AnimationScheduler()), this.this$01.m_animate)]
      )),
      $wnd.goog.global.requestAnimationFrame(callback, null),
      new AnimationScheduler$lambda$0$Type())
    : this.this$01.doClose();
};
var Lcom_ait_lienzo_client_core_animation_AbstractAnimation$1_2_classLit = createForClass(
  "com.ait.lienzo.client.core.animation",
  "AbstractAnimation/1",
  329
);
function $get(this$static, i) {
  if (i < 0 || i >= this$static.m_properties.length) {
    return null;
  }
  return $get_4(this$static.m_properties, i);
}

function AnimationProperties(property, properties) {
  var i, size_0;
  this.m_properties = new $wnd.Array();
  $add_9(this.m_properties, property);
  size_0 = properties.length;
  for (i = 0; i < size_0; i++) {
    !!properties[i] && $add_9(this.m_properties, properties[i]);
  }
}

defineClass(153, 1, {}, AnimationProperties);
_.iterator = function iterator_0() {
  return new BoundedListIterator(this);
};
var Lcom_ait_lienzo_client_core_animation_AnimationProperties_2_classLit = createForClass(
  "com.ait.lienzo.client.core.animation",
  "AnimationProperties",
  153
);
var Lcom_ait_lienzo_client_core_animation_AnimationProperty_2_classLit = createForInterface(
  "com.ait.lienzo.client.core.animation",
  "AnimationProperty"
);
function AnimationProperty$Properties$AbstractStringColorAnimationProperty(target, attribute) {
  this.m_target = target;
  this.m_attribute = attribute;
}

defineClass(158, 1, $intern_9);
_.apply_0 = function apply_0(node, percent) {
  var a, h, l, s, m2, m1;
  h = this.m_origin_h + (this.m_target_h - this.m_origin_h) * percent;
  s = this.m_origin_s + (this.m_target_s - this.m_origin_s) * percent;
  l = this.m_origin_l + (this.m_target_l - this.m_origin_l) * percent;
  a = this.m_origin_a + (this.m_target_a - this.m_origin_a) * percent;
  this.setColorString(
    node,
    $getColorString(
      $setA(
        ((m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s),
        (m1 = l * 2 - m2),
        new Color(
          fixRGB(toInt_0(fromDouble_0($wnd.Math.round(255 * hueToRGB(m1, m2, h + $intern_10))))),
          fixRGB(toInt_0(fromDouble_0($wnd.Math.round(255 * hueToRGB(m1, m2, h))))),
          fixRGB(toInt_0(fromDouble_0($wnd.Math.round(255 * hueToRGB(m1, m2, h - $intern_10)))))
        )),
        a
      )
    )
  );
  return true;
};
_.init_0 = function init(node) {
  var cbeg, cend, color_0, hbeg, hend;
  if (!!node && !!this.m_attribute && this.m_attribute.m_anim) {
    cend = extract(this.m_target);
    color_0 = this.getColorString(node);
    (null == color_0 || (color_0 = $trim(color_0)).length == 0) && (color_0 = "transparent");
    $equals_1("transparent", color_0)
      ? (cbeg = new Color_0(cend.m_r, cend.m_g, cend.m_b, 0))
      : (cbeg = extract(color_0));
    hbeg = getHSLFromRGB(cbeg.m_r, cbeg.m_g, cbeg.m_b);
    hend = getHSLFromRGB(cend.m_r, cend.m_g, cend.m_b);
    this.m_origin_h = hbeg.m_h;
    this.m_origin_s = hbeg.m_s;
    this.m_origin_l = hbeg.m_l;
    this.m_origin_a = cbeg.m_a;
    this.m_target_h = hend.m_h;
    this.m_target_s = hend.m_s;
    this.m_target_l = hend.m_l;
    this.m_target_a = cend.m_a;
    return true;
  }
  return false;
};
_.isRefreshing = function isRefreshing() {
  return false;
};
_.isStateful = function isStateful() {
  return true;
};
_.m_origin_a = 0;
_.m_origin_h = 0;
_.m_origin_l = 0;
_.m_origin_s = 0;
_.m_target_a = 0;
_.m_target_h = 0;
_.m_target_l = 0;
_.m_target_s = 0;
var Lcom_ait_lienzo_client_core_animation_AnimationProperty$Properties$AbstractStringColorAnimationProperty_2_classLit =
  createForClass(
    "com.ait.lienzo.client.core.animation",
    "AnimationProperty/Properties/AbstractStringColorAnimationProperty",
    158
  );
function AnimationProperty$Properties$DoubleAnimationProperty(target, attribute) {
  this.m_target = target;
  this.m_attribute = attribute;
}

defineClass(68, 1, $intern_9, AnimationProperty$Properties$DoubleAnimationProperty);
_.copy_0 = function copy() {
  return new AnimationProperty$Properties$DoubleAnimationProperty(this.m_target, this.m_attribute);
};
_.apply_0 = function apply_1(node, percent) {
  var nodeMap;
  nodeMap = node;
  $set_1(nodeMap, this.m_attribute.m_prop, this.m_origin + (this.m_target - this.m_origin) * percent);
  return true;
};
_.init_0 = function init_0(node) {
  var nodeMap;
  if (!!node && !!this.m_attribute && this.m_attribute.m_anim) {
    this.m_refreshing = node.getBoundingBoxAttributes_0().contains(this.m_attribute);
    nodeMap = node;
    this.m_origin = +nodeMap[this.m_attribute.m_prop];
    return true;
  }
  return false;
};
_.isRefreshing = function isRefreshing_0() {
  return this.m_refreshing;
};
_.isStateful = function isStateful_0() {
  return true;
};
_.m_origin = 0;
_.m_refreshing = false;
_.m_target = 0;
var Lcom_ait_lienzo_client_core_animation_AnimationProperty$Properties$DoubleAnimationProperty_2_classLit =
  createForClass("com.ait.lienzo.client.core.animation", "AnimationProperty/Properties/DoubleAnimationProperty", 68);
function AnimationProperty$Properties$DoubleAnimationPropertyConstrained(target, attribute, minval, maxval) {
  AnimationProperty$Properties$DoubleAnimationPropertyConstrained_0.call(this, target, attribute, minval, maxval, 0);
}

function AnimationProperty$Properties$DoubleAnimationPropertyConstrained_0(target, attribute, minval, maxval, defval) {
  this.m_target = target;
  this.m_minval = minval;
  this.m_maxval = maxval;
  this.m_defval = defval;
  this.m_attribute = attribute;
}

defineClass(
  80,
  1,
  $intern_9,
  AnimationProperty$Properties$DoubleAnimationPropertyConstrained,
  AnimationProperty$Properties$DoubleAnimationPropertyConstrained_0
);
_.copy_0 = function copy_0() {
  return new AnimationProperty$Properties$DoubleAnimationPropertyConstrained(
    this.m_target,
    this.m_attribute,
    this.m_minval,
    this.m_maxval
  );
};
_.apply_0 = function apply_2(node, percent) {
  var nodeMap, value_0;
  value_0 = this.m_origin + (this.m_target - this.m_origin) * percent;
  value_0 < this.m_minval && (value_0 = this.m_minval);
  value_0 > this.m_maxval && (value_0 = this.m_maxval);
  nodeMap = node;
  $set_1(nodeMap, this.m_attribute.m_prop, value_0);
  return true;
};
_.init_0 = function init_1(node) {
  var nodeMap;
  if (!!node && !!this.m_attribute && this.m_attribute.m_anim) {
    this.m_refreshing = node.getBoundingBoxAttributes_0().contains(this.m_attribute);
    nodeMap = node;
    $has(nodeMap, this.m_attribute.m_prop)
      ? (this.m_origin = +nodeMap[this.m_attribute.m_prop])
      : (this.m_origin = this.m_defval);
    this.m_origin < this.m_minval && (this.m_origin = this.m_minval);
    this.m_origin > this.m_maxval && (this.m_origin = this.m_maxval);
    this.m_target < this.m_minval && (this.m_target = this.m_minval);
    this.m_target > this.m_maxval && (this.m_target = this.m_maxval);
    return true;
  }
  return false;
};
_.isRefreshing = function isRefreshing_1() {
  return this.m_refreshing;
};
_.isStateful = function isStateful_1() {
  return true;
};
_.m_defval = 0;
_.m_maxval = 0;
_.m_minval = 0;
_.m_origin = 0;
_.m_refreshing = false;
_.m_target = 0;
var Lcom_ait_lienzo_client_core_animation_AnimationProperty$Properties$DoubleAnimationPropertyConstrained_2_classLit =
  createForClass(
    "com.ait.lienzo.client.core.animation",
    "AnimationProperty/Properties/DoubleAnimationPropertyConstrained",
    80
  );
function AnimationProperty$Properties$StringFillColorAnimationProperty(target, attribute) {
  AnimationProperty$Properties$AbstractStringColorAnimationProperty.call(this, target, attribute);
}

defineClass(156, 158, $intern_9, AnimationProperty$Properties$StringFillColorAnimationProperty);
_.copy_0 = function copy_1() {
  return new AnimationProperty$Properties$StringFillColorAnimationProperty(this.m_target, this.m_attribute);
};
_.getColorString = function getColorString(node) {
  return node.asShape().fillColor;
};
_.setColorString = function setColorString(node, color_0) {
  $setFillColor_1(node.asShape(), color_0);
};
var Lcom_ait_lienzo_client_core_animation_AnimationProperty$Properties$StringFillColorAnimationProperty_2_classLit =
  createForClass(
    "com.ait.lienzo.client.core.animation",
    "AnimationProperty/Properties/StringFillColorAnimationProperty",
    156
  );
function AnimationProperty$Properties$StringStrokeColorAnimationProperty(target, attribute) {
  AnimationProperty$Properties$AbstractStringColorAnimationProperty.call(this, target, attribute);
}

defineClass(157, 158, $intern_9, AnimationProperty$Properties$StringStrokeColorAnimationProperty);
_.copy_0 = function copy_2() {
  return new AnimationProperty$Properties$StringStrokeColorAnimationProperty(this.m_target, this.m_attribute);
};
_.getColorString = function getColorString_0(node) {
  return node.asShape().strokeColor;
};
_.setColorString = function setColorString_0(node, color_0) {
  $setStrokeColor_0(node.asShape(), color_0);
};
var Lcom_ait_lienzo_client_core_animation_AnimationProperty$Properties$StringStrokeColorAnimationProperty_2_classLit =
  createForClass(
    "com.ait.lienzo.client.core.animation",
    "AnimationProperty/Properties/StringStrokeColorAnimationProperty",
    157
  );
function $requestAnimationFrame(callback, element) {
  var callback0;
  callback0 = makeLambdaFunction(
    AnimationScheduler$lambda$1$Type.prototype.onInvoke,
    AnimationScheduler$lambda$1$Type,
    [callback]
  );
  $wnd.goog.global.requestAnimationFrame(callback0, element);
  return new AnimationScheduler$lambda$0$Type();
}

function AnimationScheduler() {}

defineClass(124, 1, {}, AnimationScheduler);
var INSTANCE;
var Lcom_ait_lienzo_client_core_animation_AnimationScheduler_2_classLit = createForClass(
  "com.ait.lienzo.client.core.animation",
  "AnimationScheduler",
  124
);
function AnimationScheduler$lambda$0$Type() {}

defineClass(164, 1, {}, AnimationScheduler$lambda$0$Type);
var Lcom_ait_lienzo_client_core_animation_AnimationScheduler$lambda$0$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.animation",
  "AnimationScheduler/lambda$0$Type",
  164
);
function AnimationScheduler$lambda$1$Type(cb_0) {
  this.cb_0 = cb_0;
}

defineClass(436, $wnd.Function, {}, AnimationScheduler$lambda$1$Type);
_.onInvoke = function onInvoke(arg0) {
  this.cb_0.execute(arg0);
};
function $clinit_AnimationTweener() {
  $clinit_AnimationTweener = emptyMethod;
  LINEAR = new AnimationTweener$TweenerBuilder$lambda$0$Type();
  $wnd.Math.min(6, $wnd.Math.max(1, 3));
  $wnd.Math.min(6, $wnd.Math.max(1, 3));
}

var LINEAR;
function AnimationTweener$TweenerBuilder$lambda$0$Type() {}

defineClass(315, 1, {}, AnimationTweener$TweenerBuilder$lambda$0$Type);
var Lcom_ait_lienzo_client_core_animation_AnimationTweener$TweenerBuilder$lambda$0$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.animation",
  "AnimationTweener/TweenerBuilder/lambda$0$Type",
  315
);
function IndefiniteAnimation(callback) {
  AbstractAnimation.call(this, -1, callback);
}

defineClass(328, 163, {}, IndefiniteAnimation);
var Lcom_ait_lienzo_client_core_animation_IndefiniteAnimation_2_classLit = createForClass(
  "com.ait.lienzo.client.core.animation",
  "IndefiniteAnimation",
  328
);
function $clinit_LayerRedrawManager() {
  $clinit_LayerRedrawManager = emptyMethod;
  INSTANCE_0 = new LayerRedrawManager();
}

function $kick(this$static, layerElement) {
  this$static.m_layers.length < 1 ||
    $requestAnimationFrame((!INSTANCE && (INSTANCE = new AnimationScheduler()), this$static.m_redraw), layerElement);
}

function $lambda$0(this$static) {
  var i, list, size_0;
  size_0 = this$static.m_layers.length;
  if (size_0 > 0) {
    list = this$static.m_layers;
    this$static.m_layers = new $wnd.Array();
    for (i = 0; i < size_0; i++) {
      $unBatchScheduled($get_4(list, i)).draw_1();
    }
  }
}

function $schedule(this$static, layer) {
  if (!!layer && lte(layer.m_batched, 0)) {
    if (this$static.m_layers.indexOf(layer) <= -1) {
      $add_9(this$static.m_layers, ((layer.m_batched = add_6(layer.m_batched, 1)), layer));
      $kick(this$static, $getElement(layer));
    }
  }
  return layer;
}

function LayerRedrawManager() {
  this.m_layers = new $wnd.Array();
  this.m_redraw = new LayerRedrawManager$lambda$0$Type(this);
}

defineClass(376, 1, {}, LayerRedrawManager);
var INSTANCE_0;
var Lcom_ait_lienzo_client_core_animation_LayerRedrawManager_2_classLit = createForClass(
  "com.ait.lienzo.client.core.animation",
  "LayerRedrawManager",
  376
);
function LayerRedrawManager$lambda$0$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(377, 1, {}, LayerRedrawManager$lambda$0$Type);
_.execute = function execute_0(arg0) {
  $lambda$0(this.$$outer_0);
};
var Lcom_ait_lienzo_client_core_animation_LayerRedrawManager$lambda$0$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.animation",
  "LayerRedrawManager/lambda$0$Type",
  377
);
defineClass(335, 163, {});
_.doFrame = function doFrame_0() {
  return (
    toDouble_0(fromDouble_0(Date.now())) >= this.m_begtime + this.m_duration && $stop(this),
    !!this.m_callback && $onFrame(this.m_callback),
    this
  );
};
var Lcom_ait_lienzo_client_core_animation_TimedAnimation_2_classLit = createForClass(
  "com.ait.lienzo.client.core.animation",
  "TimedAnimation",
  335
);
function $apply(this$static, percent) {
  var draw, good, i, node, size_0;
  !!this$static.m_tweener && (percent = percent);
  if (null != this$static.m_workingset) {
    size_0 = this$static.m_workingset.length;
    if (size_0 > 0) {
      draw = false;
      node = this$static.m_node;
      for (i = 0; i < size_0; i++) {
        good = $get_4(this$static.m_workingset, i).apply_0(node, percent);
        draw = draw || good;
      }
      if (draw) {
        this$static.m_refreshing && node.refresh_1();
        node.batch();
      }
    }
  }
}

function TweeningAnimation(node, tweener, properties, duration) {
  AbstractAnimation.call(this, duration, null);
  this.m_node = node;
  this.m_tweener = tweener;
  this.m_properties = properties;
}

defineClass(185, 335, {}, TweeningAnimation);
_.doClose = function doClose_0() {
  $apply(this, 1);
  this.m_workingset = null;
  this.m_refreshing = false;
  return $doClose(this);
};
_.doFrame = function doFrame_1() {
  var duration;
  $apply(
    this,
    ((duration = this.m_duration),
    duration != -1 ? (toDouble_0(fromDouble_0(Date.now())) - this.m_begtime) / this.m_duration : 1)
  );
  return (
    toDouble_0(fromDouble_0(Date.now())) >= this.m_begtime + this.m_duration && $stop(this),
    !!this.m_callback && $onFrame(this.m_callback),
    this
  );
};
_.doStart = function doStart_0() {
  var i, node, property, size_0;
  if (!!this.m_properties && this.m_properties.m_properties.length > 0) {
    this.m_workingset = new $wnd.Array();
    node = this.m_node;
    size_0 = this.m_properties.m_properties.length;
    for (i = 0; i < size_0; i++) {
      property = $get(this.m_properties, i);
      if (property) {
        property.isStateful() && (property = property.copy_0());
        if (property) {
          if (property.init_0(node)) {
            $add_9(this.m_workingset, property);
            this.m_refreshing = this.m_refreshing || property.isRefreshing();
          }
        }
      }
    }
  }
  $apply(this, 0);
  return $doStart(this);
};
_.m_refreshing = false;
var Lcom_ait_lienzo_client_core_animation_TweeningAnimation_2_classLit = createForClass(
  "com.ait.lienzo.client.core.animation",
  "TweeningAnimation",
  185
);
function $clinit_LienzoCore() {
  $clinit_LienzoCore = emptyMethod;
  var canvas;
  new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
        ($clinit_Attribute(), X),
        Y,
        SCALE,
        SHEAR,
        ROTATION,
        OFFSET,
      ])
    )
  );
  new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
        X,
        Y,
        SCALE,
        SHEAR,
        ROTATION,
        OFFSET,
      ])
    )
  );
  INSTANCE_1 = new LienzoCore();
  IS_CANVAS_SUPPORTED =
    ((canvas = ($clinit_DomGlobal(), document_0).createElement("canvas")), canvas != null && "getContext" in canvas);
}

function $examineNativeLineDashSupported() {
  var backing, context, e, scratch;
  if (IS_CANVAS_SUPPORTED) {
    try {
      scratch = new ScratchPad(20, 10);
      context = scratch.m_context;
      context.m_jso.lineWidth = 10;
      $setLineCap(context, ($clinit_LineCap(), BUTT));
      $setStrokeColor(context, ($clinit_ColorName(), BLUE));
      context.m_jso.beginPath();
      context.m_jso.moveTo(0, 5);
      context.m_jso.lineTo(20, 5);
      context.m_jso.stroke();
      $setStrokeColor(context, RED);
      $setLineDash(
        context,
        new DashArray(stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [5, 5]))
      );
      context.m_jso.beginPath();
      context.m_jso.moveTo(0, 5);
      context.m_jso.lineTo(20, 5);
      context.m_jso.stroke();
      backing = context.m_jso.getImageData(0, 0, 20, 10);
      if (null != backing) {
        $clinit_ImageDataUtil();
        if (
          getColorAt(backing, 3, 5, 0) == 255 &&
          getColorAt(backing, 3, 5, 2) == 0 &&
          getColorAt(backing, 3, 5, 1) == 0
        ) {
          if (
            getColorAt(backing, 8, 5, 0) == 0 &&
            getColorAt(backing, 8, 5, 2) == 255 &&
            getColorAt(backing, 8, 5, 1) == 0
          ) {
            return true;
          }
        }
      }
    } catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 24)) {
        e = $e0;
        ($clinit_DomGlobal(), $wnd.goog.global.console).error("Line Dash test failed ", e);
      } else throw toJs($e0);
    }
  }
  return false;
}

function $isLineDashSupported(this$static) {
  return this$static.m_globalLineDashSupport && $isNativeLineDashSupported(this$static);
}

function $isNativeLineDashSupported(this$static) {
  if (!this$static.m_nativeLineDashExamine) {
    this$static.m_nativeLineDashSupport = $examineNativeLineDashSupported();
    this$static.m_nativeLineDashExamine = true;
  }
  return this$static.m_nativeLineDashSupport;
}

function $isSafariBroken() {
  var e, p, ua;
  ua = ($clinit_DomGlobal(), $wnd.goog.global.window).navigator.userAgent;
  if (ua.indexOf("Safari") >= 0 && ua.indexOf("Chrome") < 0) {
    if (ua.indexOf("OS X") >= 0) {
      p = ua.indexOf("Version/");
      if (p >= 0) {
        ua = ua.substr(p + 8);
        p = ua.indexOf(" ");
        if (p >= 0) {
          ua = $replaceAll(ua.substr(0, p), "\\.", "");
          try {
            if (__parseAndValidateInt(ua) > 902) {
              return false;
            }
          } catch ($e0) {
            $e0 = toJava($e0);
            if (instanceOf($e0, 24)) {
              e = $e0;
              $wnd.goog.global.console.error("isSafariBroken(" + ua + ")", e);
            } else throw toJs($e0);
          }
        }
      }
    }
    return true;
  }
  return false;
}

function LienzoCore() {
  $clinit_Style$Cursor();
  this.m_layerClearMode = ($clinit_LayerClearMode(), CLEAR);
  $clinit_ImageSelectionMode();
}

defineClass(237, 1, {}, LienzoCore);
_.m_fillShapeForSelection = true;
_.m_globalLineDashSupport = true;
_.m_nativeLineDashExamine = false;
_.m_nativeLineDashSupport = false;
_.m_strokeColor = "black";
_.m_strokeWidth = 1;
var INSTANCE_1,
  IS_CANVAS_SUPPORTED = false;
var Lcom_ait_lienzo_client_core_config_LienzoCore_2_classLit = createForClass(
  "com.ait.lienzo.client.core.config",
  "LienzoCore",
  237
);
function AbstractNodeEvent(relativeElement) {
  this.relativeElement = relativeElement;
}

defineClass(110, 1, {});
_.m_dead = false;
var Lcom_ait_lienzo_client_core_event_AbstractNodeEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "AbstractNodeEvent",
  110
);
function $kill(this$static) {
  this$static.m_touchEvent = null;
  this$static.m_mouseEvent = null;
  this$static.source_0 = null;
  this$static.m_dead = true;
}

function $override(this$static, source, mouseEvent, touchEvent, x_0, y_0) {
  this$static.source_0 = source;
  if (mouseEvent != null) {
    this$static.m_mouseEvent = mouseEvent;
  } else {
    this$static.m_touchEvent = touchEvent;
    getTouches(touchEvent, this$static.relativeElement);
  }
  this$static.m_x = x_0;
  this$static.m_y = y_0;
}

function $revive(this$static) {
  this$static.m_touchEvent = null;
  this$static.m_mouseEvent = null;
  this$static.source_0 = null;
  this$static.m_dead = false;
}

function AbstractNodeHumanInputEvent(relativeElement) {
  AbstractNodeEvent.call(this, relativeElement);
}

function getTouches(event_0, target) {
  var i, jsArray, length_0, t, touchList;
  touchList = event_0.touches;
  jsArray = new $wnd.Array();
  if (touchList != null && touchList.length > 0) {
    for (i = 0, length_0 = touchList.length; i < length_0; i++) {
      t = touchList[i];
      getRelativeX(t.clientX, target);
      getRelativeX(t.clientY, target);
      jsArray.push(new TouchPoint());
    }
  }
  return jsArray;
}

defineClass(35, 110, {});
_.m_x = 0;
_.m_y = 0;
var Lcom_ait_lienzo_client_core_event_AbstractNodeHumanInputEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "AbstractNodeHumanInputEvent",
  35
);
function $clinit_NodeDragEndEvent() {
  $clinit_NodeDragEndEvent = emptyMethod;
  TYPE = new INodeEvent$Type();
}

function NodeDragEndEvent(relativeElement) {
  $clinit_NodeDragEndEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(358, 35, {}, NodeDragEndEvent);
_.dispatch = function dispatch(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType() {
  return TYPE;
};
var TYPE;
var Lcom_ait_lienzo_client_core_event_NodeDragEndEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeDragEndEvent",
  358
);
function $clinit_NodeDragMoveEvent() {
  $clinit_NodeDragMoveEvent = emptyMethod;
  TYPE_0 = new INodeEvent$Type();
}

function NodeDragMoveEvent(relativeElement) {
  $clinit_NodeDragMoveEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(357, 35, {}, NodeDragMoveEvent);
_.dispatch = function dispatch_0(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_0() {
  return TYPE_0;
};
var TYPE_0;
var Lcom_ait_lienzo_client_core_event_NodeDragMoveEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeDragMoveEvent",
  357
);
function $clinit_NodeDragStartEvent() {
  $clinit_NodeDragStartEvent = emptyMethod;
  TYPE_1 = new INodeEvent$Type();
}

function NodeDragStartEvent(relativeElement) {
  $clinit_NodeDragStartEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(168, 35, {}, NodeDragStartEvent);
_.dispatch = function dispatch_1(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_1() {
  return TYPE_1;
};
var TYPE_1;
var Lcom_ait_lienzo_client_core_event_NodeDragStartEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeDragStartEvent",
  168
);
function $clinit_NodeMouseClickEvent() {
  $clinit_NodeMouseClickEvent = emptyMethod;
  TYPE_2 = new INodeEvent$Type();
}

function NodeMouseClickEvent(relativeElement) {
  $clinit_NodeMouseClickEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(378, 35, {}, NodeMouseClickEvent);
_.dispatch = function dispatch_2(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_2() {
  return TYPE_2;
};
var TYPE_2;
var Lcom_ait_lienzo_client_core_event_NodeMouseClickEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeMouseClickEvent",
  378
);
function $clinit_NodeMouseDoubleClickEvent() {
  $clinit_NodeMouseDoubleClickEvent = emptyMethod;
  TYPE_3 = new INodeEvent$Type();
}

function NodeMouseDoubleClickEvent(relativeElement) {
  $clinit_NodeMouseDoubleClickEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(379, 35, {}, NodeMouseDoubleClickEvent);
_.dispatch = function dispatch_3(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_3() {
  return TYPE_3;
};
var TYPE_3;
var Lcom_ait_lienzo_client_core_event_NodeMouseDoubleClickEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeMouseDoubleClickEvent",
  379
);
function $clinit_NodeMouseDownEvent() {
  $clinit_NodeMouseDownEvent = emptyMethod;
  TYPE_4 = new INodeEvent$Type();
}

function NodeMouseDownEvent(relativeElement) {
  $clinit_NodeMouseDownEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(381, 35, {}, NodeMouseDownEvent);
_.dispatch = function dispatch_4(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_4() {
  return TYPE_4;
};
var TYPE_4;
var Lcom_ait_lienzo_client_core_event_NodeMouseDownEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeMouseDownEvent",
  381
);
function $clinit_NodeMouseEnterEvent() {
  $clinit_NodeMouseEnterEvent = emptyMethod;
  TYPE_5 = new INodeEvent$Type();
}

function NodeMouseEnterEvent(relativeElement) {
  $clinit_NodeMouseEnterEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(355, 35, {}, NodeMouseEnterEvent);
_.dispatch = function dispatch_5(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_5() {
  return TYPE_5;
};
var TYPE_5;
var Lcom_ait_lienzo_client_core_event_NodeMouseEnterEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeMouseEnterEvent",
  355
);
function $clinit_NodeMouseExitEvent() {
  $clinit_NodeMouseExitEvent = emptyMethod;
  TYPE_6 = new INodeEvent$Type();
}

function NodeMouseExitEvent(relativeElement) {
  $clinit_NodeMouseExitEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(356, 35, {}, NodeMouseExitEvent);
_.dispatch = function dispatch_6(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_6() {
  return TYPE_6;
};
var TYPE_6;
var Lcom_ait_lienzo_client_core_event_NodeMouseExitEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeMouseExitEvent",
  356
);
function $clinit_NodeMouseMoveEvent() {
  $clinit_NodeMouseMoveEvent = emptyMethod;
  TYPE_7 = new INodeEvent$Type();
}

function NodeMouseMoveEvent(relativeElement) {
  $clinit_NodeMouseMoveEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(382, 35, {}, NodeMouseMoveEvent);
_.dispatch = function dispatch_7(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_7() {
  return TYPE_7;
};
var TYPE_7;
var Lcom_ait_lienzo_client_core_event_NodeMouseMoveEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeMouseMoveEvent",
  382
);
function $clinit_NodeMouseOutEvent() {
  $clinit_NodeMouseOutEvent = emptyMethod;
  TYPE_8 = new INodeEvent$Type();
}

function NodeMouseOutEvent(relativeElement) {
  $clinit_NodeMouseOutEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(384, 35, {}, NodeMouseOutEvent);
_.dispatch = function dispatch_8(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_8() {
  return TYPE_8;
};
var TYPE_8;
var Lcom_ait_lienzo_client_core_event_NodeMouseOutEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeMouseOutEvent",
  384
);
function $clinit_NodeMouseOverEvent() {
  $clinit_NodeMouseOverEvent = emptyMethod;
  TYPE_9 = new INodeEvent$Type();
}

function NodeMouseOverEvent(relativeElement) {
  $clinit_NodeMouseOverEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(385, 35, {}, NodeMouseOverEvent);
_.dispatch = function dispatch_9(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_9() {
  return TYPE_9;
};
var TYPE_9;
var Lcom_ait_lienzo_client_core_event_NodeMouseOverEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeMouseOverEvent",
  385
);
function $clinit_NodeMouseUpEvent() {
  $clinit_NodeMouseUpEvent = emptyMethod;
  TYPE_10 = new INodeEvent$Type();
}

function NodeMouseUpEvent(relativeElement) {
  $clinit_NodeMouseUpEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(383, 35, {}, NodeMouseUpEvent);
_.dispatch = function dispatch_10(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_10() {
  return TYPE_10;
};
var TYPE_10;
var Lcom_ait_lienzo_client_core_event_NodeMouseUpEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeMouseUpEvent",
  383
);
function $clinit_NodeMouseWheelEvent() {
  $clinit_NodeMouseWheelEvent = emptyMethod;
  TYPE_11 = new INodeEvent$Type();
}

function NodeMouseWheelEvent(relativeElement) {
  $clinit_NodeMouseWheelEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(386, 35, {}, NodeMouseWheelEvent);
_.dispatch = function dispatch_11(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_11() {
  return TYPE_11;
};
var TYPE_11;
var Lcom_ait_lienzo_client_core_event_NodeMouseWheelEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeMouseWheelEvent",
  386
);
function $clinit_NodeTouchCancelEvent() {
  $clinit_NodeTouchCancelEvent = emptyMethod;
  TYPE_12 = new INodeEvent$Type();
}

function NodeTouchCancelEvent(relativeElement) {
  $clinit_NodeTouchCancelEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(390, 35, {}, NodeTouchCancelEvent);
_.dispatch = function dispatch_12(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_12() {
  return TYPE_12;
};
var TYPE_12;
var Lcom_ait_lienzo_client_core_event_NodeTouchCancelEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeTouchCancelEvent",
  390
);
function $clinit_NodeTouchEndEvent() {
  $clinit_NodeTouchEndEvent = emptyMethod;
  TYPE_13 = new INodeEvent$Type();
}

function NodeTouchEndEvent(relativeElement) {
  $clinit_NodeTouchEndEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(389, 35, {}, NodeTouchEndEvent);
_.dispatch = function dispatch_13(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_13() {
  return TYPE_13;
};
var TYPE_13;
var Lcom_ait_lienzo_client_core_event_NodeTouchEndEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeTouchEndEvent",
  389
);
function $clinit_NodeTouchMoveEvent() {
  $clinit_NodeTouchMoveEvent = emptyMethod;
  TYPE_14 = new INodeEvent$Type();
}

function NodeTouchMoveEvent(relativeElement) {
  $clinit_NodeTouchMoveEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(388, 35, {}, NodeTouchMoveEvent);
_.dispatch = function dispatch_14(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_14() {
  return TYPE_14;
};
var TYPE_14;
var Lcom_ait_lienzo_client_core_event_NodeTouchMoveEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeTouchMoveEvent",
  388
);
function $clinit_NodeTouchStartEvent() {
  $clinit_NodeTouchStartEvent = emptyMethod;
  TYPE_15 = new INodeEvent$Type();
}

function NodeTouchStartEvent(relativeElement) {
  $clinit_NodeTouchStartEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(387, 35, {}, NodeTouchStartEvent);
_.dispatch = function dispatch_15(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_15() {
  return TYPE_15;
};
var TYPE_15;
var Lcom_ait_lienzo_client_core_event_NodeTouchStartEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "NodeTouchStartEvent",
  387
);
function TouchPoint() {}

defineClass(167, 1, { 167: 1 }, TouchPoint);
var Lcom_ait_lienzo_client_core_event_TouchPoint_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "TouchPoint",
  167
);
function $clinit_ViewportTransformChangedEvent() {
  $clinit_ViewportTransformChangedEvent = emptyMethod;
  TYPE_16 = new INodeEvent$Type();
}

function ViewportTransformChangedEvent(relativeElement) {
  $clinit_ViewportTransformChangedEvent();
  AbstractNodeHumanInputEvent.call(this, relativeElement);
}

defineClass(216, 35, {}, ViewportTransformChangedEvent);
_.dispatch = function dispatch_16(handler) {
  $refresh_0(handler.$$outer_0);
};
_.getAssociatedType = function getAssociatedType_16() {
  return TYPE_16;
};
var TYPE_16;
var Lcom_ait_lienzo_client_core_event_ViewportTransformChangedEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.event",
  "ViewportTransformChangedEvent",
  216
);
var Lcom_ait_lienzo_gwtlienzo_event_shared_EventHandler_2_classLit = createForInterface(
  "com.ait.lienzo.gwtlienzo.event.shared",
  "EventHandler"
);
function $clinit_MessageConstants() {
  $clinit_MessageConstants = emptyMethod;
  MESSAGES_0 = new MessageConstants$MessageConstantsImpl();
}

var MESSAGES_0;
function MessageConstants$MessageConstantsImpl() {}

defineClass(334, 1, {}, MessageConstants$MessageConstantsImpl);
_.emptyString = "";
var Lcom_ait_lienzo_client_core_i18n_MessageConstants$MessageConstantsImpl_2_classLit = createForClass(
  "com.ait.lienzo.client.core.i18n",
  "MessageConstants/MessageConstantsImpl",
  334
);
function Mediators() {
  this.m_mediators = new $wnd.Array();
}

defineClass(215, 1, {}, Mediators);
_.iterator = function iterator_1() {
  return new NFastArrayListIterator(this.m_mediators);
};
var Lcom_ait_lienzo_client_core_mediator_Mediators_2_classLit = createForClass(
  "com.ait.lienzo.client.core.mediator",
  "Mediators",
  215
);
function $clinit_Node() {
  $clinit_Node = emptyMethod;
  ALL_EVENTS = new HashSet();
}

function $addEnsureHandler(this$static, type_0, handler) {
  var hand;
  requireNonNull(type_0);
  requireNonNull(handler);
  hand = this$static.m_opts_0.hand;
  if (!hand) {
    hand = new HandlerManager();
    $setHandlerManager(this$static.m_opts_0, hand);
  }
  $add_12(ALL_EVENTS, type_0);
  return $addHandler(hand, type_0, handler);
}

function $addParentsLocations(this$static, locn) {
  var node;
  node = this$static.m_parent;
  !!node && $addParentsLocations(node, locn);
  $offset_0(locn, this$static.getX_0(), this$static.getY_0());
}

function $drawWithTransforms(this$static, context, alpha_0, bounds, transformSupplier) {
  var xfrm;
  if (context.isSelection() && !this$static.listening) {
    return;
  }
  if (context.isDrag() || this$static.visible) {
    context.m_jso.save();
    xfrm = transformSupplier.$$outer_0.getPossibleNodeTransform();
    !!xfrm && $transform_0(context.m_jso, xfrm ? xfrm : null);
    this$static.drawWithoutTransforms(context, alpha_0, bounds);
    context.m_jso.restore();
  }
}

function $fireEvent(this$static, event_0) {
  $isEventHandled(this$static, event_0.getAssociatedType()) && $fireEvent_2(this$static.m_opts_0.hand, event_0);
}

function $getAbsoluteTransform(this$static) {
  var xfrm;
  xfrm = new Transform();
  $getAbsoluteTransformFromParents(this$static, this$static, xfrm);
  return xfrm;
}

function $getAbsoluteTransformFromParents(this$static, root, xfrm) {
  var temp;
  if (!root) {
    return;
  }
  $getAbsoluteTransformFromParents(this$static, root.m_parent, xfrm);
  temp = root.getPossibleNodeTransform();
  !!temp && $multiply(xfrm, temp);
}

function $getBoundingPoints(this$static, computedOffsetX, computedOffsetY) {
  var bbox, transform;
  bbox = this$static.getBoundingBox_0();
  if (bbox) {
    transform = this$static.getPossibleNodeTransform();
    if (transform) {
      return $transform_1(new BoundingPoints(bbox), computedOffsetX, computedOffsetY, transform);
    }
    return new BoundingPoints(bbox);
  }
  return null;
}

function $getComputedLocation(this$static) {
  var locn;
  locn = new Point2D(0, 0);
  $addParentsLocations(this$static, locn);
  return locn;
}

function $getLayer(this$static) {
  var parent_0;
  parent_0 = this$static.m_parent;
  if (parent_0) {
    return parent_0.getLayer_0();
  }
  return null;
}

function $getScratchPad(this$static) {
  var viewport;
  viewport = $getViewport(this$static);
  if (viewport) {
    return viewport.m_spad;
  }
  return null;
}

function $getViewport(this$static) {
  var parent_0;
  parent_0 = this$static.m_parent;
  if (parent_0) {
    return parent_0.getViewport_0();
  }
  return null;
}

function $isEventHandled(this$static, type_0) {
  var hand, prim;
  hand = this$static.m_opts_0.hand;
  if (!!hand && isEventHandledGlobally(type_0) && this$static.listening) {
    if (!this$static.visible) {
      prim = this$static.asPrimitive();
      if (
        !!prim &&
        prim.isDragging_0() &&
        (type_0 == ($clinit_NodeDragStartEvent(), $clinit_NodeDragStartEvent(), TYPE_1) ||
          type_0 == ($clinit_NodeDragMoveEvent(), $clinit_NodeDragMoveEvent(), TYPE_0) ||
          type_0 == ($clinit_NodeDragEndEvent(), $clinit_NodeDragEndEvent(), TYPE))
      ) {
        return null != hand.map_0 && hand.map_0.has(type_0);
      }
      return false;
    }
    return null != hand.map_0 && hand.map_0.has(type_0);
  }
  return false;
}

function $setFillAlpha(this$static) {
  this$static.fillAlpha = 1;
  return this$static;
}

function $setOffset(this$static, offset) {
  this$static.offset = offset;
  return this$static;
}

function $setStrokeAlpha(this$static) {
  this$static.strokeAlpha = 1;
  return this$static;
}

function $setX(this$static, x_0) {
  this$static.x = x_0;
  return this$static;
}

function $setY(this$static, y_0) {
  this$static.y = y_0;
  return this$static;
}

function Node_0(type_0) {
  this.m_opts_0 = new Node$OptionalNodeFields();
  this.eventPropagationMode = ($clinit_EventPropagationMode(), $clinit_EventPropagationMode(), LAST_ANCESTOR);
  this.m_type_0 = type_0;
}

function asAttributes(base, list) {
  var make;
  make = new ArrayList_1(base);
  $addAll(make, new Collections$UnmodifiableRandomAccessList(new Arrays$ArrayList(list)));
  return new Collections$UnmodifiableRandomAccessList(make);
}

function isEventHandledGlobally(type_0) {
  if (type_0) {
    return $contains_0(ALL_EVENTS, type_0);
  }
  return false;
}

defineClass(18, 1, { 22: 1, 21: 1, 18: 1 });
_.refresh_0 = function refresh() {
  return this.refresh_1();
};
_.setVisible = function setVisible(visible) {
  return this.setVisible_0(visible);
};
_.animate_0 = function animate(tweener, properties, duration) {
  return $run(new TweeningAnimation(this, tweener, properties, duration));
};
_.asGroupOf = function asGroupOf() {
  return null;
};
_.asLayer = function asLayer() {
  return null;
};
_.asNode = function asNode() {
  return this;
};
_.asPrimitive = function asPrimitive() {
  return null;
};
_.asScene = function asScene() {
  return null;
};
_.asShape = function asShape() {
  return null;
};
_.asViewport = function asViewport() {
  return null;
};
_.drawWithTransforms = function drawWithTransforms(context, alpha_0, bounds) {
  $drawWithTransforms(this, context, alpha_0, bounds, new Node$0methodref$getPossibleNodeTransform$Type(this));
};
_.equals_0 = function equals_0(other) {
  return this === other;
};
_.fireEvent = function fireEvent(event_0) {
  $fireEvent(this, event_0);
};
_.getAlpha = function getAlpha() {
  return this.alpha;
};
_.getBoundingPoints = function getBoundingPoints() {
  return $getBoundingPoints(this, 0, 0);
};
_.getComputedBoundingPoints = function getComputedBoundingPoints() {
  var computedLocation, computedXOffset, computedYOffset, parent_0;
  computedXOffset = 0;
  computedYOffset = 0;
  parent_0 = this.m_parent;
  if (parent_0) {
    computedLocation = $getComputedLocation(parent_0);
    computedXOffset = computedLocation.x;
    computedYOffset = computedLocation.y;
  }
  return $getBoundingPoints(this, computedXOffset, computedYOffset);
};
_.getComputedLocation_0 = function getComputedLocation() {
  return $getComputedLocation(this);
};
_.getDragBounds = function getDragBounds() {
  return this.dragBounds;
};
_.getDragConstraint = function getDragConstraint() {
  return this.dragConstraint;
};
_.getDragMode = function getDragMode() {
  return this.dragMode;
};
_.getEventPropagationMode = function getEventPropagationMode() {
  return this.eventPropagationMode;
};
_.getID_0 = function getID() {
  return this.id;
};
_.getLayer_0 = function getLayer() {
  return $getLayer(this);
};
_.getOffset = function getOffset() {
  return this.offset;
};
_.getParent_0 = function getParent() {
  return this.m_parent;
};
_.getPossibleNodeTransform = function getPossibleNodeTransform() {
  var offset, ox, oy, r, scale, shear, sx, sy, t2;
  if (
    !(this.x != 0 || this.y != 0 || this.getRotation() != 0 || !!this.getScale() || !!this.getShear()) &&
    !this.transform
  ) {
    return null;
  }
  this.cachedXfrm = fromXY(this.cachedXfrm, this.getX_0(), this.getY_0());
  t2 = this.transform;
  if (t2) {
    $multiply(this.cachedXfrm, t2);
    return this.cachedXfrm;
  }
  if (!(this.getRotation() != 0 || !!this.getScale() || !!this.getShear())) {
    return this.cachedXfrm;
  }
  ox = 0;
  oy = 0;
  offset = this.getOffset();
  if (offset) {
    ox = offset.x;
    oy = offset.y;
  }
  r = this.getRotation();
  if (r != 0) {
    if (ox != 0 || oy != 0) {
      $translate(this.cachedXfrm, ox, oy);
      $rotate(this.cachedXfrm, r);
      $translate(this.cachedXfrm, -ox, -oy);
    } else {
      $rotate(this.cachedXfrm, r);
    }
  }
  scale = this.getScale();
  if (scale) {
    sx = scale.x;
    sy = scale.y;
    if (sx != 1 || sy != 1) {
      if (ox != 0 || oy != 0) {
        $translate(this.cachedXfrm, ox, oy);
        $scaleWithXY(this.cachedXfrm, sx, sy);
        $translate(this.cachedXfrm, -ox, -oy);
      } else {
        $scaleWithXY(this.cachedXfrm, sx, sy);
      }
    }
  }
  shear = this.getShear();
  if (shear) {
    sx = shear.x;
    sy = shear.y;
    (sx != 0 || sy != 0) && $shear(this.cachedXfrm, sx, sy);
  }
  return this.cachedXfrm;
};
_.getRotation = function getRotation() {
  return this.rotation;
};
_.getScale = function getScale() {
  return this.scale;
};
_.getShear = function getShear() {
  return this.shear;
};
_.getViewport_0 = function getViewport() {
  return $getViewport(this);
};
_.getX_0 = function getX() {
  return this.x;
};
_.getY_0 = function getY() {
  return this.y;
};
_.hashCode_0 = function hashCode_1() {
  return getHashCode_0(this.m_opts_0);
};
_.isDraggable = function isDraggable() {
  return this.draggable;
};
_.isEventHandled = function isEventHandled(type_0) {
  return $isEventHandled(this, type_0);
};
_.refresh_1 = function refresh_0() {
  return this;
};
_.setVisible_0 = function setVisible_0(visible) {
  return (this.visible = visible), this;
};
_.toString_0 = function toString_2() {
  return $getSimpleName(this.___clazz) + " : " + this.m_opts_0.userData + " : " + this.getX_0() + " : " + this.getY_0();
};
_.alpha = 1;
_.draggable = false;
_.fillAlpha = 1;
_.listening = true;
_.rotation = 0;
_.strokeAlpha = 1;
_.visible = true;
_.x = 0;
_.y = 0;
var ALL_EVENTS;
var Lcom_ait_lienzo_client_core_shape_Node_2_classLit = createForClass("com.ait.lienzo.client.core.shape", "Node", 18);
function $copyTo(this$static, other) {
  other.m_type_0 = new NodeType(this$static.m_type_0.m_value);
  other.x = this$static.x;
  other.y = this$static.y;
  other.rotation = this$static.rotation;
  other.scale = this$static.scale ? $copy_2(this$static.scale) : null;
  other.shear = this$static.shear ? $copy_2(this$static.shear) : null;
  other.offset = this$static.offset ? $copy_2(this$static.offset) : null;
  other.dragConstraint = this$static.dragConstraint;
  other.transform = this$static.transform ? $copy_3(this$static.transform) : null;
  other.alpha = this$static.alpha;
  other.strokeAlpha = this$static.strokeAlpha;
  other.fillAlpha = this$static.fillAlpha;
  other.visible = this$static.visible;
  other.draggable = this$static.draggable;
  other.dragBounds = this$static.dragBounds;
  other.dragMode = this$static.dragMode;
  other.listening = this$static.listening;
  other.m_type = new ShapeType(this$static.m_type.m_value);
  other.m_ckey = this$static.m_ckey;
  other.gradient = this$static.gradient;
  other.fillColor = this$static.fillColor;
  other.strokeColor = this$static.strokeColor;
  other.fillBoundsForSelection = this$static.fillBoundsForSelection;
  other.selectionBoundsOffset = this$static.selectionBoundsOffset;
  other.fillShapeForSelection = this$static.fillShapeForSelection;
  other.selectionStrokeOffset = this$static.selectionStrokeOffset;
  other.strokeWidth = this$static.strokeWidth;
  other.lineCap = this$static.lineCap;
  other.lineJoin = this$static.lineJoin;
  other.dashArray = this$static.dashArray ? new DashArray(this$static.dashArray.m_jso) : null;
  other.dashOffset = this$static.dashOffset;
  other.miterLimit = this$static.miterLimit;
  return other;
}

function $dofillBoundsForSelection(this$static, context, alpha_0) {
  var bbox, color_0, high, offset, wide;
  if (this$static.fillBoundsForSelection) {
    if (alpha_0 * this$static.fillAlpha > 0) {
      color_0 = this$static.m_ckey;
      if (null != color_0) {
        bbox = this$static.getBoundingBox_0();
        if (bbox) {
          wide = $wnd.Math.abs(bbox.maxx - bbox.minx);
          if (wide > 0) {
            high = $wnd.Math.abs(bbox.maxy - bbox.miny);
            if (high > 0) {
              context.m_jso.fillStyle = color_0;
              offset = this$static.selectionBoundsOffset;
              $fillRect(context, bbox.minx - offset, bbox.miny - offset, wide + offset, high + offset);
            }
          }
        }
      }
    }
    return true;
  }
  return false;
}

function $fill(this$static, context, alpha_0) {
  var color_0, fill, filled;
  filled = this$static.fillColor != null;
  if (filled || this$static.fillShapeForSelection) {
    alpha_0 = alpha_0 * this$static.fillAlpha;
    if (alpha_0 <= 0) {
      return false;
    }
    if (context.isSelection()) {
      color_0 = this$static.m_ckey;
      if (null == color_0) {
        return false;
      }
      context.m_jso.save();
      context.m_jso.fillStyle = color_0;
      context.m_jso.fill();
      context.m_jso.restore();
      return true;
    }
    if (!filled) {
      return false;
    }
    context.m_jso.save();
    context.setGlobalAlpha(alpha_0);
    fill = this$static.fillColor;
    if (null != fill) {
      context.m_jso.fillStyle = fill;
      context.m_jso.fill();
      context.m_jso.restore();
      return true;
    }
    context.m_jso.restore();
  }
  return false;
}

function $setFillColor_1(this$static, fill) {
  this$static.fillColor = fill;
  return this$static;
}

function $setStrokeColor_0(this$static, stroke) {
  this$static.strokeColor = stroke;
  return this$static;
}

function $setStrokeParams(this$static, context, alpha_0, filled) {
  var color_0, dash, hasAttribute, isdashed, offset, width_0;
  width_0 = this$static.strokeWidth;
  color_0 = this$static.strokeColor;
  null == color_0
    ? width_0 > 0 && (color_0 = ($clinit_LienzoCore(), $clinit_LienzoCore(), INSTANCE_1).m_strokeColor)
    : width_0 <= 0 && (width_0 = ($clinit_LienzoCore(), $clinit_LienzoCore(), INSTANCE_1).m_strokeWidth);
  if (null == color_0 && width_0 <= 0) {
    if (filled) {
      return false;
    }
    color_0 = ($clinit_LienzoCore(), $clinit_LienzoCore(), INSTANCE_1).m_strokeColor;
    width_0 = (null, INSTANCE_1).m_strokeWidth;
  }
  alpha_0 = alpha_0 * this$static.strokeAlpha;
  if (alpha_0 <= 0) {
    return false;
  }
  offset = 0;
  if (context.isSelection()) {
    color_0 = this$static.m_ckey;
    if (null == color_0) {
      return false;
    }
    context.m_jso.save();
    offset = this$static.selectionStrokeOffset;
  } else {
    context.m_jso.save();
    context.setGlobalAlpha(alpha_0);
  }
  context.m_jso.strokeStyle = color_0;
  context.m_jso.lineWidth = width_0 + offset;
  hasAttribute = !!this$static.dashArray || !!this$static.lineCap || this$static.miterLimit > 0;
  if (!hasAttribute) {
    return true;
  }
  isdashed = false;
  if (this$static.dashArray) {
    if ($isLineDashSupported(($clinit_LienzoCore(), $clinit_LienzoCore(), INSTANCE_1))) {
      dash = this$static.dashArray;
      if (!!dash && dash.m_jso.length > 0) {
        $setLineDash_0(context.m_jso, dash ? dash.m_jso : null);
        this$static.dashOffset > 0 && $setLineDashOffset(context, this$static.dashOffset);
        isdashed = true;
      }
    }
  }
  if (isdashed || this$static.doStrokeExtraProperties()) {
    !!this$static.lineCap && $setLineCap(context, this$static.lineCap);
    this$static.miterLimit > 0 && $setMiterLimit(context, this$static.miterLimit);
  }
  return true;
}

function $setStrokeWidth(this$static) {
  this$static.strokeWidth = 2;
  return this$static;
}

function $stroke(this$static, context, alpha_0, filled) {
  if ($setStrokeParams(this$static, context, alpha_0, filled)) {
    context.m_jso.stroke();
    context.m_jso.restore();
  }
}

function Shape(type_0) {
  $clinit_Node();
  Node_0.call(this, ($clinit_NodeType(), SHAPE));
  this.m_opts = new Shape$OptionalShapeFields();
  this.fillShapeForSelection = ($clinit_LienzoCore(), $clinit_LienzoCore(), INSTANCE_1).m_fillShapeForSelection;
  this.strokeWidth = (null, INSTANCE_1).m_strokeWidth;
  this.m_type = type_0;
}

defineClass(17, 18, $intern_12);
_.batch = function batch() {
  var layer;
  return (
    (layer = $getLayer(this)),
    !!layer && $schedule(($clinit_LayerRedrawManager(), $clinit_LayerRedrawManager(), INSTANCE_0), layer),
    this
  );
};
_.getAlpha = function getAlpha_0() {
  return this.alpha;
};
_.getDragBounds = function getDragBounds_0() {
  return this.dragBounds;
};
_.getDragConstraint = function getDragConstraint_0() {
  return this.dragConstraint;
};
_.getDragMode = function getDragMode_0() {
  return this.dragMode;
};
_.getEventPropagationMode = function getEventPropagationMode_0() {
  return this.eventPropagationMode;
};
_.getOffset = function getOffset_0() {
  return this.offset;
};
_.getRotation = function getRotation_0() {
  return this.rotation;
};
_.getScale = function getScale_0() {
  return this.scale;
};
_.getShear = function getShear_0() {
  return this.shear;
};
_.getX_0 = function getX_0() {
  return this.x;
};
_.getY_0 = function getY_0() {
  return this.y;
};
_.isDraggable = function isDraggable_0() {
  return this.draggable;
};
_.setDragging = function setDragging(drag) {
  return $setDragging_0(this.m_opts, drag), this;
};
_.setOffset = function setOffset(arg0, arg1) {
  return $setOffset(this, new Point2D(arg0, arg1)), this;
};
_.setRotationDegrees = function setRotationDegrees(arg0) {
  return (this.rotation = (arg0 / 180) * $intern_13), this;
};
_.setX = function setX(arg0) {
  return (this.x = arg0), this;
};
_.setY = function setY(arg0) {
  return (this.y = arg0), this;
};
_.asPrimitive = function asPrimitive_0() {
  return this;
};
_.asShape = function asShape_0() {
  return this;
};
_.attachToLayerColorMap = function attachToLayerColorMap() {
  var layer;
  layer = $getLayer(this);
  !!layer && $attachShapeToColorMap(layer, this);
};
_.detachFromLayerColorMap = function detachFromLayerColorMap() {
  var layer;
  layer = $getLayer(this);
  !!layer && $detachShapeFromColorMap(layer, this);
};
_.doStrokeExtraProperties = function doStrokeExtraProperties() {
  return true;
};
_.drawWithoutTransforms = function drawWithoutTransforms(context, alpha_0, bounds) {
  var fill;
  alpha_0 = alpha_0 * this.alpha;
  if (alpha_0 <= 0) {
    return;
  }
  if (context.isSelection()) {
    if ($dofillBoundsForSelection(this, context, alpha_0)) {
      return;
    }
  } else {
    this.m_opts.apsh = false;
  }
  if (this.prepare(context, alpha_0)) {
    fill = this.fill_0(context, alpha_0);
    this.stroke_0(context, alpha_0, fill);
  }
};
_.fill_0 = function fill_0(context, alpha_0) {
  return $fill(this, context, alpha_0);
};
_.getDragConstraints = function getDragConstraints() {
  return new DefaultDragConstraintEnforcer();
};
_.isDragging_0 = function isDragging() {
  return this.m_opts.drag;
};
_.removeFromParent = function removeFromParent() {
  var group, layer, layer0, parent_0;
  parent_0 = this.m_parent;
  if (parent_0) {
    layer0 = parent_0.asLayer();
    if (layer0) {
      layer = $getLayer(this);
      !!layer && $detachShapeFromColorMap(layer, this);
      $remove(layer0, this);
      return true;
    }
    group = parent_0.asGroupOf();
    if (group) {
      layer = $getLayer(this);
      !!layer && $detachShapeFromColorMap(layer, this);
      $remove(group, this);
      return true;
    }
  }
  return false;
};
_.stroke_0 = function stroke_0(context, alpha_0, filled) {
  $stroke(this, context, alpha_0, filled);
};
_.dashOffset = 0;
_.fillBoundsForSelection = false;
_.fillShapeForSelection = false;
_.miterLimit = 0;
_.selectionBoundsOffset = 0;
_.selectionStrokeOffset = 0;
_.strokeWidth = 0;
var Lcom_ait_lienzo_client_core_shape_Shape_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Shape",
  17
);
function $copyTo_0(this$static, other) {
  $copyTo(this$static, other);
  populate(this$static.m_points, other.m_points);
  other.m_cornerPoints = clone(this$static.m_cornerPoints);
  other.m_pointRatios = this$static.m_pointRatios;
  other.m_box = this$static.m_box ? $copy(this$static.m_box) : null;
  other.cornerRadius = this$static.cornerRadius;
  other.minWidth = this$static.minWidth;
  other.maxWidth = this$static.maxWidth;
  other.minHeight = this$static.minHeight;
  other.maxHeight = this$static.maxHeight;
  return other;
}

function $getActualPathPartListArray(this$static) {
  var baseList, basePoints, cornerList, i, radius;
  radius = $doubleValue(this$static.cornerRadius);
  if ($doubleValue(this$static.cornerRadius) > 0) {
    if (this$static.m_cornerPoints.length > 0) {
      return this$static.m_cornerPoints;
    }
    if (radius != 0) {
      this$static.m_cornerPoints = new $wnd.Array();
      for (i = 0; i < this$static.m_points.length; i++) {
        baseList = $get_4(this$static.m_points, i);
        basePoints = $getPoints(baseList);
        cornerList = new PathPartList();
        drawArcJoinedLines(cornerList, baseList, basePoints, radius);
        $add_9(this$static.m_cornerPoints, cornerList);
      }
    }
    return this$static.m_cornerPoints;
  } else {
    return this$static.m_points;
  }
}

function AbstractMultiPathPartShape(type_0) {
  Shape.call(this, type_0);
  this.m_points = new $wnd.Array();
  this.m_cornerPoints = new $wnd.Array();
  this.cornerRadius = 0;
  this.minWidth = -1;
  this.maxWidth = -1;
  this.minHeight = -1;
  this.maxHeight = -1;
}

defineClass(199, 17, $intern_12);
_.refresh_1 = function refresh_1() {
  return this;
};
_.drawWithoutTransforms = function drawWithoutTransforms_0(context, alpha_0, bounds) {
  var fill, i, list, points, size_0;
  alpha_0 = alpha_0 * this.alpha;
  if (alpha_0 <= 0) {
    return;
  }
  points = this.m_points;
  $doubleValue(this.cornerRadius) > 0 && (points = this.m_cornerPoints);
  size_0 = points.length;
  if (size_0 < 1) {
    return;
  }
  for (i = 0; i < size_0; i++) {
    this.m_opts.apsh = false;
    list = $get_4(points, i);
    if (list.m_jso.length > 1) {
      fill = false;
      $path(context, list) && (fill = $fill(this, context, alpha_0));
      $stroke(this, context, alpha_0, fill);
    }
  }
};
_.getBoundingBox_0 = function getBoundingBox() {
  var i, points, size_0;
  if (this.m_box) {
    return this.m_box;
  }
  points = $getActualPathPartListArray(this);
  size_0 = points.length;
  if (size_0 < 1) {
    this.m_box = fromDoubles(0, 0, 0, 0);
    return this.m_box;
  }
  this.m_box = new BoundingBox();
  for (i = 0; i < size_0; i++) {
    $addBoundingBox(this.m_box, $getBoundingBox_2($get_4(points, i)));
  }
  return this.m_box;
};
_.prepare = function prepare(context, alpha_0) {
  return true;
};
var Lcom_ait_lienzo_client_core_shape_AbstractMultiPathPartShape_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "AbstractMultiPathPartShape",
  199
);
function $setControlPoints(this$static, points) {
  this$static.points = points;
  return this$static.refresh_2();
}

function $setPoint2DArray(this$static, points) {
  if ($getLength_0(points) > 3) {
    throw toJs(new IllegalArgumentException("Cannot have more than 3 points"));
  }
  this$static.points = points;
  return this$static.refresh_2();
}

function AbstractMultiPointShape(type_0) {
  Shape.call(this, type_0);
  this.m_list = new PathPartList();
}

defineClass(76, 17, $intern_12);
_.refresh_1 = function refresh_3() {
  return this.refresh_2();
};
_.refresh_2 = function refresh_2() {
  return $clear_0(this.m_list), this;
};
var Lcom_ait_lienzo_client_core_shape_AbstractMultiPointShape_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "AbstractMultiPointShape",
  76
);
function $isPathPartListPrepared(this$static) {
  if ($getLength_0(this$static.m_list.m_jso) < 1) {
    return $parse();
  }
  return true;
}

function AbstractOffsetMultiPointShape(type_0) {
  AbstractMultiPointShape.call(this, type_0);
}

defineClass(198, 76, $intern_12);
_.prepare = function prepare_0(context, alpha_0) {
  var prepared;
  prepared = $isPathPartListPrepared(this);
  prepared && $path(context, this.m_list);
  return prepared;
};
_.headOffset = 0;
_.tailOffset = 0;
var Lcom_ait_lienzo_client_core_shape_AbstractOffsetMultiPointShape_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "AbstractOffsetMultiPointShape",
  198
);
function $setCounterClockwise(this$static, counterClockwise) {
  this$static.counterClockwise = counterClockwise;
  return this$static;
}

function $setEndAngle(this$static, angle) {
  this$static.endAngle = angle;
  return this$static;
}

function $setStartAngle(this$static, angle) {
  this$static.startAngle = angle;
  return this$static;
}

function Arc(radius, startAngle, endAngle, counterClockwise) {
  $clinit_Node();
  Shape.call(this, ($clinit_ShapeType(), ARC));
  $setCounterClockwise(
    $setEndAngle($setStartAngle(((this.radius = radius), this), startAngle), endAngle),
    counterClockwise
  );
}

defineClass(396, 17, $intern_12, Arc);
_.getBoundingBox = function getBoundingBox_0() {
  var radius;
  radius = this.radius;
  return fromDoubles(0 - radius, 0 - radius, radius, radius);
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes() {
  return new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
        ($clinit_Attribute(), RADIUS),
        START_ANGLE,
        END_ANGLE,
        COUNTER_CLOCKWISE,
      ])
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getEndAngle = function getEndAngle() {
  return this.endAngle;
};
_.getRadius = function getRadius() {
  return this.radius;
};
_.getStartAngle = function getStartAngle() {
  return this.startAngle;
};
_.isCounterClockwise = function isCounterClockwise() {
  return this.counterClockwise;
};
_.prepare = function prepare_1(context, alpha_0) {
  var r;
  r = this.radius;
  if (r > 0) {
    context.m_jso.beginPath();
    $arc(context, r, this.startAngle, this.endAngle, this.counterClockwise);
    return true;
  }
  return false;
};
_.setCounterClockwise = function setCounterClockwise(counterClockwise) {
  return $setCounterClockwise(this, counterClockwise);
};
_.setEndAngle = function setEndAngle(angle) {
  return $setEndAngle(this, angle);
};
_.setRadius = function setRadius(radius) {
  return (this.radius = radius), this;
};
_.setStartAngle = function setStartAngle(angle) {
  return $setStartAngle(this, angle);
};
_.counterClockwise = false;
_.endAngle = 0;
_.radius = 0;
_.startAngle = 0;
var Lcom_ait_lienzo_client_core_shape_Arc_2_classLit = createForClass("com.ait.lienzo.client.core.shape", "Arc", 396);
function $getPolygon(this$static) {
  var a,
    arr,
    aw,
    b,
    b_degrees,
    cosa,
    cosb,
    d1,
    dv,
    dx,
    dy,
    e,
    p0,
    p1,
    p2,
    p4,
    p5,
    p6,
    q0,
    q1,
    q2,
    q4,
    q5,
    q6,
    r,
    r2,
    s,
    sina,
    sinb,
    type_0,
    w,
    z_0;
  if (this$static.m_polygon == null) {
    arr = new $wnd.Array();
    try {
      type_0 = this$static.arrowType;
      a = (this$static.arrowAngle / 180) * $intern_13;
      sina = $wnd.Math.sin(a);
      cosa = $wnd.Math.cos(a);
      b_degrees = 180 - this$static.baseAngle - this$static.arrowAngle;
      b = (b_degrees / 180) * $intern_13;
      sinb = $wnd.Math.sin(b);
      cosb = $wnd.Math.cos(b);
      w = this$static.baseWidth;
      aw = this$static.headWidth;
      s = this$static.points[0];
      e = this$static.points[1];
      dv = new Point2D(e.x - s.x, e.y - s.y);
      dx = $unit(dv);
      dy = new Point2D(-dx.y, dx.x);
      if (type_0 == ($clinit_ArrowType(), AT_END) || type_0 == AT_END_TAPERED || type_0 == AT_BOTH_ENDS) {
        r = aw / (2 * sina);
        z_0 = r * cosa;
        p2 = $sub($sub(e, new Point2D(dx.x * z_0, dx.y * z_0)), new Point2D(dy.x * (aw / 2), dy.y * (aw / 2)));
        p4 = $add_6($sub(e, new Point2D(dx.x * z_0, dx.y * z_0)), new Point2D(dy.x * (aw / 2), dy.y * (aw / 2)));
        p1 = $add_6(p2, new Point2D(dy.x * ((aw - w) / 2), dy.y * ((aw - w) / 2)));
        p5 = $sub(p4, new Point2D(dy.x * ((aw - w) / 2), dy.y * ((aw - w) / 2)));
        if (b_degrees != 90) {
          r2 = (aw - w) / (2 * sinb);
          d1 = new Point2D(dx.x * (r2 * cosb), dx.y * (r2 * cosb));
          p1 = new Point2D(p1.x - d1.x, p1.y - d1.y);
          p5 = new Point2D(p5.x - d1.x, p5.y - d1.y);
        }
        arr.push(p1);
        arr.push(p2);
        arr.push(e);
        arr.push(p4);
        arr.push(p5);
      } else if (type_0 == AT_START) {
        q0 = $add_6(e, new Point2D(dy.x * (-w / 2), dy.y * (-w / 2)));
        q6 = $add_6(e, new Point2D(dy.x * (w / 2), dy.y * (w / 2)));
        arr.push(q0);
        arr.push(q6);
      } else {
        arr.push(e);
      }
      if (type_0 == AT_START || type_0 == AT_START_TAPERED || type_0 == AT_BOTH_ENDS) {
        r = aw / (2 * sina);
        z_0 = r * cosa;
        q2 = $sub($add_6(s, new Point2D(dx.x * z_0, dx.y * z_0)), new Point2D(dy.x * (aw / 2), dy.y * (aw / 2)));
        q4 = $add_6($add_6(s, new Point2D(dx.x * z_0, dx.y * z_0)), new Point2D(dy.x * (aw / 2), dy.y * (aw / 2)));
        q1 = $add_6(q2, new Point2D(dy.x * ((aw - w) / 2), dy.y * ((aw - w) / 2)));
        q5 = $sub(q4, new Point2D(dy.x * ((aw - w) / 2), dy.y * ((aw - w) / 2)));
        if (b_degrees != 90) {
          r2 = (aw - w) / (2 * sinb);
          d1 = new Point2D(dx.x * (r2 * cosb), dx.y * (r2 * cosb));
          q1 = new Point2D(q1.x + d1.x, q1.y + d1.y);
          q5 = new Point2D(q5.x + d1.x, q5.y + d1.y);
        }
        arr.push(q5);
        arr.push(q4);
        arr.push(s);
        arr.push(q2);
        arr.push(q1);
      } else if (type_0 == AT_END) {
        p0 = $add_6(s, new Point2D(dy.x * (-w / 2), dy.y * (-w / 2)));
        p6 = $add_6(s, new Point2D(dy.x * (w / 2), dy.y * (w / 2)));
        arr.push(p6);
        arr.push(p0);
      } else {
        arr.push(s);
      }
    } catch ($e0) {
      $e0 = toJava($e0);
      if (!instanceOf($e0, 70)) throw toJs($e0);
    }
    this$static.m_polygon = arr;
  }
  return this$static.m_polygon;
}

function $setPoints(this$static, points) {
  this$static.points = points;
  this$static.m_polygon = null;
  return this$static;
}

function Arrow(start_0, end, baseWidth, headWidth, arrowAngle, baseAngle, arrowType) {
  $clinit_Node();
  Shape.call(this, ($clinit_ShapeType(), ARROW));
  $setPoints(
    this,
    fromArrayOfPoint2D_0(
      stampJavaTypeInfo(
        getClassLiteralForArray(Lcom_ait_lienzo_client_core_types_Point2D_2_classLit, 1),
        $intern_4,
        9,
        0,
        [start_0, end]
      )
    )
  );
  this.baseWidth = baseWidth;
  this.m_polygon = null;
  this.headWidth = headWidth;
  this.m_polygon = null;
  this.arrowAngle = arrowAngle;
  this.m_polygon = null;
  this.baseAngle = baseAngle;
  this.m_polygon = null;
  this.arrowType = arrowType;
  this.m_polygon = null;
}

defineClass(401, 17, $intern_12, Arrow);
_.getArrowAngle = function getArrowAngle() {
  return this.arrowAngle;
};
_.getArrowType = function getArrowType() {
  return this.arrowType;
};
_.getBaseAngle = function getBaseAngle() {
  return this.baseAngle;
};
_.getBaseWidth = function getBaseWidth() {
  return this.baseWidth;
};
_.getBoundingBox = function getBoundingBox_1() {
  return fromPoint2DArray($getPolygon(this));
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_0() {
  return new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
        ($clinit_Attribute(), POINTS),
        BASE_WIDTH,
        HEAD_WIDTH,
        ARROW_ANGLE,
        BASE_ANGLE,
        ARROW_TYPE,
      ])
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getEnd = function getEnd() {
  return $getAt(this.points, 1);
};
_.getHeadWidth = function getHeadWidth() {
  return this.headWidth;
};
_.getPoints = function getPoints() {
  return this.points;
};
_.getStart = function getStart() {
  return $getAt(this.points, 0);
};
_.prepare = function prepare_2(context, alpha_0) {
  var i, leng, list, point;
  list = $getPolygon(this);
  if (null != list && list.length > 2) {
    point = list[0];
    context.m_jso.beginPath();
    $moveTo(context, point.x, point.y);
    leng = list.length;
    for (i = 1; i < leng; i++) {
      point = list[i];
      $lineTo(context, point.x, point.y);
    }
    context.m_jso.closePath();
    return true;
  }
  return false;
};
_.setArrowAngle = function setArrowAngle(arrowAngle) {
  return (this.arrowAngle = arrowAngle), (this.m_polygon = null), this;
};
_.setArrowType = function setArrowType(arrowType) {
  return (this.arrowType = arrowType), (this.m_polygon = null), this;
};
_.setBaseAngle = function setBaseAngle(baseAngle) {
  return (this.baseAngle = baseAngle), (this.m_polygon = null), this;
};
_.setBaseWidth = function setBaseWidth(baseWidth) {
  return (this.baseWidth = baseWidth), (this.m_polygon = null), this;
};
_.setEnd = function setEnd(end) {
  $set(this.points, 1, end);
  this.m_polygon = null;
  return this;
};
_.setHeadWidth = function setHeadWidth(headWidth) {
  return (this.headWidth = headWidth), (this.m_polygon = null), this;
};
_.setPoints = function setPoints(points) {
  return $setPoints(this, points);
};
_.setStart = function setStart(start_0) {
  $set(this.points, 0, start_0);
  this.m_polygon = null;
  return this;
};
_.arrowAngle = 0;
_.baseAngle = 0;
_.baseWidth = 0;
_.headWidth = 0;
var Lcom_ait_lienzo_client_core_shape_Arrow_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Arrow",
  401
);
function BezierCurve(sp, c1, c2, ep) {
  $clinit_Node();
  AbstractMultiPointShape.call(this, ($clinit_ShapeType(), BEZIER_CURVE));
  $setControlPoints(
    this,
    fromArrayOfPoint2D_0(
      stampJavaTypeInfo(
        getClassLiteralForArray(Lcom_ait_lienzo_client_core_types_Point2D_2_classLit, 1),
        $intern_4,
        9,
        0,
        [sp, c1, c2, ep]
      )
    )
  );
}

defineClass(402, 76, $intern_12, BezierCurve);
_.getBoundingBox = function getBoundingBox_2() {
  var p, x0, x1, x2, x3, xvals, y0, y1, y2, y3, yvals;
  p = this.points;
  x0 = p[0].x;
  y0 = p[0].y;
  x1 = p[1].x;
  y1 = p[1].y;
  x2 = p[2].x;
  y2 = p[2].y;
  x3 = p[3].x;
  y3 = p[3].y;
  xvals = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [x0, x1, x2, x3]);
  yvals = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [y0, y1, y2, y3]);
  return getBoundingBoxOfCubicCurve(xvals, yvals);
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_1() {
  return new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
        ($clinit_Attribute(), CONTROL_POINTS),
      ])
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.isControlPointShape = function isControlPointShape() {
  return true;
};
_.prepare = function prepare_3(context, alpha_0) {
  var p0, p1, p2, p3, points;
  points = this.points;
  if (points != null && points.length == 4) {
    context.m_jso.beginPath();
    p0 = points[0];
    p1 = points[1];
    p2 = points[2];
    p3 = points[3];
    $moveTo(context, p0.x, p0.y);
    $bezierCurveTo(context, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    return true;
  }
  return false;
};
var Lcom_ait_lienzo_client_core_shape_BezierCurve_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "BezierCurve",
  402
);
function $setCounterClockwise_0(this$static, counterClockwise) {
  this$static.counterClockwise = counterClockwise;
  return this$static;
}

function $setEndAngle_0(this$static, angle) {
  this$static.endAngle = angle;
  return this$static;
}

function $setOuterRadius(this$static, radius) {
  this$static.outerRadius = radius;
  return this$static;
}

function $setStartAngle_0(this$static, angle) {
  this$static.startAngle = angle;
  return this$static;
}

function Bow(innerRadius, outerRadius, startAngle, endAngle, counterClockwise) {
  $clinit_Node();
  Shape.call(this, ($clinit_ShapeType(), BOW));
  $setCounterClockwise_0(
    $setEndAngle_0(
      $setStartAngle_0($setOuterRadius(((this.innerRadius = innerRadius), this), outerRadius), startAngle),
      endAngle
    ),
    counterClockwise
  );
}

defineClass(403, 17, $intern_12, Bow);
_.getBoundingBox = function getBoundingBox_3() {
  var radius;
  radius = $wnd.Math.max(this.innerRadius, this.outerRadius);
  return fromDoubles(0 - radius, 0 - radius, radius, radius);
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_2() {
  return new Arrays$ArrayList(
    stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
      ($clinit_Attribute(), INNER_RADIUS),
      OUTER_RADIUS,
      START_ANGLE,
      END_ANGLE,
      COUNTER_CLOCKWISE,
    ])
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getEndAngle = function getEndAngle_0() {
  return this.endAngle;
};
_.getInnerRadius = function getInnerRadius() {
  return this.innerRadius;
};
_.getOuterRadius = function getOuterRadius() {
  return this.outerRadius;
};
_.getStartAngle = function getStartAngle_0() {
  return this.startAngle;
};
_.isCounterClockwise = function isCounterClockwise_0() {
  return this.counterClockwise;
};
_.prepare = function prepare_4(context, alpha_0) {
  var beg, ccw, end, ird, ord;
  end = this.endAngle;
  beg = this.startAngle;
  if (beg == end) {
    return false;
  }
  ord = this.outerRadius;
  ird = this.innerRadius;
  ccw = this.counterClockwise;
  if (ord > 0 && ird > 0) {
    context.m_jso.beginPath();
    context.m_jso.arc(0, 0, ord, beg, end, ccw);
    context.m_jso.arc(0, 0, ird, end, beg, !ccw);
    context.m_jso.closePath();
    return true;
  }
  return false;
};
_.setCounterClockwise = function setCounterClockwise_0(counterClockwise) {
  return $setCounterClockwise_0(this, counterClockwise);
};
_.setEndAngle = function setEndAngle_0(angle) {
  return $setEndAngle_0(this, angle);
};
_.setInnerRadius = function setInnerRadius(radius) {
  return (this.innerRadius = radius), this;
};
_.setOuterRadius = function setOuterRadius(radius) {
  return $setOuterRadius(this, radius);
};
_.setStartAngle = function setStartAngle_0(angle) {
  return $setStartAngle_0(this, angle);
};
_.counterClockwise = false;
_.endAngle = 0;
_.innerRadius = 0;
_.outerRadius = 0;
_.startAngle = 0;
var Lcom_ait_lienzo_client_core_shape_Bow_2_classLit = createForClass("com.ait.lienzo.client.core.shape", "Bow", 403);
function Circle(radius) {
  $clinit_Node();
  Shape.call(this, ($clinit_ShapeType(), CIRCLE));
  this.radius = radius;
}

defineClass(115, 17, { 22: 1, 115: 1, 21: 1, 26: 1, 18: 1, 17: 1, 27: 1 }, Circle);
_.doStrokeExtraProperties = function doStrokeExtraProperties_0() {
  return false;
};
_.getBoundingBox = function getBoundingBox_4() {
  var radius;
  radius = this.radius;
  return fromDoubles(0 - radius, 0 - radius, radius, radius);
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_3() {
  return new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
        ($clinit_Attribute(), RADIUS),
      ])
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getRadius = function getRadius_0() {
  return this.radius;
};
_.prepare = function prepare_5(context, alpha_0) {
  var r;
  r = this.radius;
  if (r > 0) {
    context.m_jso.beginPath();
    context.m_jso.arc(0, 0, r, 0, $intern_14, true);
    context.m_jso.closePath();
    return true;
  }
  return false;
};
_.setRadius = function setRadius_0(radius) {
  return (this.radius = radius), this;
};
_.radius = 0;
var Lcom_ait_lienzo_client_core_shape_Circle_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Circle",
  115
);
function $add(this$static, child) {
  var node;
  node = child.asNode();
  node.m_parent = this$static;
  !this$static.m_stor && (this$static.m_stor = this$static.getDefaultStorageEngine_0());
  $add_4(this$static.m_stor, child);
  return this$static;
}

function $drawWithoutTransforms(this$static, context, alpha_0, bounds) {
  var bbox, i, list, size_0;
  if (context.isSelection() && !this$static.listening) {
    return;
  }
  alpha_0 = alpha_0 * this$static.getAlpha();
  if (alpha_0 <= 0) {
    return;
  }
  bbox = this$static.m_bbox;
  !bbox && (bbox = bounds);
  list =
    (!this$static.m_stor && (this$static.m_stor = this$static.getDefaultStorageEngine_0()), this$static.m_stor.m_list);
  size_0 = list.length;
  for (i = 0; i < size_0; i++) {
    $get_4(list, i).drawWithTransforms(context, alpha_0, bbox);
  }
}

function $getBoundingBox(this$static) {
  var bbox, bpts, i, list, size_0;
  bbox = new BoundingBox();
  list =
    (!this$static.m_stor && (this$static.m_stor = this$static.getDefaultStorageEngine_0()), this$static.m_stor.m_list);
  size_0 = list.length;
  for (i = 0; i < size_0; i++) {
    bpts = $get_4(list, i).getBoundingPoints();
    !!bpts && $addPoint2DArray(bbox, bpts.m_array);
  }
  return bbox;
}

function $getStorageEngine(this$static) {
  !this$static.m_stor && (this$static.m_stor = new SceneFastArrayStorageEngine());
  return this$static.m_stor;
}

function $remove(this$static, child) {
  var node;
  node = child;
  node.m_parent = null;
  !this$static.m_stor && (this$static.m_stor = this$static.getDefaultStorageEngine_0());
  $remove_1(this$static.m_stor, child);
  return this$static;
}

function ContainerNode(type_0, storage) {
  Node_0.call(this, type_0);
  !!this.m_stor && $migrate(storage, this.m_stor);
  this.m_stor = storage;
}

defineClass(43, 18, $intern_15);
_.drawWithoutTransforms = function drawWithoutTransforms_1(context, alpha_0, bounds) {
  $drawWithoutTransforms(this, context, alpha_0, bounds);
};
_.getBoundingBox_0 = function getBoundingBox_5() {
  return $getBoundingBox(this);
};
_.getBoundingBoxAttributes_0 = function getBoundingBoxAttributes_4() {
  return new ArrayList_0();
};
_.getChildNodes = function getChildNodes() {
  return !this.m_stor && (this.m_stor = this.getDefaultStorageEngine_0()), this.m_stor.m_list;
};
var Lcom_ait_lienzo_client_core_shape_ContainerNode_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "ContainerNode",
  43
);
function $setHeight(this$static, height) {
  this$static.height = height;
  return this$static;
}

function Ellipse(width_0, height) {
  $clinit_Node();
  Shape.call(this, ($clinit_ShapeType(), ELLIPSE));
  $setHeight(((this.width = width_0), this), height);
}

defineClass(404, 17, $intern_12, Ellipse);
_.doStrokeExtraProperties = function doStrokeExtraProperties_1() {
  return false;
};
_.getBoundingBox = function getBoundingBox_6() {
  var h, w;
  w = this.width / 2;
  h = this.height / 2;
  return fromDoubles(0 - w, 0 - h, w, h);
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_5() {
  return new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
        ($clinit_Attribute(), WIDTH),
        HEIGHT,
      ])
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getHeight = function getHeight() {
  return this.height;
};
_.getWidth = function getWidth() {
  return this.width;
};
_.prepare = function prepare_6(context, alpha_0) {
  var h, w;
  w = this.width;
  h = this.height;
  if (w > 0 && h > 0) {
    context.m_jso.beginPath();
    context.m_jso.ellipse(0, 0, w / 2, h / 2, 0, 0, $intern_14, true);
    context.m_jso.closePath();
    return true;
  }
  return false;
};
_.setHeight = function setHeight(height) {
  return $setHeight(this, height);
};
_.setWidth = function setWidth(width_0) {
  return (this.width = width_0), this;
};
_.height = 0;
_.width = 0;
var Lcom_ait_lienzo_client_core_shape_Ellipse_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Ellipse",
  404
);
function $detachFromLayerColorMap(this$static) {
  var i, layer, list, size_0;
  layer = $getLayer(this$static);
  if (layer) {
    list =
      (!this$static.m_stor && (this$static.m_stor = new PrimitiveFastArrayStorageEngine()), this$static.m_stor.m_list);
    size_0 = list.length;
    for (i = 0; i < size_0; i++) {
      $get_4(list, i).detachFromLayerColorMap();
    }
  }
}

function $refresh(this$static) {
  var i, list, size_0;
  list =
    (!this$static.m_stor && (this$static.m_stor = new PrimitiveFastArrayStorageEngine()), this$static.m_stor.m_list);
  size_0 = list.length;
  for (i = 0; i < size_0; i++) {
    $get_4(list, i).refresh_0();
  }
  return this$static;
}

function GroupOf(stor) {
  ContainerNode.call(this, ($clinit_NodeType(), GROUP), stor);
  this.m_opts = new GroupOf$OptionalGroupOfFields();
}

defineClass(197, 43, $intern_16);
_.batch = function batch_0() {
  var layer;
  return (
    (layer = $getLayer(this)),
    !!layer && $schedule(($clinit_LayerRedrawManager(), $clinit_LayerRedrawManager(), INSTANCE_0), layer),
    this
  );
};
_.getAlpha = function getAlpha_1() {
  return this.alpha;
};
_.getDragBounds = function getDragBounds_1() {
  return this.dragBounds;
};
_.getDragConstraint = function getDragConstraint_1() {
  return this.dragConstraint;
};
_.getDragMode = function getDragMode_1() {
  return this.dragMode;
};
_.getEventPropagationMode = function getEventPropagationMode_1() {
  return this.eventPropagationMode;
};
_.getOffset = function getOffset_1() {
  return this.offset;
};
_.getRotation = function getRotation_1() {
  return this.rotation;
};
_.getScale = function getScale_1() {
  return this.scale;
};
_.getShear = function getShear_1() {
  return this.shear;
};
_.getX_0 = function getX_1() {
  return this.x;
};
_.getY_0 = function getY_1() {
  return this.y;
};
_.isDraggable = function isDraggable_1() {
  return this.draggable;
};
_.refresh_1 = function refresh_4() {
  return $refresh(this);
};
_.setDragging = function setDragging_0(drag) {
  return $setDragging(this.m_opts, drag), this;
};
_.setOffset = function setOffset_0(arg0, arg1) {
  return $setOffset(this, new Point2D(arg0, arg1)), this;
};
_.setRotationDegrees = function setRotationDegrees_0(arg0) {
  return (this.rotation = (arg0 / 180) * $intern_13), this;
};
_.setX = function setX_0(arg0) {
  return (this.x = arg0), this;
};
_.setY = function setY_0(arg0) {
  return (this.y = arg0), this;
};
_.add = function add_0(child) {
  return child.removeFromParent(), $add(this, child), child.attachToLayerColorMap(), this;
};
_.asGroupOf = function asGroupOf_0() {
  return this;
};
_.asPrimitive = function asPrimitive_1() {
  return this;
};
_.attachToLayerColorMap = function attachToLayerColorMap_0() {
  var i, layer, list, size_0;
  layer = $getLayer(this);
  if (layer) {
    list = (!this.m_stor && (this.m_stor = this.getDefaultStorageEngine_0()), this.m_stor.m_list);
    size_0 = list.length;
    for (i = 0; i < size_0; i++) {
      $get_4(list, i).attachToLayerColorMap();
    }
  }
};
_.detachFromLayerColorMap = function detachFromLayerColorMap_0() {
  $detachFromLayerColorMap(this);
};
_.getBoundingBoxAttributes_0 = function getBoundingBoxAttributes_6() {
  return new ArrayList();
};
_.getDragConstraints = function getDragConstraints_0() {
  return new DefaultDragConstraintEnforcer();
};
_.isDragging_0 = function isDragging_0() {
  return this.m_opts.drag;
};
_.removeFromParent = function removeFromParent_0() {
  var group, layer, parent_0;
  parent_0 = this.m_parent;
  if (parent_0) {
    layer = parent_0.asLayer();
    if (layer) {
      $detachFromLayerColorMap(this);
      $remove(layer, this);
      return true;
    }
    group = parent_0.asGroupOf();
    if (group) {
      $detachFromLayerColorMap(this);
      $remove(group, this);
      return true;
    }
  }
  return false;
};
var Lcom_ait_lienzo_client_core_shape_GroupOf_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "GroupOf",
  197
);
function Group() {
  $clinit_Node();
  GroupOf.call(this, ($clinit_GroupType(), new PrimitiveFastArrayStorageEngine()));
}

defineClass(405, 197, $intern_16, Group);
_.asGroup = function asGroup() {
  return this;
};
_.getChildren = function getChildren() {
  return !this.m_stor && (this.m_stor = new PrimitiveFastArrayStorageEngine()), this.m_stor.m_list;
};
_.getDefaultStorageEngine = function getDefaultStorageEngine() {
  return new PrimitiveFastArrayStorageEngine();
};
_.getDefaultStorageEngine_0 = function () {
  return this.getDefaultStorageEngine();
};
var Lcom_ait_lienzo_client_core_shape_Group_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Group",
  405
);
function $setDragging(this$static, drag) {
  this$static.drag = drag;
}

function GroupOf$OptionalGroupOfFields() {}

function make_1() {
  return new GroupOf$OptionalGroupOfFields();
}

defineClass(145, 1, {}, GroupOf$OptionalGroupOfFields);
_.drag = false;
var Lcom_ait_lienzo_client_core_shape_GroupOf$OptionalGroupOfFields_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "GroupOf/OptionalGroupOfFields",
  145
);
function $add_0(this$static, child) {
  $add(this$static, child);
  child.attachToLayerColorMap();
  return this$static;
}

function $attachShapeToColorMap(this$static, shape_0) {
  var color_0, count;
  color_0 = shape_0.m_ckey;
  if (null != color_0) {
    $remove_5(this$static.m_shape_color_map, color_0);
    shape_0.m_ckey = null;
  }
  count = 0;
  do {
    ++count;
    color_0 = $next(this$static.m_c_rotor);
  } while (this$static.m_shape_color_map.get(color_0) != null && count <= 16777216);
  if (count > 16777216) {
    throw toJs(new IllegalArgumentException("Exhausted color space " + count));
  }
  $put_1(this$static.m_shape_color_map, color_0, shape_0);
  shape_0.m_ckey = color_0;
}

function $batch(this$static) {
  return $schedule(($clinit_LayerRedrawManager(), $clinit_LayerRedrawManager(), INSTANCE_0), this$static);
}

function $clear(this$static) {
  var context;
  if (($clinit_LienzoCore(), $clinit_LienzoCore(), INSTANCE_1).m_layerClearMode == ($clinit_LayerClearMode(), CLEAR)) {
    context = this$static.getContext_0();
    !!context && $clearRect(context, this$static.m_wide, this$static.m_high);
  } else {
    $setPixelSize(this$static, this$static.m_wide, this$static.m_high);
  }
}

function $detachShapeFromColorMap(this$static, shape_0) {
  var color_0, look;
  color_0 = shape_0.m_ckey;
  if (null != color_0) {
    look = this$static.m_shape_color_map.get(color_0);
    if (shape_0 == look) {
      shape_0.m_ckey = null;
      $remove_5(this$static.m_shape_color_map, color_0);
    }
  }
}

function $draw(this$static, context) {
  var bbox, draw, selection, transform, viewport;
  if (($clinit_LienzoCore(), IS_CANVAS_SUPPORTED)) {
    this$static.clearLayerBeforeDraw && $clear(this$static);
    if (this$static.visible) {
      draw = true;
      !!this$static.m_olbd && (draw = $onLayerBeforeDraw(this$static.m_olbd));
      if (draw) {
        transform = null;
        viewport = $getViewport(this$static);
        this$static.transformable && !!viewport && (transform = viewport.transform);
        context.m_jso.save();
        !!transform && $transform_0(context.m_jso, transform ? transform : null);
        bbox = this$static.m_bbox;
        $drawWithTransforms(
          this$static,
          context,
          1,
          bbox,
          new Node$0methodref$getPossibleNodeTransform$Type(this$static)
        );
        context.m_jso.restore();
        selection = $getSelectionLayer(this$static);
        if (selection) {
          $clear(selection);
          context = selection.m_context;
          context.m_jso.save();
          !!transform && $transform_0(context.m_jso, transform ? transform : null);
          $drawWithTransforms(
            this$static,
            context,
            1,
            bbox,
            new Node$0methodref$getPossibleNodeTransform$Type(this$static)
          );
          context.m_jso.restore();
        }
      }
    }
  }
  return this$static;
}

function $findShapeAtPoint(this$static, x_0, y_0) {
  var rgba, selection, shape_0;
  if (this$static.visible) {
    selection = $getSelectionLayer(this$static);
    if (selection) {
      rgba = $getImageDataPixelColor(selection.m_context, x_0, y_0);
      if (rgba.m_a != 255) {
        return null;
      }
      shape_0 = this$static.m_shape_color_map.get(rgbToBrowserHexColor(rgba.m_r, rgba.m_g, rgba.m_b));
      if (!!shape_0 && shape_0.visible) {
        return shape_0;
      }
    }
  }
  return null;
}

function $getCanvasElement(this$static) {
  var $tmp;
  if (($clinit_LienzoCore(), IS_CANVAS_SUPPORTED)) {
    if (null == this$static.m_element) {
      this$static.m_element = ($clinit_DomGlobal(), document_0).createElement("canvas");
      this$static.m_element.style.position = ($clinit_Style$Position(), "absolute");
      this$static.m_element.style.display = ($clinit_Style$Display(), "inline-block");
      this$static.m_element.id =
        "layer_canvas" + toString_33((($tmp = idCounter), (idCounter = add_6(idCounter, 1)), $tmp));
    }
    !this$static.m_context_0 && (this$static.m_context_0 = new Context2D_0(this$static.m_element));
  }
  return this$static.m_element;
}

function $getElement(this$static) {
  var $tmp, element;
  if (null == this$static.m_wrapper) {
    this$static.m_wrapper = ($clinit_DomGlobal(), document_0).createElement("div");
    this$static.m_wrapper.style.position = ($clinit_Style$Position(), "absolute");
    this$static.m_wrapper.style.display = ($clinit_Style$Display(), "inline-block");
    this$static.m_wrapper.id =
      "layer_wrapper_div" + toString_33((($tmp = idCounter), (idCounter = add_6(idCounter, 1)), $tmp));
    element = this$static.getCanvasElement();
    null != element && (this$static.isSelection() || this$static.m_wrapper.appendChild(element));
  }
  return this$static.m_wrapper;
}

function $getSelectionLayer(this$static) {
  if (this$static.listening) {
    if (!this$static.m_select) {
      this$static.m_select = new Layer$SelectionLayer();
      $setPixelSize(this$static.m_select, this$static.m_wide, this$static.m_high);
    }
    return this$static.m_select;
  }
  return null;
}

function $removeFromParent(this$static) {
  var parent_0, scene;
  parent_0 = this$static.m_parent;
  if (parent_0) {
    scene = parent_0.asScene();
    if (scene) {
      $remove_0(scene, this$static);
      return true;
    }
  }
  return false;
}

function $setOnLayerBeforeDraw(this$static, onLayerBeforeDrawHandler) {
  this$static.m_olbd = onLayerBeforeDrawHandler;
  return this$static;
}

function $setPixelSize(this$static, wide, high) {
  var element;
  this$static.m_wide = wide;
  this$static.m_high = high;
  if (($clinit_LienzoCore(), IS_CANVAS_SUPPORTED)) {
    if (!this$static.isSelection()) {
      $getElement(this$static).style.width = wide + ($clinit_Style$Unit(), "px");
      $getElement(this$static).style.height = high + "px";
    }
    element = this$static.getCanvasElement();
    element.width = wide;
    element.height = high;
    this$static.isSelection() || $initDeviceRatio(this$static.getContext_0().m_jso);
    !this$static.isSelection() && !!this$static.m_select && $setPixelSize(this$static.m_select, wide, high);
  }
}

function $unBatchScheduled(this$static) {
  this$static.m_batched = 0;
  return this$static;
}

function Layer() {
  $clinit_Node();
  ContainerNode.call(this, ($clinit_NodeType(), LAYER), new PrimitiveFastArrayStorageEngine());
  this.m_c_rotor = new ColorKeyRotor();
  this.m_shape_color_map = new $wnd.Map();
}

defineClass(67, 43, $intern_17, Layer);
_.batch = function batch_1() {
  return $schedule(($clinit_LayerRedrawManager(), $clinit_LayerRedrawManager(), INSTANCE_0), this);
};
_.setVisible_0 = function setVisible_1(visible) {
  return (
    (this.visible = visible),
    ($getElement(this).style.visibility = visible
      ? ($clinit_Style$Visibility(), "visible")
      : ($clinit_Style$Visibility(), "hidden")),
    this
  );
};
_.asLayer = function asLayer_0() {
  return this;
};
_.draw_1 = function draw_0() {
  return $draw(this, this.getContext_0());
};
_.getCanvasElement = function getCanvasElement() {
  return $getCanvasElement(this);
};
_.getContext_0 = function getContext() {
  return this.m_context_0;
};
_.getDefaultStorageEngine_0 = function getDefaultStorageEngine_0() {
  return new PrimitiveFastArrayStorageEngine();
};
_.getLayer_0 = function getLayer_0() {
  return this;
};
_.isSelection = function isSelection_0() {
  return false;
};
_.removeFromParent = function removeFromParent_1() {
  return $removeFromParent(this);
};
_.clearLayerBeforeDraw = true;
_.m_batched = 0;
_.m_context_0 = null;
_.m_element = null;
_.m_high = 0;
_.m_olbd = null;
_.m_select = null;
_.m_wide = 0;
_.m_wrapper = null;
_.transformable = true;
var idCounter = 0;
var Lcom_ait_lienzo_client_core_shape_Layer_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Layer",
  67
);
function Layer$SelectionLayer() {
  Layer.call(this);
  this.listening = false;
  this.m_select = null;
}

defineClass(204, 67, $intern_17, Layer$SelectionLayer);
_.draw_1 = function draw_1() {
  return this;
};
_.getCanvasElement = function getCanvasElement_0() {
  var element;
  return (
    (element = $getCanvasElement(this)),
    null != element && !this.m_context && (this.m_context = new Layer$SelectionLayer$SelectionContext2D(element)),
    element
  );
};
_.getContext_0 = function getContext_0() {
  return this.m_context;
};
_.isSelection = function isSelection_1() {
  return true;
};
var Lcom_ait_lienzo_client_core_shape_Layer$SelectionLayer_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Layer/SelectionLayer",
  204
);
function Layer$SelectionLayer$SelectionContext2D(element) {
  Context2D_0.call(this, element);
  $setGlobalAlpha(this.m_jso, 1);
}

defineClass(205, 90, {}, Layer$SelectionLayer$SelectionContext2D);
_.isSelection = function isSelection_2() {
  return true;
};
_.setGlobalAlpha = function setGlobalAlpha_0(alpha_0) {};
var Lcom_ait_lienzo_client_core_shape_Layer$SelectionLayer$SelectionContext2D_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Layer/SelectionLayer/SelectionContext2D",
  205
);
function $drawDashedLine(context, x_0, y_0, x2, y2, da, plus) {
  var dashCount, dashIndex, dashLength, distRemaining, dx, dy, slope, step, xbig;
  dashCount = da.length;
  dx = x2 - x_0;
  dy = y2 - y_0;
  xbig = $wnd.Math.abs(dx) > $wnd.Math.abs(dy);
  slope = xbig ? dy / dx : dx / dy;
  context.m_jso.moveTo(x_0, y_0);
  distRemaining = $wnd.Math.sqrt(dx * dx + dy * dy) + plus;
  dashIndex = 0;
  while (distRemaining >= 0.1) {
    dashLength = $wnd.Math.min(distRemaining, da[dashIndex % dashCount]);
    step = $wnd.Math.sqrt((dashLength * dashLength) / (1 + slope * slope));
    if (xbig) {
      dx < 0 && (step = -step);
      x_0 += step;
      y_0 += slope * step;
    } else {
      dy < 0 && (step = -step);
      x_0 += slope * step;
      y_0 += step;
    }
    dashIndex % 2 == 0 ? context.m_jso.lineTo(x_0, y_0) : context.m_jso.moveTo(x_0, y_0);
    distRemaining -= dashLength;
    ++dashIndex;
  }
}

function $parse() {
  throw toJs(new UnsupportedOperationException());
}

function Line(p1, p2) {
  $clinit_Node();
  AbstractOffsetMultiPointShape.call(this, ($clinit_ShapeType(), LINE));
  $setPoint2DArray(
    this,
    fromArrayOfPoint2D_0(
      stampJavaTypeInfo(
        getClassLiteralForArray(Lcom_ait_lienzo_client_core_types_Point2D_2_classLit, 1),
        $intern_4,
        9,
        0,
        [p1, p2]
      )
    )
  );
}

defineClass(406, 198, $intern_12, Line);
_.refresh_2 = function refresh_5() {
  return this;
};
_.fill = function fill_1(context, alpha_0) {
  return false;
};
_.fill_0 = function (context, alpha_0) {
  return this.fill(context, alpha_0);
};
_.getBoundingBox = function getBoundingBox_7() {
  return fromPoint2DArray(this.points);
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_7() {
  return asAttributes(
    new Collections$UnmodifiableRandomAccessList(
      new Arrays$ArrayList(
        stampJavaTypeInfo(
          getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1),
          $intern_4,
          6,
          0,
          [($clinit_Attribute(), POINTS)]
        )
      )
    ),
    stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
      HEAD_OFFSET,
      TAIL_OFFSET,
    ])
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getHeadOffsetPoint = function getHeadOffsetPoint() {
  var list;
  list = this.points;
  if (null != list && list.length == 2) {
    return list[1];
  }
  return null;
};
_.getPoint2DArray = function getPoint2DArray() {
  return this.points;
};
_.getTailOffsetPoint = function getTailOffsetPoint() {
  var list;
  list = this.points;
  if (null != list && list.length == 2) {
    return list[0];
  }
  return null;
};
_.parse = function parse_0() {
  return $parse();
};
_.prepare = function prepare_7(context, alpha_0) {
  var dash, data_0, list, p0, p00, p1, p10;
  list = this.points;
  if (null != list && list.length == 2) {
    if (this.dashArray) {
      if (!$isNativeLineDashSupported(($clinit_LienzoCore(), $clinit_LienzoCore(), INSTANCE_1))) {
        dash = this.dashArray;
        if (dash) {
          data_0 = $getNormalizedArray(dash);
          if (data_0.length > 0) {
            if ($setStrokeParams(this, context, alpha_0, false)) {
              p00 = list[0];
              p10 = list[1];
              context.m_jso.beginPath();
              $drawDashedLine(context, p00.x, p00.y, p10.x, p10.y, data_0, this.strokeWidth / 2);
              context.m_jso.restore();
            }
            return true;
          }
        }
      }
    }
    context.m_jso.beginPath();
    p0 = list[0];
    $moveTo(context, p0.x, p0.y);
    p1 = list[1];
    $lineTo(context, p1.x, p1.y);
    return true;
  }
  return false;
};
_.refresh = function refresh_6() {
  return this;
};
var Lcom_ait_lienzo_client_core_shape_Line_2_classLit = createForClass("com.ait.lienzo.client.core.shape", "Line", 406);
function $getOrIncrementList(this$static) {
  var list, path, path0;
  this$static.m_box = null;
  list = this$static.m_points;
  if (list.length < 1) {
    path0 = new PathPartList();
    list.push(path0);
    return path0;
  }
  path = $get_4(list, list.length - 1);
  if (path.m_jso.length < 1) {
    return path;
  }
  if (path.m_fin) {
    path = new PathPartList();
    list.push(path);
  }
  return path;
}

function MultiPath() {
  MultiPath_0.call(
    this,
    stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 6, [])
  );
}

function MultiPath_0(paths) {
  $clinit_Node();
  var list, path, path$array, path$index, path$max;
  AbstractMultiPathPartShape.call(this, ($clinit_ShapeType(), MULTI_PATH));
  for (path$array = paths, path$index = 0, path$max = path$array.length; path$index < path$max; ++path$index) {
    path = path$array[path$index];
    list = $getOrIncrementList(this);
    parse_1(list, path);
    $close(list);
  }
}

function clonePath(multiPath) {
  $clinit_Node();
  return $copyTo_0(multiPath, new MultiPath());
}

defineClass(146, 199, $intern_12, MultiPath, MultiPath_0);
_.A = function A_0(x0, y0, x1, y1, radius) {
  $A($getOrIncrementList(this), x0, y0, x1, y1, radius);
  return this;
};
_.C = function C(x1, y1, x2, y2, x_0, y_0) {
  $C($getOrIncrementList(this), x1, y1, x2, y2, x_0, y_0);
  return this;
};
_.H = function H(x_0) {
  $H_0($getOrIncrementList(this), x_0);
  return this;
};
_.L = function L(x_0, y_0) {
  $L($getOrIncrementList(this), x_0, y_0);
  return this;
};
_.M = function M(x_0, y_0) {
  $M($getOrIncrementList(this), x_0, y_0);
  return this;
};
_.Q = function Q(cx, cy, x_0, y_0) {
  $Q($getOrIncrementList(this), cx, cy, x_0, y_0);
  return this;
};
_.V = function V(y_0) {
  $V($getOrIncrementList(this), y_0);
  return this;
};
_.Z = function Z() {
  return $Z($getOrIncrementList(this)), this;
};
_.circle = function circle_0(radius) {
  $circle($getOrIncrementList(this), radius);
  return this;
};
_.close = function close_0() {
  var list;
  list = this.m_points;
  list.length > 0 && $close($get_4(list, list.length - 1));
  return this;
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_8() {
  return new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(
        getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1),
        $intern_4,
        6,
        0,
        []
      )
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.rect = function rect(x_0, y_0, w, h) {
  $rect($getOrIncrementList(this), x_0, y_0, w, h);
  return this;
};
_.refresh = function refresh_7() {
  return this;
};
_.z = function z_1() {
  return $Z($getOrIncrementList(this)), this;
};
var Lcom_ait_lienzo_client_core_shape_MultiPath_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "MultiPath",
  146
);
function Node$0methodref$getPossibleNodeTransform$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(113, 1, {}, Node$0methodref$getPossibleNodeTransform$Type);
var Lcom_ait_lienzo_client_core_shape_Node$0methodref$getPossibleNodeTransform$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Node/0methodref$getPossibleNodeTransform$Type",
  113
);
function $doAnimating(this$static) {
  this$static.anim = this$static.anim + 1;
}

function $setHandlerManager(this$static, hand) {
  this$static.hand = hand;
}

function $unAnimating(this$static) {
  this$static.anim > 0 && (this$static.anim = this$static.anim - 1);
}

function $uuid(this$static) {
  null == this$static.uuid && (this$static.uuid = uuid_0());
  return this$static.uuid;
}

function Node$OptionalNodeFields() {}

function make_2() {
  return new Node$OptionalNodeFields();
}

defineClass(135, 1, {}, Node$OptionalNodeFields);
_.anim = 0;
var Lcom_ait_lienzo_client_core_shape_Node$OptionalNodeFields_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Node/OptionalNodeFields",
  135
);
function $parse_0(this$static) {
  var corner, i, list, plist, point, size_0;
  list = this$static.points;
  plist = this$static.m_list;
  if (null != list) {
    list = $noAdjacentPoints(list);
    size_0 = list.length;
    if (size_0 > 1) {
      point = list[0];
      $M(plist, point.x, point.y);
      corner = this$static.cornerRadius;
      if (corner > 0) {
        list.push(point);
        drawArcJoinedLines_0(plist, list, corner);
      } else {
        for (i = 1; i < size_0; i++) {
          $L_0(plist, list[i]);
        }
        $push(plist, new PathPartEntryJSO(6, initUnidimensionalArray(D_classLit, $intern_11, 12, 0, 15, 1)));
        $close(plist);
      }
      return true;
    }
  }
  return false;
}

function Polygon(points) {
  $clinit_Node();
  AbstractMultiPointShape.call(this, ($clinit_ShapeType(), POLYGON));
  this.points = points;
  $clear_0(this.m_list);
}

defineClass(408, 76, $intern_12, Polygon);
_.getBoundingBox = function getBoundingBox_8() {
  return fromPoint2DArray(this.points);
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_9() {
  return new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
        ($clinit_Attribute(), POINTS),
        CORNER_RADIUS,
      ])
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getCornerRadius = function getCornerRadius() {
  return this.cornerRadius;
};
_.getPoint2DArray = function getPoint2DArray_0() {
  return this.points;
};
_.prepare = function prepare_8(context, alpha_0) {
  var plist;
  plist = this.m_list;
  if (plist.m_jso.length < 1) {
    if (!$parse_0(this)) {
      return false;
    }
  }
  if (plist.m_jso.length < 1) {
    return false;
  }
  $path(context, plist);
  return true;
};
_.setCornerRadius = function setCornerRadius(radius) {
  this.cornerRadius = radius;
  return $clear_0(this.m_list), this;
};
_.setPoint2DArray = function setPoint2DArray(points) {
  return (this.points = points), $clear_0(this.m_list), this;
};
_.cornerRadius = 0;
var Lcom_ait_lienzo_client_core_shape_Polygon_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Polygon",
  408
);
function QuadraticCurve(sp, cp, ep) {
  $clinit_Node();
  AbstractMultiPointShape.call(this, ($clinit_ShapeType(), QUADRATIC_CURVE));
  $setControlPoints(
    this,
    fromArrayOfPoint2D_0(
      stampJavaTypeInfo(
        getClassLiteralForArray(Lcom_ait_lienzo_client_core_types_Point2D_2_classLit, 1),
        $intern_4,
        9,
        0,
        [sp, cp, ep]
      )
    )
  );
}

defineClass(409, 76, $intern_12, QuadraticCurve);
_.getBoundingBox = function getBoundingBox_9() {
  var bbox, points;
  bbox = ((points = this.points), getBoundingBoxForQuadraticCurve(points));
  return bbox;
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_10() {
  return new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
        ($clinit_Attribute(), CONTROL_POINTS),
      ])
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getPoint2DArray = function getPoint2DArray_1() {
  return this.points;
};
_.isControlPointShape = function isControlPointShape_0() {
  return true;
};
_.prepare = function prepare_9(context, alpha_0) {
  var p0, p1, p2, points;
  points = this.points;
  if (points != null && points.length == 3) {
    context.m_jso.beginPath();
    p0 = points[0];
    p1 = points[1];
    p2 = points[2];
    $moveTo(context, p0.x, p0.y);
    $quadraticCurveTo(context, p1.x, p1.y, p2.x, p2.y);
    return true;
  }
  return false;
};
_.setPoint2DArray = function setPoint2DArray_0(points) {
  return (this.points = points), $clear_0(this.m_list), this;
};
var Lcom_ait_lienzo_client_core_shape_QuadraticCurve_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "QuadraticCurve",
  409
);
function $setHeight_0(this$static, height) {
  this$static.height = height;
  return this$static;
}

function Rectangle(width_0, height) {
  $clinit_Node();
  Shape.call(this, ($clinit_ShapeType(), RECTANGLE));
  $setHeight_0(((this.width = width_0), this), height);
}

defineClass(147, 17, { 22: 1, 21: 1, 26: 1, 18: 1, 147: 1, 17: 1, 27: 1 }, Rectangle);
_.getBoundingBox = function getBoundingBox_10() {
  return fromDoubles(0, 0, this.width, this.height);
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_11() {
  return new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
        ($clinit_Attribute(), WIDTH),
        HEIGHT,
        CORNER_RADIUS,
      ])
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getCornerRadius = function getCornerRadius_0() {
  return this.cornerRadius;
};
_.getHeight = function getHeight_0() {
  return this.height;
};
_.getWidth = function getWidth_0() {
  return this.width;
};
_.prepare = function prepare_10(context, alpha_0) {
  var h, r, w;
  w = this.width;
  h = this.height;
  r = this.cornerRadius;
  if (w > 0 && h > 0) {
    context.m_jso.beginPath();
    if (r > 0 && r < w / 2 && r < h / 2) {
      context.m_jso.moveTo(r, 0);
      context.m_jso.lineTo(w - r, 0);
      context.m_jso.arc(w - r, r, r, $intern_18, 0, false);
      context.m_jso.lineTo(w, h - r);
      context.m_jso.arc(w - r, h - r, r, 0, $intern_19, false);
      context.m_jso.lineTo(r, h);
      context.m_jso.arc(r, h - r, r, $intern_19, $intern_13, false);
      context.m_jso.lineTo(0, r);
      context.m_jso.arc(r, r, r, $intern_13, $intern_18, false);
    } else {
      context.m_jso.rect(0, 0, w, h);
    }
    context.m_jso.closePath();
    return true;
  }
  return false;
};
_.setCornerRadius = function setCornerRadius_0(radius) {
  this.cornerRadius = radius;
  return this;
};
_.setHeight = function setHeight_0(height) {
  return $setHeight_0(this, height);
};
_.setWidth = function setWidth_0(width_0) {
  return (this.width = width_0), this;
};
_.cornerRadius = 0;
_.height = 0;
_.width = 0;
var Lcom_ait_lienzo_client_core_shape_Rectangle_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Rectangle",
  147
);
function $clinit_SVGPath() {
  $clinit_SVGPath = emptyMethod;
  $clinit_Node();
  COMMANDS = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 6, [
    "m",
    "M",
    "l",
    "L",
    "v",
    "V",
    "h",
    "H",
    "z",
    "Z",
    "c",
    "C",
    "q",
    "Q",
    "t",
    "T",
    "s",
    "S",
    "a",
    "A",
  ]);
}

function $parse_1(this$static, path) {
  parse_1(this$static.m_list, path);
}

function SVGPath(path) {
  $clinit_SVGPath();
  Shape.call(this, ($clinit_ShapeType(), SVG_PATH));
  this.m_list = new PathPartList();
  $equals_1(path, this.m_path) || $parse_1(this, (this.m_path = path));
}

function parse_1(partlist, path) {
  $clinit_SVGPath();
  var beg,
    chr,
    cmd,
    cpx,
    cpy,
    ctx,
    cty,
    d,
    dx,
    dy,
    fa,
    fs,
    i,
    idx,
    l,
    list,
    n,
    n0,
    n1,
    points,
    prev,
    ps,
    pts,
    rx,
    ry,
    size_0,
    source,
    str,
    x1,
    y1,
    z_0;
  $clear_0(partlist);
  path = $trim($replaceAll(path, "\\s+", " "));
  for (n0 = 0; n0 < COMMANDS.length; n0++) {
    path = $replaceAll(path, COMMANDS[n0] + " ", COMMANDS[n0]);
  }
  path = $replaceAll(path, " ", ",");
  for (n1 = 0; n1 < COMMANDS.length; n1++) {
    path = $replaceAll(path, COMMANDS[n1], "#" + COMMANDS[n1]);
  }
  list = $split(path, "#");
  cpx = 0;
  cpy = 0;
  for (n = 1, l = list.length; n < l; n++) {
    str = list[n];
    chr = (checkCriticalStringElementIndex(0, str.length), str.charCodeAt(0));
    str = $replaceAll($replaceAll($replaceAll(str.substr(1), ",-", "-"), "-", ",-"), "e,-", "e-");
    pts = $split(str, ",");
    beg = 0;
    pts.length > 0 && pts[0].length == 0 && (beg = 1);
    source = new $wnd.Array();
    for (i = beg, z_0 = pts.length; i < z_0; i++) {
      source.push($doubleValue(__parseAndValidateDouble(pts[i])));
    }
    while (source.length > 0) {
      cmd = 0;
      points = new $wnd.Array();
      switch (chr) {
        case 108:
          cpx += $doubleValue(source.shift());
          cpy += $doubleValue(source.shift());
          points.push(cpx);
          points.push(cpy);
          cmd = 1;
          break;
        case 76:
          cpx = $doubleValue(source.shift());
          cpy = $doubleValue(source.shift());
          points.push(cpx);
          points.push(cpy);
          cmd = 1;
          break;
        case 109:
          dx = $doubleValue(source.shift());
          dy = $doubleValue(source.shift());
          cpx += dx;
          cpy += dy;
          size_0 = partlist.m_jso.length;
          if (size_0 > 2 && partlist.m_jso[size_0 - 1].command == 6) {
            for (idx = size_0 - 2; idx >= 0; idx--) {
              prev = partlist.m_jso[idx];
              if (prev.command == 2) {
                cpx = prev.points[0] + dx;
                cpy = prev.points[1] + dy;
                break;
              }
            }
          }

          points.push(cpx);
          points.push(cpy);
          chr = 108;
          cmd = 2;
          break;
        case 77:
          cpx = $doubleValue(source.shift());
          cpy = $doubleValue(source.shift());
          points.push(cpx);
          points.push(cpy);
          chr = 76;
          cmd = 2;
          break;
        case 104:
          cpx += $doubleValue(source.shift());
          points.push(cpx);
          points.push(cpy);
          cmd = 1;
          break;
        case 72:
          cpx = $doubleValue(source.shift());
          points.push(cpx);
          points.push(cpy);
          cmd = 1;
          break;
        case 118:
          cpy += $doubleValue(source.shift());
          points.push(cpx);
          points.push(cpy);
          cmd = 1;
          break;
        case 86:
          cpy = $doubleValue(source.shift());
          points.push(cpx);
          points.push(cpy);
          cmd = 1;
          break;
        case 67:
          points.push(source.shift());
          points.push(source.shift());
          points.push(source.shift());
          points.push(source.shift());
          cpx = $doubleValue(source.shift());
          cpy = $doubleValue(source.shift());
          points.push(cpx);
          points.push(cpy);
          cmd = 3;
          break;
        case 99:
          points.push(cpx + $doubleValue(source.shift()));
          points.push(cpy + $doubleValue(source.shift()));
          points.push(cpx + $doubleValue(source.shift()));
          points.push(cpy + $doubleValue(source.shift()));
          cpx += $doubleValue(source.shift());
          cpy += $doubleValue(source.shift());
          points.push(cpx);
          points.push(cpy);
          cmd = 3;
          break;
        case 83:
          ctx = cpx;
          cty = cpy;
          prev = $get_0(partlist, partlist.m_jso.length - 1);
          if (prev.command == 3) {
            ctx = cpx + (cpx - prev.points[2]);
            cty = cpy + (cpy - prev.points[3]);
          }

          points.push(ctx);
          points.push(cty);
          points.push(source.shift());
          points.push(source.shift());
          cpx = $doubleValue(source.shift());
          cpy = $doubleValue(source.shift());
          points.push(cpx);
          points.push(cpy);
          cmd = 3;
          break;
        case 115:
          ctx = cpx;
          cty = cpy;
          prev = $get_0(partlist, partlist.m_jso.length - 1);
          if (prev.command == 3) {
            ctx = cpx + (cpx - prev.points[2]);
            cty = cpy + (cpy - prev.points[3]);
          }

          points.push(ctx);
          points.push(cty);
          points.push(cpx + $doubleValue(source.shift()));
          points.push(cpy + $doubleValue(source.shift()));
          cpx += $doubleValue(source.shift());
          cpy += $doubleValue(source.shift());
          points.push(cpx);
          points.push(cpy);
          cmd = 3;
          break;
        case 81:
          points.push(source.shift());
          points.push(source.shift());
          cpx = $doubleValue(source.shift());
          cpy = $doubleValue(source.shift());
          points.push(cpx);
          points.push(cpy);
          cmd = 4;
          break;
        case 113:
          points.push(cpx + $doubleValue(source.shift()));
          points.push(cpy + $doubleValue(source.shift()));
          cpx += $doubleValue(source.shift());
          cpy += $doubleValue(source.shift());
          points.push(cpx);
          points.push(cpy);
          cmd = 4;
          break;
        case 84:
          ctx = cpx;
          cty = cpy;
          prev = $get_0(partlist, partlist.m_jso.length - 1);
          if (prev.command == 4) {
            ctx = cpx + (cpx - prev.points[0]);
            cty = cpy + (cpy - prev.points[1]);
          }

          cpx = $doubleValue(source.shift());
          cpy = $doubleValue(source.shift());
          points.push(ctx);
          points.push(cty);
          points.push(cpx);
          points.push(cpy);
          cmd = 4;
          break;
        case 116:
          ctx = cpx;
          cty = cpy;
          prev = $get_0(partlist, partlist.m_jso.length - 1);
          if (prev.command == 4) {
            ctx = cpx + (cpx - prev.points[0]);
            cty = cpy + (cpy - prev.points[1]);
          }

          cpx += $doubleValue(source.shift());
          cpy += $doubleValue(source.shift());
          points.push(ctx);
          points.push(cty);
          points.push(cpx);
          points.push(cpy);
          cmd = 4;
          break;
        case 65: {
          rx = $doubleValue(source.shift());
          ry = $doubleValue(source.shift());
          ps = $doubleValue(source.shift());
          fa = $doubleValue(source.shift());
          fs = $doubleValue(source.shift());
          x1 = cpx;
          y1 = cpy;
          cpx = $doubleValue(source.shift());
          cpy = $doubleValue(source.shift());
          convertEndpointToCenterParameterization(points, x1, y1, cpx, cpy, fa, fs, rx, ry, ps);
          points.push(cpx);
          points.push(cpy);
          cmd = 5;
          break;
        }

        case 97: {
          rx = $doubleValue(source.shift());
          ry = $doubleValue(source.shift());
          ps = $doubleValue(source.shift());
          fa = $doubleValue(source.shift());
          fs = $doubleValue(source.shift());
          x1 = cpx;
          y1 = cpy;
          cpx += $doubleValue(source.shift());
          cpy += $doubleValue(source.shift());
          convertEndpointToCenterParameterization(points, x1, y1, cpx, cpy, fa, fs, rx, ry, ps);
          points.push(cpx);
          points.push(cpy);
          cmd = 5;
          break;
        }
      }
      cmd != 0 && $push(partlist, new PathPartEntryJSO(cmd, ((d = $wnd.Array.from(points)), d)));
    }
    (chr == 122 || chr == 90) &&
      ($push(partlist, new PathPartEntryJSO(6, initUnidimensionalArray(D_classLit, $intern_11, 12, 0, 15, 1))),
      $close(partlist));
  }
}

defineClass(410, 17, $intern_12, SVGPath);
_.drawWithoutTransforms = function drawWithoutTransforms_2(context, alpha_0, bounds) {
  var fill;
  if ($getLength_0(this.m_list.m_jso) < 1) {
    return;
  }
  alpha_0 = alpha_0 * this.alpha;
  if (alpha_0 <= 0) {
    return;
  }
  if (context.isSelection()) {
    if ($dofillBoundsForSelection(this, context, alpha_0)) {
      return;
    }
  } else {
    this.m_opts.apsh = false;
  }
  fill = false;
  $path(context, this.m_list) && (fill = $fill(this, context, alpha_0));
  $stroke(this, context, alpha_0, fill);
};
_.getBoundingBox = function getBoundingBox_11() {
  return $getBoundingBox_2(this.m_list);
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_12() {
  return (
    $clinit_Node(),
    new Collections$UnmodifiableRandomAccessList(
      new Arrays$ArrayList(
        stampJavaTypeInfo(
          getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1),
          $intern_4,
          6,
          0,
          [($clinit_Attribute(), PATH)]
        )
      )
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getPath = function getPath() {
  return this.m_path;
};
_.prepare = function prepare_11(context, alpha_0) {
  if ($getLength_0(this.m_list.m_jso) < 1) {
    return false;
  }
  return true;
};
_.setPath = function setPath(path) {
  return $equals_1(path, this.m_path) || $parse_1(this, (this.m_path = path)), this;
};
var COMMANDS;
var Lcom_ait_lienzo_client_core_shape_SVGPath_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "SVGPath",
  410
);
function $add_1(this$static, layer) {
  if (($clinit_LienzoCore(), IS_CANVAS_SUPPORTED)) {
    $removeFromParent(layer);
    $setPixelSize(layer, this$static.m_wide, this$static.m_high);
    this$static.m_element.appendChild($getElement(layer));
    $add(this$static, layer);
  }
  return this$static;
}

function $adopt(this$static, owns) {
  if (!this$static.m_owns || this$static.m_owns == owns) {
    this$static.m_owns = owns;
    return true;
  }
  return false;
}

function $batch_0(this$static) {
  var i, layer, layers, size_0;
  layers = (!this$static.m_stor && (this$static.m_stor = new SceneFastArrayStorageEngine()), this$static.m_stor.m_list);
  size_0 = layers.length;
  for (i = 0; i < size_0; i++) {
    layer = $get_4(layers, i);
    !!layer && $schedule(($clinit_LayerRedrawManager(), $clinit_LayerRedrawManager(), INSTANCE_0), layer);
  }
  return this$static;
}

function $draw_0(this$static) {
  var i, layer, layers, size_0;
  layers = (!this$static.m_stor && (this$static.m_stor = new SceneFastArrayStorageEngine()), this$static.m_stor.m_list);
  size_0 = layers.length;
  for (i = 0; i < size_0; i++) {
    layer = $get_4(layers, i);
    !!layer && layer.draw_1();
  }
  return this$static;
}

function $findShapeAtPoint_0(this$static, x_0, y_0) {
  var i, layer, layers, shape_0, size_0;
  if (this$static.visible) {
    layers =
      (!this$static.m_stor && (this$static.m_stor = new SceneFastArrayStorageEngine()), this$static.m_stor.m_list);
    size_0 = layers.length;
    for (i = size_0 - 1; i >= 0; i--) {
      layer = $get_4(layers, i);
      if (layer) {
        shape_0 = $findShapeAtPoint(layer, x_0, y_0);
        if (shape_0) {
          return shape_0;
        }
      }
    }
  }
  return null;
}

function $fireEvent_0(this$static, event_0) {
  var i, layer, layers, size_0;
  layers = (!this$static.m_stor && (this$static.m_stor = new SceneFastArrayStorageEngine()), this$static.m_stor.m_list);
  size_0 = layers.length;
  for (i = size_0 - 1; i >= 0; i--) {
    layer = $get_4(layers, i);
    !!layer && $isEventHandled(layer, event_0.getAssociatedType()) && $fireEvent_2(layer.m_opts_0.hand, event_0);
  }
}

function $remove_0(this$static, layer) {
  if (($clinit_LienzoCore(), IS_CANVAS_SUPPORTED)) {
    (!this$static.m_stor && (this$static.m_stor = new SceneFastArrayStorageEngine()),
    this$static.m_stor.m_list).indexOf(layer) > -1 && this$static.m_element.removeChild($getElement(layer));
    $remove(this$static, layer);
  }
  return this$static;
}

function $setPixelSize_0(this$static, wide, high) {
  var i, layer, layers, size_0;
  this$static.m_wide = wide;
  this$static.m_high = high;
  this$static.m_element.style.width = wide + ($clinit_Style$Unit(), "px");
  this$static.m_element.style.height = high + "px";
  layers = (!this$static.m_stor && (this$static.m_stor = new SceneFastArrayStorageEngine()), this$static.m_stor.m_list);
  size_0 = layers.length;
  for (i = 0; i < size_0; i++) {
    layer = $get_4(layers, i);
    !!layer && $setPixelSize(layer, wide, high);
  }
  return this$static;
}

function Scene() {
  var $tmp;
  ContainerNode.call(this, ($clinit_NodeType(), SCENE), new SceneFastArrayStorageEngine());
  this.m_element = ($clinit_DomGlobal(), document_0).createElement("div");
  this.m_element.id = "scene_div" + toString_33((($tmp = idCounter_0), (idCounter_0 = add_6(idCounter_0, 1)), $tmp));
}

defineClass(94, 43, { 22: 1, 43: 1, 66: 1, 21: 1, 18: 1, 94: 1 }, Scene);
_.batch = function batch_2() {
  return $batch_0(this);
};
_.asScene = function asScene_0() {
  return this;
};
_.fireEvent = function fireEvent_0(event_0) {
  $fireEvent_0(this, event_0);
};
_.getDefaultStorageEngine_0 = function getDefaultStorageEngine_1() {
  return new SceneFastArrayStorageEngine();
};
_.removeFromParent = function removeFromParent_2() {
  var parent_0, view;
  parent_0 = this.m_parent;
  if (parent_0) {
    view = parent_0.asViewport();
    if (view) {
      return true;
    }
  }
  return false;
};
_.m_high = 0;
_.m_owns = null;
_.m_wide = 0;
var idCounter_0 = 0;
var Lcom_ait_lienzo_client_core_shape_Scene_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Scene",
  94
);
function $setDragging_0(this$static, drag) {
  this$static.drag = drag;
}

function Shape$OptionalShapeFields() {}

function make_3() {
  return new Shape$OptionalShapeFields();
}

defineClass(132, 1, {}, Shape$OptionalShapeFields);
_.apsh = false;
_.drag = false;
var Lcom_ait_lienzo_client_core_shape_Shape$OptionalShapeFields_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Shape/OptionalShapeFields",
  132
);
function $setCounterClockwise_1(this$static, counterClockwise) {
  this$static.counterClockwise = counterClockwise;
  return this$static;
}

function $setEndAngle_1(this$static, angle) {
  this$static.endAngle = angle;
  return this$static;
}

function $setStartAngle_1(this$static, angle) {
  this$static.startAngle = angle;
  return this$static;
}

function Slice(radius, startAngle, endAngle, counterClockwise) {
  $clinit_Node();
  Shape.call(this, ($clinit_ShapeType(), SLICE));
  $setCounterClockwise_1(
    $setEndAngle_1($setStartAngle_1(((this.radius = radius), this), startAngle), endAngle),
    counterClockwise
  );
}

defineClass(411, 17, $intern_12, Slice);
_.getBoundingBox = function getBoundingBox_12() {
  var radius;
  radius = this.radius;
  return fromDoubles(0 - radius, 0 - radius, radius, radius);
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_13() {
  return new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
        ($clinit_Attribute(), RADIUS),
        START_ANGLE,
        END_ANGLE,
        COUNTER_CLOCKWISE,
      ])
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getEndAngle = function getEndAngle_1() {
  return this.endAngle;
};
_.getRadius = function getRadius_1() {
  return this.radius;
};
_.getStartAngle = function getStartAngle_1() {
  return this.startAngle;
};
_.isCounterClockwise = function isCounterClockwise_1() {
  return this.counterClockwise;
};
_.prepare = function prepare_12(context, alpha_0) {
  var beg, end, pacman, r;
  beg = this.startAngle;
  end = this.endAngle;
  if (beg == end) {
    return false;
  }
  r = this.radius;
  if (r > 0) {
    pacman = true;
    $wnd.Math.abs(beg - end) % $intern_14 == 0 && (pacman = false);
    context.m_jso.beginPath();
    $arc(context, r, beg, end, this.counterClockwise);
    pacman && context.m_jso.lineTo(0, 0);
    context.m_jso.closePath();
    return true;
  }
  return false;
};
_.setCounterClockwise = function setCounterClockwise_1(counterClockwise) {
  return $setCounterClockwise_1(this, counterClockwise);
};
_.setEndAngle = function setEndAngle_1(angle) {
  return $setEndAngle_1(this, angle);
};
_.setRadius = function setRadius_1(radius) {
  return (this.radius = radius), this;
};
_.setStartAngle = function setStartAngle_1(angle) {
  return $setStartAngle_1(this, angle);
};
_.counterClockwise = false;
_.endAngle = 0;
_.radius = 0;
_.startAngle = 0;
var Lcom_ait_lienzo_client_core_shape_Slice_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Slice",
  411
);
function $parse_2(this$static) {
  var a,
    angleFactor,
    apt,
    ax,
    ay,
    b,
    begindex,
    bpt,
    bx,
    by,
    c,
    cangl,
    carray,
    cdist,
    closed_0,
    cp1,
    cp2,
    cpt,
    curveFactor,
    endindex,
    i,
    i0,
    line,
    lineFlatten,
    p0,
    p1,
    p2,
    plist,
    point,
    points,
    rx,
    ry,
    size_0;
  plist = this$static.m_list;
  points = getPathPoints(this$static.points);
  size_0 = points.length;
  if (size_0 < 3) {
    size_0 > 1 && $L($M(plist, points[0].x_0, points[0].y_0), points[1].x_0, points[1].y_0);
    return;
  }
  curveFactor = this$static.curveFactor;
  angleFactor = this$static.angleFactor;
  closed_0 = false;
  begindex = 1;
  endindex = size_0 - 1;
  if (points[0].x_0 == points[size_0 - 1].x_0 && points[0].y_0 == points[size_0 - 1].y_0) {
    begindex = 0;
    endindex = size_0;
    closed_0 = true;
  } else {
    closed_0 = false;
  }
  carray = new $wnd.Array();
  for (i0 = begindex; i0 < endindex; i0++) {
    p0 = i0 - 1 < 0 ? points[size_0 - 2] : points[i0 - 1];
    p1 = points[i0];
    p2 = i0 + 1 == size_0 ? points[1] : points[i0 + 1];
    a = $wnd.Math.max(distance(p0, p1), 0.001);
    b = $wnd.Math.max(distance(p1, p2), 0.001);
    apt = new Spline$PathPoint(p0.x_0 - p1.x_0, p0.y_0 - p1.y_0);
    bpt = new Spline$PathPoint(p1.x_0, p1.y_0);
    cpt = new Spline$PathPoint(p2.x_0 - p1.x_0, p2.y_0 - p1.y_0);
    a > b ? $normalize(apt, b) : b > a && $normalize(cpt, a);
    $offset(apt, p1.x_0, p1.y_0);
    $offset(cpt, p1.x_0, p1.y_0);
    ax = bpt.x_0 - apt.x_0;
    ay = bpt.y_0 - apt.y_0;
    bx = bpt.x_0 - cpt.x_0;
    by = bpt.y_0 - cpt.y_0;
    rx = ax + bx;
    ry = ay + by;
    if (rx == 0 && ry == 0) {
      rx = -bx;
      ry = by;
    }
    if (ay == 0 && by == 0) {
      rx = 0;
      ry = 1;
    } else if (ax == 0 && bx == 0) {
      rx = 1;
      ry = 0;
    }
    cdist = $wnd.Math.min(a, b) * curveFactor;
    if (angleFactor != 0) {
      c = $wnd.Math.max(distance(p0, p2), 0.001);
      cdist *=
        1 -
        angleFactor +
        angleFactor *
          ($wnd.Math.acos($wnd.Math.min($wnd.Math.max((b * b + a * a - c * c) / (2 * b * a), -1), 1)) / $intern_13);
    }
    cangl = $wnd.Math.atan2(ry, rx) + $intern_19;
    cp2 = new Spline$PathPoint(cdist * $wnd.Math.cos(cangl), cdist * $wnd.Math.sin(cangl));
    cp1 = new Spline$PathPoint(cdist * $wnd.Math.cos(cangl + $intern_13), cdist * $wnd.Math.sin(cangl + $intern_13));
    $offset(cp1, p1.x_0, p1.y_0);
    $offset(cp2, p1.x_0, p1.y_0);
    distance(cp2, p2) > distance(cp1, p2)
      ? $set_0(
          carray,
          i0,
          stampJavaTypeInfo(
            getClassLiteralForArray(Lcom_ait_lienzo_client_core_shape_Spline$PathPoint_2_classLit, 1),
            $intern_20,
            45,
            0,
            [cp2, cp1]
          )
        )
      : $set_0(
          carray,
          i0,
          stampJavaTypeInfo(
            getClassLiteralForArray(Lcom_ait_lienzo_client_core_shape_Spline$PathPoint_2_classLit, 1),
            $intern_20,
            45,
            0,
            [cp1, cp2]
          )
        );
  }
  lineFlatten = this$static.lineFlatten;
  $M(plist, points[0].x_0, points[0].y_0);
  if (begindex == 1) {
    point = $get_4(carray, 1)[0];
    $Q(plist, point.x_0, point.y_0, points[1].x_0, points[1].y_0);
  }
  for (i = begindex; i < endindex - 1; i++) {
    line =
      lineFlatten &&
      ((i > 0 &&
        $wnd.Math.atan2(points[i].y_0 - points[i - 1].y_0, points[i].x_0 - points[i - 1].x_0) ==
          $wnd.Math.atan2(points[i + 1].y_0 - points[i].y_0, points[i + 1].x_0 - points[i].x_0)) ||
        (i < size_0 - 2 &&
          $wnd.Math.atan2(points[i + 2].y_0 - points[i + 1].y_0, points[i + 2].x_0 - points[i + 1].x_0) ==
            $wnd.Math.atan2(points[i + 1].y_0 - points[i].y_0, points[i + 1].x_0 - points[i].x_0)));
    if (line) {
      $L(plist, points[i + 1].x_0, points[i + 1].y_0);
    } else {
      p1 = $get_4(carray, i)[1];
      p2 = $get_4(carray, i + 1)[0];
      $C(plist, p1.x_0, p1.y_0, p2.x_0, p2.y_0, points[i + 1].x_0, points[i + 1].y_0);
    }
  }
  if (endindex == size_0 - 1) {
    point = $get_4(carray, i)[1];
    $Q(plist, point.x_0, point.y_0, points[i + 1].x_0, points[i + 1].y_0);
  }
  closed_0 &&
    ($push(plist, new PathPartEntryJSO(6, initUnidimensionalArray(D_classLit, $intern_11, 12, 0, 15, 1))),
    $close(plist));
}

function Spline(points) {
  $clinit_Node();
  AbstractMultiPointShape.call(this, ($clinit_ShapeType(), SPLINE));
  this.points = points;
  $clear_0(this.m_list);
}

function getPathPoints(array) {
  var i, point, points, size_0, unique;
  if (null == array || array.length < 2) {
    return initUnidimensionalArray(
      Lcom_ait_lienzo_client_core_shape_Spline$PathPoint_2_classLit,
      $intern_20,
      45,
      0,
      0,
      1
    );
  }
  unique = $noAdjacentPoints(array);
  size_0 = unique.length;
  if (size_0 < 2) {
    return initUnidimensionalArray(
      Lcom_ait_lienzo_client_core_shape_Spline$PathPoint_2_classLit,
      $intern_20,
      45,
      0,
      0,
      1
    );
  }
  points = initUnidimensionalArray(
    Lcom_ait_lienzo_client_core_shape_Spline$PathPoint_2_classLit,
    $intern_20,
    45,
    size_0,
    0,
    1
  );
  for (i = 0; i < size_0; i++) {
    point = unique[i];
    points[i] = new Spline$PathPoint(point.x, point.y);
  }
  return points;
}

defineClass(412, 76, $intern_12, Spline);
_.fill_0 = function fill_2(context, alpha_0) {
  if (this.m_fill) {
    return $fill(this, context, alpha_0);
  }
  return false;
};
_.getAngleFactor = function getAngleFactor() {
  return this.angleFactor;
};
_.getBoundingBox = function getBoundingBox_13() {
  var plist;
  plist = this.m_list;
  $getLength_0(plist.m_jso) < 1 && $parse_2(this);
  return $getBoundingBox_2(plist);
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_14() {
  return new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
        ($clinit_Attribute(), CONTROL_POINTS),
        CURVE_FACTOR,
        ANGLE_FACTOR,
        LINE_FLATTEN,
      ])
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getCurveFactor = function getCurveFactor() {
  return this.curveFactor;
};
_.getLineFlatten = function getLineFlatten() {
  return this.lineFlatten;
};
_.getPoint2DArray = function getPoint2DArray_2() {
  return this.points;
};
_.prepare = function prepare_13(context, alpha_0) {
  var plist;
  plist = this.m_list;
  $getLength_0(plist.m_jso) < 1 && $parse_2(this);
  if ($getLength_0(plist.m_jso) < 1) {
    return false;
  }
  this.m_fill = $path(context, plist);
  return true;
};
_.setAngleFactor = function setAngleFactor(factor) {
  this.angleFactor = factor;
  return $clear_0(this.m_list), this;
};
_.setCurveFactor = function setCurveFactor(factor) {
  this.curveFactor = factor;
  return $clear_0(this.m_list), this;
};
_.setLineFlatten = function setLineFlatten(flat) {
  this.lineFlatten = flat;
  return $clear_0(this.m_list), this;
};
_.setPoint2DArray = function setPoint2DArray_1(points) {
  return (this.points = points), $clear_0(this.m_list), this;
};
_.angleFactor = 0;
_.curveFactor = 0.5;
_.lineFlatten = false;
_.m_fill = false;
var Lcom_ait_lienzo_client_core_shape_Spline_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Spline",
  412
);
function $normalize(this$static, length_0) {
  var scale;
  if ((this$static.x_0 == 0 && this$static.y_0 == 0) || length_0 == 0) {
    return;
  }
  scale = length_0 / $wnd.Math.sqrt(this$static.x_0 * this$static.x_0 + this$static.y_0 * this$static.y_0);
  this$static.x_0 *= scale;
  this$static.y_0 *= scale;
}

function $offset(this$static, dx, dy) {
  this$static.x_0 += dx;
  this$static.y_0 += dy;
}

function Spline$PathPoint(x_0, y_0) {
  this.x_0 = x_0;
  this.y_0 = y_0;
}

function distance(a, b) {
  var dx, dy;
  dx = b.x_0 - a.x_0;
  dy = b.y_0 - a.y_0;
  return $wnd.Math.sqrt(dx * dx + dy * dy);
}

defineClass(45, 1, { 45: 1 }, Spline$PathPoint);
_.x_0 = 0;
_.y_0 = 0;
var Lcom_ait_lienzo_client_core_shape_Spline$PathPoint_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Spline/PathPoint",
  45
);
function $parse_3(this$static) {
  var corner, ir, list, n, or, radius, s2, sp, stheta;
  sp = this$static.starPoints;
  ir = this$static.innerRadius;
  or = this$static.outerRadius;
  if (sp > 4 && ir > 0 && or > 0 && or > ir) {
    $M(this$static.m_list, 0, 0 - or);
    s2 = sp * 2;
    corner = this$static.cornerRadius;
    if (corner <= 0) {
      for (n = 1; n < s2; n++) {
        stheta = (n * $intern_13) / sp;
        radius = n % 2 == 0 ? or : ir;
        $L(this$static.m_list, radius * $wnd.Math.sin(stheta), -radius * $wnd.Math.cos(stheta));
      }
      $Z(this$static.m_list);
    } else {
      list = fromArrayOfDouble(
        stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [0, 0 - or])
      );
      for (n = 1; n < s2; n++) {
        stheta = (n * $intern_13) / sp;
        radius = n % 2 == 0 ? or : ir;
        $pushXY(list, radius * $wnd.Math.sin(stheta), -radius * $wnd.Math.cos(stheta));
      }
      drawArcJoinedLines_0(this$static.m_list, (list.push(new Point2D(0, 0 - or)), list), corner);
    }
    return true;
  }
  return false;
}

function $setInnerRadius(this$static, radius) {
  this$static.innerRadius = radius;
  return this$static;
}

function $setOuterRadius_0(this$static, radius) {
  this$static.outerRadius = radius;
  return this$static;
}

function $setStarPoints(this$static, points) {
  points < 5 && (points = 5);
  this$static.starPoints = points;
  return $clear_0(this$static.m_list), this$static;
}

function Star(points, innerRadius, outerRadius) {
  $clinit_Node();
  Shape.call(this, ($clinit_ShapeType(), STAR));
  this.m_list = new PathPartList();
  $setOuterRadius_0($setInnerRadius($setStarPoints(this, points), innerRadius), outerRadius);
}

defineClass(413, 17, $intern_12, Star);
_.refresh_1 = function refresh_8() {
  return $clear_0(this.m_list), this;
};
_.getBoundingBox = function getBoundingBox_14() {
  $getLength_0(this.m_list.m_jso) < 1 && $parse_3(this);
  return $getBoundingBox_2(this.m_list);
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_15() {
  return new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
        ($clinit_Attribute(), STAR_POINTS),
        INNER_RADIUS,
        OUTER_RADIUS,
        CORNER_RADIUS,
      ])
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getCornerRadius = function getCornerRadius_1() {
  return this.cornerRadius;
};
_.getInnerRadius = function getInnerRadius_0() {
  return this.innerRadius;
};
_.getOuterRadius = function getOuterRadius_0() {
  return this.outerRadius;
};
_.getPathPartList = function getPathPartList() {
  if ($getLength_0(this.m_list.m_jso) < 1) {
    if (!$parse_3(this)) {
      return null;
    }
  }
  if ($getLength_0(this.m_list.m_jso) < 1) {
    return null;
  }
  return this.m_list;
};
_.getStarPoints = function getStarPoints() {
  return this.starPoints;
};
_.prepare = function prepare_14(context, alpha_0) {
  if ($getLength_0(this.m_list.m_jso) < 1) {
    if (!$parse_3(this)) {
      return false;
    }
  }
  if ($getLength_0(this.m_list.m_jso) < 1) {
    return false;
  }
  $path(context, this.m_list);
  return true;
};
_.refresh = function refresh_9() {
  return $clear_0(this.m_list), this;
};
_.setCornerRadius = function setCornerRadius_1(radius) {
  this.cornerRadius = radius;
  return $clear_0(this.m_list), this;
};
_.setInnerRadius = function setInnerRadius_0(radius) {
  return $setInnerRadius(this, radius);
};
_.setOuterRadius = function setOuterRadius_0(radius) {
  return $setOuterRadius_0(this, radius);
};
_.setStarPoints = function setStarPoints(points) {
  return $setStarPoints(this, points);
};
_.cornerRadius = 0;
_.innerRadius = 0;
_.outerRadius = 0;
_.starPoints = 0;
var Lcom_ait_lienzo_client_core_shape_Star_2_classLit = createForClass("com.ait.lienzo.client.core.shape", "Star", 413);
function $clinit_Text() {
  $clinit_Text = emptyMethod;
  $clinit_Node();
  GRADFILLS = ($clinit_LienzoCore(), $isSafariBroken());
}

function $drawString(this$static, context, drawCommand) {
  $drawString_0(this$static.wrapper, context, drawCommand);
}

function $fill_0(this$static, context, alpha_0) {
  var color_0, fill, filled, high, layer, mWidth, size_0, wide;
  filled = this$static.fillColor != null;
  if (filled || this$static.fillShapeForSelection) {
    alpha_0 = alpha_0 * this$static.fillAlpha;
    if (alpha_0 <= 0) {
      return false;
    }
    if (context.isSelection()) {
      color_0 = this$static.m_ckey;
      if (null == color_0) {
        return false;
      }
      context.m_jso.save();
      if (GRADFILLS) {
        size_0 = $measureWithIdentityTransform(this$static, context);
        if (null != size_0) {
          wide = size_0.width;
          mWidth = context.m_jso.measureText("M").width;
          high = mWidth - mWidth / 6;
          $drawString(this$static, context, new Text$lambda$2$Type(this$static, wide, high, color_0));
        } else {
          layer = $getLayer(this$static);
          $drawString(this$static, context, new Text$lambda$3$Type(this$static, layer, color_0));
        }
      } else {
        context.m_jso.fillStyle = color_0;
        $drawString(this$static, context, this$static.FILL);
      }
      context.m_jso.restore();
      return true;
    }
    if (!filled) {
      return false;
    }
    context.m_jso.save();
    context.setGlobalAlpha(alpha_0);
    fill = this$static.fillColor;
    if (null != fill) {
      context.m_jso.fillStyle = fill;
      $drawString(this$static, context, this$static.FILL);
      context.m_jso.restore();
      return true;
    }
    context.m_jso.restore();
  }
  return false;
}

function $getFontString(size_0, unit, style, family) {
  return style + " " + size_0 + unit.m_value + " " + family;
}

function $lambda$0_0(this$static, context_0, s_1, xOffset_2, lineNum_3) {
  context_0.m_jso.beginPath();
  $strokeText(
    context_0,
    s_1,
    xOffset_2,
    $getHeight(
      $getBoundingBox_1(
        this$static.textUtils,
        "Mg",
        this$static.fontSize,
        this$static.fontStyle,
        this$static.fontFamily,
        this$static.textUnit,
        this$static.textBaseLine,
        this$static.textAlign
      )
    ) * lineNum_3
  );
  context_0.m_jso.closePath();
}

function $lambda$1(this$static, context_0, s_1, xOffset_2, lineNum_3) {
  $fillText(
    context_0,
    s_1,
    xOffset_2,
    $getHeight(
      $getBoundingBox_1(
        this$static.textUtils,
        "Mg",
        this$static.fontSize,
        this$static.fontStyle,
        this$static.fontFamily,
        this$static.textUnit,
        this$static.textBaseLine,
        this$static.textAlign
      )
    ) * lineNum_3
  );
}

function $lambda$2(this$static, wide_1, high_3, color_5, context12_3, s_4, xOffset_5, lineNum_6) {
  $fillTextWithGradient(
    context12_3,
    s_4,
    xOffset_5,
    $getHeight(
      $getBoundingBox_1(
        this$static.textUtils,
        "Mg",
        this$static.fontSize,
        this$static.fontStyle,
        this$static.fontFamily,
        this$static.textUnit,
        this$static.textBaseLine,
        this$static.textAlign
      )
    ) * lineNum_6,
    wide_1 + wide_1 / 6,
    high_3 + high_3 / 6,
    color_5
  );
}

function $lambda$3(this$static, layer_1, color_2, context1_2, s_3, xOffset_4, lineNum_5) {
  $fillTextWithGradient(
    context1_2,
    s_3,
    xOffset_4,
    $getHeight(
      $getBoundingBox_1(
        this$static.textUtils,
        "Mg",
        this$static.fontSize,
        this$static.fontStyle,
        this$static.fontFamily,
        this$static.textUnit,
        this$static.textBaseLine,
        this$static.textAlign
      )
    ) * lineNum_5,
    layer_1.m_wide,
    layer_1.m_high,
    color_2
  );
}

function $measure(this$static, context) {
  var meas, size_0, text_0, width_0;
  text_0 = this$static.text;
  size_0 = this$static.fontSize;
  if (null == text_0 || text_0.length == 0 || !(size_0 > 0)) {
    return new $wnd.TextMetrics();
  }
  context.m_jso.save();
  $setTextAlign(context, ($clinit_TextAlign(), LEFT_0));
  $setTextBaseline(context, ($clinit_TextBaseLine(), ALPHABETIC));
  $setTextFont(context, $getFontString(size_0, this$static.textUnit, this$static.fontStyle, this$static.fontFamily));
  width_0 = this$static.strokeWidth;
  width_0 == 0 && (width_0 = 1);
  context.m_jso.lineWidth = width_0;
  $transform(context, $getAbsoluteTransform(this$static));
  meas = context.m_jso.measureText(text_0);
  context.m_jso.restore();
  return meas;
}

function $measureWithIdentityTransform(this$static, context) {
  var size_0;
  context.m_jso.save();
  context.m_jso.setTransform(1, 0, 0, 1, 0, 0);
  size_0 = $measure(this$static, context);
  context.m_jso.restore();
  return size_0;
}

function $setFontFamily(this$static, family) {
  (null == family || (family = $trim(family)).length == 0) && (family = ($clinit_LienzoCore(), "Helvetica"));
  this$static.fontFamily = family;
  return this$static;
}

function $setFontSize(this$static, size_0) {
  size_0 <= 0 && (size_0 = ($clinit_LienzoCore(), 48));
  this$static.fontSize = size_0;
  return this$static;
}

function $setFontStyle(this$static, style) {
  (null == style || (style = $trim(style)).length == 0) && (style = ($clinit_LienzoCore(), "normal"));
  this$static.fontStyle = style;
  return this$static;
}

function $stroke_0(this$static, context, alpha_0, filled) {
  if ($setStrokeParams(this$static, context, alpha_0, filled)) {
    $drawString(this$static, context, this$static.STROKE);
    context.m_jso.restore();
  }
}

function Text_0(text_0, family, style, size_0) {
  $clinit_Text();
  Shape.call(this, ($clinit_ShapeType(), TEXT_1));
  this.fontSize = ($clinit_LienzoCore(), 48);
  this.fontFamily = "Helvetica";
  this.fontStyle = "normal";
  this.textBaseLine = ($clinit_TextBaseLine(), ALPHABETIC);
  this.textAlign = ($clinit_TextAlign(), START);
  this.textUnit = ($clinit_TextUnit(), PT_0);
  this.textUtils = new TextUtils();
  this.STROKE = new Text$lambda$0$Type(this);
  this.FILL = new Text$lambda$1$Type(this);
  this.wrapper = new TextNoWrap(this);
  null == text_0 && (text_0 = "");
  (null == family || (family = $trim(family)).length == 0) && (family = "Helvetica");
  (null == style || (style = $trim(style)).length == 0) && (style = "normal");
  size_0 <= 0 && (size_0 = 48);
  $setFontSize($setFontStyle($setFontFamily(((this.text = text_0), this), family), style), size_0);
}

defineClass(414, 17, $intern_12, Text_0);
_.drawWithoutTransforms = function drawWithoutTransforms_3(context, alpha_0, bounds) {
  var fill, size_0, text_0;
  alpha_0 = alpha_0 * this.alpha;
  if (alpha_0 <= 0) {
    return;
  }
  text_0 = this.text;
  size_0 = this.fontSize;
  if (null == text_0 || text_0.length == 0 || !(size_0 > 0)) {
    return;
  }
  if (context.isSelection()) {
    if ($dofillBoundsForSelection(this, context, alpha_0)) {
      return;
    }
  } else {
    this.m_opts.apsh = false;
  }
  !!this.textBaseLine && $setTextBaseline(context, this.textBaseLine);
  !!this.textAlign && $setTextAlign(context, this.textAlign);
  $setTextFont(context, $getFontString(size_0, this.textUnit, this.fontStyle, this.fontFamily));
  fill = $fill_0(this, context, alpha_0);
  $stroke_0(this, context, alpha_0, fill);
};
_.fill_0 = function fill_3(context, alpha_0) {
  return $fill_0(this, context, alpha_0);
};
_.getBoundingBox = function getBoundingBox_15() {
  return $getBoundingBox_0(this.wrapper);
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_16() {
  return (
    $clinit_Node(),
    new Collections$UnmodifiableRandomAccessList(
      new Arrays$ArrayList(
        stampJavaTypeInfo(
          getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1),
          $intern_4,
          6,
          0,
          [($clinit_Attribute(), TEXT), FONT_SIZE, FONT_STYLE, FONT_FAMILY, TEXT_UNIT, TEXT_ALIGN, TEXT_BASELINE, WIDTH]
        )
      )
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getBoundingBoxForString = function getBoundingBoxForString(string) {
  return $getBoundingBox_1(
    this.textUtils,
    string,
    this.fontSize,
    this.fontStyle,
    this.fontFamily,
    this.textUnit,
    this.textBaseLine,
    this.textAlign
  );
};
_.getFontFamily = function getFontFamily() {
  return this.fontFamily;
};
_.getFontSize = function getFontSize() {
  return this.fontSize;
};
_.getFontString = function getFontString(size_0, unit, style, family) {
  return $getFontString(size_0, unit, style, family);
};
_.getFontStyle = function getFontStyle() {
  return this.fontStyle;
};
_.getLineHeight = function getLineHeight(context) {
  return $getHeight(
    $getBoundingBox_1(
      this.textUtils,
      "Mg",
      this.fontSize,
      this.fontStyle,
      this.fontFamily,
      this.textUnit,
      this.textBaseLine,
      this.textAlign
    )
  );
};
_.getText = function getText() {
  return this.text;
};
_.getTextAlign = function getTextAlign() {
  return this.textAlign;
};
_.getTextBaseLine = function getTextBaseLine() {
  return this.textBaseLine;
};
_.getTextUnit = function getTextUnit() {
  return this.textUnit;
};
_.getTransformingAttributes = function getTransformingAttributes() {
  return (
    $clinit_Node(),
    new Collections$UnmodifiableRandomAccessList(
      new Arrays$ArrayList(
        stampJavaTypeInfo(
          getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1),
          $intern_4,
          6,
          0,
          [($clinit_Attribute(), TEXT), FONT_SIZE, FONT_STYLE, FONT_FAMILY, TEXT_UNIT, TEXT_ALIGN, TEXT_BASELINE, WIDTH]
        )
      )
    )
  );
};
_.getWrapper = function getWrapper() {
  return this.wrapper;
};
_.measure = function measure(context) {
  return $measure(this, context);
};
_.measureWithIdentityTransform = function measureWithIdentityTransform(context) {
  return $measureWithIdentityTransform(this, context);
};
_.prepare = function prepare_15(context, alpha_0) {
  return false;
};
_.setFontFamily = function setFontFamily(family) {
  return $setFontFamily(this, family);
};
_.setFontSize = function setFontSize(size_0) {
  return $setFontSize(this, size_0);
};
_.setFontStyle = function setFontStyle(style) {
  return $setFontStyle(this, style);
};
_.setText = function setText(text_0) {
  return (this.text = text_0), this;
};
_.setTextAlign = function setTextAlign(align_0) {
  this.textAlign = align_0;
  return this;
};
_.setTextBaseLine = function setTextBaseLine(baseLine) {
  this.textBaseLine = baseLine;
  return this;
};
_.setTextUnit = function setTextUnit(unit) {
  if (!unit) {
    throw toJs(new IllegalArgumentException("TextUnit cannot be null"));
  }
  this.textUnit = unit;
  return this;
};
_.setWrapper = function setWrapper(wrapper) {
  this.wrapper = wrapper;
  return this;
};
_.stroke_0 = function stroke_1(context, alpha_0, filled) {
  $stroke_0(this, context, alpha_0, filled);
};
_.fontSize = 0;
var GRADFILLS = false;
var Lcom_ait_lienzo_client_core_shape_Text_2_classLit = createForClass("com.ait.lienzo.client.core.shape", "Text", 414);
function Text$lambda$0$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(200, 1, {}, Text$lambda$0$Type);
_.draw_0 = function draw_2(arg0, arg1, arg2, arg3) {
  $lambda$0_0(this.$$outer_0, arg0, arg1, arg2, arg3);
};
var Lcom_ait_lienzo_client_core_shape_Text$lambda$0$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Text/lambda$0$Type",
  200
);
function Text$lambda$1$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(201, 1, {}, Text$lambda$1$Type);
_.draw_0 = function draw_3(arg0, arg1, arg2, arg3) {
  $lambda$1(this.$$outer_0, arg0, arg1, arg2, arg3);
};
var Lcom_ait_lienzo_client_core_shape_Text$lambda$1$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Text/lambda$1$Type",
  201
);
function Text$lambda$2$Type($$outer_0, wide_1, high_3, color_5) {
  this.$$outer_0 = $$outer_0;
  this.wide_1 = wide_1;
  this.high_3 = high_3;
  this.color_5 = color_5;
}

defineClass(202, 1, {}, Text$lambda$2$Type);
_.draw_0 = function draw_4(arg0, arg1, arg2, arg3) {
  $lambda$2(this.$$outer_0, this.wide_1, this.high_3, this.color_5, arg0, arg1, arg2, arg3);
};
_.high_3 = 0;
_.wide_1 = 0;
var Lcom_ait_lienzo_client_core_shape_Text$lambda$2$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Text/lambda$2$Type",
  202
);
function Text$lambda$3$Type($$outer_0, layer_1, color_2) {
  this.$$outer_0 = $$outer_0;
  this.layer_1 = layer_1;
  this.color_2 = color_2;
}

defineClass(203, 1, {}, Text$lambda$3$Type);
_.draw_0 = function draw_5(arg0, arg1, arg2, arg3) {
  $lambda$3(this.$$outer_0, this.layer_1, this.color_2, arg0, arg1, arg2, arg3);
};
var Lcom_ait_lienzo_client_core_shape_Text$lambda$3$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Text/lambda$3$Type",
  203
);
function $drawString_0(this$static, context, drawCommand) {
  drawCommand.draw_0(context, this$static.text_0.text, 0, 0);
}

function $getBoundingBox_0(this$static) {
  return $getBoundingBoxForString(this$static, this$static.textSupplier.$$outer_0.text);
}

function $getBoundingBoxForString(this$static, string) {
  return $getBoundingBox_1(
    this$static.textUtils,
    string,
    $doubleValue(this$static.fontSizeSupplier.$$outer_0.fontSize),
    this$static.fontStyleSupplier.$$outer_0.fontStyle,
    this$static.fontFamilySupplier.$$outer_0.fontFamily,
    this$static.textUnitSupplier.$$outer_0.textUnit,
    this$static.textBaseLineSupplier.$$outer_0.textBaseLine,
    this$static.textAlignSupplier.$$outer_0.textAlign
  );
}

function TextNoWrap(text_0) {
  TextNoWrap_0.call(
    this,
    new TextNoWrap$0methodref$getText$Type(text_0),
    new TextNoWrap$1methodref$getFontSize$Type(text_0),
    new TextNoWrap$2methodref$getFontStyle$Type(text_0),
    new TextNoWrap$3methodref$getFontFamily$Type(text_0),
    new TextNoWrap$4methodref$getTextUnit$Type(text_0),
    new TextNoWrap$5methodref$getTextBaseLine$Type(text_0),
    new TextNoWrap$6methodref$getTextAlign$Type(text_0)
  );
  this.text_0 = text_0;
}

function TextNoWrap_0(
  textSupplier,
  fontSizeSupplier,
  fontStyleSupplier,
  fontFamilySupplier,
  textUnitSupplier,
  textBaseLineSupplier,
  textAlignSupplier
) {
  this.textUtils = new TextUtils();
  this.textSupplier = textSupplier;
  this.fontSizeSupplier = fontSizeSupplier;
  this.fontStyleSupplier = fontStyleSupplier;
  this.fontFamilySupplier = fontFamilySupplier;
  this.textUnitSupplier = textUnitSupplier;
  this.textBaseLineSupplier = textBaseLineSupplier;
  this.textAlignSupplier = textAlignSupplier;
}

defineClass(149, 1, {}, TextNoWrap);
var Lcom_ait_lienzo_client_core_shape_TextNoWrap_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "TextNoWrap",
  149
);
function TextNoWrap$0methodref$getText$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(238, 1, {}, TextNoWrap$0methodref$getText$Type);
var Lcom_ait_lienzo_client_core_shape_TextNoWrap$0methodref$getText$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "TextNoWrap/0methodref$getText$Type",
  238
);
function TextNoWrap$1methodref$getFontSize$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(239, 1, {}, TextNoWrap$1methodref$getFontSize$Type);
var Lcom_ait_lienzo_client_core_shape_TextNoWrap$1methodref$getFontSize$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "TextNoWrap/1methodref$getFontSize$Type",
  239
);
function TextNoWrap$2methodref$getFontStyle$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(240, 1, {}, TextNoWrap$2methodref$getFontStyle$Type);
var Lcom_ait_lienzo_client_core_shape_TextNoWrap$2methodref$getFontStyle$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "TextNoWrap/2methodref$getFontStyle$Type",
  240
);
function TextNoWrap$3methodref$getFontFamily$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(241, 1, {}, TextNoWrap$3methodref$getFontFamily$Type);
var Lcom_ait_lienzo_client_core_shape_TextNoWrap$3methodref$getFontFamily$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "TextNoWrap/3methodref$getFontFamily$Type",
  241
);
function TextNoWrap$4methodref$getTextUnit$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(242, 1, {}, TextNoWrap$4methodref$getTextUnit$Type);
var Lcom_ait_lienzo_client_core_shape_TextNoWrap$4methodref$getTextUnit$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "TextNoWrap/4methodref$getTextUnit$Type",
  242
);
function TextNoWrap$5methodref$getTextBaseLine$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(243, 1, {}, TextNoWrap$5methodref$getTextBaseLine$Type);
var Lcom_ait_lienzo_client_core_shape_TextNoWrap$5methodref$getTextBaseLine$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "TextNoWrap/5methodref$getTextBaseLine$Type",
  243
);
function TextNoWrap$6methodref$getTextAlign$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(244, 1, {}, TextNoWrap$6methodref$getTextAlign$Type);
var Lcom_ait_lienzo_client_core_shape_TextNoWrap$6methodref$getTextAlign$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "TextNoWrap/6methodref$getTextAlign$Type",
  244
);
function $getBoundingBox_1(this$static, text_0, size_0, style, family, unit, baseline, align_0) {
  var base, bbox, font, offs, wide;
  if (null == text_0 || text_0.length == 0 || !(size_0 > 0)) {
    return fromDoubles(0, 0, 0, 0);
  }
  font = style + " " + size_0 + unit.m_value + " " + family;
  base = font + " " + baseline.m_value;
  offs = this$static.OFFSCACHE.get(base);
  if (null == offs) {
    offs = $getTextOffsets_0(this$static, font, baseline);
    $put_1(this$static.OFFSCACHE, base, offs);
  }
  if (null == offs) {
    return fromDoubles(0, 0, 0, 0);
  }
  $setTextFont(this$static.FORBOUNDS.m_context, font);
  $setTextAlign(this$static.FORBOUNDS.m_context, ($clinit_TextAlign(), LEFT_0));
  $setTextBaseline(this$static.FORBOUNDS.m_context, ($clinit_TextBaseLine(), ALPHABETIC));
  wide = $measureText(this$static.FORBOUNDS.m_context, text_0).width;
  bbox = $addY($addY(new BoundingBox(), $doubleValue($get_5(offs, 0))), $doubleValue($get_5(offs, 1)));
  switch (align_0.ordinal_0) {
    case 2:
    case 0:
      $addX($addX(bbox, 0), wide);
      break;
    case 1:
    case 4:
      $addX($addX(bbox, 0), 0 - wide);
      break;
    case 3:
      $addX($addX(bbox, wide / 2), 0 - wide / 2);
  }
  return bbox;
}

function $getTextOffsets(data_0, wide, high, base) {
  var bot, top_0, value_0, x_0, y_0, y0, array;
  top_0 = -1;
  bot = -1;
  for (y0 = 0; y0 < high && top_0 < 0; y0++) {
    for (x_0 = 0; x_0 < wide && top_0 < 0; x_0++) {
      value_0 = data_0[(y0 * wide + x_0) * 4];
      (checkCriticalNotNull(value_0), value_0) != 0 && (top_0 = y0);
    }
  }
  top_0 < 0 && (top_0 = 0);
  for (y_0 = high - 1; y_0 > top_0 && bot < 0; y_0--) {
    for (x_0 = 0; x_0 < wide && bot < 0; x_0++) {
      value_0 = data_0[(y_0 * wide + x_0) * 4];
      (checkCriticalNotNull(value_0), value_0) != 0 && (bot = y_0);
    }
  }
  if (top_0 < 0 || bot < 0) {
    return null;
  }
  return (array = new $wnd.Array()), array.push(top_0 - base, bot - base), array;
}

function $getTextOffsets_0(this$static, font, baseline) {
  var ctxt, h, m, temp, w;
  if (!this$static.FORBOUNDS.m_context) {
    throw toJs(new Error_0());
  }
  $setTextFont(this$static.FORBOUNDS.m_context, font);
  $setTextAlign(this$static.FORBOUNDS.m_context, ($clinit_TextAlign(), LEFT_0));
  $setTextBaseline(this$static.FORBOUNDS.m_context, ($clinit_TextBaseLine(), ALPHABETIC));
  m = round_int(this$static.FORBOUNDS.m_context.m_jso.measureText("M").width);
  w = round_int(this$static.FORBOUNDS.m_context.m_jso.measureText("Mg").width);
  h = m * 4;
  temp = new ScratchPad(w, h);
  ctxt = temp.m_context;
  $setFillColor(ctxt, ($clinit_ColorName(), BLACK));
  ctxt.m_jso.fillRect(0, 0, w, h);
  ctxt.m_jso.font = font;
  $setTextAlign(ctxt, LEFT_0);
  ctxt.m_jso.textBaseline = baseline ? baseline.m_value : null;
  $setFillColor(ctxt, WHITE);
  ctxt.m_jso.fillText("Mg", 0, m * 2);
  return $getTextOffsets(ctxt.m_jso.getImageData(0, 0, w, h).data, w, h, m * 2);
}

function TextUtils() {
  this.FORBOUNDS = new ScratchPad(1, 1);
  this.OFFSCACHE = new $wnd.Map();
}

defineClass(148, 1, {}, TextUtils);
var Lcom_ait_lienzo_client_core_shape_TextUtils_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "TextUtils",
  148
);
function $parse_4(this$static) {
  var corner, list, p0, plist;
  list = $noAdjacentPoints(this$static.points);
  plist = this$static.m_list;
  if (list.length > 2) {
    p0 = list[0];
    $M(plist, p0.x, p0.y);
    corner = this$static.cornerRadius;
    if (corner <= 0) {
      $L_0(plist, list[1]);
      $L_0(plist, list[2]);
      $push(plist, new PathPartEntryJSO(6, initUnidimensionalArray(D_classLit, $intern_11, 12, 0, 15, 1)));
      $close(plist);
    } else {
      list.push(p0);
      drawArcJoinedLines_0(plist, list, corner);
    }
    return true;
  }
  return false;
}

function Triangle(a, b, c) {
  $clinit_Node();
  AbstractMultiPointShape.call(this, ($clinit_ShapeType(), TRIANGLE));
  $setPoint2DArray(
    this,
    fromArrayOfPoint2D_0(
      stampJavaTypeInfo(
        getClassLiteralForArray(Lcom_ait_lienzo_client_core_types_Point2D_2_classLit, 1),
        $intern_4,
        9,
        0,
        [a, b, c]
      )
    )
  );
}

defineClass(206, 76, { 22: 1, 21: 1, 26: 1, 18: 1, 17: 1, 206: 1, 27: 1 }, Triangle);
_.getBoundingBox = function getBoundingBox_16() {
  return fromPoint2DArray(this.points);
};
_.getBoundingBox_0 = function () {
  return this.getBoundingBox();
};
_.getBoundingBoxAttributes = function getBoundingBoxAttributes_17() {
  return new Collections$UnmodifiableRandomAccessList(
    new Arrays$ArrayList(
      stampJavaTypeInfo(getClassLiteralForArray(Lcom_ait_lienzo_client_core_Attribute_2_classLit, 1), $intern_4, 6, 0, [
        ($clinit_Attribute(), POINTS),
        CORNER_RADIUS,
      ])
    )
  );
};
_.getBoundingBoxAttributes_0 = function () {
  return this.getBoundingBoxAttributes();
};
_.getCornerRadius = function getCornerRadius_2() {
  return this.cornerRadius;
};
_.prepare = function prepare_16(context, alpha_0) {
  var plist;
  plist = this.m_list;
  if (plist.m_jso.length < 1) {
    if (!$parse_4(this)) {
      return false;
    }
  }
  if (plist.m_jso.length < 1) {
    return false;
  }
  $path(context, plist);
  return true;
};
_.setCornerRadius = function setCornerRadius_2(radius) {
  this.cornerRadius = radius;
  return $clear_0(this.m_list), this;
};
_.setPoints = function setPoints_0(a, b, c) {
  return $setPoint2DArray(
    this,
    fromArrayOfPoint2D_0(
      stampJavaTypeInfo(
        getClassLiteralForArray(Lcom_ait_lienzo_client_core_types_Point2D_2_classLit, 1),
        $intern_4,
        9,
        0,
        [a, b, c]
      )
    )
  );
};
_.cornerRadius = 0;
var Lcom_ait_lienzo_client_core_shape_Triangle_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Triangle",
  206
);
function $add_2(this$static, scene) {
  var element;
  if (!!scene && ($clinit_LienzoCore(), IS_CANVAS_SUPPORTED)) {
    if (!$adopt(scene, this$static)) {
      throw toJs(new IllegalArgumentException("Scene is already adopted."));
    }
    !this$static.m_stor && (this$static.m_stor = new ViewportFastArrayStorageEngine());
    if (this$static.m_stor.m_list.length > 2) {
      throw toJs(new IllegalArgumentException("Too many Scene objects is Viewport."));
    }
    element = scene.m_element;
    $setScenePixelSize(scene, this$static.m_wide, this$static.m_high);
    element.style.position = ($clinit_Style$Position(), "absolute");
    element.style.display = ($clinit_Style$Display(), "inline-block");
    this$static.m_element.appendChild(element);
    $add(this$static, scene);
  }
  return this$static;
}

function $add_3(this$static, scene, children) {
  var node, node$array, node$index, node$max;
  $add_2(this$static, scene);
  for (node$array = children, node$index = 0, node$max = node$array.length; node$index < node$max; ++node$index) {
    node = node$array[node$index];
    $add_2(this$static, node);
  }
  return this$static;
}

function $addViewportTransformChangedHandler(this$static, handler) {
  return $addEnsureHandler(
    this$static,
    ($clinit_ViewportTransformChangedEvent(), $clinit_ViewportTransformChangedEvent(), TYPE_16),
    handler
  );
}

function $batch_1(this$static) {
  var i, scene, scenes, size_0;
  scenes =
    (!this$static.m_stor && (this$static.m_stor = new ViewportFastArrayStorageEngine()), this$static.m_stor.m_list);
  size_0 = scenes.length;
  for (i = 0; i < size_0; i++) {
    scene = $get_4(scenes, i);
    !!scene && $batch_0(scene);
  }
  return this$static;
}

function $draw_1(this$static) {
  var i, scene, scenes, size_0;
  scenes =
    (!this$static.m_stor && (this$static.m_stor = new ViewportFastArrayStorageEngine()), this$static.m_stor.m_list);
  size_0 = scenes.length;
  for (i = 0; i < size_0; i++) {
    scene = $get_4(scenes, i);
    !!scene && $draw_0(scene);
  }
  return this$static;
}

function $findShapeAtPoint_1(this$static, x_0, y_0) {
  if (this$static.visible) {
    return $findShapeAtPoint_0(this$static.m_main, x_0, y_0);
  }
  return null;
}

function $setDragMouseButtons(this$static, controls) {
  this$static.m_drag_mouse_control = controls;
}

function $setPixelSize_1(this$static, wide, high) {
  var i, scene, scenes, size_0;
  this$static.m_wide = wide;
  this$static.m_high = high;
  this$static.m_element.style.width = wide + ($clinit_Style$Unit(), "px");
  this$static.m_element.style.height = high + "px";
  scenes =
    (!this$static.m_stor && (this$static.m_stor = new ViewportFastArrayStorageEngine()), this$static.m_stor.m_list);
  size_0 = scenes.length;
  for (i = 0; i < size_0; i++) {
    scene = $get_4(scenes, i);
    !!scene && $setPixelSize_0(scene, wide, high);
  }
  $setPixelSize_2(this$static.m_spad, wide, high);
  return this$static;
}

function $setSceneAndState(this$static, main) {
  var $tmp, transform;
  $add_3(
    this$static,
    this$static.m_back,
    stampJavaTypeInfo(
      getClassLiteralForArray(Lcom_ait_lienzo_client_core_shape_Scene_2_classLit, 1),
      $intern_4,
      94,
      0,
      [(this$static.m_main = main), this$static.m_drag]
    )
  );
  $add_1(this$static.m_drag, new Viewport$DragLayer());
  $add_1(this$static.m_drag, new Layer());
  new Mediators();
  this$static.viewportTransformChangedEvent = new ViewportTransformChangedEvent(this$static.m_element);
  transform = this$static.transform;
  !transform && $setTransform(this$static, new Transform());
  this$static.m_element.id =
    "viewPort_div" + toString_33((($tmp = idCounter_1), (idCounter_1 = add_6(idCounter_1, 1)), $tmp));
}

function $setScenePixelSize(scene, h, w) {
  $setPixelSize_0(scene, h, w);
  return scene;
}

function $setTransform(this$static, transform) {
  this$static.transform = transform;
  if (this$static.viewportTransformChangedEvent) {
    $revive(this$static.viewportTransformChangedEvent);
    $fireEvent(this$static, this$static.viewportTransformChangedEvent);
    $kill(this$static.viewportTransformChangedEvent);
  }
  return this$static;
}

function Viewport() {
  $clinit_Node();
  ContainerNode.call(this, ($clinit_NodeType(), VIEWPORT), new ViewportFastArrayStorageEngine());
  this.m_element = ($clinit_DomGlobal(), document_0).createElement("div");
  this.m_drag = new Scene();
  this.m_back = new Scene();
  this.m_spad = new ScratchPad(0, 0);
  this.m_wide = 0;
  this.m_high = 0;
  $setSceneAndState(this, new Scene());
}

defineClass(155, 43, $intern_15, Viewport);
_.batch = function batch_3() {
  return $batch_1(this);
};
_.asViewport = function asViewport_0() {
  return this;
};
_.fireEvent = function fireEvent_1(event_0) {
  $fireEvent_0(this.m_main, event_0);
};
_.getDefaultStorageEngine_0 = function getDefaultStorageEngine_2() {
  return new ViewportFastArrayStorageEngine();
};
_.getPossibleNodeTransform = function getPossibleNodeTransform_0() {
  return this.transform;
};
_.getViewport_0 = function getViewport_0() {
  return this;
};
_.removeFromParent = function removeFromParent_3() {
  return false;
};
_.m_high = 0;
_.m_main = null;
_.m_wide = 0;
var idCounter_1 = 0;
var Lcom_ait_lienzo_client_core_shape_Viewport_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Viewport",
  155
);
function Viewport$DragLayer() {
  Layer.call(this);
  this.visible = true;
  $getElement(this).style.visibility = ($clinit_Style$Visibility(), "visible");
  this.listening = false;
  this.m_select = null;
}

defineClass(214, 67, $intern_17, Viewport$DragLayer);
_.getCanvasElement = function getCanvasElement_1() {
  var element;
  element = $getCanvasElement(this);
  null != element && !this.m_context && (this.m_context = new Viewport$DragLayer$DragContext2D(element));
  return element;
};
_.getContext_0 = function getContext_1() {
  return this.m_context;
};
var Lcom_ait_lienzo_client_core_shape_Viewport$DragLayer_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Viewport/DragLayer",
  214
);
function Viewport$DragLayer$DragContext2D(element) {
  Context2D_0.call(this, element);
}

defineClass(217, 90, {}, Viewport$DragLayer$DragContext2D);
_.isDrag = function isDrag_0() {
  return true;
};
var Lcom_ait_lienzo_client_core_shape_Viewport$DragLayer$DragContext2D_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape",
  "Viewport/DragLayer/DragContext2D",
  217
);
function $migrate(this$static, storage) {
  var i, list, size_0;
  if (storage) {
    list = storage.m_list;
    size_0 = list.length;
    for (i = 0; i < size_0; i++) {
      $add_4(this$static, $get_4(list, i));
    }
  }
}

defineClass(433, 1, {});
_.iterator = function iterator_2() {
  return new NFastArrayListIterator(this.getChildren_0());
};
var Lcom_ait_lienzo_client_core_shape_storage_AbstractStorageEngine_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.storage",
  "AbstractStorageEngine",
  433
);
function $add_4(this$static, item_0) {
  $add_9(this$static.m_list, item_0);
}

function $remove_1(this$static, item_0) {
  $remove_4(this$static.m_list, item_0);
}

function AbstractFastArrayStorageEngine() {
  this.m_list = new $wnd.Array();
}

defineClass(122, 433, {});
_.getChildren_0 = function getChildren_0() {
  return this.m_list;
};
var Lcom_ait_lienzo_client_core_shape_storage_AbstractFastArrayStorageEngine_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.storage",
  "AbstractFastArrayStorageEngine",
  122
);
function PrimitiveFastArrayStorageEngine() {
  $clinit_StorageEngineType();
  AbstractFastArrayStorageEngine.call(this);
}

defineClass(54, 122, {}, PrimitiveFastArrayStorageEngine);
var Lcom_ait_lienzo_client_core_shape_storage_PrimitiveFastArrayStorageEngine_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.storage",
  "PrimitiveFastArrayStorageEngine",
  54
);
function SceneFastArrayStorageEngine() {
  $clinit_StorageEngineType();
  AbstractFastArrayStorageEngine.call(this);
}

defineClass(55, 122, {}, SceneFastArrayStorageEngine);
var Lcom_ait_lienzo_client_core_shape_storage_SceneFastArrayStorageEngine_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.storage",
  "SceneFastArrayStorageEngine",
  55
);
function $clinit_StorageEngineType() {
  $clinit_StorageEngineType = emptyMethod;
  new StorageEngineType("ViewportFastArrayStorageEngine");
  new StorageEngineType("SceneFastArrayStorageEngine");
  new StorageEngineType("PrimitiveFastArrayStorageEngine");
}

function StorageEngineType(value_0) {
  this.m_value = value_0;
}

defineClass(99, 1, { 99: 1, 38: 1, 39: 1 }, StorageEngineType);
_.getValue = function getValue() {
  return this.m_value;
};
_.equals_0 = function equals_1(other) {
  var that;
  if (other == null || !instanceOf(other, 99)) {
    return false;
  }
  if (this === other) {
    return true;
  }
  that = other;
  return $equals_1(that.m_value, this.m_value);
};
_.hashCode_0 = function hashCode_2() {
  return getHashCode_1(this.m_value);
};
_.toString_0 = function toString_3() {
  return this.m_value;
};
var Lcom_ait_lienzo_client_core_shape_storage_StorageEngineType_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.storage",
  "StorageEngineType",
  99
);
function ViewportFastArrayStorageEngine() {
  $clinit_StorageEngineType();
  AbstractFastArrayStorageEngine.call(this);
}

defineClass(79, 122, {}, ViewportFastArrayStorageEngine);
var Lcom_ait_lienzo_client_core_shape_storage_ViewportFastArrayStorageEngine_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.storage",
  "ViewportFastArrayStorageEngine",
  79
);
function AlignAndDistribute() {
  new HashMap();
  new HashMap();
  new HashMap();
  new HashMap();
  new HashMap();
  new HashMap();
  new HashMap();
  new AlignAndDistribute$DefaultAlignAndDistributeMatchesCallback();
  new HashMap();
  new HashMap();
  new HashMap();
  new HashMap();
  new HashMap();
  new HashMap();
}

defineClass(226, 1, {}, AlignAndDistribute);
var Lcom_ait_lienzo_client_core_shape_wires_AlignAndDistribute_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires",
  "AlignAndDistribute",
  226
);
function AlignAndDistribute$DefaultAlignAndDistributeMatchesCallback() {
  new DashArray(stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [10, 10]));
}

defineClass(337, 1, {}, AlignAndDistribute$DefaultAlignAndDistributeMatchesCallback);
var Lcom_ait_lienzo_client_core_shape_wires_AlignAndDistribute$DefaultAlignAndDistributeMatchesCallback_2_classLit =
  createForClass(
    "com.ait.lienzo.client.core.shape.wires",
    "AlignAndDistribute/DefaultAlignAndDistributeMatchesCallback",
    337
  );
function $clinit_MagnetManager() {
  $clinit_MagnetManager = emptyMethod;
  stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_Direction_2_classLit, 1),
    $intern_5,
    40,
    0,
    [($clinit_Direction(), NORTH), EAST, SOUTH, WEST]
  );
  stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_Direction_2_classLit, 1),
    $intern_5,
    40,
    0,
    [NORTH, NORTH_EAST, EAST, SOUTH_EAST, SOUTH, SOUTH_WEST, WEST, NORTH_WEST]
  );
  new ColorKeyRotor();
}

function MagnetManager() {
  $clinit_MagnetManager();
  new $wnd.Map();
}

defineClass(223, 1, {}, MagnetManager);
var Lcom_ait_lienzo_client_core_shape_wires_MagnetManager_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires",
  "MagnetManager",
  223
);
function updateHeadTailForRefreshedConnector() {
  var p0, p1, prepared;
  if (null.$_nullMethod().$_nullMethod().$_nullMethod().$_nullMethod() < 1) {
    null.$_nullMethod();
    null.$_nullMethod() && null.$_nullMethod().$_nullMethod().$_nullMethod() == 0 && null.$_nullMethod();
    prepared = null.$_nullMethod();
    if (!prepared) {
      return true;
    }
    null.$_nullMethod();
    p0 = null.$_nullMethod();
    p1 = null.$_nullMethod();
    fromArrayOfPoint2D_0(
      stampJavaTypeInfo(
        getClassLiteralForArray(Lcom_ait_lienzo_client_core_types_Point2D_2_classLit, 1),
        $intern_4,
        9,
        0,
        [p1, p0]
      )
    );
    null.$_nullMethod().$_nullMethod();
    p0 = null.$_nullMethod(null.$_nullMethod() - 1);
    p1 = null.$_nullMethod();
    fromArrayOfPoint2D_0(
      stampJavaTypeInfo(
        getClassLiteralForArray(Lcom_ait_lienzo_client_core_types_Point2D_2_classLit, 1),
        $intern_4,
        9,
        0,
        [p1, p0]
      )
    );
    null.$_nullMethod().$_nullMethod();
  }
  return false;
}

function WiresContainer(container) {
  this.m_container = container;
  new HandlerManager();
  new $wnd.Array();
}

defineClass(108, 1, { 108: 1 });
_.equals_0 = function equals_2(o) {
  if (this === o) {
    return true;
  }
  if (o == null || this.___clazz != getClass__Ljava_lang_Class___devirtual$(o)) {
    return false;
  }
  return null.$_nullMethod().$_nullMethod(null.$_nullMethod().$_nullMethod());
};
_.hashCode_0 = function hashCode_3() {
  return getHashCode_1(null.$_nullMethod());
};
var Lcom_ait_lienzo_client_core_shape_wires_WiresContainer_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires",
  "WiresContainer",
  108
);
function WiresEventHandlers(relativeDiv) {
  new WiresDragStartEvent(relativeDiv);
  new WiresDragMoveEvent(relativeDiv);
  new WiresDragEndEvent(relativeDiv);
  new WiresMoveEvent(relativeDiv);
  new WiresConnectorPointsChangedEvent(relativeDiv);
}

defineClass(227, 1, {}, WiresEventHandlers);
var Lcom_ait_lienzo_client_core_shape_wires_WiresEventHandlers_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires",
  "WiresEventHandlers",
  227
);
function WiresLayer(layer) {
  var lastArg;
  WiresContainer.call(this, ((lastArg = layer), new HandlerRegistrationManager(), lastArg));
}

defineClass(224, 108, { 108: 1 }, WiresLayer);
var Lcom_ait_lienzo_client_core_shape_wires_WiresLayer_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires",
  "WiresLayer",
  224
);
function $clinit_WiresManager() {
  $clinit_WiresManager = emptyMethod;
  MANAGER_MAP = new HashMap();
}

function $getShapes(this$static) {
  var array, shapes;
  array = toValuesJsArray(this$static.m_shapesMap);
  shapes = array;
  return shapes;
}

function WiresManager(layer) {
  new MagnetManager();
  this.m_shapesMap = new $wnd.Map();
  new $wnd.Map();
  this.m_connectorList = new $wnd.Array();
  new WiresLayer(layer);
  $setOnLayerBeforeDraw(layer, new WiresManager$LinePreparer(this));
  new AlignAndDistribute();
  new WiresEventHandlers($getViewport(layer).m_element);
}

function get_0(layer) {
  $clinit_WiresManager();
  var manager, uuid;
  uuid = $uuid(layer.m_opts_0);
  manager = $getStringValue(MANAGER_MAP, $uuid(layer.m_opts_0));
  if (manager) {
    return manager;
  }
  manager = new WiresManager(layer);
  $putStringValue(MANAGER_MAP, uuid, manager);
  return manager;
}

defineClass(159, 1, { 159: 1 }, WiresManager);
var MANAGER_MAP;
var Lcom_ait_lienzo_client_core_shape_wires_WiresManager_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires",
  "WiresManager",
  159
);
function $onLayerBeforeDraw(this$static) {
  var i, list, size_0;
  list = this$static.m_wiresManager.m_connectorList;
  for (i = 0, size_0 = list.length; i < size_0; i++) {
    $get_4(list, i);
    if (updateHeadTailForRefreshedConnector()) {
      return false;
    }
  }
  return true;
}

function WiresManager$LinePreparer(wiresManager) {
  this.m_wiresManager = wiresManager;
}

defineClass(225, 1, {}, WiresManager$LinePreparer);
var Lcom_ait_lienzo_client_core_shape_wires_WiresManager$LinePreparer_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires",
  "WiresManager/LinePreparer",
  225
);
function AbstractWiresDragEvent(relativeElement) {
  AbstractNodeEvent.call(this, relativeElement);
}

defineClass(126, 110, {});
var Lcom_ait_lienzo_client_core_shape_wires_event_AbstractWiresDragEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires.event",
  "AbstractWiresDragEvent",
  126
);
defineClass(351, 110, {});
var Lcom_ait_lienzo_client_core_shape_wires_event_AbstractWiresEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires.event",
  "AbstractWiresEvent",
  351
);
function $clinit_WiresConnectorPointsChangedEvent() {
  $clinit_WiresConnectorPointsChangedEvent = emptyMethod;
  TYPE_17 = new INodeEvent$Type();
}

function WiresConnectorPointsChangedEvent(relativeElement) {
  $clinit_WiresConnectorPointsChangedEvent();
  this.relativeElement = relativeElement;
}

defineClass(352, 351, {}, WiresConnectorPointsChangedEvent);
_.dispatch = function dispatch_17(handler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_17() {
  return TYPE_17;
};
var TYPE_17;
var Lcom_ait_lienzo_client_core_shape_wires_event_WiresConnectorPointsChangedEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires.event",
  "WiresConnectorPointsChangedEvent",
  352
);
function $clinit_WiresDragEndEvent() {
  $clinit_WiresDragEndEvent = emptyMethod;
  TYPE_18 = new INodeEvent$Type();
}

function WiresDragEndEvent(relativeElement) {
  $clinit_WiresDragEndEvent();
  AbstractWiresDragEvent.call(this, relativeElement);
}

defineClass(349, 126, {}, WiresDragEndEvent);
_.dispatch = function dispatch_18(shapeMovedHandler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_18() {
  return TYPE_18;
};
var TYPE_18;
var Lcom_ait_lienzo_client_core_shape_wires_event_WiresDragEndEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires.event",
  "WiresDragEndEvent",
  349
);
function $clinit_WiresDragMoveEvent() {
  $clinit_WiresDragMoveEvent = emptyMethod;
  TYPE_19 = new INodeEvent$Type();
}

function WiresDragMoveEvent(relativeElement) {
  $clinit_WiresDragMoveEvent();
  AbstractWiresDragEvent.call(this, relativeElement);
}

defineClass(348, 126, {}, WiresDragMoveEvent);
_.dispatch = function dispatch_19(shapeMovedHandler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_19() {
  return TYPE_19;
};
var TYPE_19;
var Lcom_ait_lienzo_client_core_shape_wires_event_WiresDragMoveEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires.event",
  "WiresDragMoveEvent",
  348
);
function $clinit_WiresDragStartEvent() {
  $clinit_WiresDragStartEvent = emptyMethod;
  TYPE_20 = new INodeEvent$Type();
}

function WiresDragStartEvent(relativeElement) {
  $clinit_WiresDragStartEvent();
  AbstractWiresDragEvent.call(this, relativeElement);
}

defineClass(347, 126, {}, WiresDragStartEvent);
_.dispatch = function dispatch_20(shapeMovedHandler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_20() {
  return TYPE_20;
};
var TYPE_20;
var Lcom_ait_lienzo_client_core_shape_wires_event_WiresDragStartEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires.event",
  "WiresDragStartEvent",
  347
);
function $clinit_WiresMoveEvent() {
  $clinit_WiresMoveEvent = emptyMethod;
  TYPE_21 = new INodeEvent$Type();
}

function WiresMoveEvent(relativeElement) {
  $clinit_WiresMoveEvent();
  this.relativeElement = relativeElement;
}

defineClass(350, 110, {}, WiresMoveEvent);
_.dispatch = function dispatch_21(shapeMovedHandler) {
  null.$_nullMethod();
};
_.getAssociatedType = function getAssociatedType_21() {
  return TYPE_21;
};
var TYPE_21;
var Lcom_ait_lienzo_client_core_shape_wires_event_WiresMoveEvent_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires.event",
  "WiresMoveEvent",
  350
);
function JsWiresConnection(connection) {}

defineClass(118, 1, {}, JsWiresConnection);
_.getConnector = function getConnector() {
  return new JsWiresConnector(null.$_nullMethod());
};
_.getControl = function getControl() {
  return null.$_nullMethod();
};
_.getMagnet = function getMagnet() {
  return new JsWiresMagnet(null.$_nullMethod());
};
var Lcom_ait_lienzo_client_core_shape_wires_types_JsWiresConnection_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires.types",
  "JsWiresConnection",
  118
);
function JsWiresConnector(connector) {}

defineClass(207, 1, {}, JsWiresConnector);
_.getHeadConnection = function getHeadConnection() {
  return new JsWiresConnection(null.$_nullMethod());
};
_.getTailConnection = function getTailConnection() {
  return new JsWiresConnection(null.$_nullMethod());
};
var Lcom_ait_lienzo_client_core_shape_wires_types_JsWiresConnector_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires.types",
  "JsWiresConnector",
  207
);
function JsWiresMagnet(magnet) {}

defineClass(151, 1, {}, JsWiresMagnet);
_.getConnection = function getConnection(index_0) {
  var wiresConnection;
  return (wiresConnection = null.$_nullMethod().$_nullMethod()), new JsWiresConnection(wiresConnection);
};
_.getConnectionSize = function getConnectionSize() {
  return null.$_nullMethod(), 0;
};
_.getControl = function getControl_0() {
  return null.$_nullMethod();
};
var Lcom_ait_lienzo_client_core_shape_wires_types_JsWiresMagnet_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires.types",
  "JsWiresMagnet",
  151
);
function $getBackgroundColor(this$static) {
  var borderColorShape;
  $setColorsMap(this$static);
  if ($hasStringValue(this$static.colorsMap, "?shapeType=BACKGROUND")) {
    return $getStringValue(this$static.colorsMap, "?shapeType=BACKGROUND").fillColor;
  } else {
    borderColorShape = $getBorderColorShape(this$static);
    return borderColorShape ? borderColorShape.fillColor : null;
  }
}

function $getBorderColor(this$static) {
  var shape_0;
  $setColorsMap(this$static);
  shape_0 = $getBorderColorShape(this$static);
  if (shape_0) {
    if ($hasStringValue(this$static.colorsMap, "?shapeType=BORDER&renderType=STROKE")) {
      return shape_0.strokeColor;
    } else if ($hasStringValue(this$static.colorsMap, "?shapeType=BORDER&renderType=FILL")) {
      return shape_0.fillColor;
    }
  }
  return null;
}

function $getBorderColorShape(this$static) {
  $setColorsMap(this$static);
  if ($hasStringValue(this$static.colorsMap, "?shapeType=BORDER&renderType=STROKE")) {
    return $getStringValue(this$static.colorsMap, "?shapeType=BORDER&renderType=STROKE");
  } else if ($hasStringValue(this$static.colorsMap, "?shapeType=BORDER&renderType=FILL")) {
    return $getStringValue(this$static.colorsMap, "?shapeType=BORDER&renderType=FILL");
  }
  return null;
}

function $getBounds() {
  var height, width_0;
  null.$_nullMethod().$_nullMethod();
  width_0 = null.$_nullMethod();
  height = null.$_nullMethod();
  return new Point2D(width_0, height);
}

function $getLocationXY() {
  var shapeX, shapeY;
  shapeX = null.$_nullMethod().$_nullField;
  shapeY = null.$_nullMethod().$_nullField;
  return new Point2D(shapeX, shapeY);
}

function $setBackgroundColor(this$static, backgroundColor) {
  var shape_0;
  $setColorsMap(this$static);
  $hasStringValue(this$static.colorsMap, "?shapeType=BACKGROUND")
    ? (shape_0 = $getStringValue(this$static.colorsMap, "?shapeType=BACKGROUND"))
    : (shape_0 = $getBorderColorShape(this$static));
  if (shape_0) {
    shape_0.fillColor = backgroundColor;
    null.$_nullMethod();
  }
}

function $setBorderColor(this$static, borderColor) {
  var shape_0;
  $setColorsMap(this$static);
  if ($hasStringValue(this$static.colorsMap, "?shapeType=BORDER&renderType=STROKE")) {
    shape_0 = $getStringValue(this$static.colorsMap, "?shapeType=BORDER&renderType=STROKE");
    shape_0.strokeColor = borderColor;
    null.$_nullMethod();
  } else if ($hasStringValue(this$static.colorsMap, "?shapeType=BORDER&renderType=FILL")) {
    shape_0 = $getStringValue(this$static.colorsMap, "?shapeType=BORDER&renderType=FILL");
    shape_0.fillColor = borderColor;
    null.$_nullMethod();
  }
}

function $setColorsMap(this$static) {
  var i, shape_0, shapeJsArray, tag, userData;
  if ($size(this$static.colorsMap) != 0) {
    return;
  }
  shapeJsArray = toFlatShapes(null.$_nullMethod());
  for (i = 0; i < shapeJsArray.length; i++) {
    shape_0 = shapeJsArray[i];
    userData = shape_0.m_opts_0.userData;
    if (userData == null) {
      continue;
    }
    tag = userData;
    switch (tag) {
      case "?shapeType=BORDER&renderType=STROKE":
      case "?shapeType=BORDER&renderType=FILL":
      case "?shapeType=BACKGROUND":
        $putStringValue(this$static.colorsMap, tag, shape_0);
    }
  }
}

function JsWiresShape(shape_0) {
  this.colorsMap = new HashMap();
}

function toFlatShapes(container) {
  var child, childNodes, children, i, shapes;
  shapes = new $wnd.Array();
  childNodes = container.getChildNodes();
  for (i = 0; i < childNodes.length; i++) {
    child = $get_4(childNodes, i);
    if (instanceOf(child, 66)) {
      if (!!lister_0 && $contains_0($getNodeIdSet(lister_0), child.getID_0())) {
        continue;
      }
      children = toFlatShapes(child);
      shapes.push.apply(
        shapes,
        ensureNotNull(
          stampJavaTypeInfo_1(
            children,
            initUnidimensionalArray(
              Lcom_ait_lienzo_client_core_shape_Shape_2_classLit,
              { 443: 1, 3: 1, 4: 1 },
              17,
              children.length,
              0,
              1
            )
          )
        )
      );
    } else {
      shapes.push(child);
    }
  }
  return shapes;
}

defineClass(208, 1, {}, JsWiresShape);
_.asGroup = function asGroup_0() {
  return null.$_nullMethod();
};
_.draw = function draw_6() {
  null.$_nullMethod();
};
_.flatShapes = function flatShapes() {
  return toFlatShapes(null.$_nullMethod());
};
_.getAbsoluteLocation = function getAbsoluteLocation() {
  return null.$_nullMethod().$_nullMethod();
};
_.getBackgroundColor = function getBackgroundColor() {
  return $getBackgroundColor(this);
};
_.getBorderColor = function getBorderColor() {
  return $getBorderColor(this);
};
_.getBoundingBox = function getBoundingBox_17() {
  return null.$_nullMethod().$_nullMethod();
};
_.getBounds = function getBounds() {
  return $getBounds();
};
_.getChild = function getChild(index_0) {
  null.$_nullMethod().$_nullMethod();
  return null;
};
_.getComputedLocation = function getComputedLocation_0() {
  return null.$_nullMethod();
};
_.getID = function getID_0() {
  return null.$_nullMethod();
};
_.getLocation = function getLocation() {
  return null.$_nullMethod();
};
_.getLocationXY = function getLocationXY() {
  return $getLocationXY();
};
_.getMagnet = function getMagnet_0(index_0) {
  var magnet;
  return (magnet = null.$_nullMethod().$_nullMethod()), new JsWiresMagnet(magnet);
};
_.getMagnetsSize = function getMagnetsSize() {
  return null.$_nullMethod(), 0;
};
_.getParent = function getParent_0() {
  null.$_nullMethod();
  return null;
};
_.getParentID = function getParentID() {
  null.$_nullMethod();
  return null;
};
_.getPath = function getPath_0() {
  return null.$_nullMethod();
};
_.getShape = function getShape(index_0) {
  return toFlatShapes(null.$_nullMethod())[index_0];
};
_.linkLister = function linkLister(lister) {
  lister_0 = lister;
};
_.setBackgroundColor = function setBackgroundColor(backgroundColor) {
  $setBackgroundColor(this, backgroundColor);
};
_.setBorderColor = function setBorderColor(borderColor) {
  $setBorderColor(this, borderColor);
};
var lister_0;
var Lcom_ait_lienzo_client_core_shape_wires_types_JsWiresShape_2_classLit = createForClass(
  "com.ait.lienzo.client.core.shape.wires.types",
  "JsWiresShape",
  208
);
function $clinit_Style$Cursor() {
  $clinit_Style$Cursor = emptyMethod;
  DEFAULT = new Style$Cursor$1();
  AUTO = new Style$Cursor$2();
  CROSSHAIR = new Style$Cursor$3();
  POINTER = new Style$Cursor$4();
  MOVE = new Style$Cursor$5();
  E_RESIZE = new Style$Cursor$6();
  NE_RESIZE = new Style$Cursor$7();
  NW_RESIZE = new Style$Cursor$8();
  N_RESIZE = new Style$Cursor$9();
  SE_RESIZE = new Style$Cursor$10();
  SW_RESIZE = new Style$Cursor$11();
  S_RESIZE = new Style$Cursor$12();
  W_RESIZE = new Style$Cursor$13();
  TEXT_0 = new Style$Cursor$14();
  WAIT = new Style$Cursor$15();
  HELP = new Style$Cursor$16();
  COL_RESIZE = new Style$Cursor$17();
  ROW_RESIZE = new Style$Cursor$18();
  NOT_ALLOWED = new Style$Cursor$19();
  ZOOM_IN = new Style$Cursor$20();
  ZOOM_OUT = new Style$Cursor$21();
  GRAB = new Style$Cursor$22();
  GRABBING = new Style$Cursor$23();
}

function Style$Cursor(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0() {
  $clinit_Style$Cursor();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_client_core_style_Style$Cursor_2_classLit, 1),
    $intern_5,
    13,
    0,
    [
      DEFAULT,
      AUTO,
      CROSSHAIR,
      POINTER,
      MOVE,
      E_RESIZE,
      NE_RESIZE,
      NW_RESIZE,
      N_RESIZE,
      SE_RESIZE,
      SW_RESIZE,
      S_RESIZE,
      W_RESIZE,
      TEXT_0,
      WAIT,
      HELP,
      COL_RESIZE,
      ROW_RESIZE,
      NOT_ALLOWED,
      ZOOM_IN,
      ZOOM_OUT,
      GRAB,
      GRABBING,
    ]
  );
}

defineClass(13, 7, $intern_21);
var AUTO,
  COL_RESIZE,
  CROSSHAIR,
  DEFAULT,
  E_RESIZE,
  GRAB,
  GRABBING,
  HELP,
  MOVE,
  NE_RESIZE,
  NOT_ALLOWED,
  NW_RESIZE,
  N_RESIZE,
  POINTER,
  ROW_RESIZE,
  SE_RESIZE,
  SW_RESIZE,
  S_RESIZE,
  TEXT_0,
  WAIT,
  W_RESIZE,
  ZOOM_IN,
  ZOOM_OUT;
var Lcom_ait_lienzo_client_core_style_Style$Cursor_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor",
  13,
  values_0
);
function Style$Cursor$1() {
  Style$Cursor.call(this, "DEFAULT", 0);
}

defineClass(245, 13, $intern_21, Style$Cursor$1);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$1_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/1",
  245,
  null
);
function Style$Cursor$10() {
  Style$Cursor.call(this, "SE_RESIZE", 9);
}

defineClass(254, 13, $intern_21, Style$Cursor$10);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$10_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/10",
  254,
  null
);
function Style$Cursor$11() {
  Style$Cursor.call(this, "SW_RESIZE", 10);
}

defineClass(255, 13, $intern_21, Style$Cursor$11);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$11_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/11",
  255,
  null
);
function Style$Cursor$12() {
  Style$Cursor.call(this, "S_RESIZE", 11);
}

defineClass(256, 13, $intern_21, Style$Cursor$12);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$12_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/12",
  256,
  null
);
function Style$Cursor$13() {
  Style$Cursor.call(this, "W_RESIZE", 12);
}

defineClass(257, 13, $intern_21, Style$Cursor$13);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$13_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/13",
  257,
  null
);
function Style$Cursor$14() {
  Style$Cursor.call(this, "TEXT", 13);
}

defineClass(258, 13, $intern_21, Style$Cursor$14);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$14_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/14",
  258,
  null
);
function Style$Cursor$15() {
  Style$Cursor.call(this, "WAIT", 14);
}

defineClass(259, 13, $intern_21, Style$Cursor$15);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$15_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/15",
  259,
  null
);
function Style$Cursor$16() {
  Style$Cursor.call(this, "HELP", 15);
}

defineClass(260, 13, $intern_21, Style$Cursor$16);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$16_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/16",
  260,
  null
);
function Style$Cursor$17() {
  Style$Cursor.call(this, "COL_RESIZE", 16);
}

defineClass(261, 13, $intern_21, Style$Cursor$17);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$17_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/17",
  261,
  null
);
function Style$Cursor$18() {
  Style$Cursor.call(this, "ROW_RESIZE", 17);
}

defineClass(262, 13, $intern_21, Style$Cursor$18);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$18_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/18",
  262,
  null
);
function Style$Cursor$19() {
  Style$Cursor.call(this, "NOT_ALLOWED", 18);
}

defineClass(263, 13, $intern_21, Style$Cursor$19);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$19_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/19",
  263,
  null
);
function Style$Cursor$2() {
  Style$Cursor.call(this, "AUTO", 1);
}

defineClass(246, 13, $intern_21, Style$Cursor$2);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$2_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/2",
  246,
  null
);
function Style$Cursor$20() {
  Style$Cursor.call(this, "ZOOM_IN", 19);
}

defineClass(264, 13, $intern_21, Style$Cursor$20);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$20_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/20",
  264,
  null
);
function Style$Cursor$21() {
  Style$Cursor.call(this, "ZOOM_OUT", 20);
}

defineClass(265, 13, $intern_21, Style$Cursor$21);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$21_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/21",
  265,
  null
);
function Style$Cursor$22() {
  Style$Cursor.call(this, "GRAB", 21);
}

defineClass(266, 13, $intern_21, Style$Cursor$22);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$22_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/22",
  266,
  null
);
function Style$Cursor$23() {
  Style$Cursor.call(this, "GRABBING", 22);
}

defineClass(267, 13, $intern_21, Style$Cursor$23);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$23_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/23",
  267,
  null
);
function Style$Cursor$3() {
  Style$Cursor.call(this, "CROSSHAIR", 2);
}

defineClass(247, 13, $intern_21, Style$Cursor$3);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$3_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/3",
  247,
  null
);
function Style$Cursor$4() {
  Style$Cursor.call(this, "POINTER", 3);
}

defineClass(248, 13, $intern_21, Style$Cursor$4);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$4_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/4",
  248,
  null
);
function Style$Cursor$5() {
  Style$Cursor.call(this, "MOVE", 4);
}

defineClass(249, 13, $intern_21, Style$Cursor$5);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$5_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/5",
  249,
  null
);
function Style$Cursor$6() {
  Style$Cursor.call(this, "E_RESIZE", 5);
}

defineClass(250, 13, $intern_21, Style$Cursor$6);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$6_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/6",
  250,
  null
);
function Style$Cursor$7() {
  Style$Cursor.call(this, "NE_RESIZE", 6);
}

defineClass(251, 13, $intern_21, Style$Cursor$7);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$7_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/7",
  251,
  null
);
function Style$Cursor$8() {
  Style$Cursor.call(this, "NW_RESIZE", 7);
}

defineClass(252, 13, $intern_21, Style$Cursor$8);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$8_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/8",
  252,
  null
);
function Style$Cursor$9() {
  Style$Cursor.call(this, "N_RESIZE", 8);
}

defineClass(253, 13, $intern_21, Style$Cursor$9);
var Lcom_ait_lienzo_client_core_style_Style$Cursor$9_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Cursor/9",
  253,
  null
);
function $clinit_Style$Display() {
  $clinit_Style$Display = emptyMethod;
  NONE = new Style$Display$1();
  BLOCK = new Style$Display$2();
  INLINE = new Style$Display$3();
  INLINE_BLOCK = new Style$Display$4();
  INLINE_TABLE = new Style$Display$5();
  LIST_ITEM = new Style$Display$6();
  RUN_IN = new Style$Display$7();
  TABLE = new Style$Display$8();
  TABLE_CAPTION = new Style$Display$9();
  TABLE_COLUMN_GROUP = new Style$Display$10();
  TABLE_HEADER_GROUP = new Style$Display$11();
  TABLE_FOOTER_GROUP = new Style$Display$12();
  TABLE_ROW_GROUP = new Style$Display$13();
  TABLE_CELL = new Style$Display$14();
  TABLE_COLUMN = new Style$Display$15();
  TABLE_ROW = new Style$Display$16();
  INITIAL = new Style$Display$17();
  FLEX = new Style$Display$18();
  INLINE_FLEX = new Style$Display$19();
}

function Style$Display(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1() {
  $clinit_Style$Display();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_client_core_style_Style$Display_2_classLit, 1),
    $intern_5,
    15,
    0,
    [
      NONE,
      BLOCK,
      INLINE,
      INLINE_BLOCK,
      INLINE_TABLE,
      LIST_ITEM,
      RUN_IN,
      TABLE,
      TABLE_CAPTION,
      TABLE_COLUMN_GROUP,
      TABLE_HEADER_GROUP,
      TABLE_FOOTER_GROUP,
      TABLE_ROW_GROUP,
      TABLE_CELL,
      TABLE_COLUMN,
      TABLE_ROW,
      INITIAL,
      FLEX,
      INLINE_FLEX,
    ]
  );
}

defineClass(15, 7, $intern_22);
var BLOCK,
  FLEX,
  INITIAL,
  INLINE,
  INLINE_BLOCK,
  INLINE_FLEX,
  INLINE_TABLE,
  LIST_ITEM,
  NONE,
  RUN_IN,
  TABLE,
  TABLE_CAPTION,
  TABLE_CELL,
  TABLE_COLUMN,
  TABLE_COLUMN_GROUP,
  TABLE_FOOTER_GROUP,
  TABLE_HEADER_GROUP,
  TABLE_ROW,
  TABLE_ROW_GROUP;
var Lcom_ait_lienzo_client_core_style_Style$Display_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display",
  15,
  values_1
);
function Style$Display$1() {
  Style$Display.call(this, "NONE", 0);
}

defineClass(268, 15, $intern_22, Style$Display$1);
var Lcom_ait_lienzo_client_core_style_Style$Display$1_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/1",
  268,
  null
);
function Style$Display$10() {
  Style$Display.call(this, "TABLE_COLUMN_GROUP", 9);
}

defineClass(277, 15, $intern_22, Style$Display$10);
var Lcom_ait_lienzo_client_core_style_Style$Display$10_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/10",
  277,
  null
);
function Style$Display$11() {
  Style$Display.call(this, "TABLE_HEADER_GROUP", 10);
}

defineClass(278, 15, $intern_22, Style$Display$11);
var Lcom_ait_lienzo_client_core_style_Style$Display$11_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/11",
  278,
  null
);
function Style$Display$12() {
  Style$Display.call(this, "TABLE_FOOTER_GROUP", 11);
}

defineClass(279, 15, $intern_22, Style$Display$12);
var Lcom_ait_lienzo_client_core_style_Style$Display$12_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/12",
  279,
  null
);
function Style$Display$13() {
  Style$Display.call(this, "TABLE_ROW_GROUP", 12);
}

defineClass(280, 15, $intern_22, Style$Display$13);
var Lcom_ait_lienzo_client_core_style_Style$Display$13_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/13",
  280,
  null
);
function Style$Display$14() {
  Style$Display.call(this, "TABLE_CELL", 13);
}

defineClass(281, 15, $intern_22, Style$Display$14);
var Lcom_ait_lienzo_client_core_style_Style$Display$14_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/14",
  281,
  null
);
function Style$Display$15() {
  Style$Display.call(this, "TABLE_COLUMN", 14);
}

defineClass(282, 15, $intern_22, Style$Display$15);
var Lcom_ait_lienzo_client_core_style_Style$Display$15_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/15",
  282,
  null
);
function Style$Display$16() {
  Style$Display.call(this, "TABLE_ROW", 15);
}

defineClass(283, 15, $intern_22, Style$Display$16);
var Lcom_ait_lienzo_client_core_style_Style$Display$16_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/16",
  283,
  null
);
function Style$Display$17() {
  Style$Display.call(this, "INITIAL", 16);
}

defineClass(284, 15, $intern_22, Style$Display$17);
var Lcom_ait_lienzo_client_core_style_Style$Display$17_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/17",
  284,
  null
);
function Style$Display$18() {
  Style$Display.call(this, "FLEX", 17);
}

defineClass(285, 15, $intern_22, Style$Display$18);
var Lcom_ait_lienzo_client_core_style_Style$Display$18_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/18",
  285,
  null
);
function Style$Display$19() {
  Style$Display.call(this, "INLINE_FLEX", 18);
}

defineClass(286, 15, $intern_22, Style$Display$19);
var Lcom_ait_lienzo_client_core_style_Style$Display$19_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/19",
  286,
  null
);
function Style$Display$2() {
  Style$Display.call(this, "BLOCK", 1);
}

defineClass(269, 15, $intern_22, Style$Display$2);
var Lcom_ait_lienzo_client_core_style_Style$Display$2_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/2",
  269,
  null
);
function Style$Display$3() {
  Style$Display.call(this, "INLINE", 2);
}

defineClass(270, 15, $intern_22, Style$Display$3);
var Lcom_ait_lienzo_client_core_style_Style$Display$3_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/3",
  270,
  null
);
function Style$Display$4() {
  Style$Display.call(this, "INLINE_BLOCK", 3);
}

defineClass(271, 15, $intern_22, Style$Display$4);
var Lcom_ait_lienzo_client_core_style_Style$Display$4_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/4",
  271,
  null
);
function Style$Display$5() {
  Style$Display.call(this, "INLINE_TABLE", 4);
}

defineClass(272, 15, $intern_22, Style$Display$5);
var Lcom_ait_lienzo_client_core_style_Style$Display$5_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/5",
  272,
  null
);
function Style$Display$6() {
  Style$Display.call(this, "LIST_ITEM", 5);
}

defineClass(273, 15, $intern_22, Style$Display$6);
var Lcom_ait_lienzo_client_core_style_Style$Display$6_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/6",
  273,
  null
);
function Style$Display$7() {
  Style$Display.call(this, "RUN_IN", 6);
}

defineClass(274, 15, $intern_22, Style$Display$7);
var Lcom_ait_lienzo_client_core_style_Style$Display$7_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/7",
  274,
  null
);
function Style$Display$8() {
  Style$Display.call(this, "TABLE", 7);
}

defineClass(275, 15, $intern_22, Style$Display$8);
var Lcom_ait_lienzo_client_core_style_Style$Display$8_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/8",
  275,
  null
);
function Style$Display$9() {
  Style$Display.call(this, "TABLE_CAPTION", 8);
}

defineClass(276, 15, $intern_22, Style$Display$9);
var Lcom_ait_lienzo_client_core_style_Style$Display$9_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Display/9",
  276,
  null
);
function $clinit_Style$OutlineStyle() {
  $clinit_Style$OutlineStyle = emptyMethod;
  NONE_0 = new Style$OutlineStyle$1();
  DASHED = new Style$OutlineStyle$2();
  DOTTED = new Style$OutlineStyle$3();
  DOUBLE = new Style$OutlineStyle$4();
  GROOVE = new Style$OutlineStyle$5();
  INSET = new Style$OutlineStyle$6();
  OUTSET = new Style$OutlineStyle$7();
  RIDGE = new Style$OutlineStyle$8();
  SOLID = new Style$OutlineStyle$9();
}

function Style$OutlineStyle(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2() {
  $clinit_Style$OutlineStyle();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_client_core_style_Style$OutlineStyle_2_classLit, 1),
    $intern_5,
    30,
    0,
    [NONE_0, DASHED, DOTTED, DOUBLE, GROOVE, INSET, OUTSET, RIDGE, SOLID]
  );
}

defineClass(30, 7, $intern_23);
var DASHED, DOTTED, DOUBLE, GROOVE, INSET, NONE_0, OUTSET, RIDGE, SOLID;
var Lcom_ait_lienzo_client_core_style_Style$OutlineStyle_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/OutlineStyle",
  30,
  values_2
);
function Style$OutlineStyle$1() {
  Style$OutlineStyle.call(this, "NONE", 0);
}

defineClass(287, 30, $intern_23, Style$OutlineStyle$1);
var Lcom_ait_lienzo_client_core_style_Style$OutlineStyle$1_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/OutlineStyle/1",
  287,
  null
);
function Style$OutlineStyle$2() {
  Style$OutlineStyle.call(this, "DASHED", 1);
}

defineClass(288, 30, $intern_23, Style$OutlineStyle$2);
var Lcom_ait_lienzo_client_core_style_Style$OutlineStyle$2_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/OutlineStyle/2",
  288,
  null
);
function Style$OutlineStyle$3() {
  Style$OutlineStyle.call(this, "DOTTED", 2);
}

defineClass(289, 30, $intern_23, Style$OutlineStyle$3);
var Lcom_ait_lienzo_client_core_style_Style$OutlineStyle$3_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/OutlineStyle/3",
  289,
  null
);
function Style$OutlineStyle$4() {
  Style$OutlineStyle.call(this, "DOUBLE", 3);
}

defineClass(290, 30, $intern_23, Style$OutlineStyle$4);
var Lcom_ait_lienzo_client_core_style_Style$OutlineStyle$4_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/OutlineStyle/4",
  290,
  null
);
function Style$OutlineStyle$5() {
  Style$OutlineStyle.call(this, "GROOVE", 4);
}

defineClass(291, 30, $intern_23, Style$OutlineStyle$5);
var Lcom_ait_lienzo_client_core_style_Style$OutlineStyle$5_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/OutlineStyle/5",
  291,
  null
);
function Style$OutlineStyle$6() {
  Style$OutlineStyle.call(this, "INSET", 5);
}

defineClass(292, 30, $intern_23, Style$OutlineStyle$6);
var Lcom_ait_lienzo_client_core_style_Style$OutlineStyle$6_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/OutlineStyle/6",
  292,
  null
);
function Style$OutlineStyle$7() {
  Style$OutlineStyle.call(this, "OUTSET", 6);
}

defineClass(293, 30, $intern_23, Style$OutlineStyle$7);
var Lcom_ait_lienzo_client_core_style_Style$OutlineStyle$7_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/OutlineStyle/7",
  293,
  null
);
function Style$OutlineStyle$8() {
  Style$OutlineStyle.call(this, "RIDGE", 7);
}

defineClass(294, 30, $intern_23, Style$OutlineStyle$8);
var Lcom_ait_lienzo_client_core_style_Style$OutlineStyle$8_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/OutlineStyle/8",
  294,
  null
);
function Style$OutlineStyle$9() {
  Style$OutlineStyle.call(this, "SOLID", 8);
}

defineClass(295, 30, $intern_23, Style$OutlineStyle$9);
var Lcom_ait_lienzo_client_core_style_Style$OutlineStyle$9_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/OutlineStyle/9",
  295,
  null
);
function $clinit_Style$Overflow() {
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1();
  HIDDEN = new Style$Overflow$2();
  SCROLL = new Style$Overflow$3();
  AUTO_0 = new Style$Overflow$4();
}

function Style$Overflow(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3() {
  $clinit_Style$Overflow();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_client_core_style_Style$Overflow_2_classLit, 1),
    $intern_5,
    50,
    0,
    [VISIBLE, HIDDEN, SCROLL, AUTO_0]
  );
}

defineClass(50, 7, $intern_24);
var AUTO_0, HIDDEN, SCROLL, VISIBLE;
var Lcom_ait_lienzo_client_core_style_Style$Overflow_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Overflow",
  50,
  values_3
);
function Style$Overflow$1() {
  Style$Overflow.call(this, "VISIBLE", 0);
}

defineClass(296, 50, $intern_24, Style$Overflow$1);
var Lcom_ait_lienzo_client_core_style_Style$Overflow$1_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Overflow/1",
  296,
  null
);
function Style$Overflow$2() {
  Style$Overflow.call(this, "HIDDEN", 1);
}

defineClass(297, 50, $intern_24, Style$Overflow$2);
var Lcom_ait_lienzo_client_core_style_Style$Overflow$2_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Overflow/2",
  297,
  null
);
function Style$Overflow$3() {
  Style$Overflow.call(this, "SCROLL", 2);
}

defineClass(298, 50, $intern_24, Style$Overflow$3);
var Lcom_ait_lienzo_client_core_style_Style$Overflow$3_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Overflow/3",
  298,
  null
);
function Style$Overflow$4() {
  Style$Overflow.call(this, "AUTO", 3);
}

defineClass(299, 50, $intern_24, Style$Overflow$4);
var Lcom_ait_lienzo_client_core_style_Style$Overflow$4_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Overflow/4",
  299,
  null
);
function $clinit_Style$Position() {
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1();
  RELATIVE = new Style$Position$2();
  ABSOLUTE = new Style$Position$3();
  FIXED = new Style$Position$4();
}

function Style$Position(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4() {
  $clinit_Style$Position();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_client_core_style_Style$Position_2_classLit, 1),
    $intern_5,
    51,
    0,
    [STATIC, RELATIVE, ABSOLUTE, FIXED]
  );
}

defineClass(51, 7, $intern_25);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_ait_lienzo_client_core_style_Style$Position_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Position",
  51,
  values_4
);
function Style$Position$1() {
  Style$Position.call(this, "STATIC", 0);
}

defineClass(300, 51, $intern_25, Style$Position$1);
var Lcom_ait_lienzo_client_core_style_Style$Position$1_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Position/1",
  300,
  null
);
function Style$Position$2() {
  Style$Position.call(this, "RELATIVE", 1);
}

defineClass(301, 51, $intern_25, Style$Position$2);
var Lcom_ait_lienzo_client_core_style_Style$Position$2_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Position/2",
  301,
  null
);
function Style$Position$3() {
  Style$Position.call(this, "ABSOLUTE", 2);
}

defineClass(302, 51, $intern_25, Style$Position$3);
var Lcom_ait_lienzo_client_core_style_Style$Position$3_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Position/3",
  302,
  null
);
function Style$Position$4() {
  Style$Position.call(this, "FIXED", 3);
}

defineClass(303, 51, $intern_25, Style$Position$4);
var Lcom_ait_lienzo_client_core_style_Style$Position$4_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Position/4",
  303,
  null
);
function $clinit_Style$Unit() {
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1();
  PCT = new Style$Unit$2();
  EM = new Style$Unit$3();
  EX = new Style$Unit$4();
  PT = new Style$Unit$5();
  PC = new Style$Unit$6();
  IN = new Style$Unit$7();
  CM = new Style$Unit$8();
  MM = new Style$Unit$9();
}

function Style$Unit(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5() {
  $clinit_Style$Unit();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_client_core_style_Style$Unit_2_classLit, 1),
    $intern_5,
    31,
    0,
    [PX, PCT, EM, EX, PT, PC, IN, CM, MM]
  );
}

defineClass(31, 7, $intern_26);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_ait_lienzo_client_core_style_Style$Unit_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Unit",
  31,
  values_5
);
function Style$Unit$1() {
  Style$Unit.call(this, "PX", 0);
}

defineClass(304, 31, $intern_26, Style$Unit$1);
var Lcom_ait_lienzo_client_core_style_Style$Unit$1_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Unit/1",
  304,
  null
);
function Style$Unit$2() {
  Style$Unit.call(this, "PCT", 1);
}

defineClass(305, 31, $intern_26, Style$Unit$2);
var Lcom_ait_lienzo_client_core_style_Style$Unit$2_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Unit/2",
  305,
  null
);
function Style$Unit$3() {
  Style$Unit.call(this, "EM", 2);
}

defineClass(306, 31, $intern_26, Style$Unit$3);
var Lcom_ait_lienzo_client_core_style_Style$Unit$3_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Unit/3",
  306,
  null
);
function Style$Unit$4() {
  Style$Unit.call(this, "EX", 3);
}

defineClass(307, 31, $intern_26, Style$Unit$4);
var Lcom_ait_lienzo_client_core_style_Style$Unit$4_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Unit/4",
  307,
  null
);
function Style$Unit$5() {
  Style$Unit.call(this, "PT", 4);
}

defineClass(308, 31, $intern_26, Style$Unit$5);
var Lcom_ait_lienzo_client_core_style_Style$Unit$5_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Unit/5",
  308,
  null
);
function Style$Unit$6() {
  Style$Unit.call(this, "PC", 5);
}

defineClass(309, 31, $intern_26, Style$Unit$6);
var Lcom_ait_lienzo_client_core_style_Style$Unit$6_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Unit/6",
  309,
  null
);
function Style$Unit$7() {
  Style$Unit.call(this, "IN", 6);
}

defineClass(310, 31, $intern_26, Style$Unit$7);
var Lcom_ait_lienzo_client_core_style_Style$Unit$7_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Unit/7",
  310,
  null
);
function Style$Unit$8() {
  Style$Unit.call(this, "CM", 7);
}

defineClass(311, 31, $intern_26, Style$Unit$8);
var Lcom_ait_lienzo_client_core_style_Style$Unit$8_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Unit/8",
  311,
  null
);
function Style$Unit$9() {
  Style$Unit.call(this, "MM", 8);
}

defineClass(312, 31, $intern_26, Style$Unit$9);
var Lcom_ait_lienzo_client_core_style_Style$Unit$9_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Unit/9",
  312,
  null
);
function $clinit_Style$Visibility() {
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1();
  HIDDEN_0 = new Style$Visibility$2();
}

function Style$Visibility(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6() {
  $clinit_Style$Visibility();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_client_core_style_Style$Visibility_2_classLit, 1),
    $intern_5,
    81,
    0,
    [VISIBLE_0, HIDDEN_0]
  );
}

defineClass(81, 7, $intern_27);
var HIDDEN_0, VISIBLE_0;
var Lcom_ait_lienzo_client_core_style_Style$Visibility_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Visibility",
  81,
  values_6
);
function Style$Visibility$1() {
  Style$Visibility.call(this, "VISIBLE", 0);
}

defineClass(313, 81, $intern_27, Style$Visibility$1);
var Lcom_ait_lienzo_client_core_style_Style$Visibility$1_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Visibility/1",
  313,
  null
);
function Style$Visibility$2() {
  Style$Visibility.call(this, "HIDDEN", 1);
}

defineClass(314, 81, $intern_27, Style$Visibility$2);
var Lcom_ait_lienzo_client_core_style_Style$Visibility$2_2_classLit = createForEnum(
  "com.ait.lienzo.client.core.style",
  "Style/Visibility/2",
  314,
  null
);
function BoundedListIterator(listof) {
  this.m_curpos = 0;
  this.m_listof = listof;
  this.m_szlist = $getLength_0(listof.m_properties);
}

defineClass(346, 1, {}, BoundedListIterator);
_.hasNext_0 = function hasNext() {
  return this.m_curpos != this.m_szlist;
};
_.next_1 = function next() {
  var i;
  i = this.m_curpos;
  if (i >= this.m_szlist) {
    throw toJs(new NoSuchElementException());
  }
  this.m_curpos = i + 1;
  return $get(this.m_listof, i);
};
_.remove_0 = function remove_0() {
  throw toJs(new UnsupportedOperationException());
};
_.m_curpos = 0;
_.m_szlist = 0;
var Lcom_ait_lienzo_client_core_types_BoundedListIterator_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "BoundedListIterator",
  346
);
function $add_5(this$static, x_0, y_0) {
  x_0 < this$static.minx && (this$static.minx = x_0);
  x_0 > this$static.maxx && (this$static.maxx = x_0);
  y_0 < this$static.miny && (this$static.miny = y_0);
  y_0 > this$static.maxy && (this$static.maxy = y_0);
  return this$static;
}

function $addBoundingBox(this$static, bbox) {
  if (bbox) {
    $addX(this$static, bbox.minx);
    $addY(this$static, bbox.miny);
    $addX(this$static, bbox.maxx);
    $addY(this$static, bbox.maxy);
  }
  return this$static;
}

function $addDoubles(this$static, points) {
  var i, p, size_0;
  if (null != points) {
    size_0 = points.length;
    for (i = 0; i < size_0; i++) {
      p = points[i];
      if (p) {
        $addX(this$static, p.x);
        $addY(this$static, p.y);
      }
    }
  }
  return this$static;
}

function $addPoint2D(this$static, point) {
  if (point) {
    $addX(this$static, point.x);
    $addY(this$static, point.y);
  }
  return this$static;
}

function $addPoint2DArray(this$static, points) {
  var i, p, size_0;
  if (null != points) {
    size_0 = points.length;
    for (i = 0; i < size_0; i++) {
      p = points[i];
      if (p) {
        $addX(this$static, p.x);
        $addY(this$static, p.y);
      }
    }
  }
  return this$static;
}

function $addX(this$static, x_0) {
  x_0 < this$static.minx && (this$static.minx = x_0);
  x_0 > this$static.maxx && (this$static.maxx = x_0);
  return this$static;
}

function $addY(this$static, y_0) {
  y_0 < this$static.miny && (this$static.miny = y_0);
  y_0 > this$static.maxy && (this$static.maxy = y_0);
  return this$static;
}

function $copy(this$static) {
  var boundingBox;
  boundingBox = new BoundingBox();
  boundingBox.minx = this$static.minx;
  boundingBox.miny = this$static.miny;
  boundingBox.maxx = this$static.maxx;
  boundingBox.maxy = this$static.maxy;
  return boundingBox;
}

function $getHeight(this$static) {
  return $wnd.Math.abs(this$static.maxy - this$static.miny);
}

function $getWidth(this$static) {
  return $wnd.Math.abs(this$static.maxx - this$static.minx);
}

function BoundingBox() {
  this.minx = $intern_28;
  this.miny = $intern_28;
  this.maxx = $intern_29;
  this.maxy = $intern_29;
}

function fromArrayOfPoint2D() {
  var $i, box, points;
  points = initUnidimensionalArray(
    Lcom_ait_lienzo_client_core_types_Point2D_2_classLit,
    $intern_4,
    9,
    arguments.length,
    0,
    1
  );
  for ($i = 0; $i < arguments.length; $i++) {
    points[$i] = arguments[$i];
  }
  box = new BoundingBox();
  $addDoubles(box, points);
  return box;
}

function fromBoundingBox(bbox) {
  return fromDoubles(bbox.minx, bbox.miny, bbox.maxx, bbox.maxy);
}

function fromDoubles(minx, miny, maxx, maxy) {
  var box;
  box = new BoundingBox();
  minx < box.minx && (box.minx = minx);
  minx > box.maxx && (box.maxx = minx);
  miny < box.miny && (box.miny = miny);
  miny > box.maxy && (box.maxy = miny);
  maxx < box.minx && (box.minx = maxx);
  maxx > box.maxx && (box.maxx = maxx);
  maxy < box.miny && (box.miny = maxy);
  maxy > box.maxy && (box.maxy = maxy);
  return box;
}

function fromPoint2DArray(points) {
  var box;
  box = new BoundingBox();
  $addPoint2DArray(box, points);
  return box;
}

defineClass(42, 1, { 42: 1 }, BoundingBox);
_.add = function add_1(x_0, y_0) {
  return $add_5(this, x_0, y_0);
};
_.addBoundingBox = function addBoundingBox(bbox) {
  return $addBoundingBox(this, bbox);
};
_.addDoubles = function addDoubles() {
  var $i, points;
  points = initUnidimensionalArray(
    Lcom_ait_lienzo_client_core_types_Point2D_2_classLit,
    $intern_4,
    9,
    arguments.length,
    0,
    1
  );
  for ($i = 0; $i < arguments.length; $i++) {
    points[$i] = arguments[$i];
  }
  return $addDoubles(this, points);
};
_.addPoint2D = function addPoint2D(point) {
  return $addPoint2D(this, point);
};
_.addPoint2DArray = function addPoint2DArray(points) {
  return $addPoint2DArray(this, points);
};
_.addX = function addX(x_0) {
  return $addX(this, x_0);
};
_.addY = function addY(y_0) {
  return $addY(this, y_0);
};
_.containsBoundingBox = function containsBoundingBox(other) {
  return this.minx <= other.minx && this.maxx >= other.maxx && this.miny <= other.miny && this.maxy >= other.maxy;
};
_.containsPoint = function containsPoint(p) {
  return this.minx <= p.x && this.maxx >= p.x && this.miny <= p.y && this.maxy >= p.y;
};
_.copy = function copy_3() {
  return $copy(this);
};
_.equals = function equals_4(other) {
  var that;
  if (other == null || !instanceOf(other, 42)) {
    return false;
  }
  if (this === other) {
    return true;
  }
  that = other;
  return (
    that.minx == this.minx &&
    that.miny == this.miny &&
    $wnd.Math.abs(that.maxx - that.minx) == $wnd.Math.abs(this.maxx - this.minx) &&
    $wnd.Math.abs(that.maxy - that.miny) == $wnd.Math.abs(this.maxy - this.miny)
  );
};
_.equals_0 = function (other) {
  return this.equals(other);
};
_.getHeight = function getHeight_1() {
  return $getHeight(this);
};
_.getMaxX = function getMaxX() {
  return this.maxx;
};
_.getMaxY = function getMaxY() {
  return this.maxy;
};
_.getMinX = function getMinX() {
  return this.minx;
};
_.getMinY = function getMinY() {
  return this.miny;
};
_.getWidth = function getWidth_1() {
  return $getWidth(this);
};
_.getX = function getX_2() {
  return this.minx;
};
_.getY = function getY_2() {
  return this.miny;
};
_.hashCode = function hashCode_5() {
  return hashCode_20(
    stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 5, [
      this.minx,
      this.miny,
      this.maxx,
      this.maxy,
    ])
  );
};
_.hashCode_0 = function () {
  return this.hashCode();
};
_.intersects = function intersects(other) {
  if (this.maxx < other.minx) {
    return false;
  }
  if (this.minx > other.maxx) {
    return false;
  }
  if (this.maxy < other.miny) {
    return false;
  }
  if (this.miny > other.maxy) {
    return false;
  }
  return true;
};
_.isEmpty = function isEmpty() {
  return $wnd.Math.abs(this.maxx - this.minx) == 0 && $wnd.Math.abs(this.maxy - this.miny) == 0;
};
_.isValid = function isValid() {
  var maxx, maxy, minx, miny;
  minx = this.minx;
  maxx = this.maxx;
  if (maxx <= minx || maxx == $intern_29 || minx == $intern_28) {
    return false;
  }
  miny = this.miny;
  maxy = this.maxy;
  if (maxy <= miny || maxy == $intern_29 || miny == $intern_28) {
    return false;
  }
  return true;
};
_.nonEmpty = function nonEmpty() {
  return !($wnd.Math.abs(this.maxx - this.minx) == 0 && $wnd.Math.abs(this.maxy - this.miny) == 0);
};
_.offset = function offset_0(dx, dy) {
  this.minx = this.minx + dx;
  this.maxx = this.maxx + dx;
  this.miny = this.miny + dy;
  this.maxy = this.maxy + dy;
};
_.toString = function toString_5() {
  return "BoundingBox{minx=" + this.minx + ", miny=" + this.miny + ", maxx=" + this.maxx + ", maxy=" + this.maxy + "}";
};
_.toString_0 = function () {
  return this.toString();
};
_.maxx = 0;
_.maxy = 0;
_.minx = 0;
_.miny = 0;
var Lcom_ait_lienzo_client_core_types_BoundingBox_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "BoundingBox",
  42
);
function $transform_1(this$static, computedOffsetX, computedOffsetY, transform) {
  var i, leng, p;
  if (transform) {
    leng = this$static.m_array.length;
    for (i = 0; i < leng; i++) {
      p = this$static.m_array[i];
      $transform_2(transform, p, p);
      p.x += computedOffsetX;
      p.y += computedOffsetY;
    }
  }
  return this$static;
}

function BoundingPoints(bbox) {
  var h, w, x_0, y_0;
  this.m_array = new $wnd.Array();
  x_0 = bbox.minx;
  y_0 = bbox.miny;
  w = $wnd.Math.abs(bbox.maxx - bbox.minx);
  h = $wnd.Math.abs(bbox.maxy - bbox.miny);
  this.m_array.push(new Point2D(x_0, y_0));
  this.m_array.push(new Point2D(x_0 + w, y_0));
  this.m_array.push(new Point2D(x_0 + w, y_0 + h));
  this.m_array.push(new Point2D(x_0, y_0 + h));
}

defineClass(104, 1, { 104: 1 }, BoundingPoints);
_.equals_0 = function equals_5(other) {
  if (other == null || !instanceOf(other, 104)) {
    return false;
  }
  if (this === other) {
    return true;
  }
  return equals_Ljava_lang_Object__Z__devirtual$(other.m_array, this.m_array);
};
_.hashCode_0 = function hashCode_6() {
  return getHashCode_1($toJSONString(this.m_array));
};
_.iterator = function iterator_3() {
  return new AbstractList$IteratorImpl($asList(this.m_array));
};
_.toString_0 = function toString_6() {
  return $toJSONString(this.m_array);
};
var Lcom_ait_lienzo_client_core_types_BoundingPoints_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "BoundingPoints",
  104
);
function $next(this$static) {
  this$static.m_r_color += 16;
  if (this$static.m_r_color >= 256) {
    this$static.m_r_color = this$static.m_r_color - 255;
    this$static.m_g_color += 16;
    if (this$static.m_g_color >= 256) {
      this$static.m_g_color = this$static.m_g_color - 255;
      this$static.m_b_color += 16;
      if (this$static.m_b_color >= 256) {
        this$static.m_b_color = this$static.m_b_color - 255;
        return $next(this$static);
      }
    }
  }
  return rgbToBrowserHexColor(this$static.m_r_color, this$static.m_g_color, this$static.m_b_color);
}

function ColorKeyRotor() {}

defineClass(150, 1, {}, ColorKeyRotor);
_.m_b_color = 0;
_.m_g_color = 0;
_.m_r_color = 0;
var Lcom_ait_lienzo_client_core_types_ColorKeyRotor_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "ColorKeyRotor",
  150
);
function $getNormalizedArray(this$static) {
  var dashes, i, leng;
  leng = $wnd.Math.abs(this$static.m_jso.length);
  if (leng < 1) {
    return initUnidimensionalArray(D_classLit, $intern_11, 12, 0, 15, 1);
  }
  if (leng % 2 == 1) {
    dashes = initUnidimensionalArray(D_classLit, $intern_11, 12, leng * 2, 15, 1);
    for (i = 0; i < leng; i++) {
      dashes[i] = dashes[i + leng] = this$static.m_jso[i];
    }
    return dashes;
  }
  return this$static.m_jso;
}

function DashArray(jso) {
  this.m_jso = jso;
}

defineClass(88, 1, { 88: 1 }, DashArray);
_.equals_0 = function equals_6(other) {
  var i, leng, o_jso, that;
  if (other == null || !instanceOf(other, 88)) {
    return false;
  }
  if (this === other) {
    return true;
  }
  that = other;
  leng = this.m_jso.length;
  if (that.m_jso.length != leng) {
    return false;
  }
  o_jso = that.m_jso;
  for (i = 0; i < leng; i++) {
    if (o_jso[i] != this.m_jso[i]) {
      return false;
    }
  }
  return true;
};
_.hashCode_0 = function hashCode_7() {
  return getHashCode_1($wnd.goog.global.JSON.stringify(this.m_jso));
};
_.toString_0 = function toString_7() {
  return $wnd.goog.global.JSON.stringify(this.m_jso);
};
var Lcom_ait_lienzo_client_core_types_DashArray_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "DashArray",
  88
);
defineClass(417, 1, {});
var Lcom_ait_lienzo_client_core_types_FillGradient$GradientJSO_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "FillGradient/GradientJSO",
  417
);
function ImageDataPixelColor(source) {
  var data_0;
  data_0 = source.data;
  this.m_r = round_int($doubleValue(data_0[0]));
  this.m_g = round_int($doubleValue(data_0[1]));
  this.m_b = round_int($doubleValue(data_0[2]));
  this.m_a = round_int($doubleValue(data_0[3]));
}

defineClass(196, 1, {}, ImageDataPixelColor);
_.m_a = 0;
_.m_b = 0;
_.m_g = 0;
_.m_r = 0;
var Lcom_ait_lienzo_client_core_types_ImageDataPixelColor_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "ImageDataPixelColor",
  196
);
function $clinit_ImageDataUtil() {
  $clinit_ImageDataUtil = emptyMethod;
  new ScratchPad(1, 1);
}

function getColorAt(image, x_0, y_0, offset) {
  $clinit_ImageDataUtil();
  if (image != null && image.data != null) {
    return round_int($doubleValue(image.data[4 * (x_0 + y_0 * image.width) + offset]));
  }
  return 0;
}

function $calculateCenter(this$static, UUID) {
  var absoluteLocation,
    adjustX,
    adjustY,
    areaMaxX,
    areaMaxY,
    dimensions,
    nodeHeight,
    nodeWidth,
    translatedX,
    translatedY,
    visibleAreaX,
    visibleAreaY,
    visibleBounds;
  absoluteLocation = $getAbsoluteLocation(this$static, UUID);
  visibleBounds = $getVisibleBounds(this$static.panel);
  visibleAreaX = visibleBounds.x_0;
  visibleAreaY = visibleBounds.y_0;
  areaMaxX = visibleAreaX + visibleBounds.width_0;
  areaMaxY = visibleAreaY + visibleBounds.height_0;
  if (absoluteLocation != null) {
    dimensions = $getDimensions(this$static, UUID);
    nodeWidth = 0;
    nodeHeight = 0;
    if (dimensions != null) {
      nodeWidth = $doubleValue($get_4(dimensions, 0));
      nodeHeight = $doubleValue($get_4(dimensions, 1));
    }
    adjustX = visibleAreaX / 2;
    adjustY = visibleAreaY / 2;
    translatedX = -$doubleValue($get_4(absoluteLocation, 0)) + areaMaxX / 2 - nodeWidth / 2 + adjustX;
    translatedY = -$doubleValue($get_4(absoluteLocation, 1)) + areaMaxY / 2 - nodeHeight / 2 + adjustY;
    translatedX = $wnd.Math.min(translatedX, visibleAreaX);
    translatedY = $wnd.Math.min(translatedY, visibleAreaY);
    return stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [translatedX, translatedY]);
  }
  return null;
}

function $centerNode(this$static, uuid) {
  var center;
  if (!$isShapeVisible(this$static, uuid)) {
    center = $calculateCenter(this$static, uuid);
    $translate($getViewport(this$static.layer).transform, center[0], center[1]);
    $refresh_0(this$static.panel);
  }
}

function $getAbsoluteLocation(this$static, UUID) {
  var locationArray, shape_0;
  if (UUID == null || $equals_1("", UUID)) {
    return null;
  }
  shape_0 = $getWiresShape(this$static, UUID);
  if (!shape_0) {
    return null;
  }
  null.$_nullMethod().$_nullMethod();
  locationArray = new $wnd.Array();
  $add_9(locationArray, null.$_nullField);
  $add_9(locationArray, null.$_nullField);
  return locationArray;
}

function $getConnections(this$static, uuid) {
  var headAndTailsMap, i, ii;
  $getWiresShape(this$static, uuid);
  headAndTailsMap = new HashMap();
  for (i = 0; i < (null.$_nullMethod(), 0); i++) {
    null.$_nullMethod().$_nullMethod();
    for (ii = 0; ii < (null.$_nullMethod(), 0); ii++) {
      null.$_nullMethod().$_nullMethod();
      $put(
        headAndTailsMap,
        (null.$_nullMethod(), null.$_nullMethod(), null.$_nullMethod()).$_nullMethod(),
        (null.$_nullMethod(), null.$_nullMethod(), null.$_nullMethod()).$_nullMethod()
      );
    }
  }
  return headAndTailsMap;
}

function $getDimensions(this$static, UUID) {
  var dimensions, dimensionsArray, shape_0;
  if (UUID == null || $equals_1("", UUID)) {
    return null;
  }
  shape_0 = $getWiresShape(this$static, UUID);
  if (!shape_0) {
    return null;
  }
  dimensions = $getBounds();
  dimensionsArray = new $wnd.Array();
  $add_9(dimensionsArray, dimensions.x);
  $add_9(dimensionsArray, dimensions.y);
  return dimensionsArray;
}

function $getNodeIdSet(this$static) {
  var i, ids, shapes;
  shapes = $getShapes(get_0(this$static.layer));
  ids = new HashSet();
  for (i = 0; i < shapes.length; i++) {
    $add_12(ids, shapes[i].m_container.id);
  }
  return ids;
}

function $getWiresShape(this$static, id_0) {
  var jsWiresShape, shape_0, shape$array, shape$index, shape$max, shapes;
  shapes = $getShapes(get_0(this$static.layer));
  for (shape$array = shapes, shape$index = 0, shape$max = shape$array.length; shape$index < shape$max; ++shape$index) {
    shape_0 = shape$array[shape$index];
    if ($equals_1(id_0, null.$_nullMethod())) {
      jsWiresShape = new JsWiresShape(shape_0);
      lister_0 = this$static;
      return jsWiresShape;
    }
  }
  return null;
}

function $isShapeVisible(this$static, uuid) {
  var areaMaxX, areaMaxY, shapeMaxX, shapeMaxY, shapeX, shapeY, visibleAreaX, visibleAreaY, visibleBounds;
  visibleBounds = $getVisibleBounds(this$static.panel);
  $getWiresShape(this$static, uuid);
  null.$_nullMethod().$_nullMethod();
  shapeX = null.$_nullMethod().$_nullField;
  shapeY = null.$_nullMethod().$_nullField;
  shapeMaxX = shapeX + $wnd.Math.abs(null.$_nullField - null.$_nullField);
  shapeMaxY = shapeY + $wnd.Math.abs(null.$_nullField - null.$_nullField);
  visibleAreaX = visibleBounds.x_0;
  visibleAreaY = visibleBounds.y_0;
  areaMaxX = visibleAreaX + visibleBounds.width_0;
  areaMaxY = visibleAreaY + visibleBounds.height_0;
  if (shapeX >= visibleAreaX && shapeMaxX <= areaMaxX && shapeY >= visibleAreaY && shapeMaxY <= areaMaxY) {
    return true;
  }
  return false;
}

function JsCanvas(panel, layer, stateApplier) {
  this.panel = panel;
  this.layer = layer;
  events = null;
}

function getShapeInContainer(id_0, parent_0) {
  var shape_0, shape$iterator, shape1, shapeID, shapes;
  shapes = (!parent_0.m_stor && (parent_0.m_stor = parent_0.getDefaultStorageEngine_0()), parent_0.m_stor.m_list);
  for (
    shape$iterator = new AbstractList$IteratorImpl($asList(shapes));
    shape$iterator.i < shape$iterator.this$01.size();

  ) {
    shape_0 =
      (checkCriticalElement(shape$iterator.i < shape$iterator.this$01.size()),
      shape$iterator.this$01.getAtIndex((shape$iterator.last = shape$iterator.i++)));
    shapeID = shape_0.getID_0();
    if ($equals_1(id_0, shapeID)) {
      return shape_0;
    }
    if (instanceOf(shape_0, 43)) {
      shape1 = getShapeInContainer(id_0, shape_0);
      if (shape1) {
        return shape1;
      }
    }
  }
  return null;
}

defineClass(212, 1, {}, JsCanvas);
_.add = function add_2(shape_0) {
  $add_0(this.layer, shape_0);
};
_.animations = function animations_0() {
  !animations && (animations = new JsCanvasAnimations());
  return animations;
};
_.applyState = function applyState(UUID, state) {
  UUID != null && state != null && null.$_nullMethod();
};
_.calculateCenter = function calculateCenter(UUID) {
  return $calculateCenter(this, UUID);
};
_.center = function center_0(UUID) {
  UUID != null && $centerNode(this, UUID);
};
_.centerNode = function centerNode(uuid) {
  $centerNode(this, uuid);
};
_.close = function close_1() {
  if (this.layer) {
    $clear(this.layer);
    this.layer = null;
  }
  this.panel = null;
};
_.draw = function draw_7() {
  this.layer.draw_1();
};
_.events = function events_0() {
  !events && (events = new JsCanvasEvents(this));
  return events;
};
_.getAbsoluteLocation = function getAbsoluteLocation_0(UUID) {
  return $getAbsoluteLocation(this, UUID);
};
_.getBackgroundColor = function getBackgroundColor_0(UUID) {
  var shape_0;
  if (UUID == null || $equals_1("", UUID)) {
    return null;
  }
  shape_0 = $getWiresShape(this, UUID);
  if (!shape_0) {
    return null;
  }
  return $getBackgroundColor(shape_0);
};
_.getBorderColor = function getBorderColor_0(UUID) {
  var shape_0;
  if (UUID == null || $equals_1("", UUID)) {
    return null;
  }
  shape_0 = $getWiresShape(this, UUID);
  if (!shape_0) {
    return null;
  }
  return $getBorderColor(shape_0);
};
_.getCanvas = function getCanvas() {
  var canvasElement;
  canvasElement = this.layer.getCanvasElement();
  return canvasElement;
};
_.getDimensions = function getDimensions(UUID) {
  return $getDimensions(this, UUID);
};
_.getLayer = function getLayer_1() {
  return this.layer;
};
_.getLocation = function getLocation_0(UUID) {
  var location_0, locationArray, shape_0;
  if (UUID == null || $equals_1("", UUID)) {
    return null;
  }
  shape_0 = $getWiresShape(this, UUID);
  if (!shape_0) {
    return null;
  }
  location_0 = $getLocationXY();
  locationArray = new $wnd.Array();
  $add_9(locationArray, location_0.x);
  $add_9(locationArray, location_0.y);
  return locationArray;
};
_.getNativeContent = function getNativeContent() {
  var context, nativeContext;
  context = this.layer.getContext_0();
  nativeContext = context.m_jso;
  return nativeContext;
};
_.getNodeIdSet = function getNodeIdSet() {
  return $getNodeIdSet(this);
};
_.getNodeIds = function getNodeIds() {
  var i, ids, shapes;
  shapes = $getShapes(get_0(this.layer));
  ids = new $wnd.Array();
  for (i = 0; i < shapes.length; i++) {
    $add_9(ids, null.$_nullMethod());
  }
  return ids;
};
_.getPanelOffsetLeft = function getPanelOffsetLeft() {
  return this.panel.getElement().offsetLeft;
};
_.getPanelOffsetTop = function getPanelOffsetTop() {
  return this.panel.getElement().offsetTop;
};
_.getScaleX = function getScaleX() {
  return $getViewport(this.layer).transform.v[0];
};
_.getScaleY = function getScaleY() {
  return $getViewport(this.layer).transform.v[3];
};
_.getShape = function getShape_0(id_0) {
  return getShapeInContainer(id_0, this.layer);
};
_.getTranslateX = function getTranslateX() {
  return $getViewport(this.layer).transform.v[4];
};
_.getTranslateY = function getTranslateY() {
  return $getViewport(this.layer).transform.v[5];
};
_.getViewport = function getViewport_1() {
  return $getViewport(this.layer);
};
_.getWiresManager = function getWiresManager() {
  return get_0(this.layer);
};
_.getWiresShape = function getWiresShape(id_0) {
  return $getWiresShape(this, id_0);
};
_.isConnected = function isConnected(uuid1, uuid2) {
  var connections1, connections2, entry, entry$iterator, tail;
  connections1 = $getConnections(this, uuid1);
  connections2 = $getConnections(this, uuid2);
  for (
    entry$iterator = new AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySet(connections1).this$01);
    entry$iterator.hasNext;

  ) {
    entry = $next_0(entry$iterator);
    tail = $get_2(connections2, entry.getKey());
    if (tail != null && $equals_1(tail, entry.getValue())) {
      return true;
    }
  }
  return false;
};
_.isShapeVisible = function isShapeVisible(uuid) {
  return $isShapeVisible(this, uuid);
};
_.log = function log_0() {
  !logger && (logger = new JsCanvasLogger(this));
  return logger;
};
_.rotateGroupOverCenter = function rotateGroupOverCenter(group, degrees, duration) {
  var boundingBox, child, childNodes, i;
  boundingBox = $getBoundingBox(group);
  childNodes = (!group.m_stor && (group.m_stor = new PrimitiveFastArrayStorageEngine()), group.m_stor.m_list);
  for (i = 0; i < childNodes.length; i++) {
    child = $get_4(childNodes, i);
    if (child) {
      child.setOffset(
        $wnd.Math.abs(boundingBox.maxx - boundingBox.minx) / 2,
        $wnd.Math.abs(boundingBox.maxy - boundingBox.miny) / 2
      );
      duration > 0
        ? $run(
            child.animate_0(
              ($clinit_AnimationTweener(), LINEAR),
              new AnimationProperties(
                new AnimationProperty$Properties$DoubleAnimationProperty(
                  (degrees * $intern_13) / 180,
                  ($clinit_Attribute(), ROTATION)
                ),
                stampJavaTypeInfo(
                  getClassLiteralForArray(Lcom_ait_lienzo_client_core_animation_AnimationProperty_2_classLit, 1),
                  $intern_4,
                  91,
                  0,
                  []
                )
              ),
              duration
            )
          )
        : child.setRotationDegrees(degrees);
    }
  }
  this.layer.draw_1();
};
_.scale = function scale_0(factor) {
  $scale($getViewport(this.layer).transform, factor);
};
_.setBackgroundColor = function setBackgroundColor_0(UUID, backgroundColor) {
  var shape_0;
  if (UUID == null || $equals_1("", UUID) || backgroundColor == null || $equals_1("", backgroundColor)) {
    return;
  }
  shape_0 = $getWiresShape(this, UUID);
  if (!shape_0) {
    return;
  }
  $setBackgroundColor(shape_0, backgroundColor);
};
_.setBorderColor = function setBorderColor_0(UUID, borderColor) {
  var shape_0;
  if (UUID == null || $equals_1("", UUID) || borderColor == null || $equals_1("", borderColor)) {
    return;
  }
  shape_0 = $getWiresShape(this, UUID);
  if (!shape_0) {
    return;
  }
  $setBorderColor(shape_0, borderColor);
};
_.translate = function translate(x_0, y_0) {
  $translate($getViewport(this.layer).transform, x_0, y_0);
};
var animations, events, logger;
var Lcom_ait_lienzo_client_core_types_JsCanvas_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "JsCanvas",
  212
);
function JsCanvasAnimations() {}

function animate_0(shape_0, property, duration) {
  shape_0.animate_0(
    ($clinit_AnimationTweener(), LINEAR),
    new AnimationProperties(
      property,
      stampJavaTypeInfo(
        getClassLiteralForArray(Lcom_ait_lienzo_client_core_animation_AnimationProperty_2_classLit, 1),
        $intern_4,
        91,
        0,
        []
      )
    ),
    toDouble_0(duration)
  );
}

defineClass(210, 1, {}, JsCanvasAnimations);
_.alpha = function alpha_1(shape_0, value_0, duration) {
  animate_0(
    shape_0,
    new AnimationProperty$Properties$DoubleAnimationPropertyConstrained_0(
      value_0,
      ($clinit_Attribute(), ALPHA),
      0,
      1,
      1
    ),
    duration
  );
};
_.fillAlpha = function fillAlpha(shape_0, alpha_0, duration) {
  animate_0(
    shape_0,
    new AnimationProperty$Properties$DoubleAnimationPropertyConstrained_0(
      alpha_0,
      ($clinit_Attribute(), FILL_ALPHA),
      0,
      1,
      1
    ),
    duration
  );
};
_.fillColor = function fillColor(shape_0, color_0, duration) {
  animate_0(
    shape_0,
    new AnimationProperty$Properties$StringFillColorAnimationProperty(color_0, ($clinit_Attribute(), FILL)),
    duration
  );
};
_.height = function height_0(shape_0, size_0, duration) {
  animate_0(
    shape_0,
    new AnimationProperty$Properties$DoubleAnimationProperty(size_0, ($clinit_Attribute(), HEIGHT)),
    duration
  );
};
_.radius = function radius_0(shape_0, size_0, duration) {
  animate_0(
    shape_0,
    new AnimationProperty$Properties$DoubleAnimationPropertyConstrained(
      size_0,
      ($clinit_Attribute(), RADIUS),
      0,
      3.4028234663852886e38
    ),
    duration
  );
};
_.rotationDegrees = function rotationDegrees(shape_0, degrees, duration) {
  animate_0(
    shape_0,
    new AnimationProperty$Properties$DoubleAnimationProperty(
      (degrees * $intern_13) / 180,
      ($clinit_Attribute(), ROTATION)
    ),
    duration
  );
};
_.strokeAlpha = function strokeAlpha(shape_0, alpha_0, duration) {
  animate_0(
    shape_0,
    new AnimationProperty$Properties$DoubleAnimationPropertyConstrained_0(
      alpha_0,
      ($clinit_Attribute(), STROKE_ALPHA),
      0,
      1,
      1
    ),
    duration
  );
};
_.strokeColor = function strokeColor(shape_0, color_0, duration) {
  animate_0(
    shape_0,
    new AnimationProperty$Properties$StringStrokeColorAnimationProperty(color_0, ($clinit_Attribute(), FILL)),
    duration
  );
};
_.width = function width_1(shape_0, size_0, duration) {
  animate_0(
    shape_0,
    new AnimationProperty$Properties$DoubleAnimationProperty(size_0, ($clinit_Attribute(), WIDTH)),
    duration
  );
};
_.x = function x_1(shape_0, value_0, duration) {
  animate_0(
    shape_0,
    new AnimationProperty$Properties$DoubleAnimationProperty(value_0, ($clinit_Attribute(), X)),
    duration
  );
};
_.y = function y_1(shape_0, value_0, duration) {
  animate_0(
    shape_0,
    new AnimationProperty$Properties$DoubleAnimationProperty(value_0, ($clinit_Attribute(), Y)),
    duration
  );
};
var Lcom_ait_lienzo_client_core_types_JsCanvasAnimations_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "JsCanvasAnimations",
  210
);
function $dispatchEvent(this$static, type_0, clientX, clientY) {
  var event_0, ix, iy, mouseEventInit, panelOffsetLeft, panelOffsetTop, result, result0, x_0, y_0;
  mouseEventInit = {};
  mouseEventInit.view = ($clinit_DomGlobal(), $wnd.goog.global.window);
  panelOffsetLeft = ((result0 = this$static.canvas.panel.getElement().offsetLeft), result0);
  panelOffsetTop = ((result = this$static.canvas.panel.getElement().offsetTop), result);
  ix = fromDouble_0($wnd.Math.round($wnd.Math.ceil(clientX)));
  iy = fromDouble_0($wnd.Math.round($wnd.Math.ceil(clientY)));
  x_0 = add_6(ix, panelOffsetLeft);
  y_0 = add_6(iy, panelOffsetTop);
  mouseEventInit.clientX = toDouble_0(x_0);
  mouseEventInit.clientY = toDouble_0(y_0);
  mouseEventInit.screenX = toDouble_0(x_0);
  mouseEventInit.screenY = toDouble_0(y_0);
  mouseEventInit.button = 0;
  event_0 = new $wnd.MouseEvent(type_0, mouseEventInit);
  !this$static.canvas.panel.getElement().dispatchEvent(event_0);
  return event_0;
}

function $doDrag(this$static, sx, sy, tx, ty, actual, step, timeout, callback) {
  $clinit_DomGlobal();
  $wnd.goog.global.setTimeout(
    makeLambdaFunction(JsCanvasEvents$1.prototype.onInvoke_0, JsCanvasEvents$1, [
      this$static,
      tx,
      sx,
      actual,
      ty,
      sy,
      step,
      timeout,
      callback,
    ]),
    timeout
  );
}

function $mouseMove(this$static, x_0, y_0) {
  $dispatchEvent(this$static, ($clinit_EventType(), MOUSE_MOVE).type_0, x_0, y_0);
}

function $mouseUp(this$static, x_0, y_0) {
  $dispatchEvent(this$static, ($clinit_EventType(), MOUSE_UP).type_0, x_0, y_0);
}

function $startDrag(this$static, sx, sy, tx, ty, timeout, callback) {
  $dispatchEvent(this$static, ($clinit_EventType(), MOUSE_DOWN).type_0, sx, sy);
  $dispatchEvent(this$static, MOUSE_MOVE.type_0, sx, sy);
  $clinit_DomGlobal();
  $wnd.goog.global.setTimeout(
    makeLambdaFunction(JsCanvasEvents$1.prototype.onInvoke_0, JsCanvasEvents$1, [
      this$static,
      tx,
      sx,
      0.01,
      ty,
      sy,
      0.01,
      timeout,
      callback,
    ]),
    timeout
  );
}

function JsCanvasEvents(canvas) {
  this.canvas = canvas;
}

defineClass(209, 1, {}, JsCanvasEvents);
_.click = function click_0(shape_0) {
  var location_0, x_0, y_0;
  location_0 = shape_0.getComputedLocation_0();
  x_0 = location_0.x;
  y_0 = location_0.y;
  $dispatchEvent(this, ($clinit_EventType(), CLICKED).type_0, x_0, y_0);
};
_.clickAt = function clickAt(x_0, y_0) {
  $dispatchEvent(this, ($clinit_EventType(), CLICKED).type_0, x_0, y_0);
};
_.dispatchEvent = function dispatchEvent_0(type_0, clientX, clientY) {
  return $dispatchEvent(this, type_0, clientX, clientY);
};
_.doubleClick = function doubleClick(shape_0) {
  var location_0, x_0, y_0;
  location_0 = shape_0.getComputedLocation_0();
  x_0 = location_0.x;
  y_0 = location_0.y;
  $dispatchEvent(this, ($clinit_EventType(), DOUBLE_CLICKED).type_0, x_0, y_0);
};
_.doubleClickAt = function doubleClickAt(x_0, y_0) {
  $dispatchEvent(this, ($clinit_EventType(), DOUBLE_CLICKED).type_0, x_0, y_0);
};
_.drag = function drag_0(shape_0, tx, ty, callback) {
  var location_0, x_0, y_0;
  location_0 = shape_0.getComputedLocation_0();
  x_0 = location_0.x;
  y_0 = location_0.y;
  $startDrag(this, x_0, y_0, tx, ty, 5, callback);
};
_.dragControlPoint = function dragControlPoint(sx, sy, tx, ty, steps, timeout, callback) {
  var step;
  $dispatchEvent(this, ($clinit_EventType(), MOUSE_MOVE).type_0, sx, sy);
  $dispatchEvent(this, MOUSE_DOWN.type_0, sx, sy);
  step = 1 / steps;
  $clinit_DomGlobal();
  $wnd.goog.global.setTimeout(
    makeLambdaFunction(JsCanvasEvents$1.prototype.onInvoke_0, JsCanvasEvents$1, [
      this,
      tx,
      sx,
      step,
      ty,
      sy,
      step,
      timeout,
      callback,
    ]),
    timeout
  );
};
_.mouseDown = function mouseDown(x_0, y_0) {
  $dispatchEvent(this, ($clinit_EventType(), MOUSE_DOWN).type_0, x_0, y_0);
};
_.mouseMove = function mouseMove(x_0, y_0) {
  $mouseMove(this, x_0, y_0);
};
_.mouseOut = function mouseOut(x_0, y_0) {
  $dispatchEvent(this, ($clinit_EventType(), MOUSE_OUT).type_0, x_0, y_0);
};
_.mouseOver = function mouseOver(x_0, y_0) {
  $dispatchEvent(this, ($clinit_EventType(), MOUSE_OVER).type_0, x_0, y_0);
};
_.mouseUp = function mouseUp(x_0, y_0) {
  $mouseUp(this, x_0, y_0);
};
_.move = function move_0(shape_0, tx, ty) {
  var location_0, x_0, y_0;
  location_0 = shape_0.getComputedLocation_0();
  x_0 = location_0.x;
  y_0 = location_0.y;
  $dispatchEvent(this, ($clinit_EventType(), MOUSE_DOWN).type_0, x_0, y_0);
  $dispatchEvent(this, MOUSE_MOVE.type_0, x_0, y_0);
  $dispatchEvent(this, MOUSE_MOVE.type_0, tx, ty);
  $dispatchEvent(this, MOUSE_UP.type_0, tx, ty);
};
_.out = function out_0(shape_0) {
  var location_0, x_0, y_0;
  location_0 = shape_0.getComputedLocation_0();
  x_0 = location_0.x;
  y_0 = location_0.y;
  $dispatchEvent(this, ($clinit_EventType(), MOUSE_OUT).type_0, x_0, y_0);
};
_.over = function over(shape_0) {
  var location_0, x_0, y_0;
  location_0 = shape_0.getComputedLocation_0();
  x_0 = location_0.x;
  y_0 = location_0.y;
  $dispatchEvent(this, ($clinit_EventType(), MOUSE_OVER).type_0, x_0, y_0);
};
_.startDrag = function startDrag(sx, sy, tx, ty, timeout, callback) {
  $startDrag(this, sx, sy, tx, ty, timeout, callback);
};
var Lcom_ait_lienzo_client_core_types_JsCanvasEvents_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "JsCanvasEvents",
  209
);
function JsCanvasEvents$1(this$0, val$tx, val$sx, val$actual, val$ty, val$sy, val$step, val$timeout, val$callback) {
  this.this$01 = this$0;
  this.val$tx2 = val$tx;
  this.val$sx4 = val$sx;
  this.val$actual6 = val$actual;
  this.val$ty8 = val$ty;
  this.val$sy10 = val$sy;
  this.val$step12 = val$step;
  this.val$timeout14 = val$timeout;
  this.val$callback15 = val$callback;
}

defineClass(221, $wnd.Function, {}, JsCanvasEvents$1);
_.onInvoke_0 = function onInvoke_0() {
  var dx, dy;
  dx = (this.val$tx2 - this.val$sx4) * this.val$actual6;
  dy = (this.val$ty8 - this.val$sy10) * this.val$actual6;
  $mouseMove(this.this$01, this.val$sx4 + dx, this.val$sy10 + dy);
  if (this.val$actual6 < 1) {
    $doDrag(
      this.this$01,
      this.val$sx4,
      this.val$sy10,
      this.val$tx2,
      this.val$ty8,
      this.val$actual6 + this.val$step12,
      this.val$step12,
      this.val$timeout14,
      this.val$callback15
    );
  } else {
    $mouseUp(this.this$01, this.val$tx2, this.val$ty8);
    this.val$callback15.call(null);
  }
};
_.val$actual6 = 0;
_.val$step12 = 0;
_.val$sx4 = 0;
_.val$sy10 = 0;
_.val$timeout14 = 0;
_.val$tx2 = 0;
_.val$ty8 = 0;
function JsCanvasLogger(canvas) {
  this.canvas = canvas;
}

function log_1(message) {
  ($clinit_DomGlobal(), $wnd.goog.global.console).log(message);
}

defineClass(211, 1, {}, JsCanvasLogger);
_.logWiresShapes = function logWiresShapes() {
  var i, shapes;
  shapes = $getShapes(get_0(this.canvas.layer));
  for (i = 0; i < shapes.length; i++) {
    log_1("WiresShape[" + i + "] ==> " + null.$_nullMethod() + " / " + null.$_nullMethod());
  }
};
var Lcom_ait_lienzo_client_core_types_JsCanvasLogger_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "JsCanvasLogger",
  211
);
function LinearGradient$LinearGradientJSO() {}

function make_4(sx, sy, ex, ey) {
  var grad;
  grad = new LinearGradient$LinearGradientJSO();
  setValues(sx, sy, ex, ey, grad);
  grad.type = "LinearGradient";
  return grad;
}

function setValues(sx, sy, ex, ey, grad) {
  grad.sx = sx;
  grad.sy = sy;
  grad.ex = ex;
  grad.ey = ey;
  grad.colorStops = new $wnd.Array();
}

defineClass(218, 417, {}, LinearGradient$LinearGradientJSO);
_.addColorStop = function addColorStop(stop_0, color_0) {
  this.colorStops.push(
    stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 5, [stop_0, color_0])
  );
};
_.ex = 0;
_.ey = 0;
_.sx = 0;
_.sy = 0;
var Lcom_ait_lienzo_client_core_types_LinearGradient$LinearGradientJSO_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "LinearGradient/LinearGradientJSO",
  218
);
function NFastArrayListIterator(listof) {
  this.m_curpos = 0;
  this.m_listof = listof;
  this.m_szlist = $getLength_0(listof);
}

defineClass(166, 1, {}, NFastArrayListIterator);
_.hasNext_0 = function hasNext_0() {
  return this.m_curpos != this.m_szlist;
};
_.next_1 = function next_0() {
  var i;
  i = this.m_curpos;
  if (i >= this.m_szlist) {
    throw toJs(new NoSuchElementException());
  }
  this.m_curpos = i + 1;
  return $get_4(this.m_listof, i);
};
_.remove_0 = function remove_1() {
  throw toJs(new UnsupportedOperationException());
};
_.m_curpos = 0;
_.m_szlist = 0;
var Lcom_ait_lienzo_client_core_types_NFastArrayListIterator_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "NFastArrayListIterator",
  166
);
function $copy_0(this$static) {
  var command, cp, i;
  command = this$static.command;
  cp = initUnidimensionalArray(D_classLit, $intern_11, 12, this$static.points.length, 15, 1);
  for (i = 0; i < this$static.points.length; i++) {
    cp[i] = this$static.points[i];
  }
  return new PathPartEntryJSO(command, this$static.points);
}

function PathPartEntryJSO(command, points) {
  this.command = command;
  this.points = points;
}

function make_5(command, points) {
  return new PathPartEntryJSO(command, points);
}

defineClass(23, 1, { 23: 1 }, PathPartEntryJSO);
_.copy = function copy_4() {
  return $copy_0(this);
};
_.getCommand = function getCommand() {
  return this.command;
};
_.getPoints = function getPoints_0() {
  return this.points;
};
_.toJSONString = function toJSONString() {
  return $wnd.goog.global.JSON.stringify(this);
};
_.command = 0;
var ARCTO_ABSOLUTE = 5,
  BEZIER_CURVETO_ABSOLUTE = 3,
  CANVAS_ARCTO_ABSOLUTE = 7,
  CLOSE_PATH_PART = 6,
  LINETO_ABSOLUTE = 1,
  MOVETO_ABSOLUTE = 2,
  QUADRATIC_CURVETO_ABSOLUTE = 4,
  UNDEFINED_PATH_PART = 0;
var Lcom_ait_lienzo_client_core_types_PathPartEntryJSO_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "PathPartEntryJSO",
  23
);
function $A(this$static, x0, y0, x1, y1, radius) {
  $push(
    this$static,
    new PathPartEntryJSO(
      7,
      stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
        x0,
        y0,
        (this$static.m_cpx = x1),
        (this$static.m_cpy = y1),
        radius,
      ])
    )
  );
  return this$static;
}

function $C(this$static, x1, y1, x2, y2, x_0, y_0) {
  $push(
    this$static,
    new PathPartEntryJSO(
      3,
      stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
        x1,
        y1,
        x2,
        y2,
        (this$static.m_cpx = x_0),
        (this$static.m_cpy = y_0),
      ])
    )
  );
  return this$static;
}

function $H_0(this$static, x_0) {
  $push(
    this$static,
    new PathPartEntryJSO(
      1,
      stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
        (this$static.m_cpx = x_0),
        this$static.m_cpy,
      ])
    )
  );
  return this$static;
}

function $L(this$static, x_0, y_0) {
  $push(
    this$static,
    new PathPartEntryJSO(
      1,
      stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
        (this$static.m_cpx = x_0),
        (this$static.m_cpy = y_0),
      ])
    )
  );
  return this$static;
}

function $L_0(this$static, p) {
  return $L(this$static, p.x, p.y);
}

function $M(this$static, x_0, y_0) {
  this$static.m_mov = true;
  $push(
    this$static,
    new PathPartEntryJSO(
      2,
      stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
        (this$static.m_cpx = x_0),
        (this$static.m_cpy = y_0),
      ])
    )
  );
  return this$static;
}

function $Q(this$static, cx, cy, x_0, y_0) {
  $push(
    this$static,
    new PathPartEntryJSO(
      4,
      stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
        cx,
        cy,
        (this$static.m_cpx = x_0),
        (this$static.m_cpy = y_0),
      ])
    )
  );
  return this$static;
}

function $V(this$static, y_0) {
  $push(
    this$static,
    new PathPartEntryJSO(
      1,
      stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
        this$static.m_cpx,
        (this$static.m_cpy = y_0),
      ])
    )
  );
  return this$static;
}

function $Z(this$static) {
  $push(this$static, new PathPartEntryJSO(6, initUnidimensionalArray(D_classLit, $intern_11, 12, 0, 15, 1)));
  return $close(this$static);
}

function $circle(this$static, r) {
  var c, x_0, y_0;
  x_0 = this$static.m_cpx;
  y_0 = this$static.m_cpy;
  c = r * 2;
  $M(this$static, x_0 + r, y_0);
  $push(
    this$static,
    new PathPartEntryJSO(
      7,
      stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
        x_0 + c,
        y_0,
        (this$static.m_cpx = x_0 + c),
        (this$static.m_cpy = y_0 + r),
        r,
      ])
    )
  );
  $push(
    this$static,
    new PathPartEntryJSO(
      7,
      stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
        x_0 + c,
        y_0 + c,
        (this$static.m_cpx = x_0 + r),
        (this$static.m_cpy = y_0 + c),
        r,
      ])
    )
  );
  $push(
    this$static,
    new PathPartEntryJSO(
      7,
      stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
        x_0,
        y_0 + c,
        (this$static.m_cpx = x_0),
        (this$static.m_cpy = y_0 + r),
        r,
      ])
    )
  );
  $push(
    this$static,
    new PathPartEntryJSO(
      7,
      stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
        x_0,
        y_0,
        (this$static.m_cpx = x_0 + r),
        (this$static.m_cpy = y_0),
        r,
      ])
    )
  );
  $push(this$static, new PathPartEntryJSO(6, initUnidimensionalArray(D_classLit, $intern_11, 12, 0, 15, 1)));
  $close(this$static);
  return this$static;
}

function $clear_0(this$static) {
  this$static.m_box = null;
  this$static.m_mov = false;
  this$static.m_fin = false;
  $setLength(this$static.m_jso, 0);
}

function $close(this$static) {
  this$static.m_fin = true;
  this$static.m_mov = false;
  return this$static;
}

function $copy_1(this$static) {
  var i, jso;
  jso = new $wnd.Array();
  for (i = 0; i < this$static.m_jso.length; i++) {
    jso.push($copy_0(this$static.m_jso[i]));
  }
  return make_6(jso, this$static.m_mov || this$static.m_fin);
}

function $get_0(this$static, i) {
  return this$static.m_jso[i];
}

function $getBoundingBox_2(this$static) {
  var bb,
    cx,
    cy,
    ep,
    i,
    oldx,
    oldy,
    p,
    p0,
    pa,
    part,
    ra,
    rx,
    ry,
    size_0,
    x0,
    x00,
    x1,
    x10,
    x2,
    x3,
    xvals,
    y0,
    y00,
    y1,
    y10,
    y2,
    y3,
    yvals;
  if (this$static.m_box) {
    return this$static.m_box;
  }
  size_0 = this$static.m_jso.length;
  if (size_0 < 1) {
    this$static.m_box = fromDoubles(0, 0, 0, 0);
    return this$static.m_box;
  }
  this$static.m_box = new BoundingBox();
  oldx = 0;
  oldy = 0;
  i = skipRedundantLeadingMoveTo(this$static);
  for (; i < size_0; i++) {
    part = this$static.m_jso[i];
    p = part.points;
    switch (part.command) {
      case 2:
      case 1:
        $add_5(this$static.m_box, (oldx = p[0]), (oldy = p[1]));
        break;
      case 3: {
        x00 = oldx;
        y00 = oldy;
        x10 = p[0];
        y10 = p[1];
        x2 = p[2];
        y2 = p[3];
        x3 = p[4];
        y3 = p[5];
        xvals = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [x00, x10, x2, x3]);
        yvals = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [y00, y10, y2, y3]);
        $addBoundingBox(this$static.m_box, getBoundingBoxOfCubicCurve(xvals, yvals));
        break;
      }

      case 4:
        $addBoundingBox(
          this$static.m_box,
          getBoundingBoxForQuadraticCurve(
            fromArrayOfPoint2D_0(
              stampJavaTypeInfo(
                getClassLiteralForArray(Lcom_ait_lienzo_client_core_types_Point2D_2_classLit, 1),
                $intern_4,
                9,
                0,
                [new Point2D(oldx, oldy), new Point2D(p[0], p[1]), new Point2D((oldx = p[2]), (oldy = p[3]))]
              )
            )
          )
        );
        break;
      case 5:
        cx = p[0];
        cy = p[1];
        rx = p[2];
        ry = p[3];
        $addX(this$static.m_box, cx + rx);
        $addX(this$static.m_box, cx - rx);
        $addY(this$static.m_box, cy + ry);
        $addY(this$static.m_box, cy - ry);
        oldx = p[8];
        oldy = p[9];
        break;
      case 7:
        x0 = p[0];
        y0 = p[1];
        x1 = p[2];
        y1 = p[3];
        ra = p[4];
        p0 = new Point2D(oldx, oldy);
        pa = getCanvasArcToPoints(p0, new Point2D(x0, y0), new Point2D(x1, y1), ra);
        bb = getBoundingBoxOfArc(pa[0], pa[1], pa[2], ra);
        $equals_0(pa[0], p0) || $addPoint2D(bb, p0);
        $addBoundingBox(this$static.m_box, bb);
        ep = pa[2];
        oldx = ep.x;
        oldy = ep.y;
    }
  }
  return this$static.m_box;
}

function $getPoints(this$static) {
  var ep, i, oldx, oldy, p, p0, pa, part, points, ra, size_0, x0, x1, y0, y1;
  size_0 = this$static.m_jso.length;
  points = new $wnd.Array();
  if (size_0 < 1) {
    return points;
  }
  oldx = 0;
  oldy = 0;
  for (i = 0; i < size_0; i++) {
    part = this$static.m_jso[i];
    p = part.points;
    switch (part.command) {
      case 1:
      case 2:
        $pushXY(points, (oldx = p[0]), (oldy = p[1]));
        break;
      case 3:
        $pushXY(points, (oldx = p[4]), (oldy = p[5]));
        break;
      case 4:
        $pushXY(points, (oldx = p[2]), (oldy = p[3]));
        break;
      case 5:
        $pushXY(points, (oldx = p[8]), (oldy = p[9]));
        break;
      case 7:
        x0 = p[0];
        y0 = p[1];
        x1 = p[2];
        y1 = p[3];
        ra = p[4];
        p0 = new Point2D(oldx, oldy);
        pa = getCanvasArcToPoints(p0, new Point2D(x0, y0), new Point2D(x1, y1), ra);
        ep = pa[2];
        $pushXY(points, (oldx = ep.x), (oldy = ep.y));
    }
  }
  return points;
}

function $push(this$static, part) {
  this$static.m_box = null;
  this$static.m_mov || $M(this$static, 0, 0);
  this$static.m_jso.push(part);
}

function $rect(this$static, x_0, y_0, w, h) {
  $M(this$static, x_0, y_0);
  $push(
    this$static,
    new PathPartEntryJSO(
      1,
      stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
        (this$static.m_cpx = x_0 + w),
        (this$static.m_cpy = y_0),
      ])
    )
  );
  $push(
    this$static,
    new PathPartEntryJSO(
      1,
      stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
        (this$static.m_cpx = x_0 + w),
        (this$static.m_cpy = y_0 + h),
      ])
    )
  );
  $push(
    this$static,
    new PathPartEntryJSO(
      1,
      stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
        (this$static.m_cpx = x_0),
        (this$static.m_cpy = y_0 + h),
      ])
    )
  );
  $push(this$static, new PathPartEntryJSO(6, initUnidimensionalArray(D_classLit, $intern_11, 12, 0, 15, 1)));
  $close(this$static);
  return this$static;
}

function PathPartList() {
  this.m_jso = new $wnd.Array();
}

function convertEndpointToCenterParameterization(points, x1, y1, x2, y2, fa, fs, rx, ry, pv) {
  var cp, cx, cxp, cy, cyp, dt, f, lambda, ps, sp, sq, th, u, v, xp, yp;
  ps = pv * 0.017453292519943295;
  cp = $wnd.Math.cos(ps);
  sp = $wnd.Math.sin(ps);
  xp = (cp * (x1 - x2)) / 2 + (sp * (y1 - y2)) / 2;
  yp = (-sp * (x1 - x2)) / 2 + (cp * (y1 - y2)) / 2;
  lambda = (xp * xp) / (rx * rx) + (yp * yp) / (ry * ry);
  if (lambda > 1) {
    sq = $wnd.Math.sqrt(lambda);
    rx *= sq;
    ry *= sq;
  }
  f = $wnd.Math.sqrt(
    (rx * rx * (ry * ry) - rx * rx * (yp * yp) - ry * ry * (xp * xp)) / (rx * rx * (yp * yp) + ry * ry * (xp * xp))
  );
  fa == fs && (f *= -1);
  isNaN(f) && (f = 0);
  cxp = (f * rx * yp) / ry;
  cyp = (f * -ry * xp) / rx;
  cx = (x1 + x2) / 2 + cp * cxp - sp * cyp;
  cy = (y1 + y2) / 2 + sp * cxp + cp * cyp;
  th = getVectorAngle(
    stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [1, 0]),
    stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [(xp - cxp) / rx, (yp - cyp) / ry])
  );
  u = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [(xp - cxp) / rx, (yp - cyp) / ry]);
  v = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
    (-xp - cxp) / rx,
    (-yp - cyp) / ry,
  ]);
  dt =
    (u[0] * v[1] < u[1] * v[0] ? -1 : 1) *
    $wnd.Math.acos((u[0] * v[0] + u[1] * v[1]) / (distance_0(u[0], u[1]) * distance_0(v[0], v[1])));
  (u[0] * v[0] + u[1] * v[1]) / (distance_0(u[0], u[1]) * distance_0(v[0], v[1])) <= -1 && (dt = $intern_13);
  (u[0] * v[0] + u[1] * v[1]) / (distance_0(u[0], u[1]) * distance_0(v[0], v[1])) >= 1 && (dt = 0);
  fs == 0 && dt > 0 && (dt -= $intern_14);
  fs == 1 && dt < 0 && (dt += $intern_14);
  $setSize(points, 0);
  points.push(cx, cy, rx, ry, th, dt, ps, fs);
}

function make_6(jso, serialized) {
  var i, plist;
  plist = new PathPartList();
  for (i = 0; i < jso.length; i++) {
    plist.m_jso[i] = jso[i];
  }
  if (serialized) {
    plist.m_mov = true;
    plist.m_fin = true;
  }
  return plist;
}

function skipRedundantLeadingMoveTo(list) {
  var i, part;
  i = 0;
  for (; i < list.m_jso.length; i++) {
    part = list.m_jso[i];
    if (part.command != 2) {
      i != 0 && --i;
      break;
    }
  }
  return i;
}

defineClass(61, 1, { 61: 1 }, PathPartList);
_.toString_0 = function toString_8() {
  return $wnd.goog.global.JSON.stringify(this.m_jso);
};
_.m_cpx = 0;
_.m_cpy = 0;
_.m_fin = false;
_.m_mov = false;
var Lcom_ait_lienzo_client_core_types_PathPartList_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "PathPartList",
  61
);
function $asList(this$static) {
  var asArray;
  asArray = this$static;
  return new Arrays$ArrayList(asArray);
}

function $getAt(this$static, index_0) {
  return this$static[index_0];
}

function $getLength_0(this$static) {
  return this$static.length;
}

function $setAt(this$static, index_0, value_0) {
  this$static[index_0] = value_0;
}

function $setLength(this$static, length_0) {
  this$static.length = length_0;
}

function PatternGradient$PatternGradientJSO() {}

function make_7(e, s, r) {
  var grad;
  grad = new PatternGradient$PatternGradientJSO();
  grad.src = s;
  grad.repeat = r;
  grad.type = "PatternGradient";
  grad.image = e;
  return grad;
}

defineClass(219, 417, {}, PatternGradient$PatternGradientJSO);
var Lcom_ait_lienzo_client_core_types_PatternGradient$PatternGradientJSO_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "PatternGradient/PatternGradientJSO",
  219
);
function $add_6(this$static, p) {
  return new Point2D(this$static.x + p.x, this$static.y + p.y);
}

function $copy_2(this$static) {
  return new Point2D(this$static.x, this$static.y);
}

function $distance(this$static, other) {
  var dx, dy;
  dx = other.x - this$static.x;
  dy = other.y - this$static.y;
  return $wnd.Math.sqrt(dx * dx + dy * dy);
}

function $div(this$static, d) {
  if (d == 0) {
    throw toJs(new GeometryException("can't divide by 0"));
  }
  return new Point2D(this$static.x * (1 / d), this$static.y * (1 / d));
}

function $equals_0(this$static, other) {
  var p;
  if (other == null || !instanceOf(other, 9)) {
    return false;
  }
  if (maskUndefined(this$static) === maskUndefined(other)) {
    return true;
  }
  p = other;
  return p.x == this$static.x && p.y == this$static.y;
}

function $getLength(this$static) {
  var dx, dy;
  dx = this$static.x;
  dy = this$static.y;
  return $wnd.Math.sqrt(dx * dx + dy * dy);
}

function $mul(this$static, d) {
  return new Point2D(this$static.x * d, this$static.y * d);
}

function $offset_0(this$static, x_0, y_0) {
  this$static.x += x_0;
  this$static.y += y_0;
  return this$static;
}

function $setX_0(this$static, x_0) {
  this$static.x = x_0;
  return this$static;
}

function $setY_0(this$static, y_0) {
  this$static.y = y_0;
  return this$static;
}

function $sub(this$static, p) {
  return new Point2D(this$static.x - p.x, this$static.y - p.y);
}

function $unit(this$static) {
  var len;
  len = $getLength(this$static);
  if (len == 0) {
    throw toJs(new GeometryException("can't normalize (0,0)"));
  }
  return $div(this$static, len);
}

function Point2D(x_0, y_0) {
  this.x = x_0;
  this.y = y_0;
}

defineClass(9, 1, { 9: 1 }, Point2D);
_.equals_0 = function equals_7(other) {
  return $equals_0(this, other);
};
_.hashCode_0 = function hashCode_8() {
  return hashCode_20(
    stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 5, [this.x, this.y])
  );
};
_.toString_0 = function toString_9() {
  return "Point2D{x=" + this.x + ", y=" + this.y + "}";
};
_.x = 0;
_.y = 0;
var Lcom_ait_lienzo_client_core_types_Point2D_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "Point2D",
  9
);
function $noAdjacentPoints(this$static) {
  var i, no, p1, p2, sz;
  no = new $wnd.Array();
  sz = this$static.length;
  if (sz < 1) {
    return no;
  }
  p1 = this$static[0];
  no.push(new Point2D(p1.x, p1.y));
  if (sz < 2) {
    return no;
  }
  for (i = 1; i < sz; i++) {
    p2 = this$static[i];
    (p1.x == p2.x && p1.y == p2.y) || no.push(new Point2D(p2.x, p2.y));
    p1 = p2;
  }
  return no;
}

function $pushXY(this$static, x_0, y_0) {
  this$static.push(new Point2D(x_0, y_0));
  return this$static;
}

function $set(this$static, i, p) {
  $setAt(this$static, i, p);
  return this$static;
}

function $toJSONString(this$static) {
  return $wnd.goog.global.JSON.stringify(this$static);
}

function fromArrayOfDouble(array) {
  var i, points, size_0;
  points = new $wnd.Array();
  size_0 = $wnd.Math.abs(array.length);
  if (0 == size_0) {
    return points;
  }
  if (size_0 % 2 == 1) {
    throw toJs(new IllegalArgumentException("size of array is not a multiple of 2"));
  }
  for (i = 0; i < size_0; i += 2) {
    $pushXY(points, array[i], array[i + 1]);
  }
  return points;
}

function fromArrayOfPoint2D_0(inArray) {
  var points, size_0;
  points = new $wnd.Array();
  size_0 = $wnd.Math.abs(inArray.length);
  if (0 == size_0) {
    return points;
  }
  points.push.apply(points, inArray);
  return points;
}

function RadialGradient$RadialGradientJSO() {}

function make_8(sx, sy, sr, ex, ey, er) {
  var grad;
  grad = new RadialGradient$RadialGradientJSO();
  setValues(sx, sy, ex, ey, grad);
  grad.sr = sr;
  grad.er = er;
  grad.type = "RadialGradient";
  return grad;
}

defineClass(220, 218, {}, RadialGradient$RadialGradientJSO);
_.er = 0;
_.sr = 0;
var Lcom_ait_lienzo_client_core_types_RadialGradient$RadialGradientJSO_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "RadialGradient/RadialGradientJSO",
  220
);
function $copy_3(this$static) {
  var jso;
  jso = new Transform();
  jso.v = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
    this$static.v[0],
    this$static.v[1],
    this$static.v[2],
    this$static.v[3],
    this$static.v[4],
    this$static.v[5],
  ]);
  return jso;
}

function $getInverse(this$static) {
  var det, inverse, m00, m01, m02, m10, m11, m12;
  if ($wnd.Math.abs(this$static.v[0] * this$static.v[3] - this$static.v[2] * this$static.v[1]) <= 4.9e-324) {
    throw toJs(new GeometryException("Can't invert this matrix - determinant is near 0"));
  }
  m00 = this$static.v[0];
  m10 = this$static.v[1];
  m01 = this$static.v[2];
  m11 = this$static.v[3];
  m02 = this$static.v[4];
  m12 = this$static.v[5];
  det = m00 * m11 - m01 * m10;
  inverse = new Transform();
  inverse.v = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
    m11 / det,
    -m10 / det,
    -m01 / det,
    m00 / det,
    (m01 * m12 - m11 * m02) / det,
    (m10 * m02 - m00 * m12) / det,
  ]);
  return inverse;
}

function $multiply(this$static, transform) {
  var dx, dy, m11, m12, m21, m22;
  m11 = this$static.v[0] * transform.v[0] + this$static.v[2] * transform.v[1];
  m12 = this$static.v[1] * transform.v[0] + this$static.v[3] * transform.v[1];
  m21 = this$static.v[0] * transform.v[2] + this$static.v[2] * transform.v[3];
  m22 = this$static.v[1] * transform.v[2] + this$static.v[3] * transform.v[3];
  dx = this$static.v[0] * transform.v[4] + this$static.v[2] * transform.v[5] + this$static.v[4];
  dy = this$static.v[1] * transform.v[4] + this$static.v[3] * transform.v[5] + this$static.v[5];
  this$static.v[0] = m11;
  this$static.v[1] = m12;
  this$static.v[2] = m21;
  this$static.v[3] = m22;
  this$static.v[4] = dx;
  this$static.v[5] = dy;
  return this$static;
}

function $rotate(this$static, theta) {
  var c, m11, m12, m21, m22, s;
  c = $wnd.Math.cos(theta);
  s = $wnd.Math.sin(theta);
  m11 = this$static.v[0] * c + this$static.v[2] * s;
  m12 = this$static.v[1] * c + this$static.v[3] * s;
  m21 = this$static.v[0] * -s + this$static.v[2] * c;
  m22 = this$static.v[1] * -s + this$static.v[3] * c;
  this$static.v[0] = m11;
  this$static.v[1] = m12;
  this$static.v[2] = m21;
  this$static.v[3] = m22;
  return this$static;
}

function $same(this$static, that) {
  return (
    this$static.v[0] == that.v[0] &&
    this$static.v[1] == that.v[1] &&
    this$static.v[2] == that.v[2] &&
    this$static.v[3] == that.v[3] &&
    this$static.v[4] == that.v[4] &&
    this$static.v[5] == that.v[5]
  );
}

function $scale(this$static, scaleFactor) {
  this$static.v[0] *= scaleFactor;
  this$static.v[1] *= scaleFactor;
  this$static.v[2] *= scaleFactor;
  this$static.v[3] *= scaleFactor;
  return this$static;
}

function $scaleWithXY(this$static, sx, sy) {
  this$static.v[0] *= sx;
  this$static.v[1] *= sx;
  this$static.v[2] *= sy;
  this$static.v[3] *= sy;
  return this$static;
}

function $shear(this$static, shx, shy) {
  var m00, m10;
  m00 = this$static.v[0];
  m10 = this$static.v[1];
  this$static.v[0] += shy * this$static.v[2];
  this$static.v[1] += shy * this$static.v[3];
  this$static.v[2] += shx * m00;
  this$static.v[3] += shx * m10;
  return this$static;
}

function $transform_2(this$static, ptSrc, ptDst) {
  var x_0, y_0;
  x_0 = ptSrc.x;
  y_0 = ptSrc.y;
  $setX_0(ptDst, x_0 * this$static.v[0] + y_0 * this$static.v[2] + this$static.v[4]);
  $setY_0(ptDst, x_0 * this$static.v[1] + y_0 * this$static.v[3] + this$static.v[5]);
}

function $translate(this$static, tx, ty) {
  this$static.v[4] += this$static.v[0] * tx + this$static.v[2] * ty;
  this$static.v[5] += this$static.v[1] * tx + this$static.v[3] * ty;
  return this$static;
}

function Transform() {
  this.v = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [1, 0, 0, 1, 0, 0]);
}

function create3PointTransform(src_0, target) {
  var T, d, eq, m, p1, p1_, p2, p2_, p3, p3_, rhs, s;
  p1 = src_0[0];
  p2 = src_0[1];
  p3 = src_0[2];
  p1_ = target[0];
  p2_ = target[1];
  p3_ = target[2];
  eq = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 2), $intern_4, 11, 0, [
    stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [p1.x, p1.y, 1, 0, 0, 0]),
    stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [0, 0, 0, p1.x, p1.y, 1]),
    stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [p2.x, p2.y, 1, 0, 0, 0]),
    stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [0, 0, 0, p2.x, p2.y, 1]),
    stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [p3.x, p3.y, 1, 0, 0, 0]),
    stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [0, 0, 0, p3.x, p3.y, 1]),
  ]);
  s = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 2), $intern_4, 11, 0, [
    stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [
      p1_.x,
      p1_.y,
      p2_.x,
      p2_.y,
      p3_.x,
      p3_.y,
    ]),
  ]);
  m = new Matrix_1(eq);
  rhs = $transpose(new Matrix_1(s));
  T = $solve(m, rhs);
  d = T.m_data;
  return makeFromValues(d[0][0], d[3][0], d[1][0], d[4][0], d[2][0], d[5][0]);
}

function createViewportTransform(x_0, y_0, width_0, height, viewportWidth, viewportHeight) {
  var dh, dw, m02, m12, scale, scaleX, scaleY;
  if (width_0 <= 0 || height <= 0) {
    return null;
  }
  scaleX = viewportWidth / width_0;
  scaleY = viewportHeight / height;
  if (scaleX > scaleY) {
    scale = scaleY;
    dw = viewportWidth / scale - width_0;
    x_0 -= dw / 2;
  } else {
    scale = scaleX;
    dh = viewportHeight / scale - height;
    y_0 -= dh / 2;
  }
  m02 = -x_0 * scale;
  m12 = -y_0 * scale;
  return makeFromValues(scale, 0, 0, scale, m02, m12);
}

function fromXY(xfrm, x_0, y_0) {
  !xfrm && (xfrm = new Transform());
  xfrm.v[0] = 1;
  xfrm.v[1] = 0;
  xfrm.v[2] = 0;
  xfrm.v[3] = 1;
  xfrm.v[4] = x_0;
  xfrm.v[5] = y_0;
  return xfrm;
}

function makeFromArray(m) {
  return makeFromValues(m[0], m[1], m[2], m[3], m[4], m[5]);
}

function makeFromValues(m00, m10, m01, m11, m02, m12) {
  var t;
  t = new Transform();
  t.v[0] = m00;
  t.v[1] = m10;
  t.v[2] = m01;
  t.v[3] = m11;
  t.v[4] = m02;
  t.v[5] = m12;
  return t;
}

defineClass(53, 1, { 53: 1 }, Transform);
_.concatenate = function concatenate(transform) {
  $multiply(this, transform);
  return this;
};
_.copy = function copy_5() {
  return $copy_3(this);
};
_.equals = function equals_8(other) {
  if (other == null || !instanceOf(other, 53)) {
    return false;
  }
  if (this === other) {
    return true;
  }
  return $same(other, this);
};
_.equals_0 = function (other) {
  return this.equals(other);
};
_.get = function get_1(i) {
  return this.v[i];
};
_.getDeterminant = function getDeterminant() {
  return this.v[0] * this.v[3] - this.v[2] * this.v[1];
};
_.getInverse = function getInverse() {
  return $getInverse(this);
};
_.getScaleX = function getScaleX_0() {
  return this.v[0];
};
_.getScaleY = function getScaleY_0() {
  return this.v[3];
};
_.getShearX = function getShearX() {
  return this.v[2];
};
_.getShearY = function getShearY() {
  return this.v[1];
};
_.getTranslateX = function getTranslateX_0() {
  return this.v[4];
};
_.getTranslateY = function getTranslateY_0() {
  return this.v[5];
};
_.hashCode = function hashCode_9() {
  return getHashCode_1($wnd.goog.global.JSON.stringify(this));
};
_.hashCode_0 = function () {
  return this.hashCode();
};
_.isIdentity = function isIdentity() {
  return this.v[0] == 1 && this.v[1] == 0 && this.v[2] == 0 && this.v[3] == 1 && this.v[4] == 0 && this.v[5] == 0;
};
_.multiply = function multiply(transform) {
  return $multiply(this, transform);
};
_.reset = function reset_0() {
  this.v = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [1, 0, 0, 1, 0, 0]);
  return this;
};
_.rotate = function rotate(theta) {
  return $rotate(this, theta);
};
_.same = function same(that) {
  return $same(this, that);
};
_.scale = function scale_1(scaleFactor) {
  return $scale(this, scaleFactor);
};
_.scaleAboutPoint = function scaleAboutPoint(scale, x_0, y_0) {
  return (
    (this.v[4] += this.v[0] * x_0 + this.v[2] * y_0),
    (this.v[5] += this.v[1] * x_0 + this.v[3] * y_0),
    $scaleWithXY(this, scale, scale),
    (this.v[4] += this.v[0] * -x_0 + this.v[2] * -y_0),
    (this.v[5] += this.v[1] * -x_0 + this.v[3] * -y_0),
    this
  );
};
_.scaleWithXY = function scaleWithXY(sx, sy) {
  return $scaleWithXY(this, sx, sy);
};
_.shear = function shear_0(shx, shy) {
  return $shear(this, shx, shy);
};
_.toJSONString = function toJSONString_0() {
  return $wnd.goog.global.JSON.stringify(this);
};
_.toString = function toString_10() {
  return $wnd.goog.global.JSON.stringify(this);
};
_.toString_0 = function () {
  return this.toString();
};
_.transform = function transform_0(ptSrc, ptDst) {
  $transform_2(this, ptSrc, ptDst);
};
_.translate = function translate_0(tx, ty) {
  return $translate(this, tx, ty);
};
var Lcom_ait_lienzo_client_core_types_Transform_2_classLit = createForClass(
  "com.ait.lienzo.client.core.types",
  "Transform",
  53
);
function $clinit_ColorExtractor() {
  $clinit_ColorExtractor = emptyMethod;
  SCRATCH = new ScratchPad(2, 2);
}

function extract(color_0) {
  $clinit_ColorExtractor();
  var context, data_0;
  $clear_1(SCRATCH);
  context = SCRATCH.m_context;
  context.m_jso.fillStyle = color_0;
  context.m_jso.fillRect(0, 0, 2, 2);
  data_0 = context.m_jso.getImageData(0, 0, 2, 2);
  return new Color_0(
    ($clinit_ImageDataUtil(), getColorAt(data_0, 1, 1, 0)),
    getColorAt(data_0, 1, 1, 1),
    getColorAt(data_0, 1, 1, 2),
    getColorAt(data_0, 1, 1, 3) / 255
  );
}

var SCRATCH;
function addBezierPolynomial(xval, yval, roots, box) {
  var i, x_0, y_0;
  for (i = 0; i < roots.length; i++) {
    if (roots[i] >= 0) {
      x_0 = cubicBezierPoint(xval, roots[i]);
      y_0 = cubicBezierPoint(yval, roots[i]);
      x_0 < box.minx && (box.minx = x_0);
      x_0 > box.maxx && (box.maxx = x_0);
      y_0 < box.miny && (box.miny = y_0);
      y_0 > box.maxy && (box.maxy = y_0);
    }
  }
}

function adjustStartEndOffsets(p0, p2, p4, radius0, p1, p3) {
  var a0, cappedOffset, dv0, dv1, dx0, dx1, offset, radius, t;
  dv0 = new Point2D(p2.x - p0.x, p2.y - p0.y);
  dx0 = $unit(dv0);
  dv1 = new Point2D(p2.x - p4.x, p2.y - p4.y);
  dx1 = $unit(dv1);
  if ((p0.x == p2.x && p2.y == p4.y) || (p0.y == p2.y && p2.x == p4.x)) {
    radius0 =
      ((radius =
        $wnd.Math.min(
          $getLength(new Point2D(p2.x - p0.x, p2.y - p0.y)),
          $getLength(new Point2D(p2.x - p4.x, p2.y - p4.y))
        ) / 2),
      radius0 > radius ? radius : radius0);
    offset = radius0;
  } else {
    a0 = getAngleFromSSS($distance(p0, p2), $distance(p2, p4), $distance(p0, p4)) / 2;
    offset = (radius0 * $wnd.Math.sin($intern_19 - a0)) / $wnd.Math.sin(a0);
    cappedOffset =
      ((radius =
        $wnd.Math.min(
          $getLength(new Point2D(p2.x - p0.x, p2.y - p0.y)),
          $getLength(new Point2D(p2.x - p4.x, p2.y - p4.y))
        ) / 2),
      offset > radius ? radius : offset);
    if (cappedOffset < offset) {
      offset = cappedOffset;
      radius0 = (offset * $wnd.Math.sin(a0)) / $wnd.Math.sin($intern_19 - a0);
    }
  }
  t = $sub(p2, new Point2D(dx0.x * offset, dx0.y * offset));
  $setX_0(p1, t.x);
  $setY_0(p1, t.y);
  t = $sub(p2, new Point2D(dx1.x * offset, dx1.y * offset));
  $setX_0(p3, t.x);
  $setY_0(p3, t.y);
  return radius0;
}

function collinear(x1, y1, x2, y2, x3, y3) {
  return $wnd.Math.abs((y1 - y2) * (x1 - x3) - (y1 - y3) * (x1 - x2)) < 1.0e-9;
}

function cubicBezierPoint(val, t) {
  var a, b, c, d, s;
  s = 1 - t;
  a = s * s * s;
  b = 3 * s * s * t;
  c = 3 * s * t * t;
  d = t * t * t;
  return a * val[0] + b * val[1] + c * val[2] + d * val[3];
}

function distance_0(dx, dy) {
  return $wnd.Math.sqrt(dx * dx + dy * dy);
}

function drawArcJoinedLines(list, baseList, basePoints, radius) {
  var applyArcToList, closed_0, entry, i, nextEntry, p0, p2, p4, pointsSize;
  pointsSize = basePoints.length;
  closed_0 = isClosed(baseList);
  for (i = 0; i < pointsSize; i++) {
    entry = baseList.m_jso[i];
    nextEntry = baseList.m_jso[i + 1];
    p0 = basePoints[i - 1];
    p2 = basePoints[i];
    p4 = basePoints[i + 1];
    if (closed_0) {
      i == 0 && (p0 = basePoints[pointsSize - 1]);
      i == pointsSize - 1 && (p4 = basePoints[0]);
    } else {
      if (i == 0 || i == pointsSize - 1) {
        p0 = null;
        p4 = null;
      }
    }
    applyArcToList = false;
    isCorner(entry, nextEntry) &&
      !!p0 &&
      !!p4 &&
      (collinear(p0.x, p0.y, p2.x, p2.y, p4.x, p4.y) || (applyArcToList = true));
    applyArcToList ? drawLines(list, p0, p2, p4, radius) : $push(list, $copy_0(entry));
  }
  closed_0 &&
    ($push(list, new PathPartEntryJSO(6, initUnidimensionalArray(D_classLit, $intern_11, 12, 0, 15, 1))), $close(list));
}

function drawArcJoinedLines_0(list, points, radius) {
  var closed_0, closingRadius, i, p0, p0new, p2, p4, plast, plastmin1, size_0, p1, p3, closingRadius_0;
  size_0 = points.length;
  p0 = points[0];
  p2 = points[1];
  p0new = null;
  plast = points[size_0 - 1];
  plastmin1 = points[size_0 - 2];
  closingRadius = 0;
  closed_0 = false;
  p0.x == plast.x && p0.y == plast.y && (closed_0 = true);
  if (closed_0 && !collinear(plastmin1.x, plastmin1.y, p0.x, p0.y, p2.x, p2.y)) {
    p0new = new Point2D(0, 0);
    plast = new Point2D(0, 0);
    closingRadius =
      ((p1 = new Point2D(0, 0)),
      (p3 = new Point2D(0, 0)),
      (closingRadius_0 = adjustStartEndOffsets(plastmin1, p0, p2, radius, p1, p3)),
      $M(list, p3.x, p3.y),
      $setX_0(plast, p1.x),
      $setY_0(plast, p1.y),
      $setX_0(p0new, p3.x),
      $setY_0(p0new, p3.y),
      closingRadius_0);
  }
  for (i = 2; i < size_0; i++) {
    p4 = points[i];
    collinear(p0.x, p0.y, p2.x, p2.y, p4.x, p4.y) ? $L(list, p2.x, p2.y) : drawLines(list, p0, p2, p4, radius);
    p0 = p2;
    p2 = p4;
  }
  $L(list, plast.x, plast.y);
  if (p0new) {
    p0 = points[0];
    $A(list, p0.x, p0.y, p0new.x, p0new.y, closingRadius);
    $push(list, new PathPartEntryJSO(6, initUnidimensionalArray(D_classLit, $intern_11, 12, 0, 15, 1)));
    $close(list);
  }
}

function drawLines(list, p0, p2, p4, radius) {
  var p1, p3;
  p1 = new Point2D(0, 0);
  p3 = new Point2D(0, 0);
  radius = adjustStartEndOffsets(p0, p2, p4, radius, p1, p3);
  $getLength_0(list.m_jso) == 0 ? $M(list, p1.x, p1.y) : $L(list, p1.x, p1.y);
  $A(list, p2.x, p2.y, p3.x, p3.y, radius);
}

function getAngleFromSSS(s0, s1, s2) {
  return $wnd.Math.acos((s0 * s0 + s1 * s1 - s2 * s2) / (2 * (s0 * s1)));
}

function getBoundingBoxForQuadraticCurve(points) {
  var cubicPoints, i, xval, yval;
  cubicPoints = quadraticToCubic(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
  xval = initUnidimensionalArray(D_classLit, $intern_11, 12, 4, 15, 1);
  yval = initUnidimensionalArray(D_classLit, $intern_11, 12, 4, 15, 1);
  for (i = 0; i < ((cubicPoints.length / 2) | 0); i = i + 2) {
    xval[i] = $doubleValue($get_5(cubicPoints, i));
    yval[i] = $doubleValue($get_5(cubicPoints, i + 1));
  }
  return getBoundingBoxOfCubicCurve(xval, yval);
}

function getBoundingBoxOfArc(ps, pc, pe, r) {
  var ae, as, p0, t, xe, xmax, xmin, xs, ye, ymax, ymin, ys;
  xs = ps.x;
  ys = ps.y;
  xe = pe.x;
  ye = pe.y;
  p0 = new Point2D(xs > xe ? xs : xe, pc.y);
  as = getAngleFromSSS($distance(ps, pc), $distance(pc, p0), $distance(ps, p0));
  ps.y < pc.y && (as = $intern_14 - as);
  ae = getAngleFromSSS($distance(pe, pc), $distance(pc, p0), $distance(pe, p0));
  pe.y < pc.y && (ae = $intern_14 - ae);
  if (!(as < ae || (as >= $intern_13 && as < $intern_14 && ae >= 0 && ae < $intern_13))) {
    t = ae;
    ae = as;
    as = t;
  }
  ae < as && (ae += $intern_14);
  xmin = 0;
  xmax = 0;
  ymin = 0;
  ymax = 0;
  if (xs < xe) {
    xmin = xs;
    xmax = xe;
  } else {
    xmin = xe;
    xmax = xs;
  }
  if (ys < ye) {
    ymin = ys;
    ymax = ye;
  } else {
    ymin = ye;
    ymax = ys;
  }
  if (ae > $intern_19) {
    as < $intern_19 && (ymax = pc.y + r);
    if (ae > $intern_13) {
      as < $intern_13 && (xmin = pc.x - r);
      if (ae > $intern_18) {
        as < $intern_18 && (ymin = pc.y - r);
        if (ae > $intern_14) {
          xmax = pc.x + r;
          if (ae > 7.853981633974483) {
            ymax = pc.y + r;
            if (ae > 9.42477796076938) {
              xmin = pc.x - r;
              ae > 10.995574287564276 && (ymin = pc.y - r);
            }
          }
        }
      }
    }
  }
  return fromDoubles(xmin, ymin, xmax, ymax);
}

function getBoundingBoxOfCubicCurve(xval, yval) {
  var box, xroots, yroots;
  xroots = quadraticDerivitiveRoots(xval);
  yroots = quadraticDerivitiveRoots(yval);
  box = new BoundingBox();
  $add_5(box, xval[0], yval[0]);
  $add_5(box, xval[3], yval[3]);
  addBezierPolynomial(xval, yval, xroots, box);
  addBezierPolynomial(xval, yval, yroots, box);
  return box;
}

function getCanvasArcToPoints(p0, p1, p2, r) {
  var a0, dl, dv, dx, ln, midPoint, pc, pe, ps;
  a0 = getAngleFromSSS($distance(p0, p1), $distance(p1, p2), $distance(p0, p2)) / 2;
  ln = (r * $wnd.Math.sin($intern_19 - a0)) / $wnd.Math.sin(a0);
  dv = new Point2D(p1.x - p0.x, p1.y - p0.y);
  dx = $unit(dv);
  dl = new Point2D(dx.x * ln, dx.y * ln);
  ps = new Point2D(p1.x - dl.x, p1.y - dl.y);
  dv = new Point2D(p1.x - p2.x, p1.y - p2.y);
  dx = $unit(dv);
  dl = new Point2D(dx.x * ln, dx.y * ln);
  pe = new Point2D(p1.x - dl.x, p1.y - dl.y);
  midPoint = new Point2D((ps.x + pe.x) / 2, (ps.y + pe.y) / 2);
  dx = $unit(new Point2D(midPoint.x - p1.x, midPoint.y - p1.y));
  pc = $add_6(p1, $mul(dx, $wnd.Math.sqrt(r * r + ln * ln)));
  return fromArrayOfPoint2D_0(
    stampJavaTypeInfo(
      getClassLiteralForArray(Lcom_ait_lienzo_client_core_types_Point2D_2_classLit, 1),
      $intern_4,
      9,
      0,
      [ps, pc, pe]
    )
  );
}

function getVectorAngle(u, v) {
  return (
    (u[0] * v[1] < u[1] * v[0] ? -1 : 1) *
    $wnd.Math.acos((u[0] * v[0] + u[1] * v[1]) / (distance_0(u[0], u[1]) * distance_0(v[0], v[1])))
  );
}

function isClosed(list) {
  var listSize, part;
  listSize = list.m_jso.length;
  if (listSize <= 2) {
    return false;
  }
  part = list.m_jso[listSize - 1];
  return part.command == 6;
}

function isCorner(e1, e2) {
  var c1, c2;
  if (!e1 || !e2) {
    return true;
  }
  c1 = e1.command;
  c2 = e2.command;
  if (c1 == 2 && c2 == 1) {
    return true;
  }
  if (c1 == 1 && c2 == 1) {
    return true;
  }
  if (c1 == 1 && c2 == 6) {
    return true;
  }
  return false;
}

function linearRoots(a, b) {
  var roots, t;
  roots = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [-1, -1, -1]);
  if (!($wnd.Math.abs(a) < 1.0e-6)) {
    t = -b / a;
    0 < t && t < 1 && (roots[0] = t);
  }
  return roots;
}

function quadraticDerivitiveRoots(val) {
  var a, b, c;
  a = -3 * val[0] + 9 * val[1] - 9 * val[2] + 3 * val[3];
  b = 6 * val[0] - 12 * val[1] + 6 * val[2];
  c = 3 * val[1] - 3 * val[0];
  return quadraticRoots(a, b, c);
}

function quadraticRoots(a, b, c) {
  var dq, rdq, roots, t;
  if ($wnd.Math.abs(a) < 1.0e-6) {
    roots = linearRoots(b, c);
    return roots;
  }
  roots = stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [-1, -1, -1]);
  dq = b * b - 4 * a * c;
  if (dq > 0) {
    rdq = $wnd.Math.sqrt(dq);
    t = (-b + rdq) / (2 * a);
    0 < t && t < 1 && (roots[0] = t);
    t = (-b - rdq) / (2 * a);
    0 < t && t < 1 && (roots[1] = t);
  } else if ($wnd.Math.abs(dq) < 1.0e-6) {
    roots[0] = -b / (2 * a);
    roots[1] = roots[0];
  }
  return roots;
}

function quadraticToCubic(x0, y0, cx, cy, x1, y1) {
  var c0x, c0y, c1x, c1y;
  c0x = x0 + $intern_30 * (cx - x0);
  c0y = y0 + $intern_30 * (cy - y0);
  c1x = c0x + (x1 - x0) / 3;
  c1y = c0y + (y1 - y0) / 3;
  return makeFromDoubles(
    stampJavaTypeInfo(getClassLiteralForArray(D_classLit, 1), $intern_11, 12, 15, [x0, y0, c0x, c0y, c1x, c1y, x1, y1])
  );
}

function GeometryException(msg) {
  RuntimeException_0.call(this, msg);
}

defineClass(70, 19, { 70: 1, 3: 1, 24: 1, 19: 1, 16: 1 }, GeometryException);
var Lcom_ait_lienzo_client_core_util_GeometryException_2_classLit = createForClass(
  "com.ait.lienzo.client.core.util",
  "GeometryException",
  70
);
function clone(list) {
  var i, result;
  if (null != list) {
    result = new $wnd.Array();
    if (list.length >= 1) {
      for (i = 0; i < list.length; i++) {
        $add_9(result, $copy_1($get_4(list, i)));
      }
    }
    return result;
  }
  return null;
}

function populate(sourceList, targetList) {
  var i;
  if (sourceList.length >= 1) {
    for (i = 0; i < sourceList.length; i++) {
      $add_9(targetList, $copy_1($get_4(sourceList, i)));
    }
  }
}

function toValuesJsArray(map_0) {
  var next1, result, values;
  result = new $wnd.Array();
  if (0 != map_0.size) {
    values = map_0.values();
    next1 = values.next();
    while (!next1.done) {
      result.push(next1.value);
      next1.done = true;
      next1 = values.next();
    }
  }
  return result;
}

function $solve(this$static, rhs) {
  var A, b, i, j, j0, j1, j2, k, m, max_0, t, x_0;
  if (this$static.m_rows != this$static.m_columns || rhs.m_rows != this$static.m_columns || rhs.m_columns != 1) {
    throw toJs(new GeometryException("Illegal matrix dimensions"));
  }
  A = new Matrix_0(this$static);
  b = new Matrix_0(rhs);
  for (i = 0; i < this$static.m_columns; i++) {
    max_0 = i;
    for (j0 = i + 1; j0 < this$static.m_columns; j0++) {
      $wnd.Math.abs(A.m_data[j0][i]) > $wnd.Math.abs(A.m_data[max_0][i]) && (max_0 = j0);
    }
    $swap(A, i, max_0);
    $swap(b, i, max_0);
    if (A.m_data[i][i] == 0) {
      throw toJs(new RuntimeException_0("Matrix is singular."));
    }
    for (j1 = i + 1; j1 < this$static.m_columns; j1++) {
      b.m_data[j1][0] -= (b.m_data[i][0] * A.m_data[j1][i]) / A.m_data[i][i];
    }
    for (j2 = i + 1; j2 < this$static.m_columns; j2++) {
      m = A.m_data[j2][i] / A.m_data[i][i];
      for (k = i + 1; k < this$static.m_columns; k++) {
        A.m_data[j2][k] -= A.m_data[i][k] * m;
      }
      A.m_data[j2][i] = 0;
    }
  }
  x_0 = new Matrix(this$static.m_columns, 1);
  for (j = this$static.m_columns - 1; j >= 0; j--) {
    t = 0;
    for (k = j + 1; k < this$static.m_columns; k++) {
      t += A.m_data[j][k] * x_0.m_data[k][0];
    }
    x_0.m_data[j][0] = (b.m_data[j][0] - t) / A.m_data[j][j];
  }
  return x_0;
}

function $swap(this$static, i, j) {
  var temp;
  temp = this$static.m_data[i];
  this$static.m_data[i] = this$static.m_data[j];
  this$static.m_data[j] = temp;
}

function $transpose(this$static) {
  var A, i, j;
  A = new Matrix(this$static.m_columns, this$static.m_rows);
  for (i = 0; i < this$static.m_rows; i++) {
    for (j = 0; j < this$static.m_columns; j++) {
      A.m_data[j][i] = this$static.m_data[i][j];
    }
  }
  return A;
}

function Matrix(rows_0, columns) {
  this.m_rows = rows_0;
  this.m_columns = columns;
  this.m_data = initMultidimensionalArray(D_classLit, [$intern_4, $intern_11], [11, 12], 15, [rows_0, columns], 2);
}

function Matrix_0(A) {
  Matrix_1.call(this, A.m_data);
}

function Matrix_1(data_0) {
  var i, j;
  this.m_rows = data_0.length;
  this.m_columns = data_0[0].length;
  this.m_data = initMultidimensionalArray(
    D_classLit,
    [$intern_4, $intern_11],
    [11, 12],
    15,
    [this.m_rows, this.m_columns],
    2
  );
  for (i = 0; i < this.m_rows; i++) {
    for (j = 0; j < this.m_columns; j++) {
      this.m_data[i][j] = data_0[i][j];
    }
  }
}

defineClass(65, 1, {}, Matrix, Matrix_0, Matrix_1);
_.toString_0 = function toString_12() {
  var b, i, j;
  b = new StringBuilder();
  for (i = 0; i < this.m_rows; i++) {
    for (j = 0; j < this.m_columns; j++) {
      j > 0 && ((b.string += ", "), b);
      $append(b, this.m_data[i][j]);
    }
    b.string += "\n";
  }
  return b.string;
};
_.m_columns = 0;
_.m_rows = 0;
var Lcom_ait_lienzo_client_core_util_Matrix_2_classLit = createForClass(
  "com.ait.lienzo.client.core.util",
  "Matrix",
  65
);
function $clear_1(this$static) {
  var context;
  context = this$static.m_context;
  !!context && $clearRect(context, this$static.m_wide, this$static.m_high);
}

function $setPixelSize_2(this$static, wide, high) {
  this$static.m_element.width = this$static.m_wide = wide;
  this$static.m_element.height = this$static.m_high = high;
}

function ScratchPad(wide, high) {
  this.m_wide = wide;
  this.m_high = high;
  if (($clinit_LienzoCore(), IS_CANVAS_SUPPORTED)) {
    this.m_element = ($clinit_DomGlobal(), document_0).createElement("canvas");
    this.m_element.width = wide;
    this.m_element.height = high;
    this.m_context = new Context2D_0(this.m_element);
  } else {
    this.m_element = null;
    this.m_context = null;
  }
}

defineClass(77, 1, {}, ScratchPad);
_.m_high = 0;
_.m_wide = 0;
var Lcom_ait_lienzo_client_core_util_ScratchPad_2_classLit = createForClass(
  "com.ait.lienzo.client.core.util",
  "ScratchPad",
  77
);
function $adjust(this$static, d) {
  var move, x_0, y_0;
  if (($clinit_DragConstraint(), NONE_2) == this$static.m_constraint) {
    return false;
  }
  move = false;
  x_0 = d.x;
  y_0 = d.y;
  if (HORIZONTAL == this$static.m_constraint) {
    y_0 = 0;
    move = true;
  } else if (VERTICAL == this$static.m_constraint) {
    x_0 = 0;
    move = true;
  }
  d.x = x_0;
  d.y = y_0;
  return move;
}

function $startDrag_0(this$static, dragContext) {
  var node;
  node = dragContext.m_prim.asNode();
  this$static.m_constraint = node.getDragConstraint();
  node.getDragBounds();
}

function DefaultDragConstraintEnforcer() {}

defineClass(133, 1, {}, DefaultDragConstraintEnforcer);
var Lcom_ait_lienzo_client_widget_DefaultDragConstraintEnforcer_2_classLit = createForClass(
  "com.ait.lienzo.client.widget",
  "DefaultDragConstraintEnforcer",
  133
);
function $dragDone(this$static) {
  var x_0, y_0;
  x_0 = this$static.m_prmx + this$static.m_lclp.x;
  y_0 = this$static.m_prmy + this$static.m_lclp.y;
  this$static.m_lstx != x_0 && this$static.m_prim.setX((this$static.m_lstx = x_0));
  this$static.m_lsty != y_0 && this$static.m_prim.setY((this$static.m_lsty = y_0));
}

function $dragMoveUpdate(this$static, x_0, y_0) {
  this$static.m_evtx = x_0;
  this$static.m_evty = y_0;
  $dragUpdate(this$static);
}

function $dragOffsetUpdate(this$static, offsetX, offsetY) {
  this$static.m_offsetx += offsetX;
  this$static.m_offsety += offsetY;
  $dragUpdate(this$static);
}

function $dragUpdate(this$static) {
  var localX, localY, p2;
  this$static.m_dstx = this$static.m_evtx - this$static.m_begx;
  this$static.m_dsty = this$static.m_evty - this$static.m_begy;
  p2 = new Point2D(0, 0);
  $transform_2(this$static.m_gtol, new Point2D(this$static.m_dstx, this$static.m_dsty), p2);
  $setX_0(this$static.m_lclp, p2.x + this$static.m_offsetx - this$static.m_pref.x);
  $setY_0(this$static.m_lclp, p2.y + this$static.m_offsety - this$static.m_pref.y);
  !!this$static.m_drag && $adjust(this$static.m_drag, this$static.m_lclp);
  localX = this$static.m_prmx + this$static.m_lclp.x;
  localY = this$static.m_prmy + this$static.m_lclp.y;
  this$static.m_lstx != localX && this$static.m_prim.setX((this$static.m_lstx = localX));
  this$static.m_lsty != localY && this$static.m_prim.setY((this$static.m_lsty = localY));
}

function $drawNodeWithTransforms(this$static, context) {
  context.m_jso.save();
  $transform(context, this$static.m_ltog);
  this$static.m_prim.drawWithTransforms(context, $getNodeParentsAlpha(this$static.m_prim.asNode()), null);
  context.m_jso.restore();
}

function $getNodeParentsAlpha(node) {
  var alpha_0;
  alpha_0 = 1;
  node = node.m_parent;
  while (node) {
    alpha_0 = alpha_0 * node.getAlpha();
    node = node.m_parent;
    !!node && node.m_type_0 == ($clinit_NodeType(), LAYER) && (node = null);
  }
  return alpha_0;
}

function DragContext(x_0, y_0, prim) {
  this.m_lclp = new Point2D(0, 0);
  this.m_pref = new Point2D(0, 0);
  this.m_prim = prim;
  this.m_lstx = this.m_prmx = this.m_prim.getX_0();
  this.m_lsty = this.m_prmy = this.m_prim.getY_0();
  this.m_evtx = this.m_begx = x_0;
  this.m_evty = this.m_begy = y_0;
  this.m_ltog = $getAbsoluteTransform(this.m_prim.getParent_0());
  this.m_gtol = $getInverse(this.m_ltog);
  $transform_2(this.m_gtol, new Point2D(0, 0), this.m_pref);
  this.m_drag = this.m_prim.getDragConstraints();
  !!this.m_drag && $startDrag_0(this.m_drag, this);
}

defineClass(353, 1, {}, DragContext);
_.m_begx = 0;
_.m_begy = 0;
_.m_dstx = 0;
_.m_dsty = 0;
_.m_evtx = 0;
_.m_evty = 0;
_.m_lstx = 0;
_.m_lsty = 0;
_.m_offsetx = 0;
_.m_offsety = 0;
_.m_prmx = 0;
_.m_prmy = 0;
var Lcom_ait_lienzo_client_widget_DragContext_2_classLit = createForClass(
  "com.ait.lienzo.client.widget",
  "DragContext",
  353
);
function $clinit_DragMouseControl() {
  $clinit_DragMouseControl = emptyMethod;
  LEFT_MOUSE_ONLY = new DragMouseControl("LEFT_MOUSE_ONLY", 0, true, false, false);
  MIDDLE_MOUSE_ONLY = new DragMouseControl("MIDDLE_MOUSE_ONLY", 1, false, true, false);
  RIGHT_MOUSE_ONLY = new DragMouseControl("RIGHT_MOUSE_ONLY", 2, false, false, true);
  LEFT_AND_RIGHT_MOUSE = new DragMouseControl("LEFT_AND_RIGHT_MOUSE", 3, true, false, true);
  LEFT_AND_MIDDLE_MOUSE = new DragMouseControl("LEFT_AND_MIDDLE_MOUSE", 4, true, true, false);
  RIGHT_AND_MIDDLE_MOUSE = new DragMouseControl("RIGHT_AND_MIDDLE_MOUSE", 5, false, true, true);
  ANY_MOUSE_BUTTON = new DragMouseControl("ANY_MOUSE_BUTTON", 6, true, true, true);
}

function $allowDrag(this$static, isLeft, isMiddle, isRight) {
  return !(
    (isLeft && !this$static.allowLeft) ||
    (isMiddle && !this$static.allowMiddle) ||
    (isRight && !this$static.allowRight)
  );
}

function DragMouseControl(enum$name, enum$ordinal, left, middle, right) {
  Enum.call(this, enum$name, enum$ordinal);
  this.allowLeft = left;
  this.allowMiddle = middle;
  this.allowRight = right;
}

function values_7() {
  $clinit_DragMouseControl();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_client_widget_DragMouseControl_2_classLit, 1),
    $intern_5,
    57,
    0,
    [
      LEFT_MOUSE_ONLY,
      MIDDLE_MOUSE_ONLY,
      RIGHT_MOUSE_ONLY,
      LEFT_AND_RIGHT_MOUSE,
      LEFT_AND_MIDDLE_MOUSE,
      RIGHT_AND_MIDDLE_MOUSE,
      ANY_MOUSE_BUTTON,
    ]
  );
}

defineClass(57, 7, { 57: 1, 3: 1, 8: 1, 7: 1 }, DragMouseControl);
_.allowLeft = false;
_.allowMiddle = false;
_.allowRight = false;
var ANY_MOUSE_BUTTON,
  LEFT_AND_MIDDLE_MOUSE,
  LEFT_AND_RIGHT_MOUSE,
  LEFT_MOUSE_ONLY,
  MIDDLE_MOUSE_ONLY,
  RIGHT_AND_MIDDLE_MOUSE,
  RIGHT_MOUSE_ONLY;
var Lcom_ait_lienzo_client_widget_DragMouseControl_2_classLit = createForEnum(
  "com.ait.lienzo.client.widget",
  "DragMouseControl",
  57,
  values_7
);
function $setHeight_1(this$static, height) {
  if (!(height >= 0)) {
    throw toJs(new IllegalStateException_0("Height must be positive"));
  }
  this$static.height_0 = height;
  return this$static;
}

function $setWidth(this$static, width_0) {
  if (!(width_0 >= 0)) {
    throw toJs(new IllegalStateException_0("Width must be positive"));
  }
  this$static.width_0 = width_0;
  return this$static;
}

function $setX_1(this$static, x_0) {
  this$static.x_0 = x_0;
  return this$static;
}

function $setY_1(this$static, y_0) {
  this$static.y_0 = y_0;
  return this$static;
}

function Bounds(x_0, y_0, width_0, height) {
  this.x_0 = x_0;
  this.y_0 = y_0;
  $setWidth(this, width_0);
  $setHeight_1(this, height);
}

defineClass(83, 1, {}, Bounds);
_.toString_0 = function toString_13() {
  return "Bounds [" + this.x_0 + ", " + this.y_0 + ", " + this.width_0 + ", " + this.height_0 + "]";
};
_.height_0 = 0;
_.width_0 = 0;
_.x_0 = 0;
_.y_0 = 0;
var Lcom_ait_lienzo_client_widget_panel_Bounds_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel",
  "Bounds",
  83
);
defineClass(415, 1, {});
var Lcom_ait_lienzo_client_widget_panel_LienzoPanel_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel",
  "LienzoPanel",
  415
);
function $add_7(this$static, layer) {
  if (this$static.layer) {
    throw toJs(new IllegalStateException_0("LienzoBoundsPanel type only allows a single layer."));
  }
  this$static.layer = layer;
  $add_8(this$static.lienzoPanel, layer);
  this$static.scrollPanel.style.position = ($clinit_Style$Position(), "relative");
  this$static.scrollPanel.style.overflow = ($clinit_Style$Overflow(), "scroll");
  this$static.internalScrollPanel.style.position = "absolute";
  this$static.domElementContainer.style.position = "absolute";
  this$static.domElementContainer.style.zIndex = valueOf(1);
  $synchronizeScrollSize(this$static);
  $addViewportTransformChangedHandler(
    this$static.layer ? $getViewport(this$static.layer) : null,
    new ScrollablePanel$lambda$11$Type(this$static)
  );
  return this$static;
}

function $refresh_0(this$static) {
  var bounds,
    boundses,
    h,
    w,
    rx,
    delta0,
    value0,
    value1,
    ry,
    delta,
    value2,
    value_0,
    scrollWidth,
    clientWidth,
    max_0,
    scrollHeight,
    clientHeight,
    max_1;
  bounds = $get_1(this$static.boundsProvider, this$static.layer);
  boundses = join_0(bounds, $getVisibleBounds(this$static));
  $setBounds(this$static, boundses.x_0, boundses.y_0, boundses.width_0, boundses.height_0);
  if (this$static.layer) {
    w = toInt_0(fromDouble_0($wnd.Math.round(boundses.width_0)));
    h = toInt_0(fromDouble_0($wnd.Math.round(boundses.height_0)));
    $setPixelSize_2($getScratchPad(this$static.layer), w, h);
  }
  return (
    $synchronizeScrollSize(this$static),
    (rx =
      ((delta0 =
        maxBoundX(this$static.bounds) -
        ((value0 = this$static.bounds.x_0), value0 > 0 ? 0 : value0) -
        $getVisibleBounds(this$static).width_0),
      delta0 == 0
        ? 0
        : (100 *
            -(
              ((this$static.layer ? $getViewport(this$static.layer) : null)
                ? (this$static.layer ? $getViewport(this$static.layer) : null).transform
                : null
              ).v[4] /
                ((this$static.layer ? $getViewport(this$static.layer) : null)
                  ? (this$static.layer ? $getViewport(this$static.layer) : null).transform
                  : null
                ).v[0] +
              ((value1 = this$static.bounds.x_0), value1 > 0 ? 0 : value1)
            )) /
          delta0)),
    (ry =
      ((delta =
        maxBoundY(this$static.bounds) -
        ((value2 = this$static.bounds.y_0), value2 > 0 ? 0 : value2) -
        $getVisibleBounds(this$static).height_0),
      delta == 0
        ? 0
        : (100 *
            -(
              ((this$static.layer ? $getViewport(this$static.layer) : null)
                ? (this$static.layer ? $getViewport(this$static.layer) : null).transform
                : null
              ).v[5] /
                ((this$static.layer ? $getViewport(this$static.layer) : null)
                  ? (this$static.layer ? $getViewport(this$static.layer) : null).transform
                  : null
                ).v[3] +
              ((value_0 = this$static.bounds.y_0), value_0 > 0 ? 0 : value_0)
            )) /
          delta)),
    (scrollWidth = this$static.scrollPanel.scrollWidth),
    (clientWidth = this$static.scrollPanel.clientWidth),
    (max_0 = scrollWidth - clientWidth),
    (this$static.scrollPanel.scrollLeft = (max_0 * rx) / 100),
    (scrollHeight = this$static.scrollPanel.scrollHeight),
    (clientHeight = this$static.scrollPanel.clientHeight),
    (max_1 = scrollHeight - clientHeight),
    (this$static.scrollPanel.scrollTop = (max_1 * ry) / 100),
    undefined,
    !!this$static.layer && $batch(this$static.layer),
    this$static
  );
}

function $setBounds(this$static, x_0, y_0, width_0, height) {
  $setX_1(this$static.bounds, x_0);
  $setY_1(this$static.bounds, y_0);
  $setWidth(this$static.bounds, width_0);
  $setHeight_1(this$static.bounds, height);
}

defineClass(316, 415, {});
_.add_0 = function add_3(layer) {
  return $add_7(this, layer);
};
var Lcom_ait_lienzo_client_widget_panel_LienzoBoundsPanel_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel",
  "LienzoBoundsPanel",
  316
);
function join_0(b1, b2) {
  var boundsBB, result, visibleBB;
  if (!b2) {
    return b1;
  }
  boundsBB = fromDoubles(b1.x_0, b1.y_0, b1.x_0 + b1.width_0, b1.y_0 + b1.height_0);
  visibleBB = fromDoubles(b2.x_0, b2.y_0, b2.x_0 + b2.width_0, b2.y_0 + b2.height_0);
  result = $addBoundingBox(boundsBB, visibleBB);
  return new Bounds(
    result.minx,
    result.miny,
    $wnd.Math.abs(result.maxx - result.minx),
    $wnd.Math.abs(result.maxy - result.miny)
  );
}

function $build(this$static, boxes) {
  var box, box$iterator, result, x_0, y_0, width_0, height;
  result = new BoundingBox();
  0 < result.minx && (result.minx = 0);
  0 > result.maxx && (result.maxx = 0);
  0 < result.miny && (result.miny = 0);
  0 > result.maxy && (result.maxy = 0);
  for (box$iterator = new AbstractList$IteratorImpl($asList(boxes)); box$iterator.i < box$iterator.this$01.size(); ) {
    box =
      (checkCriticalElement(box$iterator.i < box$iterator.this$01.size()),
      box$iterator.this$01.getAtIndex((box$iterator.last = box$iterator.i++)));
    $addBoundingBox(result, box);
  }
  result.minx < 0 && $addX(result, result.miny - this$static.padding);
  result.miny < 0 && $addY(result, result.miny - this$static.padding);
  $add_5(result, result.maxx + this$static.padding, result.maxy + this$static.padding);
  return (
    (x_0 = result.minx),
    (y_0 = result.miny),
    (width_0 = $wnd.Math.abs(result.maxx - result.minx)),
    (height = $wnd.Math.abs(result.maxy - result.miny)),
    new Bounds(x_0, y_0, width_0, height)
  );
}

function $get_1(this$static, layer) {
  var boxes;
  if (layer) {
    boxes = $getAll(layer);
    if (boxes.length >= 1) {
      return $build(this$static, boxes);
    }
  }
  return new Bounds(0, 0, 0, 0);
}

defineClass(331, 1, {});
_.padding = 0;
var Lcom_ait_lienzo_client_widget_panel_impl_BoundsProviderFactory$FunctionalBoundsProvider_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "BoundsProviderFactory/FunctionalBoundsProvider",
  331
);
function $getAll(layer) {
  var boundingBox, result, shape_0, shape$iterator, shapes;
  result = new $wnd.Array();
  shapes = (!layer.m_stor && (layer.m_stor = new PrimitiveFastArrayStorageEngine()), layer.m_stor.m_list);
  for (
    shape$iterator = new AbstractList$IteratorImpl($asList(shapes));
    shape$iterator.i < shape$iterator.this$01.size();

  ) {
    shape_0 =
      (checkCriticalElement(shape$iterator.i < shape$iterator.this$01.size()),
      shape$iterator.this$01.getAtIndex((shape$iterator.last = shape$iterator.i++)));
    boundingBox = fromPoint2DArray(shape_0.getComputedBoundingPoints().m_array);
    result.push(boundingBox);
  }
  return result;
}

function BoundsProviderFactory$PrimitivesBoundsProvider() {
  this.padding = 25;
}

defineClass(332, 331, {}, BoundsProviderFactory$PrimitivesBoundsProvider);
var Lcom_ait_lienzo_client_widget_panel_impl_BoundsProviderFactory$PrimitivesBoundsProvider_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "BoundsProviderFactory/PrimitivesBoundsProvider",
  332
);
function $add_8(this$static, layer) {
  return $add_1(this$static.m_view.m_main, layer), this$static;
}

function $setPixelSize_3(this$static, wide, high) {
  if (this$static.widePx != wide || this$static.highPx != high) {
    this$static.widePx = wide;
    this$static.highPx = high;
    $setPixelSize_1(this$static.m_view, wide, high);
    $draw_1(this$static.m_view);
  }
}

function LienzoFixedPanel(view) {
  this.m_view = view;
  $setDragMouseButtons(this.m_view, ($clinit_DragMouseControl(), LEFT_MOUSE_ONLY));
  ($clinit_LienzoCore(), IS_CANVAS_SUPPORTED)
    ? new LienzoPanelHandlerManager(this)
    : (this.m_view.m_element.innerHTML = ($clinit_MessageConstants(), MESSAGES_0).emptyString);
  this.m_view.m_element.style.outlineStyle = ($clinit_Style$OutlineStyle(), "none");
}

defineClass(338, 415, {}, LienzoFixedPanel);
_.add_0 = function add_4(layer) {
  return $add_8(this, layer);
};
_.getElement = function getElement() {
  return this.m_view.m_element;
};
_.highPx = 0;
_.widePx = 0;
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoFixedPanel_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoFixedPanel",
  338
);
function LienzoPanelEventDetail() {}

defineClass(128, 1, {}, LienzoPanelEventDetail);
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelEventDetail_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelEventDetail",
  128
);
function LienzoPanelDragLimitEventDetail(limitDirection) {
  this.limitDirection = limitDirection;
}

defineClass(169, 128, { 169: 1 }, LienzoPanelDragLimitEventDetail);
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelDragLimitEventDetail_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelDragLimitEventDetail",
  169
);
function $clinit_LienzoPanelDragLimitEventDetail$LimitDirections() {
  $clinit_LienzoPanelDragLimitEventDetail$LimitDirections = emptyMethod;
  LEFT = new LienzoPanelDragLimitEventDetail$LimitDirections("LEFT", 0);
  RIGHT = new LienzoPanelDragLimitEventDetail$LimitDirections("RIGHT", 1);
  TOP = new LienzoPanelDragLimitEventDetail$LimitDirections("TOP", 2);
  DOWN = new LienzoPanelDragLimitEventDetail$LimitDirections("DOWN", 3);
}

function LienzoPanelDragLimitEventDetail$LimitDirections(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8() {
  $clinit_LienzoPanelDragLimitEventDetail$LimitDirections();
  return stampJavaTypeInfo(
    getClassLiteralForArray(
      Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelDragLimitEventDetail$LimitDirections_2_classLit,
      1
    ),
    $intern_5,
    82,
    0,
    [LEFT, RIGHT, TOP, DOWN]
  );
}

defineClass(82, 7, { 82: 1, 3: 1, 8: 1, 7: 1 }, LienzoPanelDragLimitEventDetail$LimitDirections);
var DOWN, LEFT, RIGHT, TOP;
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelDragLimitEventDetail$LimitDirections_2_classLit = createForEnum(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelDragLimitEventDetail/LimitDirections",
  82,
  values_8
);
function addDragLimitsOutEventListener(panel, eventListener) {
  panel.m_view.m_element.addEventListener("lienzoPanelDragLimitsOutEvent", eventListener);
}

function addDragLimitsOverEventListener(panel, eventListener) {
  panel.m_view.m_element.addEventListener("lienzoPanelDragLimitsOverEvent", eventListener);
}

function addPrimitiveDragEndEventListener(panel, eventListener) {
  panel.m_view.m_element.addEventListener("lienzoPanelPrimitiveDragEndEvent", eventListener);
}

function addPrimitiveDragMoveUpdateEventListener(panel, eventListener) {
  panel.m_view.m_element.addEventListener("lienzoPanelPrimitiveDragMoveUpdateEvent", eventListener);
}

function addPrimitiveDragOffsetUpdateEventListener(panel, eventListener) {
  panel.m_view.m_element.addEventListener("lienzoPanelPrimitiveDragOffsetUpdateEvent", eventListener);
}

function addPrimitiveDragStartEventListener(panel, eventListener) {
  panel.m_view.m_element.addEventListener("lienzoPanelPrimitiveDragStartEvent", eventListener);
}

function fireCustomEvent(eventType, panel, detail) {
  var event_0;
  event_0 = new $wnd.CustomEvent(eventType);
  event_0.initCustomEvent(eventType, true, false, detail);
  panel.getElement().dispatchEvent(event_0);
}

function fireDragLimitsOutEvent(panel) {
  var detail;
  detail = new LienzoPanelEventDetail();
  fireCustomEvent("lienzoPanelDragLimitsOutEvent", panel, detail);
}

function fireDragLimitsOverEvent(panel, limitDirections) {
  var detail;
  detail = new LienzoPanelDragLimitEventDetail(limitDirections);
  fireCustomEvent("lienzoPanelDragLimitsOverEvent", panel, detail);
}

function firePrimitiveDragEndEvent(panel, primitive, dragX, dragY) {
  var detail;
  detail = new LienzoPanelPrimitiveDragEventDetail(primitive, dragX, dragY);
  fireCustomEvent("lienzoPanelPrimitiveDragEndEvent", panel, detail);
}

function firePrimitiveDragMoveUpdateEvent(panel, primitive, dragX, dragY) {
  var detail;
  detail = new LienzoPanelPrimitiveDragEventDetail(primitive, dragX, dragY);
  fireCustomEvent("lienzoPanelPrimitiveDragMoveUpdateEvent", panel, detail);
}

function firePrimitiveDragOffsetUpdateEvent(panel, primitive, dragX, dragY) {
  var detail;
  detail = new LienzoPanelPrimitiveDragEventDetail(primitive, dragX, dragY);
  fireCustomEvent("lienzoPanelPrimitiveDragOffsetUpdateEvent", panel, detail);
}

function firePrimitiveDragStartEvent(panel, primitive, dragX, dragY) {
  var detail;
  detail = new LienzoPanelPrimitiveDragEventDetail(primitive, dragX, dragY);
  fireCustomEvent("lienzoPanelPrimitiveDragStartEvent", panel, detail);
}

function $addEventListener(this$static, eventType, listener) {
  $addEventListener_1(this$static.m_lienzoElm, eventType.type_0, listener, null);
}

function $addEventListener_0(this$static, eventType, listener, opt) {
  opt == null
    ? this$static.m_lienzoElm.addEventListener(eventType.type_0, listener)
    : $addEventListener_1(this$static.m_lienzoElm, eventType.type_0, listener, opt);
}

function $addHandlers(this$static) {
  var opt;
  this$static.nodeMouseDownEvent = new NodeMouseDownEvent(this$static.m_lienzoElm);
  this$static.nodeMouseMoveEvent = new NodeMouseMoveEvent(this$static.m_lienzoElm);
  this$static.nodeMouseUpEvent = new NodeMouseUpEvent(this$static.m_lienzoElm);
  this$static.nodeMouseClickEvent = new NodeMouseClickEvent(this$static.m_lienzoElm);
  this$static.nodeMouseDoubleClickEvent = new NodeMouseDoubleClickEvent(this$static.m_lienzoElm);
  this$static.nodeMouseEnterEvent = new NodeMouseEnterEvent(this$static.m_lienzoElm);
  this$static.nodeMouseExitEvent = new NodeMouseExitEvent(this$static.m_lienzoElm);
  this$static.nodeMouseOutEvent = new NodeMouseOutEvent(this$static.m_lienzoElm);
  this$static.nodeMouseOverEvent = new NodeMouseOverEvent(this$static.m_lienzoElm);
  this$static.nodeMouseWheelEvent = new NodeMouseWheelEvent(this$static.m_lienzoElm);
  this$static.nodeTouchStartEvent = new NodeTouchStartEvent(this$static.m_lienzoElm);
  this$static.nodeTouchMoveEvent = new NodeTouchMoveEvent(this$static.m_lienzoElm);
  this$static.nodeTouchEndEvent = new NodeTouchEndEvent(this$static.m_lienzoElm);
  this$static.nodeTouchCancelEvent = new NodeTouchCancelEvent(this$static.m_lienzoElm);
  this$static.nodeDragStartEvent = new NodeDragStartEvent(this$static.m_lienzoElm);
  this$static.nodeDragMoveEvent = new NodeDragMoveEvent(this$static.m_lienzoElm);
  this$static.nodeDragEndEvent = new NodeDragEndEvent(this$static.m_lienzoElm);
  this$static.nodeDragStartEvent = new NodeDragStartEvent(this$static.m_lienzoElm);
  $addEventListener(
    this$static,
    ($clinit_EventType(), CLICKED),
    new LienzoPanelHandlerManager$lambda$0$Type(this$static)
  );
  $addEventListener(this$static, DOUBLE_CLICKED, new LienzoPanelHandlerManager$lambda$1$Type(this$static));
  $addEventListener(this$static, MOUSE_MOVE, new LienzoPanelHandlerManager$lambda$2$Type(this$static));
  $addEventListener(this$static, MOUSE_UP, new LienzoPanelHandlerManager$lambda$3$Type(this$static));
  $addEventListener(this$static, MOUSE_DOWN, new LienzoPanelHandlerManager$lambda$4$Type(this$static));
  $addEventListener(this$static, MOUSE_OUT, new LienzoPanelHandlerManager$lambda$5$Type(this$static));
  $addEventListener(this$static, MOUSE_OVER, new LienzoPanelHandlerManager$lambda$6$Type(this$static));
  opt = {};
  opt.passive = false;
  $addEventListener_0(this$static, MOUSE_WHEEL, new LienzoPanelHandlerManager$lambda$7$Type(this$static), opt);
  $addEventListener(this$static, TOUCH_END, new LienzoPanelHandlerManager$lambda$8$Type(this$static));
  $addEventListener(this$static, TOUCH_MOVE, new LienzoPanelHandlerManager$lambda$9$Type(this$static));
  $addEventListener(this$static, TOUCH_START, new LienzoPanelHandlerManager$lambda$10$Type(this$static));
  $addEventListener(this$static, TOUCH_CANCEL, new LienzoPanelHandlerManager$lambda$11$Type(this$static));
  addDragLimitsOverEventListener(this$static.m_lienzo, new LienzoPanelHandlerManager$lambda$12$Type(this$static));
  addDragLimitsOutEventListener(this$static.m_lienzo, new LienzoPanelHandlerManager$lambda$13$Type(this$static));
}

function $checkPressedMouseButton(this$static, nativeButtonCode) {
  this$static.m_mouse_button_left = nativeButtonCode == 0;
  this$static.m_mouse_button_middle = nativeButtonCode == 1;
  this$static.m_mouse_button_right = nativeButtonCode == 2;
}

function $doCheckEnterExitShape(this$static, mouseEvent, touchEvent, x_0, y_0) {
  var shape_0;
  shape_0 = $findShapeAtPoint_1(this$static.m_viewport, x_0, y_0);
  if (shape_0) {
    !!this$static.m_over_prim &&
      shape_0 != this$static.m_over_prim &&
      $isEventHandled(this$static.m_over_prim, ($clinit_NodeMouseExitEvent(), $clinit_NodeMouseExitEvent(), TYPE_6)) &&
      $fireEvent_1(
        this$static,
        mouseEvent,
        touchEvent,
        x_0,
        y_0,
        this$static.m_over_prim,
        this$static.nodeMouseExitEvent
      );
    if (shape_0 != this$static.m_over_prim) {
      !!shape_0 &&
        $isEventHandled(shape_0, ($clinit_NodeMouseEnterEvent(), $clinit_NodeMouseEnterEvent(), TYPE_5)) &&
        $fireEvent_1(this$static, mouseEvent, touchEvent, x_0, y_0, shape_0, this$static.nodeMouseEnterEvent);
      this$static.m_over_prim = shape_0;
    }
  } else {
    !!this$static.m_over_prim &&
      $isEventHandled(this$static.m_over_prim, ($clinit_NodeMouseExitEvent(), $clinit_NodeMouseExitEvent(), TYPE_6)) &&
      $fireEvent_1(
        this$static,
        mouseEvent,
        touchEvent,
        x_0,
        y_0,
        this$static.m_over_prim,
        this$static.nodeMouseExitEvent
      );
    this$static.m_over_prim = null;
  }
  return shape_0;
}

function $doDragCancel(this$static, x_0, y_0, mouseEvent, touchEvent) {
  if (this$static.m_dragging) {
    $doDragMove(this$static, x_0, y_0, mouseEvent, touchEvent);
    if (this$static.dragLimitsTimer.timerId) {
      $clear_3(this$static.dragLimitsDirection);
      $cancel(this$static.dragLimitsTimer);
    }
    $fireEvent_1(
      this$static,
      mouseEvent,
      touchEvent,
      x_0,
      y_0,
      this$static.m_drag_node.asNode(),
      this$static.nodeDragEndEvent
    );
    firePrimitiveDragEndEvent(this$static.m_lienzo, this$static.m_drag_node, x_0, y_0);
    $dragDone(this$static.m_dragContext);
    this$static.m_drag_node.setDragging(false);
    if (($clinit_DragMode(), DRAG_LAYER) == this$static.m_drag_mode) {
      this$static.m_drag_node.setVisible(true);
      this$static.m_drag_node.getLayer_0().draw_1();
      $clear($get_4($getStorageEngine(this$static.m_viewport.m_drag).m_list, 0));
    }
    this$static.m_drag_node = null;
    this$static.m_drag_mode = null;
    this$static.m_dragging = false;
    this$static.m_dragging_dispatch_move = false;
    this$static.m_dragging_using_touches = false;
  }
}

function $doDragMove(this$static, x_0, y_0, mouseEvent, touchEvent) {
  this$static.lastDragMoveX = x_0;
  this$static.lastDragMoveY = y_0;
  this$static.lastDragMouseEvent = mouseEvent;
  this$static.lastDragTouchEvent = touchEvent;
  $dragMoveUpdate(this$static.m_dragContext, x_0, y_0);
  !!this$static.dragLimitsDirection && $clear_3(this$static.dragLimitsDirection);
  !!this$static.dragLimitsTimer.timerId && $cancel(this$static.dragLimitsTimer);
  firePrimitiveDragMoveUpdateEvent(this$static.m_lienzo, this$static.m_drag_node, x_0, y_0);
  this$static.m_dragging_dispatch_move &&
    $fireEvent_1(
      this$static,
      mouseEvent,
      touchEvent,
      x_0,
      y_0,
      this$static.m_drag_node.asNode(),
      this$static.nodeDragMoveEvent
    );
  if (($clinit_DragMode(), DRAG_LAYER) == this$static.m_drag_mode) {
    $get_4($getStorageEngine(this$static.m_viewport.m_drag).m_list, 0).draw_1();
    $drawNodeWithTransforms(
      this$static.m_dragContext,
      $get_4($getStorageEngine(this$static.m_viewport.m_drag).m_list, 0).getContext_0()
    );
  } else {
    $batch(this$static.m_drag_node.getLayer_0());
  }
}

function $doDragOffset(this$static, offsetX, offsetY) {
  $dragOffsetUpdate(this$static.m_dragContext, offsetX, offsetY);
  firePrimitiveDragOffsetUpdateEvent(this$static.m_lienzo, this$static.m_drag_node, offsetX, offsetY);
  this$static.m_dragging_dispatch_move &&
    $fireEvent_1(
      this$static,
      this$static.lastDragMouseEvent,
      this$static.lastDragTouchEvent,
      this$static.lastDragMoveX,
      this$static.lastDragMoveY,
      this$static.m_drag_node.asNode(),
      this$static.nodeDragMoveEvent
    );
  if (($clinit_DragMode(), DRAG_LAYER) == this$static.m_drag_mode) {
    $get_4($getStorageEngine(this$static.m_viewport.m_drag).m_list, 0).draw_1();
    $drawNodeWithTransforms(
      this$static.m_dragContext,
      $get_4($getStorageEngine(this$static.m_viewport.m_drag).m_list, 0).getContext_0()
    );
  } else {
    $batch(this$static.m_drag_node.getLayer_0());
  }
}

function $doDragStart(this$static, x_0, y_0, node, mouseEvent, touchEvent) {
  var lastArg;
  this$static.m_dragging && $doDragCancel(this$static, x_0, y_0, mouseEvent, touchEvent);
  this$static.m_drag_node = node;
  this$static.m_drag_mode = node.getDragMode();
  this$static.m_dragContext = new DragContext(
    x_0,
    y_0,
    ((lastArg = node), $getInverse(this$static.m_viewport.transform), lastArg)
  );
  this$static.m_drag_node.setDragging(true);
  firePrimitiveDragStartEvent(this$static.m_lienzo, this$static.m_drag_node, x_0, y_0);
  $fireEvent_1(this$static, mouseEvent, touchEvent, x_0, y_0, node, this$static.nodeDragStartEvent);
  this$static.m_dragging = true;
  if (($clinit_DragMode(), DRAG_LAYER) == this$static.m_drag_mode) {
    this$static.m_drag_node.setVisible(false);
    this$static.m_drag_node.getLayer_0().draw_1();
    $drawNodeWithTransforms(
      this$static.m_dragContext,
      $get_4($getStorageEngine(this$static.m_viewport.m_drag).m_list, 0).getContext_0()
    );
  }
  this$static.m_dragging_dispatch_move = this$static.m_drag_node.isEventHandled(
    ($clinit_NodeDragMoveEvent(), $clinit_NodeDragMoveEvent(), TYPE_0)
  );
  this$static.m_dragging_using_touches = touchEvent != null;
}

function $findPrimitiveForPredicate(this$static, x_0, y_0, pred) {
  var list, mode, node, size_0, stop_0;
  list = null;
  stop_0 = ($clinit_EventPropagationMode(), LAST_ANCESTOR);
  node = $findShapeAtPoint_1(this$static.m_viewport, x_0, y_0);
  while (!!node && !!node.asPrimitive()) {
    if (pred.test_0(node)) {
      mode = node.getEventPropagationMode();
      null == list && (list = new $wnd.Array());
      list.push(node);
      if (mode == NO_ANCESTORS) {
        return node;
      }
      if (mode.m_order < stop_0.m_order) {
        stop_0 = mode;
        break;
      }
    }
    node = node.m_parent;
  }
  if (list != null && list.length >= 1) {
    size_0 = list.length;
    if (stop_0 == FIRST_ANCESTOR) {
      if (size_0 > 1) {
        return $get_4(list, 1);
      }
    } else {
      if (size_0 > 1) {
        return $get_4(list, size_0 - 1);
      }
    }
    return $get_4(list, 0);
  }
  return null;
}

function $fireEvent_1(this$static, mouseEvent, touchEvent, x_0, y_0, node, nodeEvent) {
  var canBeHandled, oldEvent, oldNode, oldX, oldY;
  if (!node) {
    node = this$static.m_viewport;
    canBeHandled = true;
  } else {
    canBeHandled = node.listening && node.visible && $isEventHandled(node, nodeEvent.getAssociatedType());
  }
  if (canBeHandled) {
    !nodeEvent.m_dead || $revive(nodeEvent);
    oldNode = nodeEvent.source_0;
    oldEvent = nodeEvent.m_mouseEvent != null ? nodeEvent.m_mouseEvent : nodeEvent.m_touchEvent;
    oldX = nodeEvent.m_x;
    oldY = nodeEvent.m_y;
    try {
      $override(nodeEvent, node, mouseEvent, touchEvent, x_0, y_0);
      node.fireEvent(nodeEvent);
    } finally {
      !oldNode
        ? $kill(nodeEvent)
        : mouseEvent != null
        ? $override(nodeEvent, oldNode, oldEvent, null, oldX, oldY)
        : $override(nodeEvent, oldNode, null, oldEvent, oldX, oldY);
    }
  }
}

function $lambda$0_1(this$static, event_0) {
  var mouseEvent, x_0, y_0;
  mouseEvent = event_0;
  x_0 = getRelativeX(mouseEvent.clientX, this$static.m_lienzoElm);
  y_0 = getRelativeY(mouseEvent.clientY, this$static.m_lienzoElm);
  $onNodeMouseClick(this$static, mouseEvent, x_0, y_0);
  $checkPressedMouseButton(this$static, mouseEvent.button);
}

function $lambda$1_0(this$static, event_0) {
  var mouseEvent, node, x_0, y_0;
  mouseEvent = event_0;
  x_0 = getRelativeX(mouseEvent.clientX, this$static.m_lienzoElm);
  y_0 = getRelativeY(mouseEvent.clientY, this$static.m_lienzoElm);
  node = $findPrimitiveForPredicate(
    this$static,
    x_0,
    y_0,
    new LienzoPanelHandlerManager$lambda$14$Type(
      ($clinit_NodeMouseDoubleClickEvent(), $clinit_NodeMouseDoubleClickEvent(), TYPE_3)
    )
  );
  $fireEvent_1(this$static, mouseEvent, null, x_0, y_0, node, this$static.nodeMouseDoubleClickEvent);
  $checkPressedMouseButton(this$static, mouseEvent.button);
  event_0.preventDefault();
}

function $lambda$10(this$static, event_0) {
  var touch, touchEvent, touches, x_0, y_0;
  touchEvent = event_0;
  touches = touchEvent.touches;
  touch = touches[0];
  x_0 = getRelativeX(touch.clientX, this$static.m_lienzoElm);
  y_0 = getRelativeY(touch.clientY, this$static.m_lienzoElm);
  $onNodeMouseDownTouchStart(this$static, null, touchEvent, x_0, y_0, this$static.nodeTouchStartEvent);
  event_0.preventDefault();
}

function $lambda$11(this$static, event_0) {
  var touch, touchEvent, touches, x_0, y_0;
  touchEvent = event_0;
  touches = touchEvent.touches;
  touch = touches[0];
  x_0 = getRelativeX(touch.clientX, this$static.m_lienzoElm);
  y_0 = getRelativeY(touch.clientY, this$static.m_lienzoElm);
  $onNodeMouseOutTouchCancel(this$static, null, touchEvent, x_0, y_0, this$static.nodeTouchCancelEvent);
  event_0.preventDefault();
}

function $lambda$12(this$static, event_0) {
  var detail;
  detail = event_0.detail;
  this$static.dragLimitsDirection = detail.limitDirection;
  !!this$static.dragLimitsTimer.timerId || $scheduleRepeating(this$static.dragLimitsTimer, 50);
}

function $lambda$13(this$static) {
  $clear_3(this$static.dragLimitsDirection);
  !!this$static.dragLimitsTimer.timerId && $cancel(this$static.dragLimitsTimer);
}

function $lambda$2_0(this$static, event_0) {
  var mouseEvent, x_0, y_0;
  mouseEvent = event_0;
  x_0 = getRelativeX(mouseEvent.clientX, this$static.m_lienzoElm);
  y_0 = getRelativeY(mouseEvent.clientY, this$static.m_lienzoElm);
  if (this$static.m_dragging && this$static.m_dragging_using_touches) {
    event_0.preventDefault();
    return;
  }
  $checkPressedMouseButton(this$static, mouseEvent.button);
  $onNodeMouseMoveTouchMove(this$static, mouseEvent, null, x_0, y_0, this$static.nodeMouseMoveEvent);
  event_0.preventDefault();
}

function $lambda$3_0(this$static, event_0) {
  var mouseEvent, x_0, y_0;
  mouseEvent = event_0;
  x_0 = getRelativeX(mouseEvent.clientX, this$static.m_lienzoElm);
  y_0 = getRelativeY(mouseEvent.clientY, this$static.m_lienzoElm);
  $checkPressedMouseButton(this$static, mouseEvent.button);
  $onNodeMouseUpTouchEnd(this$static, mouseEvent, null, x_0, y_0, this$static.nodeMouseUpEvent);
}

function $lambda$4(this$static, event_0) {
  var mouseEvent, x_0, y_0;
  mouseEvent = event_0;
  x_0 = getRelativeX(mouseEvent.clientX, this$static.m_lienzoElm);
  y_0 = getRelativeY(mouseEvent.clientY, this$static.m_lienzoElm);
  $checkPressedMouseButton(this$static, mouseEvent.button);
  $onNodeMouseDownTouchStart(this$static, mouseEvent, null, x_0, y_0, this$static.nodeMouseDownEvent);
}

function $lambda$5(this$static, event_0) {
  var mouseEvent, x_0, y_0;
  mouseEvent = event_0;
  x_0 = getRelativeX(mouseEvent.clientX, this$static.m_lienzoElm);
  y_0 = getRelativeY(mouseEvent.clientY, this$static.m_lienzoElm);
  $onNodeMouseOutTouchCancel(this$static, mouseEvent, null, x_0, y_0, this$static.nodeMouseOutEvent);
}

function $lambda$6(this$static, event_0) {
  var mouseEvent, shape_0, x_0, y_0;
  mouseEvent = event_0;
  x_0 = getRelativeX(mouseEvent.clientX, this$static.m_lienzoElm);
  y_0 = getRelativeY(mouseEvent.clientY, this$static.m_lienzoElm);
  shape_0 = $doCheckEnterExitShape(this$static, mouseEvent, null, x_0, y_0);
  !!shape_0 && $fireEvent_1(this$static, mouseEvent, null, x_0, y_0, shape_0, this$static.nodeMouseOverEvent);
}

function $lambda$7(this$static, event_0) {
  var mouseEvent, x_0, y_0;
  mouseEvent = event_0;
  x_0 = getRelativeX(mouseEvent.clientX, this$static.m_lienzoElm);
  y_0 = getRelativeY(mouseEvent.clientY, this$static.m_lienzoElm);
  $fireEvent_1(this$static, mouseEvent, null, x_0, y_0, null, this$static.nodeMouseWheelEvent);
}

function $lambda$8(this$static, event_0) {
  var touch, touchEvent, touches, x_0, y_0;
  touchEvent = event_0;
  touches = touchEvent.touches;
  touch = touches[0];
  x_0 = getRelativeX(touch.clientX, this$static.m_lienzoElm);
  y_0 = getRelativeY(touch.clientY, this$static.m_lienzoElm);
  $onNodeMouseUpTouchEnd(this$static, null, touchEvent, x_0, y_0, this$static.nodeTouchEndEvent);
  event_0.preventDefault();
}

function $lambda$9(this$static, event_0) {
  var touch, touchEvent, touches, x_0, y_0;
  touchEvent = event_0;
  touches = touchEvent.touches;
  touch = touches[0];
  x_0 = getRelativeX(touch.clientX, this$static.m_lienzoElm);
  y_0 = getRelativeY(touch.clientY, this$static.m_lienzoElm);
  $onNodeMouseMoveTouchMove(this$static, null, touchEvent, x_0, y_0, this$static.nodeTouchMoveEvent);
  event_0.preventDefault();
}

function $onNodeMouseClick(this$static, event_0, x_0, y_0) {
  var node;
  if (this$static.m_dragging_ignore_clicks) {
    this$static.m_dragging_ignore_clicks = false;
    return;
  }
  node = $findPrimitiveForPredicate(
    this$static,
    x_0,
    y_0,
    new LienzoPanelHandlerManager$lambda$14$Type(($clinit_NodeMouseClickEvent(), $clinit_NodeMouseClickEvent(), TYPE_2))
  );
  $fireEvent_1(this$static, event_0, null, x_0, y_0, node, this$static.nodeMouseClickEvent);
}

function $onNodeMouseDownTouchStart(this$static, mouseEvent, touchEvent, x_0, y_0, nodeEvent) {
  var node;
  if (this$static.m_dragging_mouse_pressed) {
    return;
  }
  this$static.m_dragging && $doDragCancel(this$static, x_0, y_0, mouseEvent, touchEvent);
  $allowDrag(
    this$static.m_viewport.m_drag_mouse_control,
    this$static.m_mouse_button_left,
    this$static.m_mouse_button_middle,
    this$static.m_mouse_button_right
  ) && (this$static.m_dragging_mouse_pressed = true);
  node = $findPrimitiveForPredicate(
    this$static,
    x_0,
    y_0,
    new LienzoPanelHandlerManager$lambda$14$Type(nodeEvent.getAssociatedType())
  );
  $fireEvent_1(this$static, mouseEvent, touchEvent, x_0, y_0, node, nodeEvent);
}

function $onNodeMouseMoveTouchMove(this$static, mouseEvent, touchEvent, x_0, y_0, nodeEvent) {
  var find_0, node;
  if (this$static.m_dragging_mouse_pressed) {
    if (!this$static.m_dragging) {
      find_0 = $findPrimitiveForPredicate(this$static, x_0, y_0, new LienzoPanelHandlerManager$lambda$15$Type());
      !!find_0 && $doDragStart(this$static, x_0, y_0, find_0, mouseEvent, touchEvent);
      this$static.m_dragging || (this$static.m_dragging_mouse_pressed = false);
    }
  }
  if (this$static.m_dragging) {
    $doDragMove(this$static, x_0, y_0, mouseEvent, touchEvent);
    return;
  }
  $doCheckEnterExitShape(this$static, mouseEvent, touchEvent, x_0, y_0);
  node = $findPrimitiveForPredicate(
    this$static,
    x_0,
    y_0,
    new LienzoPanelHandlerManager$lambda$14$Type(nodeEvent.getAssociatedType())
  );
  $fireEvent_1(this$static, mouseEvent, touchEvent, x_0, y_0, node, nodeEvent);
}

function $onNodeMouseOutTouchCancel(this$static, mouseEvent, touchEvent, x_0, y_0, nodeEvent) {
  var node;
  this$static.m_dragging_mouse_pressed = false;
  this$static.m_dragging && $doDragCancel(this$static, x_0, y_0, mouseEvent, touchEvent);
  !!this$static.m_over_prim &&
    $isEventHandled(this$static.m_over_prim, ($clinit_NodeMouseExitEvent(), $clinit_NodeMouseExitEvent(), TYPE_6)) &&
    $fireEvent_1(
      this$static,
      mouseEvent,
      touchEvent,
      x_0,
      y_0,
      this$static.m_over_prim,
      this$static.nodeMouseExitEvent
    );
  this$static.m_over_prim = null;
  node = $findPrimitiveForPredicate(
    this$static,
    x_0,
    y_0,
    new LienzoPanelHandlerManager$lambda$14$Type(nodeEvent.getAssociatedType())
  );
  $fireEvent_1(this$static, mouseEvent, touchEvent, x_0, y_0, node, nodeEvent);
}

function $onNodeMouseUpTouchEnd(this$static, mouseEvent, touchEvent, x_0, y_0, nodeEvent) {
  var node;
  this$static.m_dragging_mouse_pressed = false;
  if (this$static.m_dragging) {
    $doDragCancel(this$static, x_0, y_0, mouseEvent, touchEvent);
    this$static.m_dragging_ignore_clicks = true;
    return;
  }
  node = $findPrimitiveForPredicate(
    this$static,
    x_0,
    y_0,
    new LienzoPanelHandlerManager$lambda$14$Type(nodeEvent.getAssociatedType())
  );
  $fireEvent_1(this$static, mouseEvent, touchEvent, x_0, y_0, node, nodeEvent);
}

function LienzoPanelHandlerManager(panel) {
  this.m_lienzo = panel;
  this.m_lienzoElm = panel.m_view.m_element;
  this.m_viewport = this.m_lienzo.m_view;
  new HandlerRegistrationManager();
  this.dragLimitsTimer = new LienzoPanelHandlerManager$1(this);
  $addHandlers(this);
}

function lambda$14(type_0, prim_1) {
  return $isEventHandled(prim_1, type_0);
}

defineClass(359, 1, {}, LienzoPanelHandlerManager);
_.lastDragMoveX = 0;
_.lastDragMoveY = 0;
_.m_drag_mode = null;
_.m_drag_node = null;
_.m_dragging = false;
_.m_dragging_dispatch_move = false;
_.m_dragging_ignore_clicks = false;
_.m_dragging_mouse_pressed = false;
_.m_dragging_using_touches = false;
_.m_mouse_button_left = false;
_.m_mouse_button_middle = false;
_.m_mouse_button_right = false;
_.m_over_prim = null;
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager",
  359
);
function $cancel(this$static) {
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating
    ? $wnd.goog.global.clearInterval(this$static.timerId.value_0)
    : $wnd.goog.global.clearTimeout(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $fire(this$static, scheduleCancelCounter) {
  if (scheduleCancelCounter != this$static.cancelCounter) {
    return;
  }
  this$static.isRepeating || (this$static.timerId = null);
  $run_0(this$static);
}

function $lambda$0_2(this$static) {
  $fire(this$static, this$static.cancelCounter);
}

function $lambda$1_1(this$static) {
  $fire(this$static, this$static.cancelCounter);
}

function $scheduleRepeating(this$static, periodMillis) {
  if (periodMillis <= 0) {
    throw toJs(new IllegalArgumentException("must be positive"));
  }
  !!this$static.timerId && $cancel(this$static);
  this$static.isRepeating = true;
  this$static.timerId = valueOf(
    ($clinit_DomGlobal(),
    $wnd.goog.global.setInterval(
      makeLambdaFunction(Timer$lambda$1$Type.prototype.onInvoke_0, Timer$lambda$1$Type, [this$static]),
      periodMillis
    )) | 0
  );
}

function Timer() {}

defineClass(228, 1, {}, Timer);
_.cancel = function cancel() {
  $cancel(this);
};
_.isRunning = function isRunning() {
  return !!this.timerId;
};
_.schedule = function schedule(delayMillis) {
  if (delayMillis < 0) {
    throw toJs(new IllegalArgumentException("must be non-negative"));
  }
  !!this.timerId && $cancel(this);
  this.isRepeating = false;
  this.timerId = valueOf(
    ($clinit_DomGlobal(),
    $wnd.goog.global.setTimeout(
      makeLambdaFunction(Timer$lambda$0$Type.prototype.onInvoke_0, Timer$lambda$0$Type, [this]),
      delayMillis
    )) | 0
  );
};
_.scheduleRepeating = function scheduleRepeating(periodMillis) {
  $scheduleRepeating(this, periodMillis);
};
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_ait_lienzo_tools_client_Timer_2_classLit = createForClass("com.ait.lienzo.tools.client", "Timer", 228);
function $run_0(this$static) {
  var offsetX, offsetY;
  offsetX = 0;
  offsetY = 0;
  $containsEnum(
    this$static.this$01.dragLimitsDirection,
    ($clinit_LienzoPanelDragLimitEventDetail$LimitDirections(), LEFT)
  ) && (offsetX = -15);
  $containsEnum(this$static.this$01.dragLimitsDirection, RIGHT) && (offsetX = 15);
  $containsEnum(this$static.this$01.dragLimitsDirection, TOP) && (offsetY = -15);
  $containsEnum(this$static.this$01.dragLimitsDirection, DOWN) && (offsetY = 15);
  $doDragOffset(this$static.this$01, offsetX, offsetY);
}

function LienzoPanelHandlerManager$1(this$0) {
  this.this$01 = this$0;
}

defineClass(374, 228, {}, LienzoPanelHandlerManager$1);
_.run = function run() {
  $run_0(this);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$1_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/1",
  374
);
function LienzoPanelHandlerManager$lambda$0$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(360, 1, {}, LienzoPanelHandlerManager$lambda$0$Type);
_.handleEvent = function handleEvent(arg0) {
  $lambda$0_1(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$0$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$0$Type",
  360
);
function LienzoPanelHandlerManager$lambda$1$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(361, 1, {}, LienzoPanelHandlerManager$lambda$1$Type);
_.handleEvent = function handleEvent_0(arg0) {
  $lambda$1_0(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$1$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$1$Type",
  361
);
function LienzoPanelHandlerManager$lambda$10$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(370, 1, {}, LienzoPanelHandlerManager$lambda$10$Type);
_.handleEvent = function handleEvent_1(arg0) {
  $lambda$10(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$10$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$10$Type",
  370
);
function LienzoPanelHandlerManager$lambda$11$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(371, 1, {}, LienzoPanelHandlerManager$lambda$11$Type);
_.handleEvent = function handleEvent_2(arg0) {
  $lambda$11(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$11$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$11$Type",
  371
);
function LienzoPanelHandlerManager$lambda$12$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(372, 1, {}, LienzoPanelHandlerManager$lambda$12$Type);
_.handleEvent = function handleEvent_3(arg0) {
  $lambda$12(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$12$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$12$Type",
  372
);
function LienzoPanelHandlerManager$lambda$13$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(373, 1, {}, LienzoPanelHandlerManager$lambda$13$Type);
_.handleEvent = function handleEvent_4(arg0) {
  $lambda$13(this.$$outer_0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$13$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$13$Type",
  373
);
function LienzoPanelHandlerManager$lambda$14$Type(type_0) {
  this.type_0 = type_0;
}

defineClass(84, 1, {}, LienzoPanelHandlerManager$lambda$14$Type);
_.test_0 = function test_0(arg0) {
  return lambda$14(this.type_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$14$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$14$Type",
  84
);
function LienzoPanelHandlerManager$lambda$15$Type() {}

defineClass(375, 1, {}, LienzoPanelHandlerManager$lambda$15$Type);
_.test_0 = function test_1(arg0) {
  return arg0.isDraggable();
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$15$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$15$Type",
  375
);
function LienzoPanelHandlerManager$lambda$2$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(362, 1, {}, LienzoPanelHandlerManager$lambda$2$Type);
_.handleEvent = function handleEvent_5(arg0) {
  $lambda$2_0(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$2$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$2$Type",
  362
);
function LienzoPanelHandlerManager$lambda$3$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(363, 1, {}, LienzoPanelHandlerManager$lambda$3$Type);
_.handleEvent = function handleEvent_6(arg0) {
  $lambda$3_0(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$3$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$3$Type",
  363
);
function LienzoPanelHandlerManager$lambda$4$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(364, 1, {}, LienzoPanelHandlerManager$lambda$4$Type);
_.handleEvent = function handleEvent_7(arg0) {
  $lambda$4(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$4$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$4$Type",
  364
);
function LienzoPanelHandlerManager$lambda$5$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(365, 1, {}, LienzoPanelHandlerManager$lambda$5$Type);
_.handleEvent = function handleEvent_8(arg0) {
  $lambda$5(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$5$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$5$Type",
  365
);
function LienzoPanelHandlerManager$lambda$6$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(366, 1, {}, LienzoPanelHandlerManager$lambda$6$Type);
_.handleEvent = function handleEvent_9(arg0) {
  $lambda$6(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$6$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$6$Type",
  366
);
function LienzoPanelHandlerManager$lambda$7$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(367, 1, {}, LienzoPanelHandlerManager$lambda$7$Type);
_.handleEvent = function handleEvent_10(arg0) {
  $lambda$7(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$7$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$7$Type",
  367
);
function LienzoPanelHandlerManager$lambda$8$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(368, 1, {}, LienzoPanelHandlerManager$lambda$8$Type);
_.handleEvent = function handleEvent_11(arg0) {
  $lambda$8(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$8$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$8$Type",
  368
);
function LienzoPanelHandlerManager$lambda$9$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(369, 1, {}, LienzoPanelHandlerManager$lambda$9$Type);
_.handleEvent = function handleEvent_12(arg0) {
  $lambda$9(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelHandlerManager$lambda$9$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelHandlerManager/lambda$9$Type",
  369
);
function LienzoPanelPrimitiveDragEventDetail(primitive, dragX, dragY) {
  this.primitive = primitive;
  this.dragX = dragX;
  this.dragY = dragY;
}

defineClass(102, 128, { 102: 1 }, LienzoPanelPrimitiveDragEventDetail);
_.dragX = 0;
_.dragY = 0;
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelPrimitiveDragEventDetail_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelPrimitiveDragEventDetail",
  102
);
function LienzoPanelScrollEventDetail() {}

defineClass(394, 128, {}, LienzoPanelScrollEventDetail);
var Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelScrollEventDetail_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "LienzoPanelScrollEventDetail",
  394
);
function $clinit_ScrollablePanel() {
  $clinit_ScrollablePanel = emptyMethod;
  EMPTY = new Bounds(0, 0, 0, 0);
}

function $calculateInternalScrollPanelHeight(this$static) {
  var absHeight, height, scaleY, value_0, value0;
  absHeight = maxBoundY(this$static.bounds) - ((value0 = this$static.bounds.y_0), value0 > 0 ? 0 : value0);
  if (
    !!(this$static.layer ? $getViewport(this$static.layer) : null) &&
    maxBoundY(this$static.bounds) -
      ((value_0 = this$static.bounds.y_0), value_0 > 0 ? 0 : value_0) -
      $getVisibleBounds(this$static).height_0 !=
      0
  ) {
    scaleY = (this$static.layer ? $getViewport(this$static.layer) : null).transform.v[3];
    height = absHeight * scaleY;
    return height;
  }
  return 1;
}

function $calculateInternalScrollPanelWidth(this$static) {
  var absWidth, scaleX, value_0, value0, width_0;
  absWidth = maxBoundX(this$static.bounds) - ((value0 = this$static.bounds.x_0), value0 > 0 ? 0 : value0);
  if (
    !!(this$static.layer ? $getViewport(this$static.layer) : null) &&
    maxBoundX(this$static.bounds) -
      ((value_0 = this$static.bounds.x_0), value_0 > 0 ? 0 : value_0) -
      $getVisibleBounds(this$static).width_0 !=
      0
  ) {
    scaleX = (this$static.layer ? $getViewport(this$static.layer) : null).transform.v[0];
    width_0 = absWidth * scaleX;
    return width_0;
  }
  return 1;
}

function $getVisibleBounds(this$static) {
  var bounds, transform, viewport, x_0, y_0;
  if (this$static.layer ? $getViewport(this$static.layer) : null) {
    viewport = this$static.layer ? $getViewport(this$static.layer) : null;
    transform = viewport.transform;
    !transform && $setTransform(viewport, (transform = new Transform()));
    x_0 = -transform.v[4] / transform.v[0];
    y_0 = -transform.v[5] / transform.v[3];
    bounds = new Bounds(0, 0, 0, 0);
    bounds.x_0 = x_0;
    bounds.y_0 = y_0;
    $setWidth(bounds, $wnd.Math.max(0, viewport.m_wide / transform.v[3]));
    $setHeight_1(bounds, $wnd.Math.max(0, viewport.m_high / transform.v[0]));
    return bounds;
  }
  return EMPTY;
}

function $initResizeObserver(this$static) {
  if (
    null == this$static.resizeObserver &&
    this$static.rootPanel.parentNode != null &&
    this$static.rootPanel.parentNode.parentNode != null
  ) {
    this$static.resizeObserver = new $wnd.ResizeObserver(this$static.m_resizeCallback);
    this$static.resizeObserver.observe(this$static.rootPanel.parentNode.parentNode);
  }
}

function $lambda$0_3(this$static) {
  this$static.isMouseDown = true;
  this$static.rootPanel.focus();
}

function $lambda$10_0(this$static) {
  var parent_0, offsetWidth, offsetHeight, detail, highPxFixed, w, h;
  if (this$static.rootPanel.parentNode != null && this$static.rootPanel.parentNode.parentNode != null) {
    parent_0 = this$static.rootPanel.parentNode.parentNode;
    offsetWidth = parent_0.offsetWidth;
    offsetHeight = parent_0.offsetHeight;
    offsetWidth > 0 &&
      offsetHeight > 0 &&
      ((highPxFixed = offsetHeight - 4),
      setPanelSize(this$static.scrollPanel, offsetWidth, highPxFixed),
      (w = offsetWidth - (this$static.scrollPanel.offsetWidth - this$static.scrollPanel.clientWidth)),
      (h = highPxFixed - (this$static.scrollPanel.offsetHeight - this$static.scrollPanel.clientHeight)),
      setPanelSize(this$static.domElementContainer, w, h),
      $setPixelSize_3(this$static.lienzoPanel, w, h),
      undefined,
      (detail = new LienzoPanelEventDetail()),
      fireCustomEvent("lienzoPanelResizeEvent", this$static, detail),
      undefined);
    $onScroll(this$static);
  }
}

function $lambda$7_0(this$static, evt_0) {
  var detail;
  detail = evt_0.detail;
  $onPrimitiveDragMoveUpdate(this$static, detail.primitive);
}

function $lambda$8_0(this$static, evt_0) {
  var detail;
  detail = evt_0.detail;
  $onPrimitiveDragOffsetUpdate(this$static, detail.primitive, detail.dragX, detail.dragY);
}

function $onComplete(this$static) {
  if (this$static.isMouseDown) {
    this$static.isMouseDown = false;
    $refresh_0(this$static);
  }
}

function $onPrimitiveDragMoveUpdate(this$static, primitive) {
  var all,
    dragBoundsLimitsX,
    dragBoundsLimitsY,
    limitDirections,
    primitiveBoundingBox,
    primitiveLocation,
    visibleBoundingBox,
    visibleBounds;
  dragBoundsLimitsX =
    50 /
    ((this$static.layer ? $getViewport(this$static.layer) : null)
      ? (this$static.layer ? $getViewport(this$static.layer) : null).transform
      : null
    ).v[0];
  dragBoundsLimitsY =
    50 /
    ((this$static.layer ? $getViewport(this$static.layer) : null)
      ? (this$static.layer ? $getViewport(this$static.layer) : null).transform
      : null
    ).v[3];
  primitiveLocation = primitive.getComputedLocation_0();
  primitiveBoundingBox = fromDoubles(
    primitiveLocation.x,
    primitiveLocation.y,
    primitiveLocation.x + $getWidth(primitive.getBoundingBox_0()),
    primitiveLocation.y + $getHeight(primitive.getBoundingBox_0())
  );
  visibleBoundingBox = new BoundingBox();
  visibleBounds = $getVisibleBounds(this$static);
  $add_5(visibleBoundingBox, visibleBounds.x_0 + dragBoundsLimitsX, visibleBounds.y_0 + dragBoundsLimitsY);
  $add_5(
    visibleBoundingBox,
    visibleBounds.x_0 + visibleBounds.width_0 - dragBoundsLimitsX,
    visibleBounds.y_0 + visibleBounds.height_0 - dragBoundsLimitsY
  );
  limitDirections =
    ((all = $getEnumConstants(
      Lcom_ait_lienzo_client_widget_panel_impl_LienzoPanelDragLimitEventDetail$LimitDirections_2_classLit
    )),
    new EnumSet$EnumSetImpl(all, createFrom(all, all.length)));
  primitiveBoundingBox.minx < visibleBoundingBox.minx &&
    $add_11(limitDirections, ($clinit_LienzoPanelDragLimitEventDetail$LimitDirections(), LEFT));
  primitiveBoundingBox.maxx > visibleBoundingBox.maxx &&
    $add_11(limitDirections, ($clinit_LienzoPanelDragLimitEventDetail$LimitDirections(), RIGHT));
  primitiveBoundingBox.miny < visibleBoundingBox.miny &&
    $add_11(limitDirections, ($clinit_LienzoPanelDragLimitEventDetail$LimitDirections(), TOP));
  primitiveBoundingBox.maxy > visibleBoundingBox.maxy &&
    $add_11(limitDirections, ($clinit_LienzoPanelDragLimitEventDetail$LimitDirections(), DOWN));
  if (limitDirections.size_0 == 0) {
    if (this$static.isDragOverBounds) {
      this$static.isDragOverBounds = false;
      fireDragLimitsOutEvent(this$static.lienzoPanel);
      $refresh_0(this$static);
    }
  } else {
    this$static.isDragOverBounds = true;
    fireDragLimitsOverEvent(this$static.lienzoPanel, limitDirections);
    $refresh_0(this$static);
  }
  this$static.lastPrimitiveX = primitive.getX_0();
  this$static.lastPrimitiveY = primitive.getY_0();
}

function $onPrimitiveDragOffsetUpdate(this$static, primitive, offsetX, offsetY) {
  if (this$static.lastPrimitiveX != primitive.getX_0() || this$static.lastPrimitiveY != primitive.getY_0()) {
    this$static.lastPrimitiveX = primitive.getX_0();
    this$static.lastPrimitiveY = primitive.getY_0();
    $translate(
      (this$static.layer ? $getViewport(this$static.layer) : null)
        ? (this$static.layer ? $getViewport(this$static.layer) : null).transform
        : null,
      -offsetX,
      -offsetY
    );
    $refresh_0(this$static);
  }
}

function $onScroll(this$static) {
  var sh,
    sv,
    scrollLeft,
    scrollWidth,
    clientWidth,
    level,
    scrollTop,
    scrollHeight,
    clientHeight,
    level_0,
    cx,
    position0,
    value0,
    value1,
    cy,
    position,
    value2,
    value_0,
    oldTransform,
    dx,
    dy,
    newTransform,
    detail;
  if (!this$static.isDragging) {
    this$static.domElementContainer.scrollTop = 0;
    this$static.domElementContainer.scrollLeft = 0;
    if (this$static.layer) {
      sh =
        ((scrollLeft = this$static.scrollPanel.scrollLeft),
        (scrollWidth = this$static.scrollPanel.scrollWidth),
        (clientWidth = this$static.scrollPanel.clientWidth),
        (level = scrollWidth - clientWidth),
        level == 0 ? 0 : (100 * scrollLeft) / level);
      sv =
        ((scrollTop = this$static.scrollPanel.scrollTop),
        (scrollHeight = this$static.scrollPanel.scrollHeight),
        (clientHeight = this$static.scrollPanel.clientHeight),
        (level_0 = scrollHeight - clientHeight),
        level_0 == 0 ? 0 : (100 * scrollTop) / level_0);
      cx =
        ((position0 =
          ((maxBoundX(this$static.bounds) -
            ((value0 = this$static.bounds.x_0), value0 > 0 ? 0 : value0) -
            $getVisibleBounds(this$static).width_0) *
            sh) /
          100),
        (value1 = this$static.bounds.x_0),
        -((value1 > 0 ? 0 : value1) + position0));
      cy =
        ((position =
          ((maxBoundY(this$static.bounds) -
            ((value2 = this$static.bounds.y_0), value2 > 0 ? 0 : value2) -
            $getVisibleBounds(this$static).height_0) *
            sv) /
          100),
        (value_0 = this$static.bounds.y_0),
        -((value_0 > 0 ? 0 : value_0) + position));
      oldTransform = (this$static.layer ? $getViewport(this$static.layer) : null).transform;
      dx = cx - oldTransform.v[4] / oldTransform.v[0];
      dy = cy - oldTransform.v[5] / oldTransform.v[3];
      newTransform = $translate($copy_3(oldTransform), dx, dy);
      $setTransform(this$static.layer ? $getViewport(this$static.layer) : null, newTransform);
      $batch(this$static.layer);
      detail = new LienzoPanelScrollEventDetail();
      fireCustomEvent("lienzoPanelScrollEvent", this$static, detail);
    }
  }
}

function $synchronizeScrollSize(this$static) {
  var detail, height, width_0;
  width_0 = $calculateInternalScrollPanelWidth(this$static);
  height = $calculateInternalScrollPanelHeight(this$static);
  setPanelSize(this$static.internalScrollPanel, round_int(width_0), round_int(height));
  detail = new LienzoPanelEventDetail();
  fireCustomEvent("lienzoPanelBoundsChangedEvent", this$static, detail);
}

function ScrollablePanel(layerBoundsProvider) {
  $clinit_ScrollablePanel();
  ScrollablePanel_0.call(this, new LienzoFixedPanel(new Viewport()), layerBoundsProvider);
}

function ScrollablePanel_0(lienzoPanel, layerBoundsProvider) {
  this.lienzoPanel = lienzoPanel;
  this.boundsProvider = layerBoundsProvider;
  this.bounds = new Bounds(0, 0, 0, 0);
  this.domElementContainer = ($clinit_DomGlobal(), document_0).createElement("div");
  this.internalScrollPanel = document_0.createElement("div");
  this.scrollPanel = document_0.createElement("div");
  this.rootPanel = document_0.createElement("div");
  this.scrollPanel.appendChild(this.internalScrollPanel);
  this.domElementContainer.appendChild(this.lienzoPanel.m_view.m_element);
  this.rootPanel.appendChild(this.domElementContainer);
  this.rootPanel.appendChild(this.scrollPanel);
  this.rootPanel.style.outlineStyle = ($clinit_Style$OutlineStyle(), "none");
  this.mouseDownListener = new ScrollablePanel$lambda$0$Type(this);
  this.mouseUpListener = new ScrollablePanel$lambda$1$Type(this);
  this.mouseOutListener = new ScrollablePanel$lambda$2$Type(this);
  this.scrollListener = new ScrollablePanel$lambda$3$Type(this);
  this.mouseMoveListener = new ScrollablePanel$lambda$4$Type(this);
  this.mouseWheelListener = new ScrollablePanel$lambda$5$Type(this);
  this.rootPanel.addEventListener("mousedown", this.mouseDownListener);
  this.rootPanel.addEventListener("mouseup", this.mouseUpListener);
  this.rootPanel.addEventListener("mouseout", this.mouseOutListener);
  this.rootPanel.addEventListener("mousemove", this.mouseMoveListener);
  this.domElementContainer.addEventListener("mousewheel", this.mouseWheelListener);
  this.scrollPanel.addEventListener("scroll", this.scrollListener);
  addPrimitiveDragStartEventListener(this.lienzoPanel, new ScrollablePanel$lambda$6$Type(this));
  addPrimitiveDragMoveUpdateEventListener(this.lienzoPanel, new ScrollablePanel$lambda$7$Type(this));
  addPrimitiveDragOffsetUpdateEventListener(this.lienzoPanel, new ScrollablePanel$lambda$8$Type(this));
  addPrimitiveDragEndEventListener(this.lienzoPanel, new ScrollablePanel$lambda$9$Type(this));
  this.m_resizeCallback = makeLambdaFunction(
    ScrollablePanel$lambda$10$Type.prototype.callEvent,
    ScrollablePanel$lambda$10$Type,
    [this]
  );
}

function maxBoundX(bounds) {
  var value_0;
  value_0 = bounds.x_0 + bounds.width_0;
  return value_0 >= 0 ? value_0 : 0;
}

function maxBoundY(bounds) {
  var value_0;
  value_0 = bounds.y_0 + bounds.height_0;
  return value_0 >= 0 ? value_0 : 0;
}

defineClass(123, 316, { 123: 1 }, ScrollablePanel);
_.getElement = function getElement_0() {
  return this.rootPanel;
};
_.isDragOverBounds = false;
_.isDragging = false;
_.isMouseDown = false;
_.lastPrimitiveX = 0;
_.lastPrimitiveY = 0;
var EMPTY;
var Lcom_ait_lienzo_client_widget_panel_impl_ScrollablePanel_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "ScrollablePanel",
  123
);
function ScrollablePanel$lambda$0$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(317, 1, {}, ScrollablePanel$lambda$0$Type);
_.handleEvent = function handleEvent_13(arg0) {
  $lambda$0_3(this.$$outer_0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_ScrollablePanel$lambda$0$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "ScrollablePanel/lambda$0$Type",
  317
);
function ScrollablePanel$lambda$1$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(318, 1, {}, ScrollablePanel$lambda$1$Type);
_.handleEvent = function handleEvent_14(arg0) {
  $onComplete(this.$$outer_0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_ScrollablePanel$lambda$1$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "ScrollablePanel/lambda$1$Type",
  318
);
function ScrollablePanel$lambda$10$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(460, $wnd.Function, {}, ScrollablePanel$lambda$10$Type);
_.callEvent = function callEvent(arg0) {
  $lambda$10_0(this.$$outer_0);
};
function ScrollablePanel$lambda$11$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(327, 1, { 462: 1, 441: 1 }, ScrollablePanel$lambda$11$Type);
var Lcom_ait_lienzo_client_widget_panel_impl_ScrollablePanel$lambda$11$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "ScrollablePanel/lambda$11$Type",
  327
);
function ScrollablePanel$lambda$2$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(319, 1, {}, ScrollablePanel$lambda$2$Type);
_.handleEvent = function handleEvent_15(arg0) {
  $onComplete(this.$$outer_0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_ScrollablePanel$lambda$2$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "ScrollablePanel/lambda$2$Type",
  319
);
function ScrollablePanel$lambda$3$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(320, 1, {}, ScrollablePanel$lambda$3$Type);
_.handleEvent = function handleEvent_16(arg0) {
  $onScroll(this.$$outer_0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_ScrollablePanel$lambda$3$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "ScrollablePanel/lambda$3$Type",
  320
);
function ScrollablePanel$lambda$4$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(321, 1, {}, ScrollablePanel$lambda$4$Type);
_.handleEvent = function handleEvent_17(arg0) {
  this.$$outer_0.domElementContainer.style.pointerEvents = "initial";
};
var Lcom_ait_lienzo_client_widget_panel_impl_ScrollablePanel$lambda$4$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "ScrollablePanel/lambda$4$Type",
  321
);
function ScrollablePanel$lambda$5$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(322, 1, {}, ScrollablePanel$lambda$5$Type);
_.handleEvent = function handleEvent_18(arg0) {
  this.$$outer_0.domElementContainer.style.pointerEvents = "none";
};
var Lcom_ait_lienzo_client_widget_panel_impl_ScrollablePanel$lambda$5$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "ScrollablePanel/lambda$5$Type",
  322
);
function ScrollablePanel$lambda$6$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(323, 1, {}, ScrollablePanel$lambda$6$Type);
_.handleEvent = function handleEvent_19(arg0) {
  this.$$outer_0.isDragging = true;
};
var Lcom_ait_lienzo_client_widget_panel_impl_ScrollablePanel$lambda$6$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "ScrollablePanel/lambda$6$Type",
  323
);
function ScrollablePanel$lambda$7$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(324, 1, {}, ScrollablePanel$lambda$7$Type);
_.handleEvent = function handleEvent_20(arg0) {
  $lambda$7_0(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_ScrollablePanel$lambda$7$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "ScrollablePanel/lambda$7$Type",
  324
);
function ScrollablePanel$lambda$8$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(325, 1, {}, ScrollablePanel$lambda$8$Type);
_.handleEvent = function handleEvent_21(arg0) {
  $lambda$8_0(this.$$outer_0, arg0);
};
var Lcom_ait_lienzo_client_widget_panel_impl_ScrollablePanel$lambda$8$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "ScrollablePanel/lambda$8$Type",
  325
);
function ScrollablePanel$lambda$9$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(326, 1, {}, ScrollablePanel$lambda$9$Type);
_.handleEvent = function handleEvent_22(arg0) {
  this.$$outer_0.isDragging = false;
};
var Lcom_ait_lienzo_client_widget_panel_impl_ScrollablePanel$lambda$9$Type_2_classLit = createForClass(
  "com.ait.lienzo.client.widget.panel.impl",
  "ScrollablePanel/lambda$9$Type",
  326
);
function setPanelSize(panel, width_0, height) {
  panel.style.width = width_0 + ($clinit_Style$Unit(), "px");
  panel.style.height = height + "px";
}

function $clinit_ArrowType() {
  $clinit_ArrowType = emptyMethod;
  AT_END = new ArrowType("AT_END", 0, "at-end");
  AT_START = new ArrowType("AT_START", 1, "at-start");
  AT_BOTH_ENDS = new ArrowType("AT_BOTH_ENDS", 2, "at-both-ends");
  AT_END_TAPERED = new ArrowType("AT_END_TAPERED", 3, "at-end-tapered");
  AT_START_TAPERED = new ArrowType("AT_START_TAPERED", 4, "at-start-tapered");
  new EnumWithValue$EnumStringMap(
    stampJavaTypeInfo(
      getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_ArrowType_2_classLit, 1),
      $intern_5,
      60,
      0,
      [AT_END, AT_START, AT_BOTH_ENDS, AT_END_TAPERED, AT_START_TAPERED]
    )
  );
}

function ArrowType(enum$name, enum$ordinal, value_0) {
  Enum.call(this, enum$name, enum$ordinal);
  this.m_value = value_0;
}

function values_9() {
  $clinit_ArrowType();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_ArrowType_2_classLit, 1),
    $intern_5,
    60,
    0,
    [AT_END, AT_START, AT_BOTH_ENDS, AT_END_TAPERED, AT_START_TAPERED]
  );
}

defineClass(60, 7, { 60: 1, 49: 1, 38: 1, 39: 1, 3: 1, 8: 1, 7: 1 }, ArrowType);
_.getValue = function getValue_0() {
  return this.m_value;
};
_.toString = function toString_14() {
  return this.m_value;
};
var AT_BOTH_ENDS, AT_END, AT_END_TAPERED, AT_START, AT_START_TAPERED;
var Lcom_ait_lienzo_shared_core_types_ArrowType_2_classLit = createForEnum(
  "com.ait.lienzo.shared.core.types",
  "ArrowType",
  60,
  values_9
);
function $$init(this$static) {}

function $getColorString(this$static) {
  if (this$static.m_a == 1) {
    return "rgb(" + this$static.m_r + "," + this$static.m_g + "," + this$static.m_b + ")";
  }
  return "rgba(" + this$static.m_r + "," + this$static.m_g + "," + this$static.m_b + "," + this$static.m_a + ")";
}

function $setA(this$static, a) {
  this$static.m_a = fixAlpha(a);
  return this$static;
}

function Color(r, g, b) {
  $$init(this);
  this.m_r = fixRGB(r);
  this.m_g = fixRGB(g);
  this.m_b = fixRGB(b);
}

function Color_0(r, g, b, a) {
  $$init(this);
  this.m_r = fixRGB(r);
  this.m_g = fixRGB(g);
  this.m_b = fixRGB(b);
  this.m_a = fixAlpha(a);
}

function fixAlpha(a) {
  if (a < 0) {
    return 0;
  }
  if (a > 1) {
    return 1;
  }
  return a;
}

function fixRGB(c) {
  if (c < 0) {
    return 0;
  }
  if (c > 255) {
    return 255;
  }
  return c;
}

function getHSLFromRGB(r, g, b) {
  var delb, delg, delr, diff, h, l, s, vmax, vmin;
  r = r / 255;
  g = g / 255;
  b = b / 255;
  vmin = $wnd.Math.min(r, $wnd.Math.min(g, b));
  vmax = $wnd.Math.max(r, $wnd.Math.max(g, b));
  diff = vmax - vmin;
  h = 0;
  s = 0;
  l = (vmax + vmin) / 2;
  if (diff != 0) {
    l < 0.5 ? (s = diff / (vmax + vmin)) : (s = diff / (2 - vmax - vmin));
    delr = ((vmax - r) / 6 + diff / 2) / diff;
    delg = ((vmax - g) / 6 + diff / 2) / diff;
    delb = ((vmax - b) / 6 + diff / 2) / diff;
    r == vmax
      ? (h = delb - delg)
      : g == vmax
      ? (h = $intern_10 + delr - delb)
      : b == vmax && (h = $intern_30 + delg - delr);
    h < 0 && (h += 1);
    h > 1 && (h -= 1);
  }
  return new Color$HSL(h, s, l);
}

function getRandomHexColor() {
  var b, g, r;
  r = toInt_0(fromDouble_0($wnd.Math.round($wnd.Math.random() * 255)));
  g = toInt_0(fromDouble_0($wnd.Math.round($wnd.Math.random() * 255)));
  b = toInt_0(fromDouble_0($wnd.Math.round($wnd.Math.random() * 255)));
  return "#" + toBrowserHexValue(r) + toBrowserHexValue(g) + toBrowserHexValue(b);
}

function hueToRGB(m1, m2, h) {
  h < 0 && ++h;
  h > 1 && --h;
  if (h * 6 < 1) {
    return m1 + (m2 - m1) * h * 6;
  }
  if (h * 2 < 1) {
    return m2;
  }
  if (h * 3 < 2) {
    return m1 + (m2 - m1) * ($intern_30 - h) * 6;
  }
  return m1;
}

function rgbToBrowserHexColor(r, g, b) {
  return "#" + toBrowserHexValue(r) + toBrowserHexValue(g) + toBrowserHexValue(b);
}

function toBrowserHexValue(number) {
  var chex, number0;
  chex = ((number0 = (fixRGB(number) & 255) >>> 0), number0.toString(16)).toUpperCase();
  if (chex.length < 2) {
    return "0" + chex;
  }
  return chex;
}

defineClass(95, 1, { 95: 1, 437: 1 }, Color, Color_0);
_.equals_0 = function equals_9(other) {
  var that;
  if (!instanceOf(other, 95)) {
    return false;
  }
  if (this === other) {
    return true;
  }
  that = other;
  return that.m_r == this.m_r && that.m_g == this.m_g && that.m_b == this.m_b && that.m_a == this.m_a;
};
_.hashCode_0 = function hashCode_10() {
  return getHashCode_1("rgba(" + this.m_r + "," + this.m_g + "," + this.m_b + "," + this.m_a + ")");
};
_.toString_0 = function toString_15() {
  return "Color{r=" + this.m_r + ", g=" + this.m_g + ", b=" + this.m_b + "}";
};
_.m_a = 1;
_.m_b = 0;
_.m_g = 0;
_.m_r = 0;
var Lcom_ait_lienzo_shared_core_types_Color_2_classLit = createForClass(
  "com.ait.lienzo.shared.core.types",
  "Color",
  95
);
function Color$HSL(h, s, l) {
  this.m_h = h;
  this.m_s = s;
  this.m_l = l;
}

defineClass(330, 1, {}, Color$HSL);
_.toString_0 = function toString_16() {
  return "hsl(" + this.m_h + "," + this.m_s + "," + this.m_l + ")";
};
_.m_h = 0;
_.m_l = 0;
_.m_s = 0;
var Lcom_ait_lienzo_shared_core_types_Color$HSL_2_classLit = createForClass(
  "com.ait.lienzo.shared.core.types",
  "Color/HSL",
  330
);
function $clinit_ColorName() {
  $clinit_ColorName = emptyMethod;
  ALICEBLUE = new ColorName("ALICEBLUE", 0, "aliceblue");
  ANTIQUEWHITE = new ColorName("ANTIQUEWHITE", 1, "antiquewhite");
  AQUA = new ColorName("AQUA", 2, "aqua");
  AQUAMARINE = new ColorName("AQUAMARINE", 3, "aquamarine");
  AZURE = new ColorName("AZURE", 4, "azure");
  BEIGE = new ColorName("BEIGE", 5, "beige");
  BISQUE = new ColorName("BISQUE", 6, "bisque");
  BLACK = new ColorName("BLACK", 7, "black");
  BLANCHEDALMOND = new ColorName("BLANCHEDALMOND", 8, "blanchedalmond");
  BLUE = new ColorName("BLUE", 9, "blue");
  BLUEVIOLET = new ColorName("BLUEVIOLET", 10, "blueviolet");
  BROWN = new ColorName("BROWN", 11, "brown");
  BURLYWOOD = new ColorName("BURLYWOOD", 12, "burlywood");
  CADETBLUE = new ColorName("CADETBLUE", 13, "cadetblue");
  CHARTREUSE = new ColorName("CHARTREUSE", 14, "chartreuse");
  CHOCOLATE = new ColorName("CHOCOLATE", 15, "chocolate");
  CORAL = new ColorName("CORAL", 16, "coral");
  CORNFLOWERBLUE = new ColorName("CORNFLOWERBLUE", 17, "cornflowerblue");
  CORNSILK = new ColorName("CORNSILK", 18, "cornsilk");
  CRIMSON = new ColorName("CRIMSON", 19, "crimson");
  CYAN = new ColorName("CYAN", 20, "cyan");
  DARKBLUE = new ColorName("DARKBLUE", 21, "darkblue");
  DARKCYAN = new ColorName("DARKCYAN", 22, "darkcyan");
  DARKGOLDENROD = new ColorName("DARKGOLDENROD", 23, "darkgoldenrod");
  DARKGRAY = new ColorName("DARKGRAY", 24, "darkgray");
  DARKGREEN = new ColorName("DARKGREEN", 25, "darkgreen");
  DARKGREY = new ColorName("DARKGREY", 26, "darkgrey");
  DARKKHAKI = new ColorName("DARKKHAKI", 27, "darkkhaki");
  DARKMAGENTA = new ColorName("DARKMAGENTA", 28, "darkmagenta");
  DARKOLIVEGREEN = new ColorName("DARKOLIVEGREEN", 29, "darkolivegreen");
  DARKORANGE = new ColorName("DARKORANGE", 30, "darkorange");
  DARKORCHID = new ColorName("DARKORCHID", 31, "darkorchid");
  DARKRED = new ColorName("DARKRED", 32, "darkred");
  DARKSALMON = new ColorName("DARKSALMON", 33, "darksalmon");
  DARKSEAGREEN = new ColorName("DARKSEAGREEN", 34, "darkseagreen");
  DARKSLATEBLUE = new ColorName("DARKSLATEBLUE", 35, "darkslateblue");
  DARKSLATEGRAY = new ColorName("DARKSLATEGRAY", 36, "darkslategray");
  DARKSLATEGREY = new ColorName("DARKSLATEGREY", 37, "darkslategrey");
  DARKTURQUOISE = new ColorName("DARKTURQUOISE", 38, "darkturquoise");
  DARKVIOLET = new ColorName("DARKVIOLET", 39, "darkviolet");
  DEEPPINK = new ColorName("DEEPPINK", 40, "deeppink");
  DEEPSKYBLUE = new ColorName("DEEPSKYBLUE", 41, "deepskyblue");
  DIMGRAY = new ColorName("DIMGRAY", 42, "dimgray");
  DIMGREY = new ColorName("DIMGREY", 43, "dimgrey");
  DODGERBLUE = new ColorName("DODGERBLUE", 44, "dodgerblue");
  FIREBRICK = new ColorName("FIREBRICK", 45, "firebrick");
  FLORALWHITE = new ColorName("FLORALWHITE", 46, "floralwhite");
  FORESTGREEN = new ColorName("FORESTGREEN", 47, "forestgreen");
  FUCHSIA = new ColorName("FUCHSIA", 48, "fuchsia");
  GAINSBORO = new ColorName("GAINSBORO", 49, "gainsboro");
  GHOSTWHITE = new ColorName("GHOSTWHITE", 50, "ghostwhite");
  GOLD = new ColorName("GOLD", 51, "gold");
  GOLDENROD = new ColorName("GOLDENROD", 52, "goldenrod");
  GRAY = new ColorName("GRAY", 53, "gray");
  GREEN = new ColorName("GREEN", 54, "green");
  GREENYELLOW = new ColorName("GREENYELLOW", 55, "greenyellow");
  GREY = new ColorName("GREY", 56, "grey");
  HONEYDEW = new ColorName("HONEYDEW", 57, "honeydew");
  HOTPINK = new ColorName("HOTPINK", 58, "hotpink");
  INDIANRED = new ColorName("INDIANRED", 59, "indianred");
  INDIGO = new ColorName("INDIGO", 60, "indigo");
  IVORY = new ColorName("IVORY", 61, "ivory");
  KHAKI = new ColorName("KHAKI", 62, "khaki");
  LAVENDER = new ColorName("LAVENDER", 63, "lavender");
  LAVENDERBLUSH = new ColorName("LAVENDERBLUSH", 64, "lavenderblush");
  LAWNGREEN = new ColorName("LAWNGREEN", 65, "lawngreen");
  LEMONCHIFFON = new ColorName("LEMONCHIFFON", 66, "lemonchiffon");
  LIGHTBLUE = new ColorName("LIGHTBLUE", 67, "lightblue");
  LIGHTCORAL = new ColorName("LIGHTCORAL", 68, "lightcoral");
  LIGHTCYAN = new ColorName("LIGHTCYAN", 69, "lightcyan");
  LIGHTGOLDENRODYELLOW = new ColorName("LIGHTGOLDENRODYELLOW", 70, "lightgoldenrodyellow");
  LIGHTGRAY = new ColorName("LIGHTGRAY", 71, "lightgray");
  LIGHTGREEN = new ColorName("LIGHTGREEN", 72, "lightgreen");
  LIGHTGREY = new ColorName("LIGHTGREY", 73, "lightgrey");
  LIGHTPINK = new ColorName("LIGHTPINK", 74, "lightpink");
  LIGHTSALMON = new ColorName("LIGHTSALMON", 75, "lightsalmon");
  LIGHTSEAGREEN = new ColorName("LIGHTSEAGREEN", 76, "lightseagreen");
  LIGHTSKYBLUE = new ColorName("LIGHTSKYBLUE", 77, "lightskyblue");
  LIGHTSLATEGRAY = new ColorName("LIGHTSLATEGRAY", 78, "lightslategray");
  LIGHTSLATEGREY = new ColorName("LIGHTSLATEGREY", 79, "lightslategrey");
  LIGHTSTEELBLUE = new ColorName("LIGHTSTEELBLUE", 80, "lightsteelblue");
  LIGHTYELLOW = new ColorName("LIGHTYELLOW", 81, "lightyellow");
  LIME = new ColorName("LIME", 82, "lime");
  LIMEGREEN = new ColorName("LIMEGREEN", 83, "limegreen");
  LINEN = new ColorName("LINEN", 84, "linen");
  MAGENTA = new ColorName("MAGENTA", 85, "MAGENTA");
  MAROON = new ColorName("MAROON", 86, "maroon");
  MEDIUMAQUAMARINE = new ColorName("MEDIUMAQUAMARINE", 87, "mediumaquamarine");
  MEDIUMBLUE = new ColorName("MEDIUMBLUE", 88, "mediumblue");
  MEDIUMORCHID = new ColorName("MEDIUMORCHID", 89, "mediumorchid");
  MEDIUMPURPLE = new ColorName("MEDIUMPURPLE", 90, "mediumpurple");
  MEDIUMSEAGREEN = new ColorName("MEDIUMSEAGREEN", 91, "mediumseagreen");
  MEDIUMSLATEBLUE = new ColorName("MEDIUMSLATEBLUE", 92, "mediumslateblue");
  MEDIUMSPRINGGREEN = new ColorName("MEDIUMSPRINGGREEN", 93, "mediumspringgreen");
  MEDIUMTURQUOISE = new ColorName("MEDIUMTURQUOISE", 94, "mediumturquoise");
  MEDIUMVIOLETRED = new ColorName("MEDIUMVIOLETRED", 95, "mediumvioletred");
  MIDNIGHTBLUE = new ColorName("MIDNIGHTBLUE", 96, "midnightblue");
  MINTCREAM = new ColorName("MINTCREAM", 97, "mintcream");
  MISTYROSE = new ColorName("MISTYROSE", 98, "mistyrose");
  MOCCASIN = new ColorName("MOCCASIN", 99, "moccasin");
  NAVAJOWHITE = new ColorName("NAVAJOWHITE", 100, "navajowhite");
  NAVY = new ColorName("NAVY", 101, "navy");
  OLDLACE = new ColorName("OLDLACE", 102, "oldlace");
  OLIVE = new ColorName("OLIVE", 103, "olive");
  OLIVEDRAB = new ColorName("OLIVEDRAB", 104, "olivedrab");
  ORANGE = new ColorName("ORANGE", 105, "orange");
  ORANGERED = new ColorName("ORANGERED", 106, "orangered");
  ORCHID = new ColorName("ORCHID", 107, "orchid");
  PALEGOLDENROD = new ColorName("PALEGOLDENROD", 108, "palegoldenrod");
  PALEGREEN = new ColorName("PALEGREEN", 109, "palegreen");
  PALETURQUOISE = new ColorName("PALETURQUOISE", 110, "paleturquoise");
  PALEVIOLETRED = new ColorName("PALEVIOLETRED", 111, "palevioletred");
  PAPAYAWHIP = new ColorName("PAPAYAWHIP", 112, "papayawhip");
  PEACHPUFF = new ColorName("PEACHPUFF", 113, "peachpuff");
  PERU = new ColorName("PERU", 114, "peru");
  PINK = new ColorName("PINK", 115, "pink");
  PLUM = new ColorName("PLUM", 116, "plum");
  POWDERBLUE = new ColorName("POWDERBLUE", 117, "powderblue");
  PURPLE = new ColorName("PURPLE", 118, "purple");
  RED = new ColorName("RED", 119, "red");
  ROSYBROWN = new ColorName("ROSYBROWN", 120, "rosybrown");
  ROYALBLUE = new ColorName("ROYALBLUE", 121, "royalblue");
  SADDLEBROWN = new ColorName("SADDLEBROWN", 122, "saddlebrown");
  SALMON = new ColorName("SALMON", 123, "salmon");
  SANDYBROWN = new ColorName("SANDYBROWN", 124, "sandybrown");
  SEAGREEN = new ColorName("SEAGREEN", 125, "seagreen");
  SEASHELL = new ColorName("SEASHELL", 126, "seashell");
  SIENNA = new ColorName("SIENNA", 127, "sienna");
  SILVER = new ColorName("SILVER", 128, "silver");
  SKYBLUE = new ColorName("SKYBLUE", 129, "skyblue");
  SLATEBLUE = new ColorName("SLATEBLUE", 130, "slateblue");
  SLATEGRAY = new ColorName("SLATEGRAY", 131, "slategray");
  SLATEGREY = new ColorName("SLATEGREY", 132, "slategrey");
  SNOW = new ColorName("SNOW", 133, "snow");
  SPRINGGREEN = new ColorName("SPRINGGREEN", 134, "springgreen");
  STEELBLUE = new ColorName("STEELBLUE", 135, "steelblue");
  TAN = new ColorName("TAN", 136, "tan");
  TEAL = new ColorName("TEAL", 137, "teal");
  THISTLE = new ColorName("THISTLE", 138, "thistle");
  TOMATO = new ColorName("TOMATO", 139, "tomato");
  TURQUOISE = new ColorName("TURQUOISE", 140, "turquoise");
  VIOLET = new ColorName("VIOLET", 141, "violet");
  WHEAT = new ColorName("WHEAT", 142, "wheat");
  WHITE = new ColorName("WHITE", 143, "white");
  WHITESMOKE = new ColorName("WHITESMOKE", 144, "whitesmoke");
  YELLOW = new ColorName("YELLOW", 145, "yellow");
  YELLOWGREEN = new ColorName("YELLOWGREEN", 146, "yellowgreen");
  TRANSPARENT = new ColorName_0();
  new EnumWithValue$EnumStringMap(values_10());
}

function ColorName(enum$name, enum$ordinal, value_0) {
  Enum.call(this, enum$name, enum$ordinal);
  this.m_value = value_0;
}

function ColorName_0() {
  Enum.call(this, "TRANSPARENT", 147);
  this.m_value = "transparent";
  $wnd.Math.max($wnd.Math.min(0, 1), 0);
}

function values_10() {
  $clinit_ColorName();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_ColorName_2_classLit, 1),
    $intern_5,
    5,
    0,
    [
      ALICEBLUE,
      ANTIQUEWHITE,
      AQUA,
      AQUAMARINE,
      AZURE,
      BEIGE,
      BISQUE,
      BLACK,
      BLANCHEDALMOND,
      BLUE,
      BLUEVIOLET,
      BROWN,
      BURLYWOOD,
      CADETBLUE,
      CHARTREUSE,
      CHOCOLATE,
      CORAL,
      CORNFLOWERBLUE,
      CORNSILK,
      CRIMSON,
      CYAN,
      DARKBLUE,
      DARKCYAN,
      DARKGOLDENROD,
      DARKGRAY,
      DARKGREEN,
      DARKGREY,
      DARKKHAKI,
      DARKMAGENTA,
      DARKOLIVEGREEN,
      DARKORANGE,
      DARKORCHID,
      DARKRED,
      DARKSALMON,
      DARKSEAGREEN,
      DARKSLATEBLUE,
      DARKSLATEGRAY,
      DARKSLATEGREY,
      DARKTURQUOISE,
      DARKVIOLET,
      DEEPPINK,
      DEEPSKYBLUE,
      DIMGRAY,
      DIMGREY,
      DODGERBLUE,
      FIREBRICK,
      FLORALWHITE,
      FORESTGREEN,
      FUCHSIA,
      GAINSBORO,
      GHOSTWHITE,
      GOLD,
      GOLDENROD,
      GRAY,
      GREEN,
      GREENYELLOW,
      GREY,
      HONEYDEW,
      HOTPINK,
      INDIANRED,
      INDIGO,
      IVORY,
      KHAKI,
      LAVENDER,
      LAVENDERBLUSH,
      LAWNGREEN,
      LEMONCHIFFON,
      LIGHTBLUE,
      LIGHTCORAL,
      LIGHTCYAN,
      LIGHTGOLDENRODYELLOW,
      LIGHTGRAY,
      LIGHTGREEN,
      LIGHTGREY,
      LIGHTPINK,
      LIGHTSALMON,
      LIGHTSEAGREEN,
      LIGHTSKYBLUE,
      LIGHTSLATEGRAY,
      LIGHTSLATEGREY,
      LIGHTSTEELBLUE,
      LIGHTYELLOW,
      LIME,
      LIMEGREEN,
      LINEN,
      MAGENTA,
      MAROON,
      MEDIUMAQUAMARINE,
      MEDIUMBLUE,
      MEDIUMORCHID,
      MEDIUMPURPLE,
      MEDIUMSEAGREEN,
      MEDIUMSLATEBLUE,
      MEDIUMSPRINGGREEN,
      MEDIUMTURQUOISE,
      MEDIUMVIOLETRED,
      MIDNIGHTBLUE,
      MINTCREAM,
      MISTYROSE,
      MOCCASIN,
      NAVAJOWHITE,
      NAVY,
      OLDLACE,
      OLIVE,
      OLIVEDRAB,
      ORANGE,
      ORANGERED,
      ORCHID,
      PALEGOLDENROD,
      PALEGREEN,
      PALETURQUOISE,
      PALEVIOLETRED,
      PAPAYAWHIP,
      PEACHPUFF,
      PERU,
      PINK,
      PLUM,
      POWDERBLUE,
      PURPLE,
      RED,
      ROSYBROWN,
      ROYALBLUE,
      SADDLEBROWN,
      SALMON,
      SANDYBROWN,
      SEAGREEN,
      SEASHELL,
      SIENNA,
      SILVER,
      SKYBLUE,
      SLATEBLUE,
      SLATEGRAY,
      SLATEGREY,
      SNOW,
      SPRINGGREEN,
      STEELBLUE,
      TAN,
      TEAL,
      THISTLE,
      TOMATO,
      TURQUOISE,
      VIOLET,
      WHEAT,
      WHITE,
      WHITESMOKE,
      YELLOW,
      YELLOWGREEN,
      TRANSPARENT,
    ]
  );
}

defineClass(5, 7, { 5: 1, 49: 1, 437: 1, 38: 1, 39: 1, 3: 1, 8: 1, 7: 1 }, ColorName, ColorName_0);
_.getValue = function getValue_1() {
  return this.m_value;
};
_.toString = function toString_17() {
  return this.m_value;
};
var ALICEBLUE,
  ANTIQUEWHITE,
  AQUA,
  AQUAMARINE,
  AZURE,
  BEIGE,
  BISQUE,
  BLACK,
  BLANCHEDALMOND,
  BLUE,
  BLUEVIOLET,
  BROWN,
  BURLYWOOD,
  CADETBLUE,
  CHARTREUSE,
  CHOCOLATE,
  CORAL,
  CORNFLOWERBLUE,
  CORNSILK,
  CRIMSON,
  CYAN,
  DARKBLUE,
  DARKCYAN,
  DARKGOLDENROD,
  DARKGRAY,
  DARKGREEN,
  DARKGREY,
  DARKKHAKI,
  DARKMAGENTA,
  DARKOLIVEGREEN,
  DARKORANGE,
  DARKORCHID,
  DARKRED,
  DARKSALMON,
  DARKSEAGREEN,
  DARKSLATEBLUE,
  DARKSLATEGRAY,
  DARKSLATEGREY,
  DARKTURQUOISE,
  DARKVIOLET,
  DEEPPINK,
  DEEPSKYBLUE,
  DIMGRAY,
  DIMGREY,
  DODGERBLUE,
  FIREBRICK,
  FLORALWHITE,
  FORESTGREEN,
  FUCHSIA,
  GAINSBORO,
  GHOSTWHITE,
  GOLD,
  GOLDENROD,
  GRAY,
  GREEN,
  GREENYELLOW,
  GREY,
  HONEYDEW,
  HOTPINK,
  INDIANRED,
  INDIGO,
  IVORY,
  KHAKI,
  LAVENDER,
  LAVENDERBLUSH,
  LAWNGREEN,
  LEMONCHIFFON,
  LIGHTBLUE,
  LIGHTCORAL,
  LIGHTCYAN,
  LIGHTGOLDENRODYELLOW,
  LIGHTGRAY,
  LIGHTGREEN,
  LIGHTGREY,
  LIGHTPINK,
  LIGHTSALMON,
  LIGHTSEAGREEN,
  LIGHTSKYBLUE,
  LIGHTSLATEGRAY,
  LIGHTSLATEGREY,
  LIGHTSTEELBLUE,
  LIGHTYELLOW,
  LIME,
  LIMEGREEN,
  LINEN,
  MAGENTA,
  MAROON,
  MEDIUMAQUAMARINE,
  MEDIUMBLUE,
  MEDIUMORCHID,
  MEDIUMPURPLE,
  MEDIUMSEAGREEN,
  MEDIUMSLATEBLUE,
  MEDIUMSPRINGGREEN,
  MEDIUMTURQUOISE,
  MEDIUMVIOLETRED,
  MIDNIGHTBLUE,
  MINTCREAM,
  MISTYROSE,
  MOCCASIN,
  NAVAJOWHITE,
  NAVY,
  OLDLACE,
  OLIVE,
  OLIVEDRAB,
  ORANGE,
  ORANGERED,
  ORCHID,
  PALEGOLDENROD,
  PALEGREEN,
  PALETURQUOISE,
  PALEVIOLETRED,
  PAPAYAWHIP,
  PEACHPUFF,
  PERU,
  PINK,
  PLUM,
  POWDERBLUE,
  PURPLE,
  RED,
  ROSYBROWN,
  ROYALBLUE,
  SADDLEBROWN,
  SALMON,
  SANDYBROWN,
  SEAGREEN,
  SEASHELL,
  SIENNA,
  SILVER,
  SKYBLUE,
  SLATEBLUE,
  SLATEGRAY,
  SLATEGREY,
  SNOW,
  SPRINGGREEN,
  STEELBLUE,
  TAN,
  TEAL,
  THISTLE,
  TOMATO,
  TRANSPARENT,
  TURQUOISE,
  VIOLET,
  WHEAT,
  WHITE,
  WHITESMOKE,
  YELLOW,
  YELLOWGREEN;
var Lcom_ait_lienzo_shared_core_types_ColorName_2_classLit = createForEnum(
  "com.ait.lienzo.shared.core.types",
  "ColorName",
  5,
  values_10
);
function $clinit_Direction() {
  $clinit_Direction = emptyMethod;
  NORTH = new Direction("NORTH", 0, "north");
  SOUTH = new Direction("SOUTH", 1, "south");
  EAST = new Direction("EAST", 2, "east");
  WEST = new Direction("WEST", 3, "west");
  NONE_1 = new Direction("NONE", 4, "none");
  NORTH_EAST = new Direction("NORTH_EAST", 5, "north_east");
  SOUTH_EAST = new Direction("SOUTH_EAST", 6, "south_east");
  SOUTH_WEST = new Direction("SOUTH_WEST", 7, "south_west");
  NORTH_WEST = new Direction("NORTH_WEST", 8, "north_west");
  new EnumWithValue$EnumStringMap(
    stampJavaTypeInfo(
      getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_Direction_2_classLit, 1),
      $intern_5,
      40,
      0,
      [NORTH, SOUTH, EAST, WEST, NONE_1, NORTH_EAST, SOUTH_EAST, SOUTH_WEST, NORTH_WEST]
    )
  );
}

function Direction(enum$name, enum$ordinal, value_0) {
  Enum.call(this, enum$name, enum$ordinal);
  this.m_value = value_0;
}

function values_11() {
  $clinit_Direction();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_Direction_2_classLit, 1),
    $intern_5,
    40,
    0,
    [NORTH, SOUTH, EAST, WEST, NONE_1, NORTH_EAST, SOUTH_EAST, SOUTH_WEST, NORTH_WEST]
  );
}

defineClass(40, 7, { 40: 1, 49: 1, 38: 1, 39: 1, 3: 1, 8: 1, 7: 1 }, Direction);
_.getValue = function getValue_2() {
  return this.m_value;
};
_.toString = function toString_18() {
  return this.m_value;
};
var EAST, NONE_1, NORTH, NORTH_EAST, NORTH_WEST, SOUTH, SOUTH_EAST, SOUTH_WEST, WEST;
var Lcom_ait_lienzo_shared_core_types_Direction_2_classLit = createForEnum(
  "com.ait.lienzo.shared.core.types",
  "Direction",
  40,
  values_11
);
function $clinit_DragConstraint() {
  $clinit_DragConstraint = emptyMethod;
  HORIZONTAL = new DragConstraint("HORIZONTAL", 0, "horizontal");
  VERTICAL = new DragConstraint("VERTICAL", 1, "vertical");
  NONE_2 = new DragConstraint("NONE", 2, "none");
  new EnumWithValue$EnumStringMap(
    stampJavaTypeInfo(
      getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_DragConstraint_2_classLit, 1),
      $intern_5,
      71,
      0,
      [HORIZONTAL, VERTICAL, NONE_2]
    )
  );
}

function DragConstraint(enum$name, enum$ordinal, value_0) {
  Enum.call(this, enum$name, enum$ordinal);
  this.m_value = value_0;
}

function values_12() {
  $clinit_DragConstraint();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_DragConstraint_2_classLit, 1),
    $intern_5,
    71,
    0,
    [HORIZONTAL, VERTICAL, NONE_2]
  );
}

defineClass(71, 7, { 71: 1, 49: 1, 38: 1, 39: 1, 3: 1, 8: 1, 7: 1 }, DragConstraint);
_.getValue = function getValue_3() {
  return this.m_value;
};
_.toString = function toString_19() {
  return this.m_value;
};
var HORIZONTAL, NONE_2, VERTICAL;
var Lcom_ait_lienzo_shared_core_types_DragConstraint_2_classLit = createForEnum(
  "com.ait.lienzo.shared.core.types",
  "DragConstraint",
  71,
  values_12
);
function $clinit_DragMode() {
  $clinit_DragMode = emptyMethod;
  DRAG_LAYER = new DragMode("DRAG_LAYER", 0, "drag-layer");
  SAME_LAYER = new DragMode("SAME_LAYER", 1, "same-layer");
  new EnumWithValue$EnumStringMap(
    stampJavaTypeInfo(
      getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_DragMode_2_classLit, 1),
      $intern_5,
      89,
      0,
      [DRAG_LAYER, SAME_LAYER]
    )
  );
}

function DragMode(enum$name, enum$ordinal, value_0) {
  Enum.call(this, enum$name, enum$ordinal);
  this.m_value = value_0;
}

function values_13() {
  $clinit_DragMode();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_DragMode_2_classLit, 1),
    $intern_5,
    89,
    0,
    [DRAG_LAYER, SAME_LAYER]
  );
}

defineClass(89, 7, { 89: 1, 49: 1, 38: 1, 39: 1, 3: 1, 8: 1, 7: 1 }, DragMode);
_.getValue = function getValue_4() {
  return this.m_value;
};
_.toString = function toString_20() {
  return this.m_value;
};
var DRAG_LAYER, SAME_LAYER;
var Lcom_ait_lienzo_shared_core_types_DragMode_2_classLit = createForEnum(
  "com.ait.lienzo.shared.core.types",
  "DragMode",
  89,
  values_13
);
function $containsEntry(this$static, entry) {
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get(key);
  if (
    !(
      maskUndefined(value_0) === maskUndefined(ourValue) ||
      (value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))
    )
  ) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove) {
  var entry, iter, k;
  for (iter = this$static.entrySet().iterator(); iter.hasNext_0(); ) {
    entry = iter.next_1();
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || (key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k))) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        iter.remove_0();
      }
      return entry;
    }
  }
  return null;
}

function $toString_0(this$static, o) {
  return o === this$static ? "(this Map)" : o == null ? "null" : toString_34(o);
}

function getEntryValueOrNull(entry) {
  return !entry ? null : entry.getValue();
}

defineClass(397, 1, { 106: 1 });
_.getOrDefault = function getOrDefault(key, defaultValue) {
  var currentValue;
  return (currentValue = this.get(key)), currentValue == null && !this.containsKey(key) ? defaultValue : currentValue;
};
_.putIfAbsent = function putIfAbsent(key, value_0) {
  var currentValue;
  return (currentValue = this.get(key)), currentValue != null ? currentValue : this.put(key, value_0);
};
_.replace = function replace_0(key, value_0) {
  return this.containsKey(key) ? this.put(key, value_0) : null;
};
_.clear = function clear_0() {
  this.entrySet().clear();
};
_.containsKey = function containsKey(key) {
  return !!$implFindEntry(this, key, false);
};
_.containsValue = function containsValue(value_0) {
  var entry, entry$iterator, v;
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext_0(); ) {
    entry = entry$iterator.next_1();
    v = entry.getValue();
    if (
      maskUndefined(value_0) === maskUndefined(v) ||
      (value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, v))
    ) {
      return true;
    }
  }
  return false;
};
_.equals_0 = function equals_10(obj) {
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 106)) {
    return false;
  }
  otherMap = obj;
  if (this.size() != otherMap.size()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext_0(); ) {
    entry = entry$iterator.next_1();
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
};
_.get = function get_2(key) {
  return getEntryValueOrNull($implFindEntry(this, key, false));
};
_.hashCode_0 = function hashCode_11() {
  return hashCode_21(this.entrySet());
};
_.isEmpty = function isEmpty_0() {
  return this.size() == 0;
};
_.keySet = function keySet() {
  return new AbstractMap$1(this);
};
_.put = function put(key, value_0) {
  throw toJs(new UnsupportedOperationException_0("Put not supported on this map"));
};
_.putAll = function putAll(map_0) {
  var e, e$iterator;
  checkCriticalNotNull(map_0);
  for (e$iterator = map_0.entrySet().iterator(); e$iterator.hasNext_0(); ) {
    e = e$iterator.next_1();
    this.put(e.getKey(), e.getValue());
  }
};
_.remove = function remove_2(key) {
  return getEntryValueOrNull($implFindEntry(this, key, true));
};
_.size = function size_1() {
  return this.entrySet().size();
};
_.toString_0 = function toString_21() {
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner("{", "}");
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext_0(); ) {
    entry = entry$iterator.next_1();
    $add_13(joiner, $toString_0(this, entry.getKey()) + "=" + $toString_0(this, entry.getValue()));
  }
  return !joiner.builder
    ? joiner.emptyValue
    : joiner.suffix.length == 0
    ? joiner.builder.string
    : joiner.builder.string + ("" + joiner.suffix);
};
_.values = function values_14() {
  return new AbstractMap$2(this);
};
var Ljava_util_AbstractMap_2_classLit = createForClass("java.util", "AbstractMap", 397);
function $containsKey(this$static, key) {
  return instanceOfString(key) ? $hasStringValue(this$static, key) : !!$getEntry(this$static.hashCodeMap, key);
}

function $containsValue(this$static, value_0, entries) {
  var entry, entry$iterator;
  for (entry$iterator = entries.iterator(); entry$iterator.hasNext_0(); ) {
    entry = entry$iterator.next_1();
    if (this$static.equals_1(value_0, entry.getValue())) {
      return true;
    }
  }
  return false;
}

function $get_2(this$static, key) {
  return instanceOfString(key)
    ? $getStringValue(this$static, key)
    : getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key) {
  return key == null
    ? getEntryValueOrNull($getEntry(this$static.hashCodeMap, null))
    : $get_6(this$static.stringMap, key);
}

function $hasStringValue(this$static, key) {
  return key == null ? !!$getEntry(this$static.hashCodeMap, null) : $contains_1(this$static.stringMap, key);
}

function $put(this$static, key, value_0) {
  return instanceOfString(key)
    ? $putStringValue(this$static, key, value_0)
    : $put_2(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0) {
  return key == null ? $put_2(this$static.hashCodeMap, null, value_0) : $put_3(this$static.stringMap, key, value_0);
}

function $remove_2(this$static, key) {
  return instanceOfString(key)
    ? key == null
      ? $remove_8(this$static.hashCodeMap, null)
      : $remove_9(this$static.stringMap, key)
    : $remove_8(this$static.hashCodeMap, key);
}

function $reset(this$static) {
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  structureChanged(this$static);
}

function $size(this$static) {
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(190, 397, { 106: 1 });
_.clear = function clear_1() {
  $reset(this);
};
_.containsKey = function containsKey_0(key) {
  return $containsKey(this, key);
};
_.containsValue = function containsValue_0(value_0) {
  return $containsValue(this, value_0, this.stringMap) || $containsValue(this, value_0, this.hashCodeMap);
};
_.entrySet = function entrySet() {
  return new AbstractHashMap$EntrySet(this);
};
_.get = function get_3(key) {
  return $get_2(this, key);
};
_.put = function put_0(key, value_0) {
  return $put(this, key, value_0);
};
_.remove = function remove_3(key) {
  return $remove_2(this, key);
};
_.size = function size_2() {
  return $size(this);
};
var Ljava_util_AbstractHashMap_2_classLit = createForClass("java.util", "AbstractHashMap", 190);
function HashMap() {
  $reset(this);
}

defineClass(32, 190, $intern_31, HashMap);
_.equals_1 = function equals_11(value1, value2) {
  return (
    maskUndefined(value1) === maskUndefined(value2) ||
    (value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2))
  );
};
_.getHashCode = function getHashCode(key) {
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return hashCode | 0;
};
var Ljava_util_HashMap_2_classLit = createForClass("java.util", "HashMap", 32);
function $clear_2(this$static) {
  $reset(this$static.map_0);
  this$static.head.prev = this$static.head;
  this$static.head.next_0 = this$static.head;
}

function $get_3(this$static, key) {
  var entry;
  entry = $get_2(this$static.map_0, key);
  if (entry) {
    $recordAccess(this$static, entry);
    return entry.value_0;
  }
  return null;
}

function $put_0(this$static, key, value_0) {
  var newEntry, old, oldValue;
  old = $get_2(this$static.map_0, key);
  if (!old) {
    newEntry = new LinkedHashMap$ChainEntry_0(this$static, key, value_0);
    $put(this$static.map_0, key, newEntry);
    $addToEnd(newEntry);
    return null;
  } else {
    oldValue = $setValue(old, value_0);
    $recordAccess(this$static, old);
    return oldValue;
  }
}

function $recordAccess(this$static, entry) {
  if (this$static.accessOrder) {
    $remove_10(entry);
    $addToEnd(entry);
  }
}

function $remove_3(this$static, key) {
  var entry;
  entry = $remove_2(this$static.map_0, key);
  if (entry) {
    $remove_10(entry);
    return entry.value_0;
  }
  return null;
}

defineClass(187, 32, $intern_31);
_.clear = function clear_2() {
  $clear_2(this);
};
_.containsKey = function containsKey_1(key) {
  return $containsKey(this.map_0, key);
};
_.containsValue = function containsValue_1(value_0) {
  var node;
  node = this.head.next_0;
  while (node != this.head) {
    if (equals_21(node.value_0, value_0)) {
      return true;
    }
    node = node.next_0;
  }
  return false;
};
_.entrySet = function entrySet_0() {
  return new LinkedHashMap$EntrySet(this);
};
_.get = function get_4(key) {
  return $get_3(this, key);
};
_.put = function put_1(key, value_0) {
  return $put_0(this, key, value_0);
};
_.remove = function remove_4(key) {
  return $remove_3(this, key);
};
_.size = function size_3() {
  return $size(this.map_0);
};
_.accessOrder = false;
var Ljava_util_LinkedHashMap_2_classLit = createForClass("java.util", "LinkedHashMap", 187);
function EnumWithValue$EnumStringMap(values) {
  var i, size_0, value_0;
  $reset(this);
  this.head = new LinkedHashMap$ChainEntry(this);
  this.map_0 = new HashMap();
  this.head.prev = this.head;
  this.head.next_0 = this.head;
  size_0 = values.length;
  for (i = 0; i < size_0; i++) {
    value_0 = values[i];
    $put_0(this, value_0.getValue(), value_0);
  }
}

defineClass(44, 187, $intern_31, EnumWithValue$EnumStringMap);
var Lcom_ait_lienzo_shared_core_types_EnumWithValue$EnumStringMap_2_classLit = createForClass(
  "com.ait.lienzo.shared.core.types",
  "EnumWithValue/EnumStringMap",
  44
);
function $clinit_EventPropagationMode() {
  $clinit_EventPropagationMode = emptyMethod;
  NO_ANCESTORS = new EventPropagationMode("NO_ANCESTORS", 0, "no-ancestors", 0);
  FIRST_ANCESTOR = new EventPropagationMode("FIRST_ANCESTOR", 1, "first-ancestor", 1);
  LAST_ANCESTOR = new EventPropagationMode("LAST_ANCESTOR", 2, "last-ancestor", 2);
  new EnumWithValue$EnumStringMap(
    stampJavaTypeInfo(
      getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_EventPropagationMode_2_classLit, 1),
      $intern_5,
      74,
      0,
      [NO_ANCESTORS, FIRST_ANCESTOR, LAST_ANCESTOR]
    )
  );
}

function EventPropagationMode(enum$name, enum$ordinal, value_0, order) {
  Enum.call(this, enum$name, enum$ordinal);
  this.m_value = value_0;
  this.m_order = order;
}

function values_15() {
  $clinit_EventPropagationMode();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_EventPropagationMode_2_classLit, 1),
    $intern_5,
    74,
    0,
    [NO_ANCESTORS, FIRST_ANCESTOR, LAST_ANCESTOR]
  );
}

defineClass(74, 7, { 49: 1, 74: 1, 38: 1, 39: 1, 3: 1, 8: 1, 7: 1 }, EventPropagationMode);
_.getValue = function getValue_5() {
  return this.m_value;
};
_.toString = function toString_22() {
  return this.m_value;
};
_.m_order = 0;
var FIRST_ANCESTOR, LAST_ANCESTOR, NO_ANCESTORS;
var Lcom_ait_lienzo_shared_core_types_EventPropagationMode_2_classLit = createForEnum(
  "com.ait.lienzo.shared.core.types",
  "EventPropagationMode",
  74,
  values_15
);
function $clinit_GroupType() {
  $clinit_GroupType = emptyMethod;
  new GroupType();
}

function GroupType() {
  this.m_value = "Group";
}

defineClass(121, 1, { 121: 1, 38: 1, 39: 1 }, GroupType);
_.getValue = function getValue_6() {
  return this.m_value;
};
_.equals_0 = function equals_12(other) {
  if (!instanceOf(other, 121)) {
    return false;
  }
  if (this === other) {
    return true;
  }
  return $equals_1(other.m_value, this.m_value);
};
_.hashCode_0 = function hashCode_12() {
  return getHashCode_1(this.m_value);
};
_.toString_0 = function toString_23() {
  return this.m_value;
};
var Lcom_ait_lienzo_shared_core_types_GroupType_2_classLit = createForClass(
  "com.ait.lienzo.shared.core.types",
  "GroupType",
  121
);
function $clinit_ImageSelectionMode() {
  $clinit_ImageSelectionMode = emptyMethod;
  SELECT_BOUNDS = new ImageSelectionMode("SELECT_BOUNDS", 0, "select-bounds");
  SELECT_NON_TRANSPARENT = new ImageSelectionMode("SELECT_NON_TRANSPARENT", 1, "select-non-transparent");
  new EnumWithValue$EnumStringMap(
    stampJavaTypeInfo(
      getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_ImageSelectionMode_2_classLit, 1),
      $intern_5,
      101,
      0,
      [SELECT_BOUNDS, SELECT_NON_TRANSPARENT]
    )
  );
}

function ImageSelectionMode(enum$name, enum$ordinal, value_0) {
  Enum.call(this, enum$name, enum$ordinal);
  this.m_value = value_0;
}

function values_16() {
  $clinit_ImageSelectionMode();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_ImageSelectionMode_2_classLit, 1),
    $intern_5,
    101,
    0,
    [SELECT_BOUNDS, SELECT_NON_TRANSPARENT]
  );
}

defineClass(101, 7, { 49: 1, 101: 1, 38: 1, 39: 1, 3: 1, 8: 1, 7: 1 }, ImageSelectionMode);
_.getValue = function getValue_7() {
  return this.m_value;
};
_.toString = function toString_24() {
  return this.m_value;
};
var SELECT_BOUNDS, SELECT_NON_TRANSPARENT;
var Lcom_ait_lienzo_shared_core_types_ImageSelectionMode_2_classLit = createForEnum(
  "com.ait.lienzo.shared.core.types",
  "ImageSelectionMode",
  101,
  values_16
);
function $clinit_LayerClearMode() {
  $clinit_LayerClearMode = emptyMethod;
  CLEAR = new LayerClearMode("CLEAR", 0, "clear-layer");
  RESIZE = new LayerClearMode("RESIZE", 1, "resize-layer");
  new EnumWithValue$EnumStringMap(
    stampJavaTypeInfo(
      getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_LayerClearMode_2_classLit, 1),
      $intern_5,
      100,
      0,
      [CLEAR, RESIZE]
    )
  );
}

function LayerClearMode(enum$name, enum$ordinal, value_0) {
  Enum.call(this, enum$name, enum$ordinal);
  this.m_value = value_0;
}

function values_17() {
  $clinit_LayerClearMode();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_LayerClearMode_2_classLit, 1),
    $intern_5,
    100,
    0,
    [CLEAR, RESIZE]
  );
}

defineClass(100, 7, { 49: 1, 100: 1, 38: 1, 39: 1, 3: 1, 8: 1, 7: 1 }, LayerClearMode);
_.getValue = function getValue_8() {
  return this.m_value;
};
_.toString = function toString_25() {
  return this.m_value;
};
var CLEAR, RESIZE;
var Lcom_ait_lienzo_shared_core_types_LayerClearMode_2_classLit = createForEnum(
  "com.ait.lienzo.shared.core.types",
  "LayerClearMode",
  100,
  values_17
);
function $clinit_LineCap() {
  $clinit_LineCap = emptyMethod;
  BUTT = new LineCap("BUTT", 0, "butt");
  ROUND = new LineCap("ROUND", 1, "round");
  SQUARE = new LineCap("SQUARE", 2, "square");
  new EnumWithValue$EnumStringMap(
    stampJavaTypeInfo(
      getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_LineCap_2_classLit, 1),
      $intern_5,
      75,
      0,
      [BUTT, ROUND, SQUARE]
    )
  );
}

function LineCap(enum$name, enum$ordinal, value_0) {
  Enum.call(this, enum$name, enum$ordinal);
  this.m_value = value_0;
}

function values_18() {
  $clinit_LineCap();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_LineCap_2_classLit, 1),
    $intern_5,
    75,
    0,
    [BUTT, ROUND, SQUARE]
  );
}

defineClass(75, 7, { 49: 1, 75: 1, 38: 1, 39: 1, 3: 1, 8: 1, 7: 1 }, LineCap);
_.getValue = function getValue_9() {
  return this.m_value;
};
_.toString = function toString_26() {
  return this.m_value;
};
var BUTT, ROUND, SQUARE;
var Lcom_ait_lienzo_shared_core_types_LineCap_2_classLit = createForEnum(
  "com.ait.lienzo.shared.core.types",
  "LineCap",
  75,
  values_18
);
function $clinit_NodeType() {
  $clinit_NodeType = emptyMethod;
  SCENE = new NodeType("Scene");
  LAYER = new NodeType("Layer");
  GROUP = new NodeType("Group");
  SHAPE = new NodeType("Shape");
  new NodeType("Proxy");
  VIEWPORT = new NodeType("Viewport");
  new NodeType("GridLayer");
}

function NodeType(value_0) {
  $clinit_NodeType();
  this.m_value = value_0;
}

defineClass(48, 1, { 48: 1, 38: 1, 39: 1 }, NodeType);
_.getValue = function getValue_10() {
  return this.m_value;
};
_.equals_0 = function equals_13(other) {
  if (!instanceOf(other, 48)) {
    return false;
  }
  if (this === other) {
    return true;
  }
  return $equals_1(other.m_value, this.m_value);
};
_.hashCode_0 = function hashCode_13() {
  return getHashCode_1(this.m_value);
};
_.toString_0 = function toString_27() {
  return this.m_value;
};
var GROUP, LAYER, SCENE, SHAPE, VIEWPORT;
var Lcom_ait_lienzo_shared_core_types_NodeType_2_classLit = createForClass(
  "com.ait.lienzo.shared.core.types",
  "NodeType",
  48
);
function $clinit_ShapeType() {
  $clinit_ShapeType = emptyMethod;
  ARC = new ShapeType("Arc");
  ARROW = new ShapeType("Arrow");
  BEZIER_CURVE = new ShapeType("BezierCurve");
  CIRCLE = new ShapeType("Circle");
  new ShapeType("EllipticalArc");
  ELLIPSE = new ShapeType("Ellipse");
  LINE = new ShapeType("Line");
  new ShapeType("Movie");
  new ShapeType("Parallelogram");
  new ShapeType("Picture");
  new ShapeType("Image");
  POLYGON = new ShapeType("Polygon");
  new ShapeType("Polyline");
  new ShapeType("OrthogonalPolyline");
  QUADRATIC_CURVE = new ShapeType("QuadraticCurve");
  RECTANGLE = new ShapeType("Rectangle");
  new ShapeType("RegularPolygon");
  SLICE = new ShapeType("Slice");
  STAR = new ShapeType("Star");
  TEXT_1 = new ShapeType("Text");
  TRIANGLE = new ShapeType("Triangle");
  SPLINE = new ShapeType("Spline");
  BOW = new ShapeType("Bow");
  new ShapeType("Ring");
  new ShapeType("Chord");
  new ShapeType("IsoscelesTrapezoid");
  SVG_PATH = new ShapeType("SVGPath");
  MULTI_PATH = new ShapeType("MultiPath");
  new ShapeType("Sprite");
}

function ShapeType(value_0) {
  $clinit_ShapeType();
  this.m_value = value_0;
}

defineClass(20, 1, { 20: 1, 38: 1, 39: 1 }, ShapeType);
_.getValue = function getValue_11() {
  return this.m_value;
};
_.equals_0 = function equals_14(other) {
  var that;
  if (other == null || !instanceOf(other, 20)) {
    return false;
  }
  if (this === other) {
    return true;
  }
  that = other;
  return $equals_1(that.m_value, this.m_value);
};
_.hashCode_0 = function hashCode_14() {
  return getHashCode_1(this.m_value);
};
_.toString_0 = function toString_28() {
  return this.m_value;
};
var ARC,
  ARROW,
  BEZIER_CURVE,
  BOW,
  CIRCLE,
  ELLIPSE,
  LINE,
  MULTI_PATH,
  POLYGON,
  QUADRATIC_CURVE,
  RECTANGLE,
  SLICE,
  SPLINE,
  STAR,
  SVG_PATH,
  TEXT_1,
  TRIANGLE;
var Lcom_ait_lienzo_shared_core_types_ShapeType_2_classLit = createForClass(
  "com.ait.lienzo.shared.core.types",
  "ShapeType",
  20
);
function $clinit_TextAlign() {
  $clinit_TextAlign = emptyMethod;
  START = new TextAlign("START", 0, "start");
  END = new TextAlign("END", 1, "end");
  LEFT_0 = new TextAlign("LEFT", 2, "left");
  CENTER = new TextAlign("CENTER", 3, "center");
  RIGHT_0 = new TextAlign("RIGHT", 4, "right");
  new EnumWithValue$EnumStringMap(
    stampJavaTypeInfo(
      getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_TextAlign_2_classLit, 1),
      $intern_5,
      63,
      0,
      [START, END, LEFT_0, CENTER, RIGHT_0]
    )
  );
}

function TextAlign(enum$name, enum$ordinal, value_0) {
  Enum.call(this, enum$name, enum$ordinal);
  this.m_value = value_0;
}

function values_19() {
  $clinit_TextAlign();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_TextAlign_2_classLit, 1),
    $intern_5,
    63,
    0,
    [START, END, LEFT_0, CENTER, RIGHT_0]
  );
}

defineClass(63, 7, { 49: 1, 63: 1, 38: 1, 39: 1, 3: 1, 8: 1, 7: 1 }, TextAlign);
_.getValue = function getValue_12() {
  return this.m_value;
};
_.toString = function toString_29() {
  return this.m_value;
};
var CENTER, END, LEFT_0, RIGHT_0, START;
var Lcom_ait_lienzo_shared_core_types_TextAlign_2_classLit = createForEnum(
  "com.ait.lienzo.shared.core.types",
  "TextAlign",
  63,
  values_19
);
function $clinit_TextBaseLine() {
  $clinit_TextBaseLine = emptyMethod;
  ALPHABETIC = new TextBaseLine("ALPHABETIC", 0, "alphabetic");
  TOP_0 = new TextBaseLine("TOP", 1, "top");
  HANGING = new TextBaseLine("HANGING", 2, "hanging");
  MIDDLE = new TextBaseLine("MIDDLE", 3, "middle");
  IDEOGRAPHIC = new TextBaseLine("IDEOGRAPHIC", 4, "ideographic");
  BOTTOM = new TextBaseLine("BOTTOM", 5, "bottom");
  new EnumWithValue$EnumStringMap(
    stampJavaTypeInfo(
      getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_TextBaseLine_2_classLit, 1),
      $intern_5,
      56,
      0,
      [ALPHABETIC, TOP_0, HANGING, MIDDLE, IDEOGRAPHIC, BOTTOM]
    )
  );
}

function TextBaseLine(enum$name, enum$ordinal, value_0) {
  Enum.call(this, enum$name, enum$ordinal);
  this.m_value = value_0;
}

function values_20() {
  $clinit_TextBaseLine();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_TextBaseLine_2_classLit, 1),
    $intern_5,
    56,
    0,
    [ALPHABETIC, TOP_0, HANGING, MIDDLE, IDEOGRAPHIC, BOTTOM]
  );
}

defineClass(56, 7, { 49: 1, 56: 1, 38: 1, 39: 1, 3: 1, 8: 1, 7: 1 }, TextBaseLine);
_.getValue = function getValue_13() {
  return this.m_value;
};
_.toString = function toString_30() {
  return this.m_value;
};
var ALPHABETIC, BOTTOM, HANGING, IDEOGRAPHIC, MIDDLE, TOP_0;
var Lcom_ait_lienzo_shared_core_types_TextBaseLine_2_classLit = createForEnum(
  "com.ait.lienzo.shared.core.types",
  "TextBaseLine",
  56,
  values_20
);
function $clinit_TextUnit() {
  $clinit_TextUnit = emptyMethod;
  PT_0 = new TextUnit("PT", 0, "pt");
  PX_0 = new TextUnit("PX", 1, "px");
  PC_0 = new TextUnit("PC", 2, "pc");
  CM_0 = new TextUnit("CM", 3, "cm");
  MM_0 = new TextUnit("MM", 4, "mm");
  new EnumWithValue$EnumStringMap(
    stampJavaTypeInfo(
      getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_TextUnit_2_classLit, 1),
      $intern_5,
      62,
      0,
      [PT_0, PX_0, PC_0, CM_0, MM_0]
    )
  );
}

function TextUnit(enum$name, enum$ordinal, value_0) {
  Enum.call(this, enum$name, enum$ordinal);
  this.m_value = value_0;
}

function values_21() {
  $clinit_TextUnit();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_shared_core_types_TextUnit_2_classLit, 1),
    $intern_5,
    62,
    0,
    [PT_0, PX_0, PC_0, CM_0, MM_0]
  );
}

defineClass(62, 7, { 49: 1, 62: 1, 38: 1, 39: 1, 3: 1, 8: 1, 7: 1 }, TextUnit);
_.getValue = function getValue_14() {
  return this.m_value;
};
_.toString = function toString_31() {
  return this.m_value;
};
var CM_0, MM_0, PC_0, PT_0, PX_0;
var Lcom_ait_lienzo_shared_core_types_TextUnit_2_classLit = createForEnum(
  "com.ait.lienzo.shared.core.types",
  "TextUnit",
  62,
  values_21
);
function Timer$lambda$0$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(457, $wnd.Function, {}, Timer$lambda$0$Type);
_.onInvoke_0 = function onInvoke_1(arg0) {
  $lambda$0_2(this.$$outer_0);
};
function Timer$lambda$1$Type($$outer_0) {
  this.$$outer_0 = $$outer_0;
}

defineClass(458, $wnd.Function, {}, Timer$lambda$1$Type);
_.onInvoke_0 = function onInvoke_2(arg0) {
  $lambda$1_1(this.$$outer_0);
};
function $setSize(this$static, size_0) {
  size_0 < 0 && (size_0 = 0);
  if ($getLength_0(this$static) < size_0) {
    while ($getLength_0(this$static) < size_0) {
      this$static.pop();
    }
  } else {
    $setLength(this$static, size_0);
  }
}

function $add_9(this$static, value_0) {
  this$static.push(value_0);
  return this$static;
}

function $get_4(this$static, index_0) {
  if (index_0 >= 0 && index_0 < $getLength_0(this$static)) {
    return $getAt(this$static, index_0);
  }
  return null;
}

function $remove_4(this$static, value_0) {
  var i;
  for (i = 0; i < $getLength_0(this$static); i++) {
    if ($getAt(this$static, i) === value_0) {
      this$static.splice(i, 1);
      break;
    }
  }
  return this$static;
}

function $set_0(this$static, i, value_0) {
  $setAt(this$static, i, value_0);
  return this$static;
}

function $get_5(this$static, index_0) {
  if (index_0 >= 0 && index_0 < this$static.length) {
    return this$static[index_0];
  }
  return null;
}

function makeFromDoubles(list) {
  var array, d, d$array, d$index, d$max;
  array = new $wnd.Array();
  for (d$array = list, d$index = 0, d$max = d$array.length; d$index < d$max; ++d$index) {
    d = d$array[d$index];
    array.push(d);
  }
  return array;
}

function $put_1(this$static, key, value_0) {
  this$static.set(key, value_0);
  return this$static;
}

function $remove_5(this$static, key) {
  this$static.delete(key);
  return this$static;
}

function $clinit_EventType() {
  $clinit_EventType = emptyMethod;
  CLICKED = new EventType("CLICKED", 0, "click");
  DOUBLE_CLICKED = new EventType("DOUBLE_CLICKED", 1, "dblclick");
  MOUSE_UP = new EventType("MOUSE_UP", 2, "mouseup");
  MOUSE_DOWN = new EventType("MOUSE_DOWN", 3, "mousedown");
  MOUSE_MOVE = new EventType("MOUSE_MOVE", 4, "mousemove");
  MOUSE_OUT = new EventType("MOUSE_OUT", 5, "mouseout");
  MOUSE_OVER = new EventType("MOUSE_OVER", 6, "mouseover");
  MOUSE_WHEEL = new EventType("MOUSE_WHEEL", 7, "mousewheel");
  TOUCH_START = new EventType("TOUCH_START", 8, "touchstart");
  TOUCH_END = new EventType("TOUCH_END", 9, "touchend");
  TOUCH_CANCEL = new EventType("TOUCH_CANCEL", 10, "touchcancel");
  TOUCH_MOVE = new EventType("TOUCH_MOVE", 11, "touchmove");
}

function EventType(enum$name, enum$ordinal, type_0) {
  Enum.call(this, enum$name, enum$ordinal);
  this.type_0 = type_0;
}

function values_22() {
  $clinit_EventType();
  return stampJavaTypeInfo(
    getClassLiteralForArray(Lcom_ait_lienzo_tools_client_event_EventType_2_classLit, 1),
    $intern_5,
    41,
    0,
    [
      CLICKED,
      DOUBLE_CLICKED,
      MOUSE_UP,
      MOUSE_DOWN,
      MOUSE_MOVE,
      MOUSE_OUT,
      MOUSE_OVER,
      MOUSE_WHEEL,
      TOUCH_START,
      TOUCH_END,
      TOUCH_CANCEL,
      TOUCH_MOVE,
    ]
  );
}

defineClass(41, 7, { 41: 1, 3: 1, 8: 1, 7: 1 }, EventType);
var CLICKED,
  DOUBLE_CLICKED,
  MOUSE_DOWN,
  MOUSE_MOVE,
  MOUSE_OUT,
  MOUSE_OVER,
  MOUSE_UP,
  MOUSE_WHEEL,
  TOUCH_CANCEL,
  TOUCH_END,
  TOUCH_MOVE,
  TOUCH_START;
var Lcom_ait_lienzo_tools_client_event_EventType_2_classLit = createForEnum(
  "com.ait.lienzo.tools.client.event",
  "EventType",
  41,
  values_22
);
function $addHandler(this$static, type_0, handler) {
  var handlers, reg;
  this$static.map_0 == null && (this$static.map_0 = new $wnd.Map());
  handlers = this$static.map_0.get(type_0);
  if (handlers == null) {
    handlers = new $wnd.Array();
    this$static.map_0.set(type_0, handlers);
  }
  handlers.push(handler);
  reg = new HandlerManager$HandlerRegistrationImpl();
  return reg;
}

function $fireEvent_2(this$static, event_0) {
  var causes, handlers, i, var11;
  if (this$static.map_0 == null) {
    return;
  }
  handlers = this$static.map_0.get(event_0.getAssociatedType());
  if (handlers == null) {
    return;
  }
  causes = null;
  try {
    ++this$static.firingDepth;
    for (i = 0; i < handlers.length; i++) {
      try {
        event_0.dispatch(handlers[i]);
      } catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 16)) {
          var11 = $e0;
          causes == null && (causes = new $wnd.Set());
          causes.add(var11);
        } else throw toJs($e0);
      }
    }
    if (causes != null) {
      throw toJs(new RuntimeException_1(causes.values().next().value));
    }
  } finally {
    --this$static.firingDepth;
  }
}

function HandlerManager() {}

defineClass(136, 1, {}, HandlerManager);
_.firingDepth = 0;
var Lcom_ait_lienzo_tools_client_event_HandlerManager_2_classLit = createForClass(
  "com.ait.lienzo.tools.client.event",
  "HandlerManager",
  136
);
function HandlerManager$HandlerRegistrationImpl() {}

defineClass(186, 1, {}, HandlerManager$HandlerRegistrationImpl);
var Lcom_ait_lienzo_tools_client_event_HandlerManager$HandlerRegistrationImpl_2_classLit = createForClass(
  "com.ait.lienzo.tools.client.event",
  "HandlerManager/HandlerRegistrationImpl",
  186
);
function HandlerRegistrationManager() {
  new $wnd.Array();
}

defineClass(152, 1, {}, HandlerRegistrationManager);
var Lcom_ait_lienzo_tools_client_event_HandlerRegistrationManager_2_classLit = createForClass(
  "com.ait.lienzo.tools.client.event",
  "HandlerRegistrationManager",
  152
);
function INodeEvent$Type() {}

defineClass(25, 1, {}, INodeEvent$Type);
var Lcom_ait_lienzo_tools_client_event_INodeEvent$Type_2_classLit = createForClass(
  "com.ait.lienzo.tools.client.event",
  "INodeEvent/Type",
  25
);
function getRelativeX(clientX, target) {
  return round_int(
    clientX -
      round_int(getSubPixelAbsoluteLeft(target)) +
      target.scrollLeft +
      target.ownerDocument.documentElement.scrollLeft
  );
}

function getRelativeY(clientY, target) {
  return round_int(
    clientY -
      round_int(getSubPixelAbsoluteTop(target)) +
      target.scrollTop +
      target.ownerDocument.documentElement.scrollTop
  );
}

function getSubPixelAbsoluteLeft(elem) {
  var curr, left;
  left = 0;
  curr = elem;
  while (curr.offsetParent != null) {
    left -= curr.scrollLeft;
    curr = curr.parentNode;
  }
  while (elem != null) {
    left += elem.offsetLeft;
    elem = elem.offsetParent;
  }
  return left;
}

function getSubPixelAbsoluteTop(elem) {
  var curr, left;
  left = 0;
  curr = elem;
  while (curr.offsetParent != null) {
    left -= curr.scrollTop;
    curr = curr.parentNode;
  }
  while (elem != null) {
    left += elem.offsetTop;
    elem = elem.offsetParent;
  }
  return left;
}

function $clinit_UUID() {
  var n, charArr;
  $clinit_UUID = emptyMethod;
  CHARS =
    ((n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".length),
    (charArr = initUnidimensionalArray(C_classLit, { 3: 1 }, 12, n, 15, 1)),
    $getChars0(0, n, charArr, 0),
    charArr);
}

function uuid_0() {
  $clinit_UUID();
  var i, r, uuid;
  uuid = initUnidimensionalArray(C_classLit, { 3: 1 }, 12, 36, 15, 1);
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = 45;
  uuid[14] = 52;
  for (i = 0; i < 36; i++) {
    if (uuid[i] == 0) {
      r = round_int($wnd.Math.random() * 16);
      uuid[i] = CHARS[i == 19 ? (r & 3) | 8 : r & 15];
    }
  }
  return valueOf_0(uuid, uuid.length);
}

var CHARS;
defineClass(333, 85, $intern_6);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass(
  "com.google.gwt.core.client.impl",
  "JavaScriptExceptionBase",
  333
);
function $clinit_JavaScriptException() {
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0();
}

function $ensureInit(this$static) {
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET) ? null : this$static.e;
    this$static.name_0 =
      exception == null
        ? "null"
        : instanceOfJso(exception)
        ? exception == null
          ? null
          : exception.name
        : instanceOfString(exception)
        ? "String"
        : $getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description =
      this$static.description +
      ": " +
      (instanceOfJso(exception) ? (exception == null ? null : exception.message) : exception + "");
    this$static.message_0 = "(" + this$static.name_0 + ") " + this$static.description;
  }
}

function JavaScriptException(e) {
  $clinit_JavaScriptException();
  JsException.call(this, e);
  this.description = "";
  this.e = e;
  this.description = "";
}

defineClass(109, 333, { 109: 1, 3: 1, 24: 1, 19: 1, 16: 1 }, JavaScriptException);
_.getMessage = function getMessage_0() {
  $ensureInit(this);
  return this.message_0;
};
_.getThrown = function getThrown() {
  return maskUndefined(this.e) === maskUndefined(NOT_SET) ? null : this.e;
};
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass(
  "com.google.gwt.core.client",
  "JavaScriptException",
  109
);
function now_1() {
  if (Date.now) {
    return Date.now();
  }
  return new Date().getTime();
}

defineClass(395, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass("com.google.gwt.core.client", "Scheduler", 395);
function $clinit_Impl() {
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator(), collector);
}

function apply_3(jsFunction, thisObj, args) {
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter() {
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl(), INSTANCE_2));
    return true;
  }
  return false;
}

function entry_0(jsFunction) {
  $clinit_Impl();
  return function () {
    return entry0(jsFunction, this, arguments);
    var __0;
  };
}

function entry0(jsFunction, thisObj, args) {
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_3(jsFunction, thisObj, args);
  } finally {
    exit(initialEntry);
  }
}

function exit(initialEntry) {
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl(), INSTANCE_2));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function reportToBrowser(e) {
  $clinit_Impl();
  $wnd.setTimeout(function () {
    throw e;
  }, 0);
}

function watchdogEntryDepthCancel(timerId) {
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun() {
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0,
  watchdogEntryDepthLastScheduled = 0,
  watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl() {
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE_2 = new SchedulerImpl();
}

function $flushEntryCommands(this$static) {
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    } while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static) {
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    } while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl() {}

function push_0(queue, task) {
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled) {
  var e, i, j, t;
  for (i = 0, j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1] ? t[0].$_nullMethod() && (rescheduled = push_0(rescheduled, t)) : t[0].$_nullMethod();
    } catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 16)) {
        e = $e0;
        $clinit_Impl();
        reportToBrowser(instanceOf(e, 109) ? e.getThrown() : e);
      } else throw toJs($e0);
    }
  }
  return rescheduled;
}

defineClass(354, 395, {}, SchedulerImpl);
var INSTANCE_2;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass(
  "com.google.gwt.core.client.impl",
  "SchedulerImpl",
  354
);
function create(value_0) {
  var a0, a1, a2;
  a0 = value_0 & $intern_32;
  a1 = (value_0 >> 22) & $intern_32;
  a2 = value_0 < 0 ? $intern_3 : 0;
  return create0(a0, a1, a2);
}

function create_0(a) {
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h) {
  return { l: l, m: m, h: h };
}

function divMod(a, b, computeRemainder) {
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw toJs(new ArithmeticException());
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_33 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = !negative;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_33 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_0(($clinit_BigLongLib$Const(), MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    } else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  } else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (compare(a, b) < 0) {
    computeRemainder && (aIsNegative ? (remainder = neg(a)) : (remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy ? a : create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder) {
  if (a.h == $intern_33 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_0(($clinit_BigLongLib$Const(), ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder) {
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative ? (remainder = neg(a)) : (remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder) {
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22
        ? ((quotient.l |= 1 << shift_0), undefined)
        : shift_0 < 44
        ? ((quotient.m |= 1 << (shift_0 - 22)), undefined)
        : ((quotient.h |= 1 << (shift_0 - 44)), undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    bshift.h = a2 >>> 1;
    bshift.m = (a1 >>> 1) | ((a2 & 1) << 21);
    bshift.l = (a0 >>> 1) | ((a1 & 1) << 21);
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_BigLongLib$Const(), ONE)));
    } else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits) {
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & ((1 << bits) - 1);
    b1 = b2 = 0;
  } else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & ((1 << (bits - 22)) - 1);
    b2 = 0;
  } else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & ((1 << (bits - 44)) - 1);
  }
  return create0(b0, b1, b2);
}

function negate(a) {
  var neg0, neg1, neg2;
  neg0 = (~a.l + 1) & $intern_32;
  neg1 = (~a.m + (neg0 == 0 ? 1 : 0)) & $intern_32;
  neg2 = (~a.h + (neg0 == 0 && neg1 == 0 ? 1 : 0)) & $intern_3;
  a.l = neg0;
  a.m = neg1;
  a.h = neg2;
}

function numberOfLeadingZeros(a) {
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32 ? numberOfLeadingZeros_0(a.l) + 32 : b1 + 20 - 10;
  } else {
    return b2 - 12;
  }
}

function powerOfTwo(a) {
  var h, l, m;
  l = a.l;
  if ((l & (l - 1)) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & (m - 1)) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & (h - 1)) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function toDoubleHelper(a) {
  return a.l + a.m * $intern_2 + a.h * $intern_1;
}

function trialSubtract(a, b) {
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  a.l = sum0 & $intern_32;
  a.m = sum1 & $intern_32;
  a.h = sum2 & $intern_3;
  return true;
}

var remainder;
function add_5(a, b) {
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & $intern_32, sum1 & $intern_32, sum2 & $intern_3);
}

function compare(a, b) {
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function fromDouble(value_0) {
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_BigLongLib$Const(), ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return $clinit_BigLongLib$Const(), MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_BigLongLib$Const(), MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_1) {
    a2 = round_int(value_0 / $intern_1);
    value_0 -= a2 * $intern_1;
  }
  a1 = 0;
  if (value_0 >= $intern_2) {
    a1 = round_int(value_0 / $intern_2);
    value_0 -= a1 * $intern_2;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function neg(a) {
  var neg0, neg1, neg2;
  neg0 = (~a.l + 1) & $intern_32;
  neg1 = (~a.m + (neg0 == 0 ? 1 : 0)) & $intern_32;
  neg2 = (~a.h + (neg0 == 0 && neg1 == 0 ? 1 : 0)) & $intern_3;
  return create0(neg0, neg1, neg2);
}

function shl(a, n) {
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = (a.m << n) | (a.l >> (22 - n));
    res2 = (a.h << n) | (a.m >> (22 - n));
  } else if (n < 44) {
    res0 = 0;
    res1 = a.l << (n - 22);
    res2 = (a.m << (n - 22)) | (a.l >> (44 - n));
  } else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << (n - 44);
  }
  return create0(res0 & $intern_32, res1 & $intern_32, res2 & $intern_3);
}

function shr(a, n) {
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_33) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = (a.m >> n) | (a2 << (22 - n));
    res0 = (a.l >> n) | (a.m << (22 - n));
  } else if (n < 44) {
    res2 = negative ? $intern_3 : 0;
    res1 = a2 >> (n - 22);
    res0 = (a.m >> (n - 22)) | (a2 << (44 - n));
  } else {
    res2 = negative ? $intern_3 : 0;
    res1 = negative ? $intern_32 : 0;
    res0 = a2 >> (n - 44);
  }
  return create0(res0 & $intern_32, res1 & $intern_32, res2 & $intern_3);
}

function sub_0(a, b) {
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return create0(sum0 & $intern_32, sum1 & $intern_32, sum2 & $intern_3);
}

function toDouble(a) {
  if (compare(a, ($clinit_BigLongLib$Const(), ZERO)) < 0) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_2 + a.h * $intern_1;
}

function toInt(a) {
  return a.l | (a.m << 22);
}

function toString_32(a) {
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return "0";
  }
  if (a.h == $intern_33 && a.m == 0 && a.l == 0) {
    return "-9223372036854775808";
  }
  if (a.h >> 19 != 0) {
    return "-" + toString_32(neg(a));
  }
  rem = a;
  res = "";
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = create(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = "" + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = "0" + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function $clinit_BigLongLib$Const() {
  $clinit_BigLongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_32, $intern_32, 524287);
  MIN_VALUE = create0(0, 0, $intern_33);
  ONE = create(1);
  create(2);
  ZERO = create(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function init_2() {
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  new LienzoGWT2Examples();
  ($clinit_DomGlobal(), $wnd.goog.global.console).log("GWT MODULE onLoad()!!!");
}

function $onModuleLoad() {
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 6, [
    "CSS1Compat",
  ]);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_1(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_1("CSS1Compat", allowedModes[0]) && $equals_1("BackCompat", currentMode)
    ? "GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" +
      currentMode +
      '"/&gt;'
    : "Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " +
      currentMode +
      "').<br>Modify your application's host HTML page doctype, or update your custom " +
      "'document.compatMode' configuration property settings.";
}

function assertCompileTimeUserAgent() {
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals_1("safari", runtimeValue)) {
    throw toJs(new UserAgentAsserter$UserAgentAssertionError(runtimeValue));
  }
}

function Error_0() {
  Throwable.call(this);
}

function Error_1(message, cause) {
  this.cause_0 = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(58, 16, $intern_34, Error_0);
var Ljava_lang_Error_2_classLit = createForClass("java.lang", "Error", 58);
defineClass(36, 58, $intern_34);
var Ljava_lang_AssertionError_2_classLit = createForClass("java.lang", "AssertionError", 36);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue) {
  Error_1.call(
    this,
    "Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (" +
      runtimeValue +
      ").\n" +
      "Expect more errors." ==
      null
      ? "null"
      : toString_34(
          "Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (" +
            runtimeValue +
            ").\n" +
            "Expect more errors."
        ),
    instanceOf(
      "Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (" +
        runtimeValue +
        ").\n" +
        "Expect more errors.",
      16
    )
      ? "Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (" +
          runtimeValue +
          ").\n" +
          "Expect more errors."
      : null
  );
}

defineClass(171, 36, $intern_34, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass(
  "com.google.gwt.useragent.client",
  "UserAgentAsserter/UserAgentAssertionError",
  171
);
function $getRuntimeValue() {
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (
    (function () {
      return ua.indexOf("webkit") != -1;
    })()
  )
    return "safari";
  if (
    (function () {
      return ua.indexOf("msie") != -1 && docMode >= 10 && docMode < 11;
    })()
  )
    return "ie10";
  if (
    (function () {
      return ua.indexOf("msie") != -1 && docMode >= 9 && docMode < 11;
    })()
  )
    return "ie9";
  if (
    (function () {
      return ua.indexOf("msie") != -1 && docMode >= 8 && docMode < 11;
    })()
  )
    return "ie8";
  if (
    (function () {
      return ua.indexOf("gecko") != -1 || docMode >= 11;
    })()
  )
    return "gecko1_8";
  return "unknown";
}

function $addEventListener_1(this$static, type_0, listener, options) {
  this$static.addEventListener(type_0, listener, options);
}

function $has(this$static, propertyName) {
  return propertyName in this$static;
}

function $set_1(this$static, propertyName, value_0) {
  this$static[propertyName] = value_0;
}

function $clinit_DomGlobal() {
  $clinit_DomGlobal = emptyMethod;
  document_0 = $wnd.goog.global.document;
}

var document_0;
function AbstractStringBuilder(string) {
  this.string = string;
}

defineClass(130, 1, { 177: 1 });
_.toString_0 = function toString_35() {
  return this.string;
};
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass("java.lang", "AbstractStringBuilder", 130);
function ArithmeticException() {
  RuntimeException_0.call(this, "divide by zero");
}

defineClass(339, 19, $intern_6, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass("java.lang", "ArithmeticException", 339);
function digit(c) {
  if (c >= 48 && c < 48 + $wnd.Math.min(10, 10)) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function $clinit_Integer$BoxedValues() {
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_4, 96, 256, 0, 1);
}

var boxedValues;
function NumberFormatException(message) {
  IllegalArgumentException.call(this, message);
}

defineClass(87, 47, $intern_6, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass("java.lang", "NumberFormatException", 87);
function $append(this$static, x_0) {
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0) {
  this$static.string += "" + x_0;
  return this$static;
}

function $append_1(this$static, x_0) {
  this$static.string += "" + x_0;
  return this$static;
}

function StringBuilder() {
  AbstractStringBuilder.call(this, "");
}

function StringBuilder_0(s) {
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s), s));
}

defineClass(131, 130, { 177: 1 }, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass("java.lang", "StringBuilder", 131);
defineClass(1115, 1, {});
var Ljava_util_Set_2_classLit = createForInterface("java.util", "Set");
defineClass(398, 399, $intern_35);
_.equals_0 = function equals_16(o) {
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 72)) {
    return false;
  }
  other = o;
  if (other.size() != this.size()) {
    return false;
  }
  return $containsAll(this, other);
};
_.hashCode_0 = function hashCode_16() {
  return hashCode_21(this);
};
_.removeAll = function removeAll_0(c) {
  var iter, o, o$iterator, size_0;
  checkCriticalNotNull(c);
  size_0 = this.size();
  if (size_0 < c.size()) {
    for (iter = this.iterator(); iter.hasNext_0(); ) {
      o = iter.next_1();
      c.contains(o) && iter.remove_0();
    }
  } else {
    for (o$iterator = c.iterator(); o$iterator.hasNext_0(); ) {
      o = o$iterator.next_1();
      this.remove(o);
    }
  }
  return size_0 != this.size();
};
var Ljava_util_AbstractSet_2_classLit = createForClass("java.util", "AbstractSet", 398);
function $contains(this$static, o) {
  if (instanceOf(o, 64)) {
    return $containsEntry(this$static.this$01, o);
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0) {
  this.this$01 = this$0;
}

defineClass(137, 398, $intern_35, AbstractHashMap$EntrySet);
_.clear = function clear_4() {
  this.this$01.clear();
};
_.contains = function contains_0(o) {
  return $contains(this, o);
};
_.iterator = function iterator_4() {
  return new AbstractHashMap$EntrySetIterator(this.this$01);
};
_.remove = function remove_6(entry) {
  var key;
  if ($contains(this, entry)) {
    key = entry.getKey();
    this.this$01.remove(key);
    return true;
  }
  return false;
};
_.size = function size_4() {
  return this.this$01.size();
};
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass("java.util", "AbstractHashMap/EntrySet", 137);
function $computeHasNext(this$static) {
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next_0(this$static) {
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  this$static.last = this$static.current;
  rv = this$static.current.next_1();
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function AbstractHashMap$EntrySetIterator(this$0) {
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  this.$modCount = this$0.$modCount;
}

defineClass(138, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_1 = function next_1() {
  return $next_0(this);
};
_.hasNext_0 = function hasNext_1() {
  return this.hasNext;
};
_.remove_0 = function remove_7() {
  checkCriticalState(!!this.last);
  checkStructuralChange(this.this$01, this);
  this.last.remove_0();
  this.last = null;
  this.hasNext = $computeHasNext(this);
  recordLastKnownStructure(this.this$01, this);
};
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass(
  "java.util",
  "AbstractHashMap/EntrySetIterator",
  138
);
function AbstractMap$1(this$0) {
  this.this$01 = this$0;
}

defineClass(141, 398, $intern_35, AbstractMap$1);
_.clear = function clear_6() {
  this.this$01.clear();
};
_.contains = function contains_1(key) {
  return this.this$01.containsKey(key);
};
_.iterator = function iterator_6() {
  var outerIter;
  return (outerIter = this.this$01.entrySet().iterator()), new AbstractMap$1$1(outerIter);
};
_.remove = function remove_12(key) {
  if (this.this$01.containsKey(key)) {
    this.this$01.remove(key);
    return true;
  }
  return false;
};
_.size = function size_6() {
  return this.this$01.size();
};
var Ljava_util_AbstractMap$1_2_classLit = createForClass("java.util", "AbstractMap/1", 141);
function AbstractMap$1$1(val$outerIter) {
  this.val$outerIter2 = val$outerIter;
}

defineClass(143, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_3() {
  return this.val$outerIter2.hasNext_0();
};
_.next_1 = function next_3() {
  var entry;
  entry = this.val$outerIter2.next_1();
  return entry.getKey();
};
_.remove_0 = function remove_13() {
  this.val$outerIter2.remove_0();
};
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass("java.util", "AbstractMap/1/1", 143);
function AbstractMap$2(this$0) {
  this.this$01 = this$0;
}

defineClass(193, 399, { 37: 1 }, AbstractMap$2);
_.clear = function clear_7() {
  this.this$01.clear();
};
_.contains = function contains_2(value_0) {
  return this.this$01.containsValue(value_0);
};
_.iterator = function iterator_7() {
  var outerIter;
  outerIter = this.this$01.entrySet().iterator();
  return new AbstractMap$2$1(outerIter);
};
_.size = function size_7() {
  return this.this$01.size();
};
var Ljava_util_AbstractMap$2_2_classLit = createForClass("java.util", "AbstractMap/2", 193);
function AbstractMap$2$1(val$outerIter) {
  this.val$outerIter2 = val$outerIter;
}

defineClass(195, 1, {}, AbstractMap$2$1);
_.hasNext_0 = function hasNext_4() {
  return this.val$outerIter2.hasNext_0();
};
_.next_1 = function next_4() {
  var entry;
  entry = this.val$outerIter2.next_1();
  return entry.getValue();
};
_.remove_0 = function remove_14() {
  this.val$outerIter2.remove_0();
};
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass("java.util", "AbstractMap/2/1", 195);
function $setValue(this$static, value_0) {
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(194, 1, $intern_36);
_.equals_0 = function equals_18(other) {
  var entry;
  if (!instanceOf(other, 64)) {
    return false;
  }
  entry = other;
  return equals_21(this.key, entry.getKey()) && equals_21(this.value_0, entry.getValue());
};
_.getKey = function getKey() {
  return this.key;
};
_.getValue = function getValue_15() {
  return this.value_0;
};
_.hashCode_0 = function hashCode_18() {
  return hashCode_24(this.key) ^ hashCode_24(this.value_0);
};
_.setValue = function setValue(value_0) {
  return $setValue(this, value_0);
};
_.toString_0 = function toString_39() {
  return this.key + "=" + this.value_0;
};
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass("java.util", "AbstractMap/AbstractEntry", 194);
function AbstractMap$SimpleEntry(key, value_0) {
  this.key = key;
  this.value_0 = value_0;
}

defineClass(114, 194, $intern_36, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass("java.util", "AbstractMap/SimpleEntry", 114);
defineClass(434, 1, $intern_36);
_.equals_0 = function equals_19(other) {
  var entry;
  if (!instanceOf(other, 64)) {
    return false;
  }
  entry = other;
  return equals_21(this.val$entry2.value[0], entry.getKey()) && equals_21($getValue(this), entry.getValue());
};
_.hashCode_0 = function hashCode_19() {
  return hashCode_24(this.val$entry2.value[0]) ^ hashCode_24($getValue(this));
};
_.toString_0 = function toString_40() {
  return this.val$entry2.value[0] + "=" + $getValue(this);
};
var Ljava_util_AbstractMapEntry_2_classLit = createForClass("java.util", "AbstractMapEntry", 434);
function $toArray(this$static, out) {
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = stampJavaTypeInfo_1(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    out[i] = this$static.array[i];
  }
  out.length > size_0 && (out[size_0] = null);
  return out;
}

function Arrays$ArrayList(array) {
  checkCriticalNotNull(array);
  this.array = array;
}

defineClass(14, 432, $intern_8, Arrays$ArrayList);
_.contains = function contains_4(o) {
  return $indexOf(this, o) != -1;
};
_.getAtIndex = function get_7(index_0) {
  return checkCriticalElementIndex(index_0, this.array.length), this.array[index_0];
};
_.setAtIndex = function set_4(index_0, value_0) {
  var was;
  was = (checkCriticalElementIndex(index_0, this.array.length), this.array[index_0]);
  this.array[index_0] = value_0;
  return was;
};
_.size = function size_9() {
  return this.array.length;
};
_.toArray = function toArray_3() {
  return $toArray(this, initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_4, 1, this.array.length, 5, 1));
};
_.toArray_0 = function toArray_4(out) {
  return $toArray(this, out);
};
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass("java.util", "Arrays/ArrayList", 14);
defineClass(235, 1, { 37: 1 });
_.add = function add_13(o) {
  throw toJs(new UnsupportedOperationException());
};
_.addAll = function addAll_3(c) {
  throw toJs(new UnsupportedOperationException());
};
_.clear = function clear_9() {
  throw toJs(new UnsupportedOperationException());
};
_.contains = function contains_5(o) {
  return this.coll.contains(o);
};
_.containsAll = function containsAll_0(c) {
  return this.coll.containsAll(c);
};
_.isEmpty = function isEmpty_3() {
  return this.coll.isEmpty();
};
_.iterator = function iterator_9() {
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
};
_.remove = function remove_18(o) {
  throw toJs(new UnsupportedOperationException());
};
_.removeAll = function removeAll_1(c) {
  throw toJs(new UnsupportedOperationException());
};
_.retainAll = function retainAll_0(c) {
  throw toJs(new UnsupportedOperationException());
};
_.size = function size_10() {
  return this.coll.size();
};
_.toArray = function toArray_5() {
  return this.coll.toArray();
};
_.toArray_0 = function toArray_6(a) {
  return this.coll.toArray_0(a);
};
_.toString_0 = function toString_41() {
  return toString_34(this.coll);
};
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass(
  "java.util",
  "Collections/UnmodifiableCollection",
  235
);
function Collections$UnmodifiableCollectionIterator(it) {
  this.it = it;
}

defineClass(236, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext_0 = function hasNext_6() {
  return this.it.hasNext_0();
};
_.next_1 = function next_6() {
  return this.it.next_1();
};
_.remove_0 = function remove_19() {
  throw toJs(new UnsupportedOperationException());
};
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass(
  "java.util",
  "Collections/UnmodifiableCollectionIterator",
  236
);
function Collections$UnmodifiableList(list) {
  this.coll = list;
  this.list = list;
}

defineClass(162, 235, $intern_7, Collections$UnmodifiableList);
_.addAtIndex = function add_14(index_0, element) {
  throw toJs(new UnsupportedOperationException());
};
_.addAllAtIndex = function addAll_4(index_0, c) {
  throw toJs(new UnsupportedOperationException());
};
_.equals_0 = function equals_20(o) {
  return equals_Ljava_lang_Object__Z__devirtual$(this.list, o);
};
_.getAtIndex = function get_8(index_0) {
  return this.list.getAtIndex(index_0);
};
_.hashCode_0 = function hashCode_23() {
  return hashCode__I__devirtual$(this.list);
};
_.indexOf = function indexOf_1(o) {
  return this.list.indexOf(o);
};
_.isEmpty = function isEmpty_4() {
  return this.list.isEmpty();
};
_.lastIndexOf = function lastIndexOf_1(o) {
  return this.list.lastIndexOf(o);
};
_.removeAtIndex = function remove_20(index_0) {
  throw toJs(new UnsupportedOperationException());
};
_.setAtIndex = function set_5(index_0, element) {
  throw toJs(new UnsupportedOperationException());
};
_.subList = function subList_0(fromIndex, toIndex) {
  return new Collections$UnmodifiableList(this.list.subList(fromIndex, toIndex));
};
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass(
  "java.util",
  "Collections/UnmodifiableList",
  162
);
function Collections$UnmodifiableRandomAccessList(list) {
  Collections$UnmodifiableList.call(this, list);
}

defineClass(28, 162, $intern_7, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass(
  "java.util",
  "Collections/UnmodifiableRandomAccessList",
  28
);
function checkStructuralChange(host, iterator) {
  if (iterator.$modCount != host.$modCount) {
    throw toJs(new ConcurrentModificationException());
  }
}

function recordLastKnownStructure(host, iterator) {
  iterator.$modCount = host.$modCount;
}

function structureChanged(host) {
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

function ConcurrentModificationException() {
  RuntimeException.call(this);
}

defineClass(380, 19, $intern_6, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass(
  "java.util",
  "ConcurrentModificationException",
  380
);
defineClass(435, 398, $intern_35);
var Ljava_util_EnumSet_2_classLit = createForClass("java.util", "EnumSet", 435);
function $add_11(this$static, e) {
  var ordinal;
  checkCriticalNotNull(e);
  ordinal = e.ordinal_0;
  if (!this$static.set_0[ordinal]) {
    this$static.set_0[ordinal] = e;
    ++this$static.size_0;
    return true;
  }
  return false;
}

function $containsEnum(this$static, e) {
  return !!e && this$static.set_0[e.ordinal_0] == e;
}

function $removeEnum(this$static, e) {
  if (!!e && this$static.set_0[e.ordinal_0] == e) {
    this$static.set_0[e.ordinal_0] = null;
    --this$static.size_0;
    return true;
  }
  return false;
}

function EnumSet$EnumSetImpl(all, set_0) {
  this.all = all;
  this.set_0 = set_0;
  this.size_0 = 0;
}

defineClass(391, 435, $intern_35, EnumSet$EnumSetImpl);
_.add = function add_15(e) {
  return $add_11(this, e);
};
_.contains = function contains_6(o) {
  return instanceOf(o, 7) && $containsEnum(this, o);
};
_.iterator = function iterator_10() {
  return new EnumSet$EnumSetImpl$IteratorImpl(this);
};
_.remove = function remove_21(o) {
  return instanceOf(o, 7) && $removeEnum(this, o);
};
_.size = function size_11() {
  return this.size_0;
};
_.size_0 = 0;
var Ljava_util_EnumSet$EnumSetImpl_2_classLit = createForClass("java.util", "EnumSet/EnumSetImpl", 391);
function $findNext(this$static) {
  var c;
  ++this$static.i;
  for (c = this$static.this$11.all.length; this$static.i < c; ++this$static.i) {
    if (this$static.this$11.set_0[this$static.i]) {
      return;
    }
  }
}

function EnumSet$EnumSetImpl$IteratorImpl(this$1) {
  this.this$11 = this$1;
  $findNext(this);
}

defineClass(392, 1, {}, EnumSet$EnumSetImpl$IteratorImpl);
_.next_1 = function next_7() {
  return (
    checkCriticalElement(this.i < this.this$11.all.length),
    (this.last = this.i),
    $findNext(this),
    this.this$11.set_0[this.last]
  );
};
_.hasNext_0 = function hasNext_7() {
  return this.i < this.this$11.all.length;
};
_.remove_0 = function remove_22() {
  checkCriticalState(this.last != -1);
  this.this$11.set_0[this.last] = null;
  --this.this$11.size_0;
  this.last = -1;
};
_.i = -1;
_.last = -1;
var Ljava_util_EnumSet$EnumSetImpl$IteratorImpl_2_classLit = createForClass(
  "java.util",
  "EnumSet/EnumSetImpl/IteratorImpl",
  392
);
function $add_12(this$static, o) {
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o) {
  return $containsKey(this$static.map_0, o);
}

function HashSet() {
  this.map_0 = new HashMap();
}

defineClass(134, 398, { 3: 1, 37: 1, 72: 1 }, HashSet);
_.add = function add_16(o) {
  return $add_12(this, o);
};
_.clear = function clear_10() {
  $reset(this.map_0);
};
_.contains = function contains_7(o) {
  return $contains_0(this, o);
};
_.isEmpty = function isEmpty_5() {
  return $size(this.map_0) == 0;
};
_.iterator = function iterator_11() {
  var outerIter;
  return (outerIter = new AbstractMap$1(this.map_0).this$01.entrySet().iterator()), new AbstractMap$1$1(outerIter);
};
_.remove = function remove_23(o) {
  return $remove_2(this.map_0, o) != null;
};
_.size = function size_12() {
  return $size(this.map_0);
};
var Ljava_util_HashSet_2_classLit = createForClass("java.util", "HashSet", 134);
function $findEntryInChain(this$static, key, chain) {
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = chain, entry$index = 0, entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this$static.host.equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode) {
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null ? new Array() : chain;
}

function $getEntry(this$static, key) {
  return $findEntryInChain(
    this$static,
    key,
    $getChainOrEmpty(this$static, key == null ? 0 : this$static.host.getHashCode(key))
  );
}

function $put_2(this$static, key, value_0) {
  var chain, chain0, entry, hashCode;
  hashCode = key == null ? 0 : this$static.host.getHashCode(key);
  chain0 = ((chain = this$static.backingMap.get(hashCode)), chain == null ? new Array() : chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode, chain0);
  } else {
    entry = $findEntryInChain(this$static, key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  chain0[chain0.length] = new AbstractMap$SimpleEntry(key, value_0);
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_8(this$static, key) {
  var chain, chain0, entry, hashCode, i;
  hashCode = key == null ? 0 : this$static.host.getHashCode(key);
  chain0 = ((chain = this$static.backingMap.get(hashCode)), chain == null ? new Array() : chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if (this$static.host.equals_1(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        $delete(this$static.backingMap, hashCode);
      } else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host) {
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(191, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_12() {
  return new InternalHashCodeMap$1(this);
};
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass("java.util", "InternalHashCodeMap", 191);
function InternalHashCodeMap$1(this$0) {
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = new Array();
}

defineClass(140, 1, {}, InternalHashCodeMap$1);
_.next_1 = function next_8() {
  return (this.lastEntry = this.chain[this.itemIndex++]), this.lastEntry;
};
_.hasNext_0 = function hasNext_8() {
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
};
_.remove_0 = function remove_24() {
  $remove_8(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
};
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass("java.util", "InternalHashCodeMap/1", 140);
function $delete(this$static, key) {
  var fn;
  fn = this$static["delete"];
  fn.call(this$static, key);
}

function $delete_0(this$static, key) {
  var fn;
  fn = this$static["delete"];
  fn.call(this$static, key);
}

function $clinit_InternalJsMapFactory() {
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto() {
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = "__proto__";
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor() {
  function isCorrectIterationProtocol() {
    try {
      return new Map().entries().next().done;
    } catch (e) {
      return false;
    }
  }

  if (typeof Map === "function" && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  } else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill() {
  function Stringmap() {
    this.obj = this.createObject();
  }

  Stringmap.prototype.createObject = function (key) {
    return Object.create(null);
  };
  Stringmap.prototype.get = function (key) {
    return this.obj[key];
  };
  Stringmap.prototype.set = function (key, value_0) {
    this.obj[key] = value_0;
  };
  Stringmap.prototype["delete"] = function (key) {
    delete this.obj[key];
  };
  Stringmap.prototype.keys = function () {
    return Object.getOwnPropertyNames(this.obj);
  };
  Stringmap.prototype.entries = function () {
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {
      next: function () {
        if (nextIndex >= keys_0.length) return { done: true };
        var key = keys_0[nextIndex++];
        return { value: [key, map_0.get(key)], done: false };
      },
    };
  };
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function () {
      return {};
    };
    Stringmap.prototype.get = function (key) {
      return this.obj[":" + key];
    };
    Stringmap.prototype.set = function (key, value_0) {
      this.obj[":" + key] = value_0;
    };
    Stringmap.prototype["delete"] = function (key) {
      delete this.obj[":" + key];
    };
    Stringmap.prototype.keys = function () {
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    };
  }
  return Stringmap;
}

function newJsMap() {
  $clinit_InternalJsMapFactory();
  return new jsMapCtor();
}

var jsMapCtor;
function $contains_1(this$static, key) {
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_6(this$static, key) {
  return this$static.backingMap.get(key);
}

function $put_3(this$static, key, value_0) {
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined ? null : value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  } else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_9(this$static, key) {
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  } else {
    $delete_0(this$static.backingMap, key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host) {
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(192, 1, {}, InternalStringMap);
_.iterator = function iterator_13() {
  return new InternalStringMap$1(this);
};
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass("java.util", "InternalStringMap", 192);
function InternalStringMap$1(this$0) {
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(139, 1, {}, InternalStringMap$1);
_.next_1 = function next_9() {
  return (
    (this.last = this.current),
    (this.current = this.entries_0.next()),
    new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod)
  );
};
_.hasNext_0 = function hasNext_9() {
  return !this.current.done;
};
_.remove_0 = function remove_25() {
  $remove_9(this.this$01, this.last.value[0]);
};
var Ljava_util_InternalStringMap$1_2_classLit = createForClass("java.util", "InternalStringMap/1", 139);
function $getValue(this$static) {
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_6(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod) {
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(336, 434, $intern_36, InternalStringMap$2);
_.getKey = function getKey_0() {
  return this.val$entry2.value[0];
};
_.getValue = function getValue_16() {
  return $getValue(this);
};
_.setValue = function setValue_0(object) {
  return $put_3(this.this$01, this.val$entry2.value[0], object);
};
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass("java.util", "InternalStringMap/2", 336);
function $addToEnd(this$static) {
  var tail;
  tail = this$static.this$01.head.prev;
  this$static.prev = tail;
  this$static.next_0 = this$static.this$01.head;
  tail.next_0 = this$static.this$01.head.prev = this$static;
}

function $remove_10(this$static) {
  this$static.next_0.prev = this$static.prev;
  this$static.prev.next_0 = this$static.next_0;
  this$static.next_0 = this$static.prev = null;
}

function LinkedHashMap$ChainEntry(this$0) {
  LinkedHashMap$ChainEntry_0.call(this, this$0, null, null);
}

function LinkedHashMap$ChainEntry_0(this$0, key, value_0) {
  this.this$01 = this$0;
  AbstractMap$SimpleEntry.call(this, key, value_0);
}

defineClass(105, 114, { 105: 1, 64: 1 }, LinkedHashMap$ChainEntry, LinkedHashMap$ChainEntry_0);
var Ljava_util_LinkedHashMap$ChainEntry_2_classLit = createForClass("java.util", "LinkedHashMap/ChainEntry", 105);
function $contains_2(this$static, o) {
  if (instanceOf(o, 64)) {
    return $containsEntry(this$static.this$01, o);
  }
  return false;
}

function LinkedHashMap$EntrySet(this$0) {
  this.this$01 = this$0;
}

defineClass(188, 398, $intern_35, LinkedHashMap$EntrySet);
_.clear = function clear_11() {
  $clear_2(this.this$01);
};
_.contains = function contains_8(o) {
  return $contains_2(this, o);
};
_.iterator = function iterator_14() {
  return new LinkedHashMap$EntrySet$EntryIterator(this);
};
_.remove = function remove_26(entry) {
  var key;
  if ($contains_2(this, entry)) {
    key = entry.getKey();
    $remove_3(this.this$01, key);
    return true;
  }
  return false;
};
_.size = function size_13() {
  return $size(this.this$01.map_0);
};
var Ljava_util_LinkedHashMap$EntrySet_2_classLit = createForClass("java.util", "LinkedHashMap/EntrySet", 188);
function LinkedHashMap$EntrySet$EntryIterator(this$1) {
  this.this$11 = this$1;
  this.next_0 = this$1.this$01.head.next_0;
  recordLastKnownStructure(this$1.this$01.map_0, this);
}

defineClass(189, 1, {}, LinkedHashMap$EntrySet$EntryIterator);
_.next_1 = function next_10() {
  return (
    checkStructuralChange(this.this$11.this$01.map_0, this),
    checkCriticalElement(this.next_0 != this.this$11.this$01.head),
    (this.last = this.next_0),
    (this.next_0 = this.next_0.next_0),
    this.last
  );
};
_.hasNext_0 = function hasNext_10() {
  return this.next_0 != this.this$11.this$01.head;
};
_.remove_0 = function remove_27() {
  checkCriticalState(!!this.last);
  checkStructuralChange(this.this$11.this$01.map_0, this);
  $remove_10(this.last);
  $remove_2(this.this$11.this$01.map_0, this.last.key);
  recordLastKnownStructure(this.this$11.this$01.map_0, this);
  this.last = null;
};
var Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit = createForClass(
  "java.util",
  "LinkedHashMap/EntrySet/EntryIterator",
  189
);
function $add_13(this$static, newElement) {
  !this$static.builder
    ? (this$static.builder = new StringBuilder_0(this$static.prefix))
    : $append_1(this$static.builder, this$static.delimiter);
  $append_0(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix) {
  this.delimiter = ", ";
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ("" + this.suffix);
}

defineClass(142, 1, {}, StringJoiner);
_.toString_0 = function toString_42() {
  return !this.builder
    ? this.emptyValue
    : this.suffix.length == 0
    ? this.builder.string
    : this.builder.string + ("" + this.suffix);
};
var Ljava_util_StringJoiner_2_classLit = createForClass("java.util", "StringJoiner", 142);
defineClass(1117, 1, {});
defineClass(229, 1, {});
_.bottomPadding = 5;
_.height_0 = 0;
_.leftPadding = 5;
_.rightPadding = 5;
_.topPadding = 5;
_.width_0 = 0;
var Lorg_kie_lienzo_client_BaseExample_2_classLit = createForClass("org.kie.lienzo.client", "BaseExample", 229);
function $animateCircle(this$static, circle) {
  var r, x_0, y_0;
  x_0 = circle.x;
  y_0 = circle.y;
  r = circle.radius;
  ((circle.xVelocity > 0 && x_0 + circle.xVelocity + r > this$static.width_0) ||
    (circle.xVelocity < 0 && x_0 + circle.xVelocity - r < 0)) &&
    $setxVelocity(circle, -circle.xVelocity);
  ((circle.yVelocity > 0 && y_0 + circle.yVelocity + r > this$static.height_0) ||
    (circle.yVelocity < 0 && y_0 + circle.yVelocity - r < 0)) &&
    $setyVelocity(circle, -circle.yVelocity);
  $setX(circle, x_0 + circle.xVelocity);
  $setY(circle, y_0 + circle.yVelocity);
}

function AnimatedCirclesExample(title_0) {
  this.circles = new ArrayList();
}

defineClass(428, 229, {}, AnimatedCirclesExample);
_.destroy = function destroy() {
  null.$_nullMethod();
  $stop(this.animationHandle);
};
_.run = function run_0() {
  var animation, callback, circle, i;
  for (i = 0; i < this.total; i++) {
    circle = new AnimatedCirclesExample$MotionCircle($wnd.Math.max(40, $wnd.Math.random() * 60));
    $setFillColor_1(
      $setStrokeWidth($setStrokeColor_0(((circle.alpha = 0.75), circle), getRandomHexColor())),
      getRandomHexColor()
    );
    setLocation(
      circle,
      this.width_0,
      this.height_0,
      this.leftPadding,
      this.topPadding,
      this.rightPadding,
      this.bottomPadding
    );
    $add_10(this.circles, circle);
    null.$_nullMethod();
  }
  callback = new AnimatedCirclesExample$1(this);
  animation = new IndefiniteAnimation(callback);
  this.animationHandle = $run(animation);
};
_.animate = true;
_.total = 100;
var Lorg_kie_lienzo_client_AnimatedCirclesExample_2_classLit = createForClass(
  "org.kie.lienzo.client",
  "AnimatedCirclesExample",
  428
);
function $onFrame(this$static) {
  var circle, circle$iterator;
  if (this$static.this$01.animate) {
    if (this$static.this$01.animate) {
      for (
        circle$iterator = new ArrayList$1(this$static.this$01.circles);
        circle$iterator.i < circle$iterator.this$01.array.length;

      ) {
        circle = $next_1(circle$iterator);
        $animateCircle(this$static.this$01, circle);
      }
      null.$_nullMethod();
    }
  }
}

function AnimatedCirclesExample$1(this$0) {
  this.this$01 = this$0;
}

defineClass(230, 1, {}, AnimatedCirclesExample$1);
var Lorg_kie_lienzo_client_AnimatedCirclesExample$1_2_classLit = createForClass(
  "org.kie.lienzo.client",
  "AnimatedCirclesExample/1",
  230
);
function $setxVelocity(this$static, xVelocity) {
  this$static.xVelocity = xVelocity;
}

function $setyVelocity(this$static, yVelocity) {
  this$static.yVelocity = yVelocity;
}

function AnimatedCirclesExample$MotionCircle(radius) {
  $clinit_Node();
  Shape.call(this, ($clinit_ShapeType(), CIRCLE));
  this.radius = radius;
  this.xVelocity = $wnd.Math.random() * 3;
  this.yVelocity = $wnd.Math.random() * 3;
}

defineClass(
  160,
  115,
  { 22: 1, 115: 1, 21: 1, 26: 1, 18: 1, 17: 1, 27: 1, 160: 1 },
  AnimatedCirclesExample$MotionCircle
);
_.xVelocity = 0;
_.yVelocity = 0;
var Lorg_kie_lienzo_client_AnimatedCirclesExample$MotionCircle_2_classLit = createForClass(
  "org.kie.lienzo.client",
  "AnimatedCirclesExample/MotionCircle",
  160
);
defineClass(183, 1, {});
var Lorg_kie_lienzo_client_BaseLienzoExamples_2_classLit = createForClass(
  "org.kie.lienzo.client",
  "BaseLienzoExamples",
  183
);
function JsCanvasExamples() {}

defineClass(429, 1, {}, JsCanvasExamples);
_.goToExample = function goToExample(index_0) {
  null.$_nullMethod();
};
var Lorg_kie_lienzo_client_JsCanvasExamples_2_classLit = createForClass(
  "org.kie.lienzo.client",
  "JsCanvasExamples",
  429
);
function LienzoGWT2Examples() {
  new ArrayList();
}

defineClass(170, 183, {}, LienzoGWT2Examples);
var Lorg_kie_lienzo_client_LienzoGWT2Examples_2_classLit = createForClass(
  "org.kie.lienzo.client",
  "LienzoGWT2Examples",
  170
);
function LienzoNativeExample() {}

function createExample(parent_0) {
  var panel, canvas, rectangle;
  panel = ($clinit_ScrollablePanel(), new ScrollablePanel(new BoundsProviderFactory$PrimitivesBoundsProvider()));
  parent_0.appendChild(panel.rootPanel);
  $initResizeObserver(panel);
  init_3(panel);
  canvas = $wnd.window.jsCanvas;
  rectangle = $setStrokeAlpha(
    $setStrokeColor_0($setFillAlpha($setFillColor_1(new Rectangle(100, 100), "red")), "black")
  );
  $add_0(canvas.layer, rectangle);
  canvas.layer.draw_1();
}

function createLienzo(parent_0) {
  var panel;
  panel = ($clinit_ScrollablePanel(), new ScrollablePanel(new BoundsProviderFactory$PrimitivesBoundsProvider()));
  parent_0.appendChild(panel.rootPanel);
  $initResizeObserver(panel);
  init_3(panel);
}

function init_3(panel) {
  var jsCanvas, layer;
  layer = new Layer();
  panel.add_0(layer);
  jsCanvas = new JsCanvas(panel, layer, null);
  $wnd.window.jsCanvas = jsCanvas;
}

function populate_0() {
  var canvas, rectangle;
  canvas = $wnd.window.jsCanvas;
  rectangle = $setStrokeAlpha(
    $setStrokeColor_0($setFillAlpha($setFillColor_1(new Rectangle(100, 100), "red")), "black")
  );
  $add_0(canvas.layer, rectangle);
  canvas.layer.draw_1();
}

function setupJsCanvasTypes(jsCanvas) {
  $wnd.window.jsCanvas = jsCanvas;
}

defineClass(430, 1, {}, LienzoNativeExample);
var Lorg_kie_lienzo_client_LienzoNativeExample_2_classLit = createForClass(
  "org.kie.lienzo.client",
  "LienzoNativeExample",
  430
);
function setLocation(shape_0, viewWidth, viewHeight, leftPadding, topPadding, rightPadding, bottomPadding) {
  var hRange, points, shapeHeight, shapeWidth, wRange, x_0, xOffset, y_0, yOffset;
  points = $getBoundingPoints(shape_0, 0, 0).m_array;
  xOffset = points[0].x - shape_0.x;
  yOffset = points[0].y - shape_0.y;
  shapeWidth = points[1].x - points[0].x;
  shapeHeight = points[3].y - points[0].y;
  wRange = viewWidth - leftPadding - rightPadding - shape_0.strokeWidth - shapeWidth;
  hRange = viewHeight - topPadding - bottomPadding - shape_0.strokeWidth - shapeHeight;
  x_0 = $wnd.Math.random() * wRange;
  y_0 = $wnd.Math.random() * hRange;
  x_0 = x_0 + leftPadding + shape_0.strokeWidth - xOffset;
  y_0 = y_0 + topPadding + shape_0.strokeWidth - yOffset;
  $setY(((shape_0.x = x_0), shape_0), y_0);
}

var C_classLit = createForPrimitive("char", "C");
var D_classLit = createForPrimitive("double", "D");
_ = provide("AnimatedCirclesExample", AnimatedCirclesExample);
_ = provide("LienzoNativeExample", LienzoNativeExample);
_.createExample = createExample;
_.createLienzo = createLienzo;
_.init = init_3;
_.populate = populate_0;
_.setupJsCanvasTypes = setupJsCanvasTypes;
$clinit_Node();
_ = provide("com.ait.lienzo.client.core.shape.Arc", Arc);
_ = provide("com.ait.lienzo.client.core.shape.Arrow", Arrow);
_ = provide("com.ait.lienzo.client.core.shape.BezierCurve", BezierCurve);
_ = provide("com.ait.lienzo.client.core.shape.Bow", Bow);
_ = provide("com.ait.lienzo.client.core.shape.Circle", Circle);
_ = provide("com.ait.lienzo.client.core.shape.Ellipse", Ellipse);
_ = provide("com.ait.lienzo.client.core.shape.Group", Group);
_ = provide("com.ait.lienzo.client.core.shape.GroupOf.OptionalGroupOfFields");
_.make = make_1;
_ = provide("com.ait.lienzo.client.core.shape.Line", Line);
_ = provide("com.ait.lienzo.client.core.shape.MultiPath", MultiPath_0);
_.clonePath = clonePath;
_ = provide("com.ait.lienzo.client.core.shape.Node.OptionalNodeFields");
_.make = make_2;
_ = provide("com.ait.lienzo.client.core.shape.Polygon", Polygon);
_ = provide("com.ait.lienzo.client.core.shape.QuadraticCurve", QuadraticCurve);
_ = provide("com.ait.lienzo.client.core.shape.Rectangle", Rectangle);
$clinit_SVGPath();
_ = provide("com.ait.lienzo.client.core.shape.SVGPath", SVGPath);
_.parse = parse_1;
_ = provide("com.ait.lienzo.client.core.shape.Shape.OptionalShapeFields");
_.make = make_3;
_ = provide("com.ait.lienzo.client.core.shape.Slice", Slice);
_ = provide("com.ait.lienzo.client.core.shape.Spline", Spline);
_ = provide("com.ait.lienzo.client.core.shape.Star", Star);
$clinit_Text();
_ = provide("com.ait.lienzo.client.core.shape.Text", Text_0);
_ = provide("com.ait.lienzo.client.core.shape.Triangle", Triangle);
_ = provide("com.ait.lienzo.client.core.shape.wires.types.JsWiresConnection", JsWiresConnection);
_ = provide("com.ait.lienzo.client.core.shape.wires.types.JsWiresConnector", JsWiresConnector);
_ = provide("com.ait.lienzo.client.core.shape.wires.types.JsWiresMagnet", JsWiresMagnet);
_ = provide("com.ait.lienzo.client.core.shape.wires.types.JsWiresShape", JsWiresShape);
_ = provide("com.ait.lienzo.client.core.types.BoundingBox", BoundingBox);
_.fromArrayOfPoint2D = fromArrayOfPoint2D;
_.fromBoundingBox = fromBoundingBox;
_.fromDoubles = fromDoubles;
_.fromPoint2DArray = fromPoint2DArray;
_ = provide("com.ait.lienzo.client.core.types.JsCanvas", JsCanvas);
_.animations = animations;
_.events = events;
_.logger = logger;
_ = provide("com.ait.lienzo.client.core.types.JsCanvasAnimations", JsCanvasAnimations);
_ = provide("com.ait.lienzo.client.core.types.JsCanvasEvents", JsCanvasEvents);
_ = provide("com.ait.lienzo.client.core.types.JsCanvasLogger", JsCanvasLogger);
_ = provide("com.ait.lienzo.client.core.types.LinearGradient.LinearGradientJSO", LinearGradient$LinearGradientJSO);
_.make = make_4;
_ = provide("com.ait.lienzo.client.core.types.PathPartEntryJSO", PathPartEntryJSO);
_.ARCTO_ABSOLUTE = ARCTO_ABSOLUTE;
_.BEZIER_CURVETO_ABSOLUTE = BEZIER_CURVETO_ABSOLUTE;
_.CANVAS_ARCTO_ABSOLUTE = CANVAS_ARCTO_ABSOLUTE;
_.CLOSE_PATH_PART = CLOSE_PATH_PART;
_.LINETO_ABSOLUTE = LINETO_ABSOLUTE;
_.MOVETO_ABSOLUTE = MOVETO_ABSOLUTE;
_.QUADRATIC_CURVETO_ABSOLUTE = QUADRATIC_CURVETO_ABSOLUTE;
_.UNDEFINED_PATH_PART = UNDEFINED_PATH_PART;
_.make = make_5;
_ = provide("com.ait.lienzo.client.core.types.PatternGradient.PatternGradientJSO");
_.make = make_7;
_ = provide("com.ait.lienzo.client.core.types.RadialGradient.RadialGradientJSO", RadialGradient$RadialGradientJSO);
_.make = make_8;
_ = provide("com.ait.lienzo.client.core.types.Transform", Transform);
_.create3PointTransform = create3PointTransform;
_.createViewportTransform = createViewportTransform;
_.fromXY = fromXY;
_.makeFromArray = makeFromArray;
_.makeFromValues = makeFromValues;
_ = provide("com.ait.lienzo.tools.client.Timer", Timer);
_ = provide("java.io.Serializable");
_.$isInstance = $isInstance;
$clinit_Boolean();
_ = provide("java.lang.Boolean");
_.$isInstance = $isInstance_0;
_ = provide("java.lang.CharSequence");
_.$isInstance = $isInstance_1;
_ = provide("java.lang.Cloneable");
_.$isInstance = $isInstance_2;
_ = provide("java.lang.Comparable");
_.$isInstance = $isInstance_3;
_ = provide("java.lang.Double");
_.$isInstance = $isInstance_5;
_ = provide("java.lang.Number");
_.$isInstance = $isInstance_4;
_ = provide("java.lang.String");
_.$isInstance = $isInstance_6;
_ = provide("java.lang.Throwable");
_.of = of;
_ = provide("org.kie.lienzo.client.JsCanvasExamples", JsCanvasExamples);
var $entry = ($clinit_Impl(), entry_0);
var gwtOnLoad = (gwtOnLoad = gwtOnLoad_0);
addInitFunctions(init_2);
setGwtProperty("permProps", [
  [
    ["locale", "default"],
    ["user.agent", "safari"],
  ],
]);
$sendStats("moduleStartup", "moduleEvalEnd");
gwtOnLoad(
  __gwtModuleFunction.__errFn,
  __gwtModuleFunction.__moduleName,
  __gwtModuleFunction.__moduleBase,
  __gwtModuleFunction.__softPermutationId,
  __gwtModuleFunction.__computePropValue
);
$sendStats("moduleStartup", "end");
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=org.kie.lienzo.LienzoShowcase-0.js
