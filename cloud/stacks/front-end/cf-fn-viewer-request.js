// this is CloudFront Function, not a lambda@edge. See https://aws.amazon.com/blogs/aws/introducing-cloudfront-functions-run-your-code-at-the-edge-with-low-latency-at-any-scale/
// JavaScript -> ECMAScript 5.1 compliant
// https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-javascript-runtime-features.html#writing-functions-javascript-features-builtin-objects

var FILE_REGEX = new RegExp('\\/.*[\\w\\d]+\\.[\\w\\d]+$');
var defaultOriginPath = 'main';

function handler(event) {
  var request = event.request;
  var host = request.headers.host.value;
  var subdomain = '';

  // redirects visitor to a naked domain, i.e. https://www.oleksiipopov.com -> https://oleksiipopov.com
  if (host.match(/^w{1,3}\..+/)) {
    // this case does 2 things:
    // * supports typos in "www", i.e. https://w.oleksiipopov.com -> https://oleksiipopov.com, https://ww.oleksiipopov.com -> https://oleksiipopov.com
    // * redirects to a path with a trailing slash
    var location = `https://${host.replace(/^w{1,3}\./, '')}${request.uri.endsWith('/') ? request.uri : `${request.uri}/`}`;

    // redirection. Request will not be passed to any edge function or origin
    return {
      statusCode: 308,
      statusDescription: 'Permanent redirection',
      headers: {
        location: {
          value: location,
        },
      },
    };
  }

  if (host.includes('.dev.')) {
    subdomain = host.replace(/\.dev\..+/, '');
    request.uri = `/${subdomain}${request.uri}`;
  } else {
    request.uri = `/${defaultOriginPath}${request.uri}`;
  }

  // If not a file, then it is a navigation request
  if (!FILE_REGEX.test(request.uri)) {
    if (request.uri.endsWith('/')) {
      // if ends with "/", then just point request at the html file
      request.uri = `${request.uri}index.html`;
    } else {
      // redirect to a path with a trailing slash otherwise
      return {
        statusCode: 301,
        statusDescription: 'Moved Permanently',
        headers: {
          location: {
            value: `${request.uri}/`,
          },
        },
      };
    }
  }

  return request;
}
