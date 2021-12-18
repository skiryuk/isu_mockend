export interface ISendDataRequest {
  changes: Array<IWorkActionChanges>;
}

export interface IWorkActionChanges {
  workActionFactId: string;
  status: string;
  decideDt: string;
  notes: string;
}
