
import NewProject from '@/components/NewProject';
import BasicForm from '@/components/BasicForm';

export default function Upload() {
  return (
    <main className="container">
      <div className="flex flex-col justify-center min-h-80vh py-5">
        <h1>Create New Project</h1>
        <NewProject />

        <BasicForm
          formObj={{
            formInline: true,
            formElements:[
              {
                typeI: 'input',
                inputT: 'text',
                textI: 'Name of Project',
                placeH: 'Field.'
              },
              {
                typeI: 'input',
                inputT: 'text',
                textI: 'Main Header (H1)',
                placeH: 'Field.'
              },
              {
                typeI: 'input',
                inputT: 'text',
                textI: 'Keywords',
                placeH: 'Field.'
              },
              {
                typeI: 'textarea',
                textI: 'Meta Description (150 Characters)',
                placeH: 'Field.',
                rows: 5
              },
              {
                typeI: 'section',
                textI: 'FAQ Section'
              },
              {
                typeI: 'double',
                inputs: [
                  {inputT1: 'text', textI1: 'Question 1', placeH1: 'Field.', inputT2: 'text', textI2: 'Answer 1', placeH2: 'Field.'},
                  {inputT1: 'text', textI1: 'Question 2', placeH1: 'Field.', inputT2: 'text', textI2: 'Answer 2', placeH2: 'Field.'},
                  {inputT1: 'text', textI1: 'Question 3', placeH1: 'Field.', inputT2: 'text', textI2: 'Answer 3', placeH2: 'Field.'}
                ]
              },
              {
                typeI: 'section',
                textI: 'Video Section'
              },
              {
                typeI: 'double',
                inputs: [
                  {inputT1: 'text', textI1: 'YouTube URL 1', placeH1: 'Field.'},
                  {inputT1: 'text', textI1: 'YouTube URL 2', placeH1: 'Field.'},
                  {inputT1: 'text', textI1: 'YouTube URL 3', placeH1: 'Field.'}
                ]
              },
              {
                typeI: 'section',
                textI: 'Map Location'
              },
              {
                typeI: 'double',
                inputs: [
                  {inputT1: 'text', textI1: 'Address', placeH1: 'Field.'},
                ]
              },
              {
                typeI: 'section',
                textI: 'Footer'
              },
              {
                typeI: 'double',
                inputs: [
                  {inputT1: 'text', textI1: 'Useful Link 1', placeH1: 'Field.', inputT2: 'text', textI2: 'Answer 2', placeH2: 'Field.'},
                  {inputT1: 'text', textI1: 'Useful Link 3', placeH1: 'Field.', inputT2: 'text', textI2: 'Answer 4', placeH2: 'Field.'},
                  {inputT1: 'text', textI1: 'Useful Link 5', placeH1: 'Field.', inputT2: 'text', textI2: 'Answer 6', placeH2: 'Field.'},
                  {inputT1: 'text', textI1: 'Useful Link 7', placeH1: 'Field.', inputT2: 'text', textI2: 'Company Link', placeH2: 'Field.'},
                ]
              },
              {
                typeI: 'textarea',
                textI: 'Hidden Footer Section',
                placeH: 'Field.',
                rows: 5
              },
            ],
            formButton:'Create Project'
          }} />
      </div>
    </main>
  );
}
