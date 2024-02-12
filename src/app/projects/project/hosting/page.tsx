import BasicForm from '@/components/BasicForm';
import HostingLists from '@/components/HostingLists/HostingLists';

export default function Home() {
    return (
        <main className="container">
            <div className="flex flex-col justify-center min-h-80vh py-5 gap-24">
                <div>
                    <h1>Connect to Amazon</h1>
                    <BasicForm
                        formInline
                        formElements={
                            [
                                {
                                    typeI: 'input',
                                    inputT: 'text',
                                    textI: 'Info needed',
                                    placeH: 'Field.'
                                },
                                {
                                    typeI: 'input',
                                    inputT: 'text',
                                    textI: 'Info needed 1',
                                    placeH: 'Field.'
                                }
                            ]
                        }
                        formBack
                        formButton='Try Connection' />
                </div>
            </div>
        </main>
    );
}
