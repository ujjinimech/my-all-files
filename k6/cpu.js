import { check } from 'k6';
import http from 'k6/http';

const res = http.get('http://sqyards-fe.34.80.150.150.nip.io/');
const checkRes = check(res, {
  'Homepage body size is 11026 bytes': (r) => r.body && r.body.length === 11026,
});

