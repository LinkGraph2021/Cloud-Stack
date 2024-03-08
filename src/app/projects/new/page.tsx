
import NewProject from '@/components/NewProject';
import BasicForm from '@/components/BasicForm';

export default function Upload() {
  return (
    <main className="container">
      <div className="flex flex-col justify-center min-h-80vh py-5">
        <h1>Create New Project</h1>
        <NewProject />
      </div>
    </main>
  );
}
