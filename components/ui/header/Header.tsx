import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  NewspaperIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
  XMarkIcon,
  CloudIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "../modal";
import { CloudNatixDemo } from "@components";

const solutions = [
  {
    name: "Overview",
    description:
      "Discover CloudNatix Solutions by use case, role, industry, and customers.",
    href: "/solutions",
    icon: ChartBarIcon,
  },
  {
    name: "Cost & Operational Intelligence",
    description:
      "Observe, understand, attribute and forecast application costs and performance across multiple clouds and multiple kubernetes clusters.",
    href: "/solutions/cost-and-operational-intelligence",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "VM & Kubernetes Cost Reduction",
    description:
      "Reduce cloud & kubernetes costs while optimizing cloud usage by matching resource allocation with application needs across traditional VMs and Cloud Native Applications",
    href: "/solutions/cost-reduction",
    icon: ShieldCheckIcon,
  },
  {
    name: "Multi Cluster Control",
    description:
      "Control & aggregate resources from multiple clusters as a single planet scale cluster, improving productivity, and reducing MTTR",
    href: "/solutions/multi-cluster-control",
    icon: Squares2X2Icon,
  },
  {
    name: "Cloud managed k8s as a Service (KaaS)",
    description:
      "Automate Day 1 and Day 2 Operations across a fleet of multiple K8s and VM Clusters",
    href: "/solutions/kaas",
    icon: ArrowPathIcon,
  },
];

const resources = [
  {
    name: "Contact CloudNatix",
    description: "Get in touch with us",
    href: "/contact",
    icon: PhoneIcon,
  },
  {
    name: "Community Edition",
    description: "Join CloudNatix Community Edition for free!",
    href: "/community-edition",
    icon: CloudIcon,
  },
  {
    name: "Docs",
    description: "Head to our documentation site.",
    href: "https://docs.cloudnatix.com",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Blog",
    description: "Read more about CloudNatix.",
    href: "/blog",
    icon: NewspaperIcon,
  },
  {
    name: "Team",
    description: "Learn more about the team.",
    href: "/about",
    icon: UserGroupIcon,
  },
  {
    name: "Careers",
    description: "Join our team.",
    href: "/careers",
    icon: BriefcaseIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Header() {
  const [open, setOpen] = useState(false);
  const callsToAction = [
    { name: "Watch Demo", href: () => setOpen(true), icon: PlayIcon },
  ];
  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <h2 className="font-semibold text-xl">CloudNatix Demo</h2>
        <CloudNatixDemo />
      </Modal>{" "}
      <Popover className="sticky top-0 bg-white z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 bg-white">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="flex items-end space-x-2">
                <span className="sr-only">CloudNatix</span>

                <Image
                  alt="CloudNatix logo"
                  src="/images/logos/logo-cloud.png"
                  width={500}
                  height={500}
                  className="h-8 w-auto"
                />
                <h2 className="font-semibold text-xl text-natix hidden lg:flex">
                  CloudNatix
                </h2>
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-natix">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-natix focus:ring-offset-2"
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-natix"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root w-full">
                                <button
                                  onClick={item.href}
                                  className="flex items-center w-full justify-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Link
                href="/#pricing"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link
                href="https://cloudnatix.atlassian.net/servicedesk/customer/portals"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Support
              </Link>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-natix focus:ring-offset-2"
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-natix"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <Link
                href="https://app.cloudnatix.com/"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Log in
              </Link>
              <Link
                href="https://learn.cloudnatix.com/cloudnatix-demo"
                className="ml-5 inline-flex items-center rounded-md border border-transparent bg-natix px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-natix/90 focus:outline-none focus:ring-2 focus:ring-natix focus:ring-offset-2"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute bg-white inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      alt="CloudNatix logo"
                      src="/images/logos/logo-cloud.png"
                      width="500"
                      height="500"
                      className="h-8 w-auto lg:hidden flex"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-natix">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-natix"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link
                    href="/#pricing"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </Link>

                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <Link
                    href="https://learn.cloudnatix.com/cloudnatix-demo"
                    className="w-full flex justify-center rounded-md border border-transparent bg-natix px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-natix/90 focus:outline-none focus:ring-2 focus:ring-natix focus:ring-offset-2"
                  >
                    Request a Demo
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <Link
                      href="https://app.cloudnatix.com/"
                      className="text-natix hover:text-natix"
                    >
                      Log in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
