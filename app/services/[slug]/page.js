import { servicesData } from '@/lib/servicesData';
import ServiceDetails from '@/components/ServiceDetails';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: service.title,
        description: service.description,
    };
}

export default async function ServicePage({ params }) {
    const { slug } = await params;
    return <ServiceDetails slug={slug} />;
}
