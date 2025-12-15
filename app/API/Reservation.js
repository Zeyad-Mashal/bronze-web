const URL = "https://bronze-back.vercel.app/addReservation";
const AddReservation = async (reservationData, setError, setLoading, setSuccess) => {
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData),
        });

        const result = await response.json();

        if (response.ok) {
            setSuccess(true);
            setLoading(false);
            return { success: true, data: result };
        } else {
            setError(result.message || 'حدث خطأ أثناء إرسال الحجز');
            setLoading(false);
            return { success: false, error: result.message };
        }
    } catch {
        const errorMessage = 'حدث خطأ أثناء الاتصال بالخادم';
        setError(errorMessage);
        setLoading(false);
        return { success: false, error: errorMessage };
    }
};

export default AddReservation;

