'use client';

import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  const { data: session } = useSession();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empower Your
                <span className="text-blue-600 block">University Community</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Join your fellow students in creating positive change on campus. Support good causes, 
                help those in need, and fund innovative projects that make a difference.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {session ? (
                <>
                  <Link href="/campaigns">
                    <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                      Browse Campaigns
                    </Button>
                  </Link>
                  <Link href="/campaigns/create">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Start Your Campaign
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/auth/signin">
                    <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/campaigns">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      View Campaigns
                    </Button>
                  </Link>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>University Students Only</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Admin Approved</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-2xl">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/726e4bca-ca2a-4896-8a66-262f3f8c059c.png" 
                alt="Students collaborating on campus projects with laptops and books in modern university setting"
                className="w-full h-full object-cover rounded-xl"
                loading="eager"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
              <div className="text-sm font-semibold text-gray-900">Active Campaigns</div>
              <div className="text-2xl font-bold text-blue-600">24</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
              <div className="text-sm font-semibold text-gray-900">Funds Raised</div>
              <div className="text-2xl font-bold text-green-600">$12,450</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}