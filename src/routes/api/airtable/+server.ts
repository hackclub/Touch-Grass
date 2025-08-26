import Airtable from 'airtable';
import { json } from '@sveltejs/kit';
import { airtableAPIKey } from '$env/static/private';

export async function GET () {
    const base = new Airtable({ apiKey: airtableAPIKey }).base('appIomiEP9tXZDl2m');
    let projects = 0;

    try {
        await new Promise<void>((resolve, reject) => {
            base('YSWS Project Submission').select({
                view: "Pipeline View"
            }).eachPage(
                function page(records, fetchNextPage) {
                    records.forEach(record => {
                        if (record.fields["Optional - Override Hours Spent"] != null) {
                            if (record.fields["Pro Grass Toucher"] === true) {
                                projects += (Math.round(record.fields["Optional - Override Hours Spent"] * 40)/100);
                            } else {
                                projects += (Math.round(record.fields["Optional - Override Hours Spent"] * 20)/100);
                            }
                        }
                    });
                    fetchNextPage();
                },
                function done(err) {
                    if (err) reject(err);
                    else resolve();
                }
            );
        });
        return json({ distance: (Math.round(projects*100) /100) });
    } catch (err: any) {
        return json({ error: err.message }, { status: 500 });
    }
};