import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 30,
  duration: '50s',	
  ext: {
    loadimpact: {
      distribution: { 'amazon:in:mumbai': { loadZone: 'amazon:in:mumbai', percent: 100 } },
      projectID: 3592529,
      // Test runs with the same name groups test runs together
      name: "sqd-india"
    }
  }
};

const url = 'http://sqyards-fe.34.80.150.150.nip.io/'
export default function () {
  http.get(url);  
}