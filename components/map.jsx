import Image from 'next/image';

export default function Map() {
  return (
    <section className="pt-20">
      <div className="max-w-7xl px-4 mx-auto mb-20">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full lg:w-auto px-4 mb-12 lg:mb-0">
            <div className="max-w-lg">
              <h2 className="text-4xl font-semibold font-heading">
                Lorem ipsum dolor sit amet consectutar domor at elis
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-auto px-4">
            <h3 className="mb-4 text-2xl font-semibold font-heading">
              Address
            </h3>
            <p className="mb-10 lg:mb-8 text-gray-500">
              111 E Washington St, Middleburg VA 20117
            </p>
            <h3 className="mb-4 text-2xl font-semibold font-heading">
              Contacts
            </h3>
            <p className="text-gray-500">hello@wireframes.org</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex justify-center h-112 overflow-hidden">
        <Image
          className="object-cover"
          src="/img/map.png"
          alt=""
          height="1760"
          width="3740"
        />
        </div>
      </div>
    </section>
  );
}
