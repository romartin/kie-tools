package org.kie.lienzo.client.js;

import com.google.gwt.core.client.JavaScriptObject;
import elemental2.dom.DomGlobal;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType
public class JsObjectAdapter {

    public String getObjectId(Object o) {
        String typeName = o.getClass().getName();
        if (typeName.startsWith(JavaScriptObject.class.getName())) {
            JsPropertyMap<Object> map = Js.asPropertyMap(o);
            Object p = map.nestedGet("__proto__.constructor.name");
            return p.toString();
        }
        return typeName;
    }

    public String getClassId(Object o) {
        String typeName = o.getClass().getName();
        if (typeName.startsWith(JavaScriptObject.class.getName())) {
            JsPropertyMap<Object> map = Js.asPropertyMap(o);
            Object p = map.get("name");
            return p.toString();
        }
        return typeName;
    }

    public void registerDefinition(Object o) {
        String id = getClassId(o);
        DomGlobal.console.log("Registering Definition [" + id + "]");
    }

}
