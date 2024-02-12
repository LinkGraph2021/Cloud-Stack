import BasicForm from '@/components/BasicForm';
import HostingLists from '@/components/HostingLists/HostingLists';

export default function Home() {
  let hostingElements = [
    {
      hosting: 'Amazon',
      isSetup: true,
    },
    {
      hosting: 'Vercel',
      isSetup: false,
    }
  ]
  return (
    <main className="container">
      <div className="flex flex-col justify-center min-h-80vh py-5 gap-24">
        <div>
          <h1>Project Name: Search Atlas Cloud sites</h1>
          <BasicForm
            formElements={
              [
                {
                  typeI:'change',
                  buttonT: 'Update Content',
                  textI: 'edit',
                }
              ]
            }
            formBack
            formButton='Send'
            toggleButton/>
        </div>
        <div>
          <h2>Connect to Hostings</h2>
          <HostingLists 
          hostingElements={hostingElements}/>
        </div>
        <button
            type="submit"
            className="w-fit rounded-md bg-red-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all"
          >
            <i>Delete this Project</i>
        </button>
      </div>
    </main>
  );
}
