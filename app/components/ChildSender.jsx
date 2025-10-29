export default function ChildSender( {onSend} ) {
    return (
        <button onClick={() => onSend('Hello from child!')}>Send</button>
    );
}