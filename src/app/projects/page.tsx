
import Projects from '@/components/Projects/Projects';

export default function Upload() {
  let projectsElement = [
    {
      nameP: 'Search Atlas Cloud sites',
      contentStatus: true,
      hostings: [ 'host1', 'host2' ]
    },
    {
      nameP: 'Search Atlas Cloud sites two',
      contentStatus: false
    }
  ]
  return (
    <main className="container">
      <div className="flex flex-col justify-center min-h-80vh gap-4">
        <h1>All Projects</h1>
        <Projects
          projectsElement={projectsElement} />
      </div>
    </main>
  );
}
