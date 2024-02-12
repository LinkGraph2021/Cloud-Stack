
import BasicForm from '@/components/BasicForm';

export default function Home() {
  return (
    <main className="container">
      <div className="flex flex-col justify-center min-h-80vh py-5">
        <h1>Log In</h1>
        <BasicForm
          formElements={
            [
              {
                typeI:'input',
                inputT: 'username',
                textI: 'Username',
                placeH: 'Field.'
              },
              {
                typeI: 'input',
                inputT: 'password',
                textI: 'Password',
                legend: 'Forgot Password.',
                placeH: 'Field.'
              }
            ]
          }
          formButton='Login'/>
      </div>
    </main>
  );
}
