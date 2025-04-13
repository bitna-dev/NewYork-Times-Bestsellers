export interface Icategory {
  title: string;
  id: string;
}

export interface IBestseller {
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  newest_published_date: string;
  oldest_published_date: string;
  updated: "WEEKLY" | "MONTHLY";
}

export interface IBestsellerRes {
  status: string;
  copyright: string;
  num_results: number;
  results: IBestseller[];
}
