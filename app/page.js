// This file handles the root URL `/`
// and redirects to the default locale `/en`

'use client';

import {redirect} from 'next/navigation';

export default function RootRedirect() {
  redirect('/en'); // 🔁 Change this if your default locale is 'hi' or 'gu'
}
