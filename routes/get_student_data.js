module.exports = (webserver, mysql, database) => {
    webserver.get('/api/get_student_data', (req, res) => {

        const output = {
            success: false,
            data: [],
            errors: []
        }

        let query = `
            SELECT
                id,
                student_name,
                class_name,
                grade_value
            FROM grades`;

        database.query(query, (error, data, fields) => {
            if (!error) {
                output.success = true;
                output.data = data;
                output.message = "Query was successful";
            } else {
                output.errors = error;
            };
            res.json(output);
        });
    });
};