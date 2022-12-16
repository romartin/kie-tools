# lienzo-webapp

Building:

    mvn clean install -DskipTests

Running:

    mvn gwt:run

Debugging:

    mvn gwt:debug

IDE - GWT Run Configuration

    Dev Mode parameters: -generateJsInteropExports

Usage

    // Creates some exmaple Lienzo Panel.
    LienzoNativeExample.createExample(document.getElementById('main'));

    // Creates a raw Lienzo Panel to interact with.
    LienzoNativeExample.createLienzo(document.getElementById('main'));
    createLienzo(document.getElementById('main'));

    // Populates the panel with a shape.
    var rectangle = new window.com.ait.lienzo.client.core.shape.Rectangle(50, 50);
    rectangle.x = 0;
    rectangle.y = 0;
    rectangle.fillAlpha = 1;
    rectangle.fillColor = "darkgrey";
    rectangle.strokeAlpha = 1;
    rectangle.strokeColor = 'black';
    rectangle.strokeWitrh = 2;
    rectangle.cornerRadius = 5;
    window.jsCanvas.add(rectangle);
    window.jsCanvas.draw();

    var someType1 = new window.org.kie.lienzo.client.js.SomeJsType();
