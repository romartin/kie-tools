package org.kie.workbench.common.stunner.sw.factory;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;

import org.kie.workbench.common.stunner.core.definition.DefinitionSetProxy;
import org.kie.workbench.common.stunner.sw.Definitions;

@ApplicationScoped
public class SWDefinitionSetProxy implements DefinitionSetProxy<Definitions> {

    private Definitions instance;

    @PostConstruct
    public void construct() {
        this.instance = new Definitions();
    }

    @Override
    public Definitions getDefinitionSet() {
        return instance;
    }
}
