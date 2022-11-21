package org.kie.workbench.common.stunner.client.widgets.editor;

import java.lang.annotation.Annotation;

import javax.annotation.PostConstruct;
import javax.enterprise.context.Dependent;
import javax.inject.Inject;

import com.ait.lienzo.client.core.types.JsCanvas;
import com.ait.lienzo.client.widget.panel.LienzoBoundsPanel;
import org.kie.workbench.common.stunner.client.lienzo.canvas.LienzoCanvas;
import org.kie.workbench.common.stunner.client.lienzo.canvas.LienzoPanel;
import org.kie.workbench.common.stunner.client.lienzo.util.StunnerStateApplier;
import org.kie.workbench.common.stunner.core.api.JsDefinitionManager;
import org.kie.workbench.common.stunner.core.client.api.JsStunnerEditor;
import org.kie.workbench.common.stunner.core.client.api.JsStunnerSession;
import org.kie.workbench.common.stunner.core.client.api.JsWindow;
import org.kie.workbench.common.stunner.core.client.session.impl.AbstractSession;
import org.kie.workbench.common.stunner.core.client.shape.Shape;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsDefinitionAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsDefinitionSetAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsPropertyAdapter;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsRuleAdapter;
import org.kie.workbench.common.stunner.core.i18n.StunnerTranslationService;
import org.kie.workbench.common.stunner.core.rule.RuleSet;

// TODO: Rename as DomainInitializer and move to stunner-core-api module
@Dependent
public class StunnerEditorInitializer {

    @Inject
    private JsDefinitionAdapter jsDefinitionAdapter;
    @Inject
    private JsPropertyAdapter jsPropertyAdapter;
    @Inject
    private JsRuleAdapter jsRuleAdapter;
    @Inject
    private StunnerTranslationService translationService;
    @Inject
    private JsDefinitionSetAdapter jsDefinitionSetAdapter;

    @PostConstruct
    public void build() {
        JsDefinitionManager jsDefinitionManager = JsDefinitionManager.build(translationService,
                                                                            jsDefinitionSetAdapter,
                                                                            jsDefinitionAdapter,
                                                                            jsPropertyAdapter,
                                                                            jsRuleAdapter);
        JsWindow.editor = new JsStunnerEditor();
        JsWindow.editor.definitions = jsDefinitionManager;
    }

    public void initializeDomainQualifier(Annotation domainQualifier) {
        JsWindow.editor.definitions.initializeDomainQualifier(domainQualifier);
    }

    public void initializeRules(RuleSet ruleSet) {
        JsWindow.editor.definitions.initializeRules(ruleSet);
    }

    public void initializeSession(AbstractSession session) {
        JsStunnerSession jssession = new JsStunnerSession(session);
        JsWindow.editor.session = jssession;
        initializeCanvas(session);
    }

    private void initializeCanvas(AbstractSession session) {
        LienzoCanvas canvas = (LienzoCanvas) session.getCanvasHandler().getCanvas();
        LienzoPanel panel = (LienzoPanel) canvas.getView().getPanel();
        LienzoBoundsPanel lienzoPanel = panel.getView();
        JsCanvas jsCanvas = new JsCanvas(lienzoPanel, lienzoPanel.getLayer(), new StunnerStateApplier() {
            @Override
            public Shape getShape(String uuid) {
                return canvas.getShape(uuid);
            }
        });
        JsWindow.canvas = jsCanvas;
    }
}
