import { http, HttpResponse } from 'msw';
import { UserMother } from '../../../app/pages/components/test/user.object';

export const userHandler = [
  http.get('https://example.com/user/:id', (req) => {
    return HttpResponse.json(
      UserMother.dto({
        id: req.params['id'] as string,
      })
    );
  }),
  http.get('https://example.com/user', () => {
    return HttpResponse.json(UserMother.dto());
  }),
];
