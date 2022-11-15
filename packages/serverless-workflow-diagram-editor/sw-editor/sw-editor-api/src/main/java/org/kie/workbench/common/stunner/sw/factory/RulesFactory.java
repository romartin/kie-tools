package org.kie.workbench.common.stunner.sw.factory;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import elemental2.dom.DomGlobal;
import org.kie.workbench.common.stunner.core.definition.jsadapter.JsRuleAdapter;
import org.kie.workbench.common.stunner.core.rule.Rule;
import org.kie.workbench.common.stunner.core.rule.RuleSetImpl;
import org.kie.workbench.common.stunner.core.rule.context.EdgeCardinalityContext;
import org.kie.workbench.common.stunner.core.rule.impl.CanConnect;
import org.kie.workbench.common.stunner.core.rule.impl.CanContain;
import org.kie.workbench.common.stunner.core.rule.impl.CanDock;
import org.kie.workbench.common.stunner.core.rule.impl.EdgeOccurrences;
import org.kie.workbench.common.stunner.core.rule.impl.Occurrences;

// TODO: PoC
@ApplicationScoped
public class RulesFactory {

    @Inject
    JsRuleAdapter ruleAdapter;

    public void buildSWFRules() {
        DomGlobal.console.log("BUILDING RULES FOR SWF Domain");
        ruleAdapter.setRuleSet(buildRuleSet());
        DomGlobal.console.log("RULES FOR SWF Domain BUILD SUCCESS");
    }

    public static RuleSetImpl buildRuleSet() {
        Collection<Rule> rules = new HashSet<>(60);
        buildContainmentRules(rules);
        buildConnectionRules(rules);
        buildDockingRules(rules);
        buildOccurrencesRules(rules);
        buildEdgeOccurrencesRules(rules);
        RuleSetImpl ruleSet = new RuleSetImpl("DefinitionsRuleAdapterImpl", rules);
        return ruleSet;
    }

    private static void buildContainmentRules(Collection<Rule> rules) {
        CanContain onEventContainmentRule = new CanContain("onEventContainmentRule", "org.kie.workbench.common.stunner.sw.definition.OnEvent", new HashSet<String>(2) {{
            add("event");
            add("action");
        }});
        rules.add(onEventContainmentRule);
        CanContain actionsContainerContainmentRule = new CanContain("actionsContainerContainmentRule", "org.kie.workbench.common.stunner.sw.definition.ActionsContainer", new HashSet<String>(1) {{
            add("action");
        }});
        rules.add(actionsContainerContainmentRule);
        CanContain workflowContainmentRule = new CanContain("workflowContainmentRule", "org.kie.workbench.common.stunner.sw.definition.Workflow", new HashSet<String>(1) {{
            add("rootNode");
        }});
        rules.add(workflowContainmentRule);
        CanContain definitionsContainmentRule = new CanContain("definitionsContainmentRule", "org.kie.workbench.common.stunner.sw.Definitions", new HashSet<String>(1) {{
            add("workflow");
        }});
        rules.add(definitionsContainmentRule);
    }

    private static void buildConnectionRules(Collection<Rule> rules) {
        CanConnect dataConditionTransitionConnectionRule = new CanConnect("dataConditionTransitionConnectionRule", "org.kie.workbench.common.stunner.sw.definition.DataConditionTransition",
                                                                          new ArrayList<CanConnect.PermittedConnection>(2) {{
                                                                              add(new CanConnect.PermittedConnection("state", "state"));
                                                                              add(new CanConnect.PermittedConnection("state", "end"));
                                                                          }}
        );
        rules.add(dataConditionTransitionConnectionRule);

        CanConnect defaultConditionTransitionConnectionRule = new CanConnect("defaultConditionTransitionConnectionRule", "org.kie.workbench.common.stunner.sw.definition.DefaultConditionTransition",
                                                                             new ArrayList<CanConnect.PermittedConnection>(2) {{
                                                                                 add(new CanConnect.PermittedConnection("state", "state"));
                                                                                 add(new CanConnect.PermittedConnection("state", "end"));
                                                                             }}
        );
        rules.add(defaultConditionTransitionConnectionRule);

        CanConnect errorTransitionConnectionRule = new CanConnect("errorTransitionConnectionRule", "org.kie.workbench.common.stunner.sw.definition.ErrorTransition",
                                                                  new ArrayList<CanConnect.PermittedConnection>(2) {{
                                                                      add(new CanConnect.PermittedConnection("state", "state"));
                                                                      add(new CanConnect.PermittedConnection("state", "end"));
                                                                  }}
        );
        rules.add(errorTransitionConnectionRule);

        CanConnect eventConditionTransitionConnectionRule = new CanConnect("eventConditionTransitionConnectionRule", "org.kie.workbench.common.stunner.sw.definition.EventConditionTransition",
                                                                           new ArrayList<CanConnect.PermittedConnection>(2) {{
                                                                               add(new CanConnect.PermittedConnection("state", "state"));
                                                                               add(new CanConnect.PermittedConnection("state", "end"));
                                                                           }}
        );
        rules.add(eventConditionTransitionConnectionRule);

        CanConnect transitionConnectionRule = new CanConnect("transitionConnectionRule", "org.kie.workbench.common.stunner.sw.definition.Transition",
                                                             new ArrayList<CanConnect.PermittedConnection>(2) {{
                                                                 add(new CanConnect.PermittedConnection("state", "state"));
                                                                 add(new CanConnect.PermittedConnection("state", "end"));
                                                             }}
        );
        rules.add(transitionConnectionRule);

        CanConnect compensationTransitionConnectionRule = new CanConnect("compensationTransitionConnectionRule", "org.kie.workbench.common.stunner.sw.definition.CompensationTransition",
                                                                         new ArrayList<CanConnect.PermittedConnection>(1) {{
                                                                             add(new CanConnect.PermittedConnection("state", "state"));
                                                                         }}
        );
        rules.add(compensationTransitionConnectionRule);

        CanConnect startTransitionConnectionRule = new CanConnect("startTransitionConnectionRule", "org.kie.workbench.common.stunner.sw.definition.StartTransition",
                                                                  new ArrayList<CanConnect.PermittedConnection>(1) {{
                                                                      add(new CanConnect.PermittedConnection("start", "state"));
                                                                  }}
        );
        rules.add(startTransitionConnectionRule);
    }

    private static void buildDockingRules(Collection<Rule> rules) {
        CanDock stateDockingRule = new CanDock("stateDockingRule", "org.kie.workbench.common.stunner.sw.definition.State", new HashSet<String>(1) {{
            add("timeout");
        }});
        rules.add(stateDockingRule);
    }

    private static void buildOccurrencesRules(Collection<Rule> rules) {
        Occurrences definitionsCardinalityRule0CardinalityRule = new Occurrences("definitionsCardinalityRule0CardinalityRule", "workflow", 0, 1);
        rules.add(definitionsCardinalityRule0CardinalityRule);
        Occurrences definitionsCardinalityRule1CardinalityRule = new Occurrences("definitionsCardinalityRule1CardinalityRule", "start", 0, 1);
        rules.add(definitionsCardinalityRule1CardinalityRule);
        Occurrences definitionsCardinalityRule2CardinalityRule = new Occurrences("definitionsCardinalityRule2CardinalityRule", "end", 0, 1);
        rules.add(definitionsCardinalityRule2CardinalityRule);
    }

    private static void buildEdgeOccurrencesRules(Collection<Rule> rules) {
        EdgeOccurrences CompensationTransition0EdgeCardinalityRule = new EdgeOccurrences("CompensationTransition0EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.CompensationTransition",
                                                                                         "state", EdgeCardinalityContext.Direction.INCOMING, 0, -1);
        rules.add(CompensationTransition0EdgeCardinalityRule);

        EdgeOccurrences CompensationTransition1EdgeCardinalityRule = new EdgeOccurrences("CompensationTransition1EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.CompensationTransition",
                                                                                         "state", EdgeCardinalityContext.Direction.OUTGOING, 0, 1);
        rules.add(CompensationTransition1EdgeCardinalityRule);

        EdgeOccurrences CompensationTransition2EdgeCardinalityRule = new EdgeOccurrences("CompensationTransition2EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.CompensationTransition",
                                                                                         "start", EdgeCardinalityContext.Direction.INCOMING, 0, 0);
        rules.add(CompensationTransition2EdgeCardinalityRule);

        EdgeOccurrences CompensationTransition3EdgeCardinalityRule = new EdgeOccurrences("CompensationTransition3EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.CompensationTransition",
                                                                                         "start", EdgeCardinalityContext.Direction.OUTGOING, 0, 0);
        rules.add(CompensationTransition3EdgeCardinalityRule);

        EdgeOccurrences CompensationTransition4EdgeCardinalityRule = new EdgeOccurrences("CompensationTransition4EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.CompensationTransition",
                                                                                         "end", EdgeCardinalityContext.Direction.OUTGOING, 0, 0);
        rules.add(CompensationTransition4EdgeCardinalityRule);

        EdgeOccurrences CompensationTransition5EdgeCardinalityRule = new EdgeOccurrences("CompensationTransition5EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.CompensationTransition",
                                                                                         "end", EdgeCardinalityContext.Direction.INCOMING, 0, 0);
        rules.add(CompensationTransition5EdgeCardinalityRule);

        EdgeOccurrences DataConditionTransition0EdgeCardinalityRule = new EdgeOccurrences("DataConditionTransition0EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.DataConditionTransition",
                                                                                          "state", EdgeCardinalityContext.Direction.INCOMING, 0, -1);
        rules.add(DataConditionTransition0EdgeCardinalityRule);

        EdgeOccurrences DataConditionTransition1EdgeCardinalityRule = new EdgeOccurrences("DataConditionTransition1EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.DataConditionTransition",
                                                                                          "state", EdgeCardinalityContext.Direction.OUTGOING, 0, 1);
        rules.add(DataConditionTransition1EdgeCardinalityRule);

        EdgeOccurrences DataConditionTransition2EdgeCardinalityRule = new EdgeOccurrences("DataConditionTransition2EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.DataConditionTransition",
                                                                                          "start", EdgeCardinalityContext.Direction.INCOMING, 0, 0);
        rules.add(DataConditionTransition2EdgeCardinalityRule);

        EdgeOccurrences DataConditionTransition3EdgeCardinalityRule = new EdgeOccurrences("DataConditionTransition3EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.DataConditionTransition",
                                                                                          "start", EdgeCardinalityContext.Direction.OUTGOING, 0, 0);
        rules.add(DataConditionTransition3EdgeCardinalityRule);

        EdgeOccurrences DataConditionTransition4EdgeCardinalityRule = new EdgeOccurrences("DataConditionTransition4EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.DataConditionTransition",
                                                                                          "end", EdgeCardinalityContext.Direction.OUTGOING, 0, 0);
        rules.add(DataConditionTransition4EdgeCardinalityRule);

        EdgeOccurrences DefaultConditionTransition0EdgeCardinalityRule = new EdgeOccurrences("DefaultConditionTransition0EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.DefaultConditionTransition",
                                                                                             "state", EdgeCardinalityContext.Direction.INCOMING, 0, -1);
        rules.add(DefaultConditionTransition0EdgeCardinalityRule);

        EdgeOccurrences DefaultConditionTransition1EdgeCardinalityRule = new EdgeOccurrences("DefaultConditionTransition1EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.DefaultConditionTransition",
                                                                                             "state", EdgeCardinalityContext.Direction.OUTGOING, 0, 1);
        rules.add(DefaultConditionTransition1EdgeCardinalityRule);

        EdgeOccurrences DefaultConditionTransition2EdgeCardinalityRule = new EdgeOccurrences("DefaultConditionTransition2EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.DefaultConditionTransition",
                                                                                             "start", EdgeCardinalityContext.Direction.INCOMING, 0, 0);
        rules.add(DefaultConditionTransition2EdgeCardinalityRule);

        EdgeOccurrences DefaultConditionTransition3EdgeCardinalityRule = new EdgeOccurrences("DefaultConditionTransition3EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.DefaultConditionTransition",
                                                                                             "start", EdgeCardinalityContext.Direction.OUTGOING, 0, 0);
        rules.add(DefaultConditionTransition3EdgeCardinalityRule);

        EdgeOccurrences DefaultConditionTransition4EdgeCardinalityRule = new EdgeOccurrences("DefaultConditionTransition4EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.DefaultConditionTransition",
                                                                                             "end", EdgeCardinalityContext.Direction.OUTGOING, 0, 0);
        rules.add(DefaultConditionTransition4EdgeCardinalityRule);

        EdgeOccurrences ErrorTransition0EdgeCardinalityRule = new EdgeOccurrences("ErrorTransition0EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.ErrorTransition",
                                                                                  "state", EdgeCardinalityContext.Direction.INCOMING, 0, -1);
        rules.add(ErrorTransition0EdgeCardinalityRule);

        EdgeOccurrences ErrorTransition1EdgeCardinalityRule = new EdgeOccurrences("ErrorTransition1EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.ErrorTransition",
                                                                                  "state", EdgeCardinalityContext.Direction.OUTGOING, 0, -1);
        rules.add(ErrorTransition1EdgeCardinalityRule);

        EdgeOccurrences ErrorTransition2EdgeCardinalityRule = new EdgeOccurrences("ErrorTransition2EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.ErrorTransition",
                                                                                  "start", EdgeCardinalityContext.Direction.INCOMING, 0, 0);
        rules.add(ErrorTransition2EdgeCardinalityRule);

        EdgeOccurrences ErrorTransition3EdgeCardinalityRule = new EdgeOccurrences("ErrorTransition3EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.ErrorTransition",
                                                                                  "start", EdgeCardinalityContext.Direction.OUTGOING, 0, 0);
        rules.add(ErrorTransition3EdgeCardinalityRule);

        EdgeOccurrences ErrorTransition4EdgeCardinalityRule = new EdgeOccurrences("ErrorTransition4EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.ErrorTransition",
                                                                                  "end", EdgeCardinalityContext.Direction.OUTGOING, 0, 0);
        rules.add(ErrorTransition4EdgeCardinalityRule);

        EdgeOccurrences EventConditionTransition0EdgeCardinalityRule = new EdgeOccurrences("EventConditionTransition0EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.EventConditionTransition",
                                                                                           "state", EdgeCardinalityContext.Direction.INCOMING, 0, -1);
        rules.add(EventConditionTransition0EdgeCardinalityRule);

        EdgeOccurrences EventConditionTransition1EdgeCardinalityRule = new EdgeOccurrences("EventConditionTransition1EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.EventConditionTransition",
                                                                                           "state", EdgeCardinalityContext.Direction.OUTGOING, 0, 1);
        rules.add(EventConditionTransition1EdgeCardinalityRule);

        EdgeOccurrences EventConditionTransition2EdgeCardinalityRule = new EdgeOccurrences("EventConditionTransition2EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.EventConditionTransition",
                                                                                           "start", EdgeCardinalityContext.Direction.INCOMING, 0, 0);
        rules.add(EventConditionTransition2EdgeCardinalityRule);

        EdgeOccurrences EventConditionTransition3EdgeCardinalityRule = new EdgeOccurrences("EventConditionTransition3EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.EventConditionTransition",
                                                                                           "start", EdgeCardinalityContext.Direction.OUTGOING, 0, 0);
        rules.add(EventConditionTransition3EdgeCardinalityRule);

        EdgeOccurrences EventConditionTransition4EdgeCardinalityRule = new EdgeOccurrences("EventConditionTransition4EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.EventConditionTransition",
                                                                                           "end", EdgeCardinalityContext.Direction.OUTGOING, 0, 0);
        rules.add(EventConditionTransition4EdgeCardinalityRule);

        EdgeOccurrences StartTransition0EdgeCardinalityRule = new EdgeOccurrences("StartTransition0EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.StartTransition",
                                                                                  "start", EdgeCardinalityContext.Direction.INCOMING, 0, 0);
        rules.add(StartTransition0EdgeCardinalityRule);

        EdgeOccurrences StartTransition1EdgeCardinalityRule = new EdgeOccurrences("StartTransition1EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.StartTransition",
                                                                                  "start", EdgeCardinalityContext.Direction.OUTGOING, 0, 1);
        rules.add(StartTransition1EdgeCardinalityRule);

        EdgeOccurrences Transition0EdgeCardinalityRule = new EdgeOccurrences("Transition0EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.Transition",
                                                                             "state", EdgeCardinalityContext.Direction.INCOMING, 0, -1);
        rules.add(Transition0EdgeCardinalityRule);

        EdgeOccurrences Transition1EdgeCardinalityRule = new EdgeOccurrences("Transition1EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.Transition",
                                                                             "state", EdgeCardinalityContext.Direction.OUTGOING, 0, 1);
        rules.add(Transition1EdgeCardinalityRule);

        EdgeOccurrences Transition2EdgeCardinalityRule = new EdgeOccurrences("Transition2EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.Transition",
                                                                             "start", EdgeCardinalityContext.Direction.INCOMING, 0, 0);
        rules.add(Transition2EdgeCardinalityRule);

        EdgeOccurrences Transition3EdgeCardinalityRule = new EdgeOccurrences("Transition3EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.Transition",
                                                                             "start", EdgeCardinalityContext.Direction.OUTGOING, 0, 0);
        rules.add(Transition3EdgeCardinalityRule);

        EdgeOccurrences Transition4EdgeCardinalityRule = new EdgeOccurrences("Transition4EdgeCardinalityRule", "org.kie.workbench.common.stunner.sw.definition.Transition",
                                                                             "end", EdgeCardinalityContext.Direction.OUTGOING, 0, 0);
        rules.add(Transition4EdgeCardinalityRule);
    }
}
