import { NodeTracerProvider } from "@opentelemetry/node";
import {
  SimpleSpanProcessor,
  ConsoleSpanExporter,
} from "@opentelemetry/tracing";
import { JaegerExporter } from "@opentelemetry/exporter-jaeger";
import RebuffSDK from "../js_sdk";

describe("Rebuff JavaScript SDK", () => {
  let provider;
  let exporter;

  beforeAll(() => {
    // Create a tracing instance for the SDK tests
    provider = new NodeTracerProvider();

    // Set up the Jaeger exporter to send traces to the Jaeger server
    exporter = new JaegerExporter({
      serviceName: "rebuff-sdk-js",
      endpoint: "http://localhost:6831", // Replace with your Jaeger server address
    });

    provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
    provider.addSpanProcessor(
      new SimpleSpanProcessor(new ConsoleSpanExporter())
    ); // Optional: for local debugging
    provider.register();
  });

  afterAll(() => {
    // Clean up the tracing instance
    provider.shutdown();
  });

  it("should send traces to Jaeger backend", () => {
    // Initialize the SDK with the tracing instance
    const sdk = new RebuffSDK(provider.getTracer("rebuff-sdk-js"));

    // Perform actions that generate traces using the SDK

    // Add assertions to validate the traces
  });
});
