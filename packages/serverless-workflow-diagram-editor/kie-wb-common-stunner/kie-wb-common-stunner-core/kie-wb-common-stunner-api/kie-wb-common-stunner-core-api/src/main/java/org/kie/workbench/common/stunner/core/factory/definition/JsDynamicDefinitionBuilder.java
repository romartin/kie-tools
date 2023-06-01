package org.kie.workbench.common.stunner.core.factory.definition;

import jsinterop.annotations.JsFunction;
import org.kie.workbench.common.stunner.core.definition.adapter.DefinitionId;

@JsFunction
public interface JsDynamicDefinitionBuilder {

    Object build(DefinitionId id);
}
