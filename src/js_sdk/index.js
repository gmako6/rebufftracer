import { trace } from "@opentelemetry/api";
require("@google-cloud/trace-agent").start({
  projectId: "your-project-id",
  keyFilename: "/path/to/key.json",
});

class RebuffSDK {
  constructor(tracingInstance) {
    if (tracingInstance) {
      trace.setGlobalTracerProvider(tracingInstance);
    }

    // Rest of the SDK implementation
  }
}

export default RebuffSDK;
