import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';

function Social() {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FcGoogle className="h-5 W-5" />
      </Button>
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FaGithub className="h-5 W-5" />
      </Button>
    </div>
  );
}

export default Social;
