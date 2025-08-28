import Airtable from 'airtable';
import { json } from '@sveltejs/kit';
import { airtableAPIKey } from '$env/static/private';
import { runnerSecret } from '$env/static/private';

export async function GET () {
    const base = new Airtable({ apiKey: airtableAPIKey }).base('appIomiEP9tXZDl2m');
    let totalDistance = 0;
    let list: { url: string}[] = [];

    try {
        await new Promise<void>((resolve, reject) => {
            base('Runs').select({
                maxRecords: 3,
                view: "Grid view"
            }).eachPage(
                function page(records, fetchNextPage) {
                    records.forEach(record => {
                        if (record.fields['Secret'] == runnerSecret) {
                            const distance = Number(record.fields['Distance']);
                            if (!isNaN(distance)) {
                                totalDistance += distance;
                                list.push({ url: record.fields['EmbedID'] });
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
        return json({ totalDistance: totalDistance, activityList: list });
    } catch (err: any) {
        return json({ error: err.message }, { status: 500 });
    }
};