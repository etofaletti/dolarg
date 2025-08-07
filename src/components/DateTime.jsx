export default function DateTime() {
    const dateTime = new Date();

    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const year = dateTime.getFullYear(); // 👈 corregido (estaba mal escrito)
    const hour = dateTime.getHours();
    const minutes = dateTime.getMinutes();

    // Formato 12hs con AM/PM
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return (
        <p>
            Última actualización {day}/{month}/{year} a las {formattedHour}:{formattedMinutes}{ampm}
        </p>
    );
}
