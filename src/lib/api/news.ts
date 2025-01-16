import { useQuery } from '@tanstack/react-query';

import type { TAny } from '@/types/common';

export type NewsAPIDescriptor = 'lastest';

export const RQKEY_NEWS_ROOT = 'route';
export function RQKEY(newsDesc: NewsAPIDescriptor) {
  return [RQKEY_NEWS_ROOT, newsDesc];
}

export function useLatestNewsQuery() {
  return useQuery<TAny[]>({
    queryKey: RQKEY('lastest'),
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/news/lastest`,
      );
      return response.json();
    },
  });
}
