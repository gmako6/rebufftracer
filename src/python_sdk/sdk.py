import opentelemetry.trace as trace

class RebuffSDK:
    def __init__(self, tracer):
        self.tracer = tracer

    def perform_action(self):
        with self.tracer.start_as_current_span('perform_action'):
            # Perform the action

            # Generate spans and add attributes
            with self.tracer.start_as_current_span('sub_action') as span:
                span.set_attribute('attribute_name', 'attribute_value')

                # Perform sub-action

