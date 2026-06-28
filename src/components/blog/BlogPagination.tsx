import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const BlogPagination = () => {
    return (
        <div className="basic-pagination mb-0">
            <nav>
                <ul>
                    <li>
                        <Link href="/blog-standard">
                            <ChevronLeft size={18} aria-hidden="true" />
                        </Link>
                    </li>
                    <li>
                        <span className="current">1</span>
                    </li>
                    <li>
                        <Link href="/blog-standard">2</Link>
                    </li>
                    <li>
                        <Link href="/blog-standard">
                            <ChevronRight size={18} aria-hidden="true" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default BlogPagination;