export interface IFeaturedCategory {
  id: number;
  title: string;
  image: string;
  url: string;
}

export interface IFeaturedDetailsProps {
  title: string;
  isMultiLine: boolean;
  categories: IFeaturedCategory[];
}
