import axios from 'axios';

async function FetchAnnouncements(req, res) {

    let customHeaders = {
        Accept: 'application/json',
    };

    return await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/announcements`, {
            headers: customHeaders,
        })
        .then((response) => {
            return res
                .status(200)
                .json({data: response.data.data, message: response.data.message});
        })
        .catch((e) => {
            return res.status(e.response.status).json({
                errors: e.response.data.errors,
                message: e.response.data.message,
            });
        });
}

export default FetchAnnouncements;
