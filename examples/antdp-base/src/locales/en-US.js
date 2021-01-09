import menu from './en-US/menu';

export default {
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.preview.down.block': 'Download this page to your local project',
  'app.welcome.link.fetch-blocks': 'Get all block',
  'app.welcome.link.block-list':
    'Quickly build standard, pages based on `block` development',

  // tips
  'operation.failed': 'Operation failed',
  'no.access': 'No access',
  'update.password.not.force': 'Change password, cannot force change password',
  'update.password.force': 'Change password, force change password',
  'message.operation.successful': 'The operation was successful',
  'login.failed': 'Login authentication failed',

  'password.warn.phone': 'Please enter your mobile phone numbe',

  200: 'The server successfully returned the requested data.',
  201: 'New or modified data succeeded.',
  202: 'A request has entered the background queue (asynchronous task).',
  204: 'Data deleted successfully.',
  400: 'There was an error in the request. The server did not create or modify the data.',
  401: 'The user does not have permission (wrong token, user name, password).',
  403: 'he user is authorized, but access is prohibited.',
  404: 'The request was made for a nonexistent record and the server did not operate.',
  406: 'The format of the request is not available.',
  410: 'The requested resource is permanently deleted and will no longer be available.',
  422: 'A validation error occurred while creating an object.',
  500: 'Server error, please check the server.',
  502: 'Gateway error.',
  503: 'The service is not available, the server is temporarily overloaded or maintained.',
  504: 'The gateway timed out.',

  ...menu,
};
