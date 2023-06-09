/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

export default (values) => {
  const errors = {};

  // if (!values.phone && !values.email) {
  //     errors.email = 'Please provide an email or a phone number or both.'
  //     errors.phone = 'Please provide an email or a phone number or both.'
  // }

  if (!values.ip) {
    errors.ip = 'Please provide a valid IP address.';
  }

  if (!values.userAgent) {
    errors.userAgent = 'Please provide a valid user agent.';
  }

  return errors;
};
