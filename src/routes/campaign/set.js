import { col } from "$lib/db/server"

// FIXME if data, use that.  if cookie, use that.  if neither, send to /campaign

export async function post(r) {
  try {
    var campaign_name
    const res = await col('campaign',r).findOne(({user, campaign, data}) => {
      if (typeof(data) === 'string') {campaign_name = data}
      else if (campaign) {campaign_name = campaign}
      return {
        query: {user, campaign: campaign_name}
      }
    })
    return {
      ...res,
      headers: {
        'set-cookie': `campaign=${campaign_name}; Path=/`
      }
    }
  } catch (err) {
    console.log(err)
    return {
      status: 300,
      headers: {
        'location': `/campaign`
      }
    }
  }
}