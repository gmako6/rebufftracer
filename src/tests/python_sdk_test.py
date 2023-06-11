import opentelemetry.trace as trace
from opentelemetry.exporter.jaeger import JaegerSpanExporter
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from rebuff.python_sdk.sdk import RebuffSDK

def test_rebuff_python_sdk():
    # Create a tracing instance for the SDK tests
    exporter = JaegerSpanExporter(
        service_name='rebuff-sdk-python',
        agent_host_name='localhost',  # Replace with your Jaeger server address
        agent_port=6831,  # Replace with your Jaeger server port
    )
    provider = TracerProvider()
    span_processor = BatchSpanProcessor(exporter)
    provider.add_span_processor(span_processor)
    trace.set_tracer_provider(provider)

    # Initialize the SDK with the tracing instance
    sdk = RebuffSDK(trace.get_tracer(__name__))

    # Perform actions that generate traces using the SDK

    # Add assertions to validate the traces
