import * as pretty from "$lib/pretty";

export const attributes = {
  _id: 'ignore',
  campaign: 'ignore',
  time: (o) => pretty.time(o),
}