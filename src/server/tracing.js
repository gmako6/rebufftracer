const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const { JaegerExporter } = require("@opentelemetry/exporter-jaeger");
const { SimpleSpanProcessor } = require("@opentelemetry/sdk-trace-base");

const provider = new NodeTracerProvider();

const exporter = new JaegerExporter({
  serviceName: "rebuff-server",
  endpoint: "http://localhost:6831", // Replace with your Jaeger server address
});

provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
provider.register();
