class HttpHelper {
  static async get(url: string) {
    const fetchResult = await fetch(url);
    if (fetchResult.status === 200) {
      const jsonResponse = await fetchResult.json();
      return jsonResponse;
    }
    return null;
  }
}

export default HttpHelper;
