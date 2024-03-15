'use client'
import BasicForm from '@/components/BasicForm';
import { useEffect, useState } from "react";
import { getProject, setProject } from  '@/app/firebase/projectsObject';

export default function Test() {

  async function fetchData() {
      try {
        await getProject("uFJzIIs16EKG0kSPLMPo").then(async (resultsThread) => {
          console.log(resultsThread);
        });
      } catch (err) {
        console.error('here', err);
      } finally {
        return Promise.resolve();
      }
  }

  async function sentData() {
    console.log( 'test' );
  }

  return (
    <div className="flex gap-2">
      <button onClick={(fetchData)}>tester</button>
      <button onClick={(sentData)}>tester2</button>
    </div>
  );
}
